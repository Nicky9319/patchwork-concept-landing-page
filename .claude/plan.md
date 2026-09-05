# Plan: Light-mode clarity redesign for Patchwork landing page

## Goal
Convert the current dark, film/editor-themed landing page into a clean, light-mode, infra-first SaaS design inspired by Vercel, GitHub Actions, Linear, and Databricks. Improve contrast, reduce decorative noise, and make the CI/CD pipeline section read like a real developer dashboard.

## Approach
1. **Token-based color system**
   - Replace the warm dark palette (`ink`, `paper`, `charcoal`, `line`) with a semantic light palette in `tailwind.config.js`:
     - `background`: `#FFFFFF`
     - `surface`: `#F8F8F7`
     - `surfaceHover`: `#F0F0EE`
     - `border`: `#E7E5E4`
     - `borderStrong`: `#D7D5D4`
     - `foreground`: `#1C1917`
     - `muted`: `#57534E`
     - `subtle`: `#A8A29E`
     - `accent`: `#F5B700` (keep existing amber brand)
     - `accentText`: `#1C1917`
     - `success`: `#16A34A`
     - `warning`: `#D97706`
     - `danger`: `#DC2626`
   - Update `src/index.css` to `color-scheme: light`, remove heavy grain/paper texture, and adjust selection/focus styles for light backgrounds.

2. **Global shell**
   - `App.tsx`: swap `bg-ink text-paper` for `bg-background text-foreground`.

3. **Primitive components**
   - `button.tsx`: default amber-on-dark CTA, neutral outline/ghost variants.
   - `input.tsx`: white background, stone border, dark text, amber focus ring.
   - `card.tsx`: light surface + stone border.
   - `tabs.tsx`: neutral tab list, amber active underline.
   - `label.tsx`: muted stone text.

4. **Brand components**
   - `Logo.tsx`: dark wordmark on light; keep amber mark.
   - `Marquee.tsx`: light background, muted text, amber separator.
   - `FilmStrip.tsx`: make variants work on light; reduce opacity or remove from most sections.
   - `GrainOverlay.tsx`: keep component but use very low opacity only where intentional.
   - `FrameCounter.tsx`: neutral text.

5. **Section remapping**
   - `Nav.tsx`: white/blurred nav, dark links, amber CTA.
   - `Hero.tsx`: white background, dark headline, amber accent on “reel”, clean signup form, light-bordered video player.
   - `Problem.tsx`: light surface cards; “Today” card uses danger/rust hints, “With Patchwork” card uses success/amber hints.
   - `HowItWorks.tsx`: white step cards, gray terminal blocks, amber icons.
   - `Outputs.tsx`: clean tabbed panels; light code-editor mockups.
   - `Pipeline.tsx`: dashboard-style pipeline with green passing stages, amber Patchwork stage, clean artifact list and YAML snippet.
   - `UseCases.tsx`: white cards, neutral borders, amber icons.
   - `Signup.tsx`: light surface, centered clean form.
   - `Footer.tsx`: white background, dark text, subtle border.

6. **VideoModal.tsx**
   - Swap dark tokens for light surface tokens while keeping the video player readable.

7. **Clarity improvements**
   - Increase body text opacity/contrast across all sections.
   - Standardize card padding and spacing.
   - Replace warm dark borders with light stone borders.
   - Use consistent status colors: green = success, amber = active/warning, red = breaking.
   - Tone down film strips and grain; keep only subtle uses if they add brand character.

## Files to modify
- `tailwind.config.js`
- `src/index.css`
- `src/App.tsx`
- `src/components/ui/button.tsx`
- `src/components/ui/input.tsx`
- `src/components/ui/card.tsx`
- `src/components/ui/tabs.tsx`
- `src/components/ui/label.tsx`
- `src/components/ui/video-modal.tsx`
- `src/components/brand/Logo.tsx`
- `src/components/brand/Marquee.tsx`
- `src/components/brand/FilmStrip.tsx`
- `src/components/brand/GrainOverlay.tsx`
- `src/components/brand/FrameCounter.tsx`
- `src/components/sections/Nav.tsx`
- `src/components/sections/Hero.tsx`
- `src/components/sections/Problem.tsx`
- `src/components/sections/HowItWorks.tsx`
- `src/components/sections/Outputs.tsx`
- `src/components/sections/Pipeline.tsx`
- `src/components/sections/UseCases.tsx`
- `src/components/sections/Signup.tsx`
- `src/components/sections/Footer.tsx`

## Out of scope
- No theme toggle for this pass (light mode only, as approved).
- No content/copy changes unless necessary for clarity.

## Verification
- Run `npm run dev` (or `pnpm dev`) and visually inspect all sections.
- Confirm no console errors and that Vite/Tailwind compile cleanly.
