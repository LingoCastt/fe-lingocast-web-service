---
name: Obsidian Telemetry
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#c4c7c8'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#8e9192'
  outline-variant: '#444748'
  surface-tint: '#c6c6c7'
  primary: '#ffffff'
  on-primary: '#2f3131'
  primary-container: '#e2e2e2'
  on-primary-container: '#636565'
  inverse-primary: '#5d5f5f'
  secondary: '#4ae176'
  on-secondary: '#003915'
  secondary-container: '#00b954'
  on-secondary-container: '#004119'
  tertiary: '#ffffff'
  on-tertiary: '#2f3038'
  tertiary-container: '#e3e1ec'
  on-tertiary-container: '#63646c'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c7'
  on-primary-fixed: '#1a1c1c'
  on-primary-fixed-variant: '#454747'
  secondary-fixed: '#6bff8f'
  secondary-fixed-dim: '#4ae176'
  on-secondary-fixed: '#002109'
  on-secondary-fixed-variant: '#005321'
  tertiary-fixed: '#e3e1ec'
  tertiary-fixed-dim: '#c6c5cf'
  on-tertiary-fixed: '#1a1b22'
  on-tertiary-fixed-variant: '#46464e'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-hero:
    fontFamily: Space Grotesk
    fontSize: 64px
    fontWeight: '600'
    lineHeight: 68px
    letterSpacing: -0.03em
  display-hero-mobile:
    fontFamily: Space Grotesk
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 42px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 46px
    letterSpacing: -0.025em
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 34px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 30px
    letterSpacing: -0.015em
  body-lg:
    fontFamily: Inter
    fontSize: 17px
    fontWeight: '400'
    lineHeight: 26px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
    letterSpacing: 0em
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: 0.01em
  code-telemetry:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
    letterSpacing: 0em
  code-param:
    fontFamily: JetBrains Mono
    fontSize: 10px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.08em
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.14em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style
This design system serves an ultra-minimalist engineering studio and experimental software laboratory. Rooted in on-device physics, mathematical exactitude, and high-performance computing, the interface rejects marketing fluff, corporate gradients, and decorative bloat in favor of raw instrument-grade clarity.

### Target Audience & Emotional Response
The target audience consists of deep-tech engineers, systems programmers, discerning product designers, and technical founders. The experience evokes the sensation of sitting before mission-control avionics or a high-end physics laboratory spectrometer: quiet power, uncompromising craft, total zero-latency precision, and tactile computational intimacy.

### Design Movement: Engineering Brutalism & Technical Glassmorphism
The aesthetic merges brutalist functional restraint with dark-mode precision instrument glassmorphism:
- **Obsidian Black Canvas:** Total absorption of light with deep zinc layering to establish structural plane separation.
- **Instrument Precision:** Live telemetry panels, tactile toggle switches, monospaced parameter gauges, and faint polar radar reticles.
- **Signal Accents:** A single vibrant phosphor emerald green pulse (`#22C55E`) acting as an alive status indicator against monochrome architecture.

## Colors
The palette is built strictly around deep monochrome tonal values, anchored by obsidian base planes, cool zinc technical borders, and an electric phosphor pulse.

### Color Tokens & Semantic Roles
- **Canvas Base (`#0A0A0A`):** The primary ground surface. Deep, non-reflective obsidian.
- **Surface Elevation 1 (`#121214`):** Card panels, elevated module backdrops, interactive field bases.
- **Surface Elevation 2 (`#18181B`):** Hovered controls, segmented tab backdrops, nested instrument widgets.
- **Primary Ink (`#FFFFFF`):** High-contrast editorial titles, primary button text, active telemetry values.
- **Secondary Ink (`#A1A1AA`):** Body explanations, parameter labels, auxiliary navigation links.
- **Muted Ink (`#71717A`):** Metadata, hardware specs, inactive language states, engineering subtext.
- **Structural Borders (`#27272A`):** Razor-thin 1px mechanical containment boundaries.
- **Active Signal / Pulse (`#22C55E`):** Real-time telemetry indicators, live sensor status, green radar sweeps, active system state.
- **Subtle Sensor Background Glow (`rgba(34, 197, 94, 0.08)`): Faint radial falloffs behind interactive hardware nodes.

## Typography
Typography is treated as a technical blueprint. Three distinct type families construct the hierarchy:
1. **Space Grotesk (Display & Headlines):** Delivers geometric authority with sharp, contemporary engineering inflections.
2. **Inter (Interface & Editorial Body):** Ensures maximum legibility for long-form engineering manifests, descriptions, and feature notes.
3. **JetBrains Mono (Telemetry, Parameters & Code Specs):** Used for sensor telemetry (e.g. `9.849 m/s²`, `1014.66 hPa`), hardware metadata, architecture pills, and uppercase section overlines.

### Scaling & Legibility Rules
- Numerical sensor readings must always use tabular figures (`font-variant-numeric: tabular-nums`) via `JetBrains Mono` to prevent layout shudder during live stream updates.
- Section tags (such as `SHOWCASE` or `ON-DEVICE PHYSICS`) must be transformed to uppercase with positive letter spacing (`0.14em`) to establish crisp visual anchoring.

## Layout & Spacing
The layout follows an uncompromising 12-column mathematical grid constrained to a maximum content width of `1280px` for optimal legibility and instrument balance.

