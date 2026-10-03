/**
 * Remove comments and (optionally) string/char literal contents from C++ source,
 * preserving line structure so that concept checks are not fooled by code that
 * only appears in a comment.
 */
export function stripSource(src: string, opts: { comments?: boolean; strings?: boolean } = {}): string {
  const comments = opts.comments ?? true;
  const strings = opts.strings ?? false;
  let out = '';
  let i = 0;
  const n = src.length;
  while (i < n) {
    const c = src[i];
    const next = src[i + 1];
    if (c === '/' && next === '/') {
      const end = src.indexOf('\n', i);
      const stop = end === -1 ? n : end;
      if (!comments) out += src.slice(i, stop);
      i = stop;
      continue;
    }
    if (c === '/' && next === '*') {
      const end = src.indexOf('*/', i + 2);
      const stop = end === -1 ? n : end + 2;
      const body = src.slice(i, stop);
      out += comments ? body.replace(/[^\n]/g, ' ') : body;
      i = stop;
      continue;
    }
    // Raw string literal R"delim( ... )delim"
    if (c === 'R' && next === '"' && !/[A-Za-z0-9_]/.test(src[i - 1] ?? '')) {
      const open = src.indexOf('(', i + 2);
      if (open !== -1) {
        const delim = src.slice(i + 2, open);
        const close = src.indexOf(`)${delim}"`, open);
        const stop = close === -1 ? n : close + delim.length + 2;
        const body = src.slice(i, stop);
        out += strings ? 'R""' + body.slice(2 + delim.length + 1, -(delim.length + 2)).replace(/[^\n]/g, '') : body;
        i = stop;
        continue;
      }
    }
    if (c === '"' || c === "'") {
      let j = i + 1;
      while (j < n && src[j] !== c && src[j] !== '\n') {
        if (src[j] === '\\') j++;
        j++;
      }
      const stop = Math.min(j + 1, n);
      out += strings ? c + c : src.slice(i, stop);
      i = stop;
      continue;
    }
    out += c;
    i++;
  }
  return out;
}
