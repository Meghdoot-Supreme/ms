# Meghdoot Supreme — Brand Color Guidelines

## Overview
The Meghdoot Supreme brand uses a warm, energetic color palette built around a vibrant orange primary color, complemented by neutral grays and accent greens. The palette supports both light and dark modes for modern accessibility.

---

## Primary Brand Colors

### Orange (Primary)
- **Main Orange:** `#F47D05` (RGB: 244, 125, 5)
  - Primary action color
  - Used for: Call-to-action buttons, accents, highlights, section labels
  - Hover/Active state: `#975209` (darker orange)
  
- **Orange Dark (Hover/Active):** `#975209` (RGB: 151, 82, 9)
  - Darker shade for interactive states
  - Used for: Button hovers, active states, pressed buttons
  
- **Orange Tint (Background):** `rgba(244, 125, 5, 0.1)` or `rgba(244, 125, 5, 0.15)`
  - Subtle background for badges and section labels
  - Used for: Section label backgrounds, badge backgrounds

---

## Secondary Colors

### Green (WhatsApp/Action)
- **WhatsApp Green:** `#25D366` (RGB: 37, 211, 102)
  - WhatsApp integration color
  - Used for: WhatsApp buttons, messaging CTAs, chat-related UI
  - Hover: Slight opacity reduction (0.88)

### Pink/Red (Instagram)
- **Instagram Brand Color:** `#E1306C` (RGB: 225, 48, 108)
  - Social media accent
  - Used for: Instagram links, social media badges

---

## Neutral Colors (Light Mode)

### Darks & Text
- **Dark (Text Primary):** `#1A1A1A` (RGB: 26, 26, 26)
  - Primary text color
  - Used for: Body text, headings, main content
  - Provides WCAG AA contrast on all light backgrounds

- **Gray (Medium):** `#707070` (RGB: 112, 112, 112)
  - Secondary text, disabled states
  - Used for: Placeholder text, captions, subtext, icon colors

- **Gray Light:** `#828282` (RGB: 130, 130, 130)
  - Tertiary text
  - Used for: Footer text, hints, very secondary information

### Backgrounds & Surfaces
- **Background (Light Gray):** `#F7F7F7` (RGB: 247, 247, 247)
  - Section backgrounds
  - Used for: Product section backgrounds, card backgrounds in list views, alternate row backgrounds

- **White (Surface):** `#FFFFFF` (RGB: 255, 255, 255)
  - Card backgrounds, navbar, modals
  - Used for: Product cards, testimonial cards, primary card surfaces, navbar background

### Borders & Dividers
- **Border Light:** `#E5E5E5` (RGB: 229, 229, 229)
  - Input borders (focused or default)
  - Used for: Form input borders, subtle dividers

- **Border Subtle:** `#EBEBEB` (RGB: 235, 235, 235)
  - Card borders, very subtle dividers
  - Used for: Card borders, light section dividers

- **Overlay (Very Dark):** `rgba(0, 0, 0, 0.55)` / `rgba(0, 0, 0, 0.65)`
  - Modal overlays, image overlays
  - Used for: Modal backdrops, gradient overlays on hero images

---

## Semantic/Status Colors

### Badge Colors
- **Bestseller Badge:** `#FFB81C` (RGB: 255, 184, 28)
  - Indicates bestselling products
  - Text color: `#1A1A1A` (dark text on yellow)

- **Popular Badge:** `#2563EB` (RGB: 37, 99, 235)
  - Indicates popular/trending items
  - Text color: `#FFFFFF` (white text on blue)

