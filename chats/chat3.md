# Terminal titles and backend optimization

_Started 2026-07-28 15:11 UTC_

---

## User

I am thinking of only sharing detailed titles in the terminal in order to deliver the news as fast as possible, and reduce our backend workload. Furthermore, the Why it matters is a good feature for the future, but not now

## Assistant

_[tool: read_file]_

I'll make the terminal show only detailed titles (no summaries) and remove the "Why it matters" panel.

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_set_props]_

_[tool: ready_for_verification]_

Done. The feed now shows only the detailed headlines — no summary blurbs — and the reading panel keeps the corroborating sources but drops the written summary and the "Why it matters" block. Removed the now-unused summaries tweak too.

## User

It is also expensive to track all sources at once, so it;s best to show only the source and not Corroborating sources

## Assistant

_[tool: read_file]_

_[tool: read_file]_

I'll replace the "Corroborating sources" list with a single source display.

_[tool: dc_html_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: ready_for_verification]_

The reading panel now shows a single "Source" instead of the corroborating-sources list.

