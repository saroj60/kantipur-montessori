# Design System Strategy: The Tactile Archive

## 1. Overview & Creative North Star
This design system is built upon the **"Tactile Archive"** creative north star. In the context of a Montessori Training Center, we must move beyond the "plastic" feel of modern EdTech and embrace a digital environment that feels as intentional, organic, and premium as a physical Montessori classroom.

The "Tactile Archive" aesthetic rejects the rigid, boxy constraints of standard web grids in favor of **intentional asymmetry** and **editorial pacing**. We treat the screen as a series of curated, layered surfaces. By utilizing generous whitespace (`spacing.20` and `spacing.24`) and overlapping elements, we create a sense of professional excellence that is calm rather than clinical. This system isn't just a container for information; it is a digital reflection of the Montessori philosophy—order, beauty, and natural growth.

## 2. Colors: Tonal Depth & Organic Transitions
Our palette is rooted in the earth. It uses `primary` (#425643) and `secondary` (#8e4c3c) not as loud "brand colors," but as anchors for a sophisticated, nature-inspired experience.

*   **The "No-Line" Rule:** To achieve a high-end editorial feel, **1px solid borders are strictly prohibited** for sectioning. We define boundaries exclusively through background shifts. For instance, a main content area on `background` (#fef8f3) should transition into a footer or sidebar using `surface_container_low` (#f8f3ee). This creates "soft" boundaries that feel organic rather than forced.
*   **Surface Hierarchy & Nesting:** Think of the UI as stacked sheets of fine, heavy-stock paper. Use the surface tiers to define importance. A standard page might sit on `surface`. A featured module or registration form should be nested within a `surface_container` (#f2ede8) or `surface_container_high` (#ece7e2) to naturally draw the eye through tonal weight rather than visual noise.
*   **The "Glass & Gradient" Rule:** For floating elements like navigation bars or pop-over modals, use Glassmorphism. Apply a semi-transparent version of `surface_container_lowest` (#ffffff) with a high backdrop-blur to allow the earthy `background` to bleed through.
*   **Signature Textures:** For Hero sections and primary CTAs, use subtle linear gradients. Transition from `primary` (#425643) to `primary_container` (#5a6e5a) at a 135-degree angle. This provides a "velvet" depth that flat color cannot replicate.

## 3. Typography: The Editorial Voice
This design system pairs the academic authority of **Noto Serif** with the modern, approachable clarity of **Plus Jakarta Sans**.

*   **Display & Headlines (Noto Serif):** These are our "moments of beauty." Use `display-lg` and `headline-lg` with generous tracking and line-height to create an editorial, book-like feel. They should feel like titles in a premium publication.
*   **Body & Titles (Plus Jakarta Sans):** Our "workhorse" typeface. It is chosen for its high x-height and open counters, ensuring that complex educational material remains legible and friendly.
*   **Hierarchy as Identity:** By using a significant scale jump between `display-md` (2.75rem) and `body-lg` (1rem), we create a high-contrast visual rhythm that feels intentional and authoritative.

## 4. Elevation & Depth: Tonal Layering
Traditional drop shadows are often too "heavy" for a center focused on calm and clarity. We replace them with **Tonal Layering**.

*   **The Layering Principle:** Instead of a shadow, place a `surface_container_highest` (#e6e2dd) card on a `surface` background. The subtle shift in hex value is enough to signify a new layer.
*   **Ambient Shadows:** When a component must "float" (e.g., a primary action button or a modal), use an ultra-diffused shadow. 
    *   *Shadow Color:* A 6% opacity version of `on_surface` (#1d1b19).
    *   *Blur:* Minimum 40px to 60px.
    *   *Offset:* Softly weighted at Y: 10px.
*   **The "Ghost Border" Fallback:** If a layout absolutely requires containment (such as in an image gallery), use a **Ghost Border**. Apply `outline_variant` (#c3c8c0) at 15% opacity. It should be felt, not seen.
*   **Roundedness:** Embrace the `xl` (3rem) and `lg` (2rem) scales. Large radii suggest safety and friendliness, mirroring the child-centric nature of Montessori education.

## 5. Components: Soft & Purposeful
Components must feel like "objects" on a surface, not just code on a screen.

*   **Buttons:**
    *   **Primary:** Solid `primary` background with `on_primary` text. Use `roundedness.full` and `spacing.6` horizontal padding.
    *   **Secondary:** `secondary_container` background. These are for "warm" actions like "Book a Tour."
    *   **Tertiary:** No background; use `primary` text with a subtle `primary_fixed_dim` underline that appears on hover.
*   **Cards & Lists:** **Strictly forbid divider lines.** Use `spacing.8` or `spacing.10` to create separation. In a list of courses, alternate the background color between `surface` and `surface_container_low` to define rows.
*   **Input Fields:** Use `surface_container_lowest` for the field background with a `roundedness.md` (1.5rem). The label should be in `label-md` using the `secondary` color to provide a warm, human touch.
*   **Curated Progress Trackers (Custom Component):** Instead of a standard progress bar, use a series of "Organic Pebbles" (unevenly rounded shapes) using the `primary` and `primary_fixed` tokens to track a student's journey.

## 6. Do’s and Don’ts

### Do:
*   **Do** use asymmetrical layouts where text blocks are offset from images to create a "scrapbook" editorial feel.
*   **Do** use the `secondary` (terracotta) sparingly as a "heartbeat" color for high-emotion CTAs or important notifications.
*   **Do** ensure every page has a "breathing room" zone—a large area of `background` (#fef8f3) with no content.

### Don’t:
*   **Don’t** use pure black (#000000) for text. Always use `on_surface` (#1d1b19) to maintain the soft, earthy tone.
*   **Don’t** use sharp corners. Every container must have at least `roundedness.sm` (0.5rem).
*   **Don’t** use standard "Material Design" blue or bright secondary colors. Stick strictly to the provided earthy tokens to preserve the calm, Montessori atmosphere.
*   **Don't** clutter. If you can't fit it with `spacing.6` between elements, the section needs to be redesigned or broken into two.