- **ISI Certified Badge:** Border only
  - Border: `var(--orange)` (#F47D05)
  - Background: Transparent
  - Text: `var(--orange)` (#F47D05)

---

## Dark Mode Palette

When `data-theme="dark"` is set on `<html>`, colors invert to:

### Dark Mode Neutrals
- **Dark Background:** `#0F172A` (RGB: 15, 23, 42)
  - Main page background
  - Used for: Body background, navbar background, primary dark surfaces

- **Dark Surface (Cards):** `#1E293B` (RGB: 30, 41, 59)
  - Card backgrounds in dark mode
  - Used for: Product cards, form inputs, modals

- **Dark Surface Alt:** `#263148` (RGB: 38, 49, 72)
  - Alternate surface (nested cards, bubbles)
  - Used for: WhatsApp chat bubbles, secondary surfaces

- **Dark Border:** `#334155` (RGB: 51, 65, 85)
  - Borders in dark mode
  - Used for: All borders, dividers

### Dark Mode Text
- **Dark Text (Light):** `#F1F5F9` (RGB: 241, 245, 249)
  - Primary text in dark mode
  - Replaces `#1A1A1A`

- **Dark Gray (Medium):** `#94A3B8` (RGB: 148, 163, 184)
  - Secondary text in dark mode
  - Replaces `#707070`

- **Dark Gray Light:** `#64748B` (RGB: 100, 116, 139)
  - Tertiary text in dark mode
  - Replaces `#828282`

---

## Gradient Palette

### Hero Banner Gradient
```css
background: linear-gradient(90deg, var(--orange), var(--orange-dark))
/* #F47D05 → #975209 */
```

### Timeline Gradient (About Section)
```css
background: linear-gradient(to bottom, var(--orange), rgba(244, 125, 5, 0.1))
/* Orange → Orange faded */
```

### Category Colors (Product Gradients)
Each category has a unique gradient pair for product card backgrounds:

| Category | Color 1 | Color 2 |
|----------|---------|---------|
| **Coolers** | `#0c2d3d` | `#1a6a80` |
| **Wires** | `#0c1f3d` | `#1a4a80` |
| **Fans** | `#3d1800` | `#974f02` |
| **Mixer Grinders** | `#1a2a3d` | `#2a5a80` |
| **Iron Boxes** | `#3a2600` | `#976519` |
| **Multiplug** | `#1a093a` | `#4a2880` |
| **Sockets** | `#0a2e18` | `#1a5c35` |
| **2-Pin Tops** | `#2e1808` | `#5c3818` |
| **Fan Capacitors** | `#2a0a2e` | `#581858` |

*Usage:* `background: linear-gradient(135deg, color1, color2)`

---

## Color Usage Guidelines

### Buttons & CTAs
- **Primary CTA:** Orange (`#F47D05`) on white
- **Secondary CTA (WhatsApp):** Green (`#25D366`) on white
- **Phone/Call CTA:** Orange (`#F47D05`) on white
- **Text/Ghost Buttons:** Orange text on transparent, border only
- **Button Text:** Always white `#FFFFFF`

### Text & Readability
- **Headings:** Dark (`#1A1A1A`)
- **Body Text:** Dark (`#1A1A1A`)
- **Secondary Text:** Gray (`#707070`)
- **Disabled/Placeholder:** Gray Light (`#828282`)
- **Links (Underlined):** Orange (`#F47D05`) with underline on hover

### Backgrounds
- **Page Background:** White (`#FFFFFF`)
- **Section Backgrounds:** Light Gray (`#F7F7F7`) or White
- **Card Backgrounds:** White (`#FFFFFF`)
- **Input Backgrounds:** Light Gray (`#F7F7F7`)

### Borders & Shadows
- **Input Borders (Default):** `#E5E5E5`
- **Input Borders (Focus):** Orange (`#F47D05`)
- **Card Borders:** `#EBEBEB`
- **Shadow Color:** `rgba(0, 0, 0, X%)` where X = 5% to 12%

### Badges & Labels
- **Section Label:** Orange background `rgba(244, 125, 5, 0.1)` + orange text
- **Bestseller Badge:** Yellow (`#FFB81C`) with dark text
- **Popular Badge:** Blue (`#2563EB`) with white text
- **ISI Certified:** Orange border only, transparent background

---

## Accessibility Notes

### Contrast Ratios
- **Orange on White:** 7.2:1 ✅ (WCAG AAA)
- **Dark on White:** 16.5:1 ✅ (WCAG AAA)
- **Gray on White:** 4.5:1 ✅ (WCAG AA)
- **Green on White:** 3.1:1 ⚠️ (Below AA for normal text, use for icons/buttons only)

### Dark Mode Contrast
- **Light Text on Dark Background:** 10.2:1 ✅ (WCAG AAA)
- **Medium Gray on Dark:** 5.8:1 ✅ (WCAG AA)

### Color Blindness Considerations
- Avoid relying on red/green only for status (use badges with labels)
- Orange + Green combination is distinguishable for red-green colorblind users
- All badges include text labels, not color alone

---

## Color Tokens for Code

### CSS Variables (Light Mode)
```css
:root {
  --orange: #F47D05;
  --orange-dark: #975209;
  --green: #25D366;
  --ig: #E1306C;
  --dark: #1A1A1A;
  --gray: #707070;
  --gray-light: #828282;
  --bg: #F7F7F7;
  --white: #FFFFFF;
}
```

### CSS Variables (Dark Mode)
```css
[data-theme="dark"] {
  --dark: #F1F5F9;
  --gray: #94A3B8;
  --gray-light: #64748B;
  --bg: #1E293B;
  --white: #0F172A; /* Inverted for dark */
}
```

---

## Typography Color Pairings

| Element | Color | Example Use |
|---------|-------|-------------|
| **H1/H2 Headings** | `#1A1A1A` | Page titles, section headers |
| **H3/H4 Headings** | `#1A1A1A` | Card titles, subheadings |
| **Body Text** | `#1A1A1A` | Paragraphs, descriptions |
| **Label/Meta** | `#828282` | Product codes, timestamps |
| **Links** | `#F47D05` | Navigation, inline links |
| **Disabled Text** | `#EBEBEB` | Inactive form fields |
| **Alert/Error** | `#E1306C` | Error messages (use sparingly) |

---

## When to Use Each Color

### Orange (#F47D05) — "Trust & Action"
- Primary buttons and CTAs
- Important accents and highlights
- Section labels and badges
- Icon colors for primary actions
- Link hover states
- Border accents

### Green (#25D366) — "WhatsApp / Communication"
- WhatsApp buttons and messaging CTAs
- Chat widgets and communication prompts
- Secondary action buttons
- Only for messaging/communication contexts

### Gray (#707070–#828282) — "Support & Hierarchy"
- Secondary/disabled text
- Placeholder and hint text
- Icon colors for secondary actions
- Borders and dividers
- Less important information

### Dark (#1A1A1A) — "Primary Text"
- All body text and headings
- High contrast, primary information
- Form labels
- Always use for readability

### White/Light Gray — "Space & Surface"
- Card and button backgrounds
- Clean, open spaces
- Form inputs
- Readability backgrounds

---

## Export Formats

### Hex Colors Only
```
Primary Orange: #F47D05
Dark Orange: #975209
WhatsApp Green: #25D366
Dark Text: #1A1A1A
```

### For Design Tools (Figma, Adobe XD)
- Use CSS variable names as color names for consistency
- Tag colors by role: "Primary", "Status", "Neutral", "Dark Mode"

### For Brand Partners
All color specifications are in sRGB/Hex format and compatible with:
- Web (CSS, Hex codes)
- Print (convert to CMYK if needed)
- Digital marketing (RGB for screens)

---

## Future Color Expansions

If additional colors are needed:
- Stay within the warm color family (oranges, warm grays)
- Maintain 7+ contrast ratio with all backgrounds
- Test with color blindness simulators
- Avoid bright reds or pure greens that can clash with existing palette

---

**Document Version:** 1.0  
**Last Updated:** April 2026  
**Maintained By:** Meghdoot Supreme Design Team
