import posthog from "posthog-js";

export type EventProperties = Record<
  string,
  string | number | boolean | null | undefined
>;

const POSTHOG_KEY =
  import.meta.env.VITE_POSTHOG_API_KEY ||
  import.meta.env.VITE_POSTHOG_KEY ||
  "";

const POSTHOG_HOST =
  import.meta.env.VITE_POSTHOG_HOST || "https://us.i.posthog.com";

const UTM_STORAGE_KEY = "patchwork_utm_params";

/**
 * Normalize any environment-looking string to either "prod" or "dev".
 * Handles values like "production", "PRODUCTION", "development", "dev", etc.
 */
function normalizeEnvironment(raw?: string): "prod" | "dev" {
  const value = String(raw ?? "").toLowerCase();
  if (value.includes("prod")) return "prod";
  return "dev";
}

/** Current runtime environment: "prod" or "dev". */
export function getEnv(): "prod" | "dev" {
  return normalizeEnvironment(
    import.meta.env.VITE_ENVIRONMENT ||
      import.meta.env.ENVIRONMENT ||
      import.meta.env.MODE
  );
}

/** Project identifier carried on every event. */
export function getProject(): string {
  return (
    import.meta.env.VITE_PROJECT_NAME ||
    import.meta.env.PROJECT_NAME ||
    "unknown"
  );
}

/**
 * Parse UTM parameters from the URL and remember them for the session.
 * This ensures the original campaign is preserved even if the user navigates
 * away from the landing URL before triggering an event.
 */
function getUTMParams(): EventProperties {
  const params = new URLSearchParams(window.location.search);
  const keys = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"];
  const fromUrl: EventProperties = {};

  for (const key of keys) {
    const value = params.get(key);
    if (value) {
      fromUrl[key] = value;
    }
  }

  if (Object.keys(fromUrl).length > 0) {
    try {
      sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(fromUrl));
    } catch {
      // ignore storage errors in private mode
    }
    return fromUrl;
  }

  try {
    const stored = sessionStorage.getItem(UTM_STORAGE_KEY);
    if (stored) return JSON.parse(stored) as EventProperties;
  } catch {
    // ignore parse errors
  }

  return {};
}

/** Properties that are attached to every custom event. */
export function baseProperties(): EventProperties {
  return {
    env: getEnv(),
    project: getProject(),
    $current_url: typeof window !== "undefined" ? window.location.href : undefined,
    $pathname: typeof window !== "undefined" ? window.location.pathname : undefined,
    $referrer: typeof document !== "undefined" ? document.referrer || undefined : undefined,
    ...getUTMParams(),
  };
}

let initialized = false;

/** Initialize the PostHog client once. Safe to call multiple times. */
export function initAnalytics() {
  if (initialized) return;
  if (!POSTHOG_KEY) {
    // eslint-disable-next-line no-console
    console.warn("PostHog key is missing; analytics are disabled.");
    return;
  }

  posthog.init(POSTHOG_KEY, {
    api_host: POSTHOG_HOST,
    autocapture: true,
    capture_pageview: false,
    capture_pageleave: true,
    loaded: (posthogInstance) => {
      initialized = true;
      posthogInstance.register(baseProperties());
      capturePageView();
    },
  });
}

/** Capture a named analytics event with the base properties merged in. */
export function captureEvent(
  eventName: string,
  properties: EventProperties = {}
): void {
  if (!POSTHOG_KEY) return;
  posthog.capture(eventName, { ...baseProperties(), ...properties });
}

/** Capture the initial (and only) page view for this single-page landing site. */
export function capturePageView(): void {
  captureEvent("page_viewed", {
    page_title: document.title,
  });
}
