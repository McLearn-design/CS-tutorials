import re
from pathlib import Path

def insert_newline_before_opening_fence(filepath: str) -> None:
    path = Path(filepath)
    content = path.read_text(encoding="utf-8")

    # Match lines that start with ``` and are NOT already preceded by a blank line
    pattern = r'(?<!\n)(^```[^\n]*)'

    # Insert a newline before the opening fence
    modified = re.sub(pattern, r'\n\1', content, flags=re.MULTILINE)

    path.write_text(modified, encoding="utf-8")
    print(f"✅ Newlines inserted before opening code fences in: {filepath}")

# Example usage
insert_newline_before_opening_fence("java-4-spring.md")