### Grid Anatomy & Breakpoints
- **Desktop (>= 1024px):** 12-column layout with `1.5rem` (`24px`) gutters and `3rem` (`48px`) outer margin. Showcase cards align in horizontal side-by-side or scrollable carousels.
- **Tablet (768px - 1023px):** 8-column layout with `1.25rem` (`20px`) gutters and `2rem` (`32px`) margins. Cards wrap into a 2-column matrix.
- **Mobile (< 768px):** 4-column layout with `1rem` (`16px`) gutters and `1.25rem` (`20px`) margins. Multi-column sensor displays stack vertically or adapt to a 2x3 micro-grid.

### Vertical Rhythm
A base 8px increment governs padding and distance relationships. Sections are punctuated by spacious breathing room (`5rem` to `7rem`), mirroring scientific manuals with distinct analytical zones.

## Elevation & Depth
Elevation is achieved through light discipline and layer opacity rather than heavy drop shadows. The design emphasizes physical backplanes and crisp edges.

### Depth Hierarchy
1. **Canvas Ground (`#0A0A0A`):** The non-illuminated void, featuring an optional faint coordinate grid overlay (`1px` lines at `40px` increments with `3%` opacity) and subtle organic radar smoke visuals.
2. **Instrument Card Backplanes (`rgba(18, 18, 20, 0.75)`):** Translucent acrylic glassmorphic panels backed with `backdrop-filter: blur(16px)` and bounded by a `1px solid #27272A` contour.
3. **Telemetry & Floating Panels (`#18181B`):** Higher-priority widgets (e.g., active telemetry monitors) feature an interior border highlight (`inset 0 1px 0 0 rgba(255, 255, 255, 0.08)`) and an ultra-diffused atmospheric back-glow (`0 20px 40px -15px rgba(0, 0, 0, 0.8)`).
4. **Active Signal Flares:** Focused emerald radial glows (`box-shadow: 0 0 12px rgba(34, 197, 94, 0.6)`) highlight active states, hardware connectivity, and dynamic radar swept elements.

## Shapes
Geometry strikes a balance between sleek modern consumer hardware and precision avionics. 

### Corner Radius System
- **Base Components (`rounded-md` / 0.5rem - 8px):** Input elements, language toggle pills, secondary action buttons, technology metadata chips.
- **Container Cards (`rounded-lg` / 1rem - 16px):** Primary application showcase cards, telemetry modules, and hero instrument monitors.
- **Sub-Modules & Embedded Widgets (`rounded-xl` / 1.5rem - 24px):** Distinctive featured hubs and focal radar reticle boundaries.
- **Pills / Status Dots (`rounded-full` / 9999px):** Live indicator lights, category filter pills, and navigation capsules.

## Components

### Buttons & Action Controls
- **Primary Button:** High-contrast crisp white surface (`#FFFFFF`), dark obsidian text (`#0A0A0A`), font weight 500, rounded to `9999px` or `8px`. Hover elevates with subtle phosphor border or mild luminescence.
- **Secondary / Ghost Button:** Dark background (`rgba(24, 24, 27, 0.6)`), hairline border (`1px solid #27272A`), white text (`#FFFFFF`), with icon arrows nudging +2px horizontally on hover.
- **Store Download Buttons:** Minimal dark-tinted rounded rectangles with subtle stroke and monospaced supplementary status (e.g. `App Store`, `Google Play · soon`).

### Telemetry Widgets & Sensor Modules
- Modular computational readouts divided into equal parameter segments.
- Each quadrant features a monospaced uppercase parameter tag (`AX`, `AY`, `AZ`, `HDG`, `PRES`, `LAEQ`) in `#71717A` with the real-time value underneath in bold `#FFFFFF` `JetBrains Mono`.
- Corner status dot with continuous animated pulsating keyframe glow in `#22C55E`.

### Language & Theme Switches (EN / VI & Dark / Light)
- Segmented pill container (`rgba(255, 255, 255, 0.05)`) with a `1px solid #27272A` shell.
- Active language option illuminated by a solid white or elevated zinc pill backdrop, inactive option muted to `#71717A`.
- Integrated sun/moon icon toggle with seamless frictionless cross-fade transitions.

### Application Showcase Cards
- Large dark glassmorphism enclosures (`rgba(18, 18, 20, 0.7)`) with `1px solid #27272A` outline.
- Monospaced technical badges outlining device stacks (`Swift`, `Kotlin`, `CoreMotion`, `AVAudioEngine`, `DSP`).
- Clear metrics tag (`15K+ dl`, `Updated 2026-06`) styled in muted monospaced typography with soft zinc backgrounds.
- High-contrast app glyph / icon recessed inside a technical square container with inner rim illumination.

### Chips & Filter Pills
- Sleek horizontal filter bar for app domains (`All`, `Navigation`, `Health`, `Education`, `Utilities`).
- Inactive state: Borderless or hairline zinc border, `#A1A1AA` text.
- Active state: Pure white background `#FFFFFF`, black text `#0A0A0A`, or dark zinc fill with emerald signal indicator.

### Input Fields & Search Bars
- Background `#121214` with a hairline stroke `#27272A`.
- Focus state brings an instantaneous border transition to `#FFFFFF` accompanied by a 1px emerald status bar on the left edge.
- Monospaced placeholder text in `#71717A`.