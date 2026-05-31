# XYZ Ventures & Learnings — Design System Spec
This document serves as the official design specification (design tokens, typography, components, and layout spacing) for the **XYZ Fresh & Modern Teal Variant**, formatted for reference and design-to-code syncing in Sketch.

---

## 1. Color Palette (Design Tokens)

Use these variables to create a global color palette in Sketch.

### Light Mode (Default)
| Token Name | HEX | RGB | HSL | Usage |
| :--- | :--- | :--- | :--- | :--- |
| `primary` | `#007A78` | `rgb(0, 122, 120)` | `hsl(180, 100%, 24%)` | Primary buttons, links, highlights |
| `primary-dark` | `#005A5B` | `rgb(0, 90, 91)` | `hsl(181, 100%, 18%)` | Hover states, active text colors |
| `primary-light` | `#F0FDFA` | `rgb(240, 253, 250)` | `hsl(170, 67%, 97%)` | Icon box bg, CTA background, hover cards |
| `text` | `#0F172A` | `rgb(15, 23, 42)` | `hsl(224, 47%, 11%)` | Headings, primary text (Slate 900) |
| `body` | `#475569` | `rgb(71, 85, 105)` | `hsl(215, 16%, 34%)` | Body copy, meta details, descriptions (Slate 600) |
| `border` | `#E2E8F0` | `rgb(226, 232, 240)` | `hsl(214, 32%, 91%)` | Dividers, container borders (Slate 200) |
| `background` | `#FAFAFA` | `rgb(250, 250, 250)` | `hsl(0, 0%, 98%)` | Page canvas background |
| `white` | `#FFFFFF` | `rgb(255, 255, 255)` | `hsl(0, 0%, 100%)` | Card backgrounds, header, footer canvas |

### Dark Mode (Matte Charcoal Theme)
| Token Name | HEX | RGB | HSL | Usage |
| :--- | :--- | :--- | :--- | :--- |
| `primary` | `#007A78` | `rgb(0, 122, 120)` | `hsl(180, 100%, 24%)` | Primary buttons, links, highlights (Brand Teal) |
| `primary-dark` | `#005A5B` | `rgb(0, 90, 91)` | `hsl(181, 100%, 18%)` | Hover states, active text colors (Dark Teal) |
| `primary-light` | `rgba(0,122,120,0.15)` | `rgba(0, 122, 120, 0.15)` | `hsla(180, 100%, 24%, 0.15)` | Icon hover box, CTA elements overlay |
| `text` | `#F8FAFC` | `rgb(248, 250, 252)` | `hsl(210, 17%, 98%)` | Headings, primary text (Slate 50) |
| `body` | `#A1A1AA` | `rgb(161, 161, 170)` | `hsl(240, 5%, 65%)` | Body copy, descriptions (Zinc 400) |
| `border` | `#222222` | `rgb(34, 34, 34)` | `hsl(0, 0%, 13%)` | Dividers, cards and section borders |
| `background` | `#0B0B0B` | `rgb(11, 11, 11)` | `hsl(0, 0%, 4%)` | Matte black page canvas background |
| `white` | `#161616` | `rgb(22, 22, 22)` | `hsl(0, 0%, 9%)` | Dark charcoal card canvas, headers & footers |

---

## 2. Typography Styles

XYZ uses a hybrid typography system combining a sophisticated Editorial Serif with a highly readable Functional Sans-serif.

### Typefaces
- **Primary Headings**: `Playfair Display` (Serif)
- **Body & Accents**: `Inter` (Sans-serif)

### Typography Scale (Desktop)
1. **Hero Title (H1)**
   - Font Family: `Playfair Display` (Serif)
   - Size: `58px`
   - Weight: `700` (Bold)
   - Line Height: `1.15`
   - Highlight parts (`span`): `Inter`, Weight `700`, Color `#007A78`

2. **Section Heading (H2)**
   - Font Family: `Playfair Display` (Serif)
   - Size: `40px`
   - Weight: `700` (Bold)
   - Line Height: `1.25`

3. **Card Heading (H3)**
   - Font Family: `Playfair Display` (Serif)
   - Size: `32px`
   - Weight: `700` (Bold)

4. **Component Heading (H4)**
   - Font Family: `Inter` (Sans-serif) / `Playfair Display` for Articles
   - Size: `18px` (Values) / `17px` (Articles)
   - Weight: `700` (Values) / `600` (Articles)
   - Line Height: `1.45`

5. **Body Text**
   - Font Family: `Inter` (Sans-serif)
   - Size: `14px` (Cards/Lists) / `15px` (CTA/Desc) / `17px` (Hero)
   - Weight: `400` (Regular) / `500` (Medium)
   - Line Height: `1.6` - `1.75`

6. **Eyebrow / Category Label**
   - Font Family: `Inter` (Sans-serif)
   - Size: `12px` (Hero Eyebrow) / `11px` (Article Category)
   - Weight: `700` (Bold)
   - Letter Spacing: `0.15em` (Hero) / `0.1em` (Articles)
   - Text Case: `Uppercase`

