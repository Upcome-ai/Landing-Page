# Header navigation cleanup

_Started 2026-07-28 16:00 UTC_

---

## User

Remove How it works, sources, and pricing from the header

## Assistant

I'll look at the current header in the file you're viewing.

_[tool: grep]_

The three nav links are on line 33. Removing just those from the header.

_[tool: dc_html_str_replace]_

Removed the three nav links from the header. The "Try the terminal" button stays.

