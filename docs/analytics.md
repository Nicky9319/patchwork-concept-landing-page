# Patchwork landing page — Analytics events

This document describes the PostHog event instrumentation for the Patchwork landing page.

## Setup

Analytics are initialized in `src/main.tsx` via `initAnalytics()`. The PostHog client is configured with:

- `autocapture: true` — automatic element click tracking.
- `capture_pageview: false` — we capture a single `page_viewed` event manually so it always carries our base properties.
- `capture_pageleave: true` — PostHog records when the visitor leaves the page.

### Environment variables

| Variable | Purpose |
| --- | --- |
| `VITE_POSTHOG_API_KEY` | PostHog project API key (also falls back to `VITE_POSTHOG_KEY`). |
| `VITE_POSTHOG_HOST` | PostHog ingestion host (e.g. `https://us.i.posthog.com`). |
| `ENVIRONMENT` / `VITE_ENVIRONMENT` | Runtime environment. Normalized to `prod` or `dev`. |
| `PROJECT_NAME` / `VITE_PROJECT_NAME` | Project name sent on every event. |

`ENVIRONMENT` and `PROJECT_NAME` are exposed to the browser through `vite.config.ts` so the existing non-prefixed `.env` keys continue to work.

## Base properties on every event

Every custom event includes these properties:

| Property | Description |
| --- | --- |
| `env` | `prod` or `dev`. Any value containing "prod" (case-insensitive) becomes `prod`; everything else is `dev`. |
| `project` | Value of `PROJECT_NAME` / `VITE_PROJECT_NAME`. |
| `$current_url` | Full URL at the time the event fires. |
| `$pathname` | URL pathname. |
| `$referrer` | `document.referrer`, if any. |
| `utm_source` | UTM source from the landing URL or session storage. |
| `utm_medium` | UTM medium from the landing URL or session storage. |
| `utm_campaign` | UTM campaign from the landing URL or session storage. |
| `utm_term` | UTM term from the landing URL or session storage. |
| `utm_content` | UTM content from the landing URL or session storage. |

UTM values are captured from the first URL that contains them and persisted in `sessionStorage` under `patchwork_utm_params`, so the campaign source is preserved if the user scrolls or navigates before converting.

## Tracked events

### `page_viewed`
Captured once when PostHog finishes loading.

**Custom properties:**
- `page_title` — the current document title.

### `nav_link_clicked`
Captured when a visitor clicks a navigation link in the header.

**Custom properties:**
- `link_label` — e.g. "How it works".
- `link_href` — anchor target, e.g. "#how".
- `location` — `nav_desktop` or `nav_mobile`.

### `cta_clicked`
Captured when a "Request invite" button that is **not** part of a form is clicked (e.g. desktop/mobile nav CTA that scrolls to `#signup`).

**Custom properties:**
- `cta_name` — "Request invite".
- `location` — `nav_desktop` or `nav_mobile`.

### `request_invite_submitted`
Captured when a visitor submits their email to join the waitlist.

**Custom properties:**
- `location` — `hero` or `signup`.
- `email` — the email address that was submitted.

After the event is captured the form shows a success state: "You're on the list".

### `newsletter_subscribed`
Captured when a visitor submits the footer email form for release updates.

**Custom properties:**
- `location` — `footer`.
- `email` — the email address that was submitted.

### `video_opened`
Captured when the hero video player opens the full modal.

**Custom properties:**
- `location` — `hero_player`.

### `video_played` / `video_paused`
Captured when playback is toggled inside the modal player.

**Custom properties:**
- `current_time` — player position in seconds.
- `video_title` — modal title.
- `duration` — total video length in seconds.

### `video_seeked`
Captured when the visitor releases the scrubber after seeking.

**Custom properties:**
- `to_time` — new player position in seconds.
- `video_title`, `duration`.

### `video_chapter_clicked`
Captured when a chapter marker in the player is clicked.

**Custom properties:**
- `chapter_label` — e.g. "CI / CD".
- `chapter_time` — chapter start time in seconds.
- `video_title`, `duration`.

### `video_fullscreen_toggled`
Captured when the fullscreen button is pressed.

**Custom properties:**
- `state` — `entered` or `exited`.
- `video_title`, `duration`.

### `video_finished`
Captured when the video reaches its end.

**Custom properties:**
- `duration` — total video length in seconds.
- `video_title`.

### `video_closed`
Captured when the modal is dismissed via the close button, backdrop click, or `Escape` key.

**Custom properties:**
- `current_time` — player position when closed.
- `video_title`, `duration`.

### `outputs_tab_changed`
Captured when the visitor switches tabs in the "Five outputs" section.

**Custom properties:**
- `tab_name` — `video`, `changelog`, `social`, `migration`, or `email`.

### `footer_link_clicked`
Captured when any footer link is clicked.

**Custom properties:**
- `link_label` — e.g. "Docs" or "Privacy".
- `column` — e.g. "Product", "Resources", "Company", or "Legal".

### `mobile_menu_toggled`
Captured when the mobile hamburger menu is opened or closed.

**Custom properties:**
- `state` — `opened` or `closed`.

## Adding new events

Use the helper from `src/lib/analytics.ts`:

```ts
import { captureEvent } from "@/lib/analytics";

captureEvent("my_new_event", { custom_property: "value" });
```

Base properties (`environment`, `project`, UTM values, etc.) are merged in automatically.
