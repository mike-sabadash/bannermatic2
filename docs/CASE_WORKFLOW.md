# Portfolio case workflow

## Fast path

`user attachment -> local file -> optimize only if useful -> repository -> case check -> diff check -> PR -> main -> production`

## 1. Reuse the existing case pattern

Do not rediscover or redesign the portfolio architecture for ordinary case work.

For a cover + motion/video + storyboard case, reuse the existing Suzuki / VIP Club Tongits data pattern. Assets belong under `public/projects/<case>/`; metadata belongs in `src/data/projects.ts`.

Do not touch page components unless the requested case genuinely cannot be represented by the current data model.

## 2. Asset transport

Use user attachments directly from their local conversation path when available.

Do not upload assets to Google Drive, Library, or another intermediary as a routine step.

STOP CHECK: if the planned upload path includes Google Drive or another intermediary, first verify that a direct local-file-to-repository path is unavailable. Only then may an intermediary be used as a technical fallback.

## 3. Image and video optimization

Preserve composition, crop, content and intended aspect ratio unless the user asks for a visual change.

Avoid unnecessary re-encoding. Optimize only when it materially improves web delivery.

If the user specifies exact pixel dimensions, those dimensions are a hard output requirement. Before delivery, inspect the actual final file dimensions. A mismatch is a failed result, not an approximation.

## 4. Minimal change

For a normal case iteration:
- update only the requested case assets/data;
- keep existing UI and architecture;
- do not modify unrelated cases;
- use one branch and one coherent PR.

## 5. Required validation

Run:

`npm run check:cases`

The validator checks project slugs, referenced local assets, duplicate storyboard paths, motion sources/posters and declared master pixel dimensions against raster/video assets when dimensions can be inspected without extra dependencies.

Then inspect the git/PR diff and confirm there are no unrelated files.

## 6. Delivery

Merge to `main`, wait for `Deploy Bannermatic Production`, and report completion only after the workflow is `completed / success`.


### Video asset gate — mandatory

Do not automatically re-encode a user-supplied video merely because it is being prepared for the web.

Always work from the original user-supplied source. Never use an already re-encoded derivative as the source for another lossy encode when the original is available.

Before any video replacement or encode, measure and record the actual source:
- file size;
- pixel dimensions;
- duration;
- codec;
- bitrate when available.

After encoding, measure the same properties on the output and visually inspect representative frames / motion quality against the source.

An encode is a FAIL and must not be committed when:
- visible quality is materially worse without a justified delivery constraint;
- file size has not decreased enough to justify the quality loss;
- required pixel dimensions changed;
- the output was produced from an avoidable lossy derivative rather than the original source.

Do not claim a file size, bitrate, dimensions, duration, codec, or optimization result unless it was actually measured by a tool. Never invent an exact technical value after a binary-inspection tool fails.

For aggressive web-size targets, create the candidate from the original, validate quality and technical properties, and only then replace the production asset.
