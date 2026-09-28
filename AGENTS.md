# Bannermatic agent rules

## Portfolio cases — mandatory

Before creating, replacing, reordering, or updating a portfolio case, read `docs/CASE_WORKFLOW.md`.

Portfolio case work is a content iteration unless the user explicitly asks for product/UI architecture changes.

Do not use Google Drive, Library, or another cloud store as the normal transport for user-supplied case assets. Prefer the conversation attachment/local file path and a direct repository upload path. A cloud bridge is fallback-only when direct binary upload is technically unavailable.

Before merge, run `npm run check:cases`. Do not merge or deploy when it fails.

Do not change unrelated cases, components, layout, or architecture.

A production task is complete only after the production workflow finishes with `completed / success`.


For video assets, the Video asset gate in `docs/CASE_WORKFLOW.md` is mandatory: use the original source, measure source/output technical properties, visually validate quality, and never report unmeasured technical values.
