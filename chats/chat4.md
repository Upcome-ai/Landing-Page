# Source simplification discussion

_Started 2026-07-28 15:17 UTC_

---

## User

I am thinking of removing GOV, Wire and that kinda stuff and just say the source

## Assistant

_[tool: grep]_

I'll remove the type-tag badges (GOV/WIRE/FILING/etc.) and let the source stand on its own.

_[tool: read_file]_

I'll remove the tag badge from both the feed cards and the detail panel, and drop the type from the source meta line.

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

Now drop the type from the source-meta line so it doesn't say "WIRE · primary":

_[tool: dc_js_str_replace]_

_[tool: ready_for_verification]_

Removed the GOV/WIRE/FILING-style type badges from both the feed cards and the detail panel — source name now stands on its own, and the source-meta line reads "Primary source" instead of the type.