### Mobile Typography Scale (Viewports < 768px)
- **Hero Title (H1)**: `30px`, line height `1.2`
- **Section Heading (H2)**: `26px`, line height `1.3`
- **Form/Card Headings (H3/H4)**: `24px`

---

## 3. Spacing & Layout Grid

### Page Container
- **Max Width**: `1280px`
- **Padding Left/Right**: `24px` (Desktop) / `16px` (Mobile)

### Mobile Spacing Overrides (Viewports < 768px)
- **CTA Dark Banner Padding**: `36px 24px` (down from `56px 64px` on desktop)
- **Bento Card Padding (`about-philosophy-card`)**: `32px 24px` (down from `48px` on desktop)
- **Timeline Items Gap (`collaborate-split-grid`)**: `32px` (down from `48px` on desktop)
- **Global office grid (`contact-locations-grid`)**: `padding: 60px 0`, gap `36px`

### Corner Radius
- **Radius XL (Cards/Hero)**: `24px`
- **Radius LG (Articles)**: `16px`
- **Radius MD (Small elements)**: `12px`
- **Radius SM (Buttons)**: `8px`
- **Pill Radius**: `999px`

### Shadows
- **Shadow Light (Cards)**:
  - Color: `#007A78` at `3% opacity`
  - Offset: `x: 0, y: 4`
  - Blur: `20`
- **Shadow Hover (Articles)**:
  - Color: `#007A78` at `8% opacity`
  - Offset: `x: 0, y: 12`
  - Blur: `36`

---

## 4. UI Components Specification

### A. Primary Button (Pill Button)
- **Background**: `primary` (`#007A78`)
- **Hover Background**: `primary-dark` (`#005A5B`)
- **Text**: White, `14px`, Weight `600`, Inter
- **Padding**: `12px` Top/Bottom, `24px` Left/Right
- **Radius**: `999px` (Capsule shape)

### B. Program Card (Ventures & Learnings)
- **Container**: `white` canvas, `border` stroke `1px`, `Radius XL` (`24px`).
- **Layout (Desktop)**: Flex Row, 2 columns.
  - **Left content block (55%)**: Padding `48px`.
  - **Right image block (45%)**: Mask overlay on top of the image.
- **Mask Fade Parameters**: Linear gradient running from left to right:
  - Color 1: `#FFFFFF` (100% opacity) at `0%`
  - Color 2: `#FFFFFF` (0% opacity) at `35%`
- **Icon Box**: Rounded square `56px x 56px`, `Radius MD` (`12px`), Bg `#F0FDFA`, Stroke `none`. Hover state transitions to Bg `#007A78` and white icon.

### C. Values Grid
- **Container**: Rounded rectangle with `Radius XL` (`24px`), White canvas, Stroke `1px` (`#E2E8F0`).
- **Inner Borders**: `1px` solid `#E2E8F0` separating columns.
- **Value Items (4-column grid)**:
  - Padding: `48px` Top/Bottom, `36px` Left/Right.
  - Icon Container: Circular `64px x 64px`, Bg `#F0FDFA`, Icon color `#007A78`. On hover, Bg becomes `#007A78` and SVG becomes white.

### D. Article Card (Knowledge Grid)
- **Container**: White canvas, `Radius LG` (`16px`), Stroke `1px` (`#E2E8F0`).
- **Image aspect ratio**: `1.4` (e.g. `280px width x 200px height`).
- **Hover Action**: Lifts card up by `6px` vertically and increases shadow blur/spread. Image scale increases by `1.05x`.

---

## 5. SVG Vector Configurations

For importing vectors directly into Sketch, the SVGs are configured as:

### Core SVGs
- **Venture Icon**: `viewBox="0 0 100 100"`, stroke width `4px`, color `#007A78`.
- **Learning Icon**: `viewBox="0 0 100 100"`, stroke width `4px`, color `#007A78`.
- **Thinking Icon**: `viewBox="0 0 100 100"`, stroke width `4px`, color `#007A78`.
- **Practitioner Icon**: `viewBox="0 0 100 100"`, stroke width `4px`, color `#007A78`.
- **Founder Icon**: `viewBox="0 0 100 100"`, stroke width `4px`, color `#007A78`.
- **Knowledge Icon**: `viewBox="0 0 100 100"`, stroke width `4px`, color `#007A78`.

### Custom Bullet Vectors (`viewBox="0 0 24 24"`)
- **Compass**: `<circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>`
- **Dashboard Grid**: `<rect x="3" y="3" width="7" height="9"/><rect x="14" y="3" width="7" height="5"/><rect x="14" y="12" width="7" height="9"/><rect x="3" y="16" width="7" height="5"/>`
- **Network Connections**: `<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M7.5 11.5l9-5.1m-9 6.2l9 5.1"/>`
- **Collaboration (Handshake)**: `<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>`
- **Line Chart**: `<path d="M3 3v18h18"/><path d="m18.7 8-5.1 5.2-2.8-2.7L7 14.3"/>`
- **Bank Pillars**: `<path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3"/>`
- **Briefcase**: `<rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>`
- **Graduation/Users**: `<path d="M22 10v6M2 10l10-5 10 5-10 5-10 5z"/><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/>`
- **Speech/Chat**: `<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>`
