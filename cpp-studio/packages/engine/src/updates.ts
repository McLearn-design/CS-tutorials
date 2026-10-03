// Finding a newer C++ Studio release on GitHub, without any marketplace.

export interface GitHubRelease {
  tag_name: string;
  name?: string;
  html_url: string;
  draft: boolean;
  prerelease: boolean;
  body?: string;
  assets: { name: string; browser_download_url: string }[];
}

export interface AvailableUpdate {
  version: string;
  tag: string;
  notesUrl: string;
  notes: string;
  /** Download URL of the asset matching `assetPattern`, if any. */
  assetUrl?: string;
  assetName?: string;
}

export const DEFAULT_UPDATE_REPOSITORY = 'McLearn-design/CS-tutorials';
export const RELEASE_TAG_PREFIX = 'cpp-studio-v';

/** Compare dotted versions numerically ("0.10.0" > "0.9.3"). Pre-release suffixes sort before the release. */
export function compareVersions(a: string, b: string): number {
  const parse = (v: string) => {
    const [main, pre] = v.replace(/^v/, '').split('-', 2);
    return { nums: main.split('.').map((n) => parseInt(n, 10) || 0), pre };
  };
  const x = parse(a);
  const y = parse(b);
  for (let i = 0; i < Math.max(x.nums.length, y.nums.length); i++) {
    const d = (x.nums[i] ?? 0) - (y.nums[i] ?? 0);
    if (d !== 0) return Math.sign(d);
  }
  if (x.pre && !y.pre) return -1;
  if (!x.pre && y.pre) return 1;
  return (x.pre ?? '').localeCompare(y.pre ?? '');
}

/** The newest published release that is newer than `current`, or undefined. */
export function pickUpdate(
  releases: GitHubRelease[],
  current: string,
  opts: { assetPattern: RegExp; includePrereleases?: boolean; prefix?: string },
): AvailableUpdate | undefined {
  const prefix = opts.prefix ?? RELEASE_TAG_PREFIX;
  let best: AvailableUpdate | undefined;
  for (const r of releases) {
    if (r.draft || (r.prerelease && !opts.includePrereleases) || !r.tag_name.startsWith(prefix)) continue;
    const version = r.tag_name.slice(prefix.length);
    if (!/^\d+(\.\d+)*(-[\w.]+)?$/.test(version)) continue;
    if (compareVersions(version, current) <= 0) continue;
    if (best && compareVersions(version, best.version) <= 0) continue;
    const asset = r.assets.find((a) => opts.assetPattern.test(a.name));
    best = { version, tag: r.tag_name, notesUrl: r.html_url, notes: r.body ?? '', assetUrl: asset?.browser_download_url, assetName: asset?.name };
  }
  return best;
}

/** Fetch releases from the GitHub API (public repositories need no token). */
export async function fetchReleases(repository = DEFAULT_UPDATE_REPOSITORY, token?: string): Promise<GitHubRelease[]> {
  const res = await fetch(`https://api.github.com/repos/${repository}/releases?per_page=30`, {
    headers: {
      Accept: 'application/vnd.github+json',
      'User-Agent': 'cpp-studio',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });
  // An expired or unrelated token shouldn't break the check: public releases are readable anonymously.
  if (res.status === 401 && token) return fetchReleases(repository);
  if (res.status === 403 || res.status === 429) {
    if (res.headers.get('x-ratelimit-remaining') === '0') {
      throw new Error('GitHub\'s limit for anonymous requests from your network was reached. Try again in an hour, or sign in to GitHub.');
    }
  }
  if (res.status === 404) throw new Error(`the repository ${repository} was not found (or is private)`);
  if (!res.ok) throw new Error(`GitHub returned HTTP ${res.status} for ${repository}`);
  return (await res.json()) as GitHubRelease[];
}
