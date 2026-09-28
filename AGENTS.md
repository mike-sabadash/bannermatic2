# Bannermatic agent rules

## Portfolio cases — mandatory

Before creating, replacing, reordering, or updating a portfolio case, read `docs/CASE_WORKFLOW.md`.

Portfolio case work is a content iteration unless the user explicitly asks for product/UI architecture changes.

### Environment preflight — mandatory

Before touching any user-supplied binary asset, verify that the current execution environment has BOTH:
1. the user attachment as a local file;
2. a local writable checkout/workspace of this repository that can commit/push binary files.

This is the same direct workflow used by the earlier portfolio cases: `attachment -> local repo workspace -> git -> GitHub`.

If the repository checkout/workspace is missing, STOP the asset mutation. Do not reinterpret a UTF-8/text fetch failure as a binary-upload limitation and do not invent a transport bridge. Never route the asset through Google Drive, Library, or another cloud store to compensate for a missing repo workspace.

Google Drive, Library, and other intermediary cloud stores are prohibited for portfolio asset transport.

Before merge, run `npm run check:cases`. Do not merge or deploy when it fails.

Do not change unrelated cases, components, layout, or architecture.

A production task is complete only after the production workflow finishes with `completed / success`.

For video assets, the Video asset gate in `docs/CASE_WORKFLOW.md` is mandatory: use the original source, measure source/output technical properties, visually validate quality, and never report unmeasured technical values.
