# Media

The website serves media from `rc-website/public/`. Only web-optimized copies
live in this repo; full-size originals are kept outside git.

## What's where (`rc-website/public/…`)

| File | Used in |
|---|---|
| `videos/so100-stacking-nuts.mp4` | Hero video grid — SO-100 arm stacking nuts |
| `videos/piper-vla-pick-place.mp4` | Hero video grid — Piper arm, pick & place with a small trained VLA model |
| `videos/voice-ai-arm-control-sound.mp4` | Hero video grid (tall tile, rotates) — arm controlled through a voice AI pipeline; **has audio** (tap-for-sound button), full clip with original subtitles |
| `videos/vr-teleoperation.mp4` | Hero video grid (tall tile, rotates) — teleoperating two arms with a VR headset |
| `videos/posters/*.jpg` | Still frame for the video with the same name |
| `photos/community/aachen-digitalhub.webp` | Community section — meetup at the digitalHUB Aachen |
| `photos/community/berlin-esra-2026-10.jpg` | Community section — Berlin (ESRA), Oct 2026 |
| `photos/community/juelich.jpg` | Community section — Jülich |
| `photos/build/build-01…04.webp` | Behind the Build section |
| `universities/*.png` | Hero "Students from" row |
| `partners/*.png` | Hero partner strip (trimmed to content, 120 px tall) |
| `brand/*` | Club logo (white / black / 512 px PNG) |
| `social/og-default.jpg` | Link preview image (WhatsApp, LinkedIn, …), 1200×630 |
| `social/instagram/reel-<id>.jpg` | Cover of an Instagram reel, named by the id in its URL |

## Adding a video

Export a small, silent H.264 MP4 plus a still frame (needs ffmpeg:
`brew install ffmpeg`):

```sh
ffmpeg -i original.mov -an -vf "scale=-2:480" -c:v libx264 -preset slow -crf 27 \
  -pix_fmt yuv420p -movflags +faststart rc-website/public/videos/<name>.mp4
ffmpeg -ss 1 -i rc-website/public/videos/<name>.mp4 -frames:v 1 -q:v 4 \
  rc-website/public/videos/posters/<name>.jpg
```

For vertical (phone) videos use `scale=540:-2` instead. Aim for under ~1.5 MB.

## Conventions

- Lowercase, hyphenated names that say what is in the file
  (`piper-vla-pick-place.mp4`, not `9-1.mp4`). If you don't know what a file
  shows, number it (`build-05.webp`) rather than guessing a description.
- When you replace an image with a different one, give it a **new file name** —
  browsers and the CDN cache images by URL, so reusing a name can keep showing
  the old picture.
