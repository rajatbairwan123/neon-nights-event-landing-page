# Decisions

## Questions I'd ask the client

- What is the event location and timezone? The countdown date and time were provided, but no timezone was specified.
- The intro says "Doors open this Friday at 7 PM", while the event is listed as Saturday, 14 March 2026. Which wording and schedule are correct?
- The schedule says doors open at 6:30 PM, but the intro says 7 PM. Which time should be shown to visitors?
- What is the exact brand blue (hex/RGB value)?
- Where should the "GET TICKETS" button link? No ticket provider or destination URL was provided.
- Where should signup emails be stored or sent? No backend, API, or form provider was provided.
- What social media accounts and URLs should be used?
- Should the event page continue to show the original event after it has passed, or should the content be updated for a future event?

## Things in the brief that didn't add up (and what I did)

- The event date is Saturday, 14 March 2026, but the intro line says "Doors open this Friday at 7 PM".
    - I kept the intro text exactly as requested because it was explicitly provided in the client's notes and recorded the conflict here rather than silently changing client content.

- The intro says doors open at 7 PM, while the schedule says doors open at 6:30 PM.
    - I kept both pieces of client-provided content as supplied and would confirm the correct time with the client before production.

- The event timezone was not provided.
    - I used the visitor's local browser timezone for the JavaScript countdown rather than assuming a city or timezone.

- The event date has already passed when the page is viewed.
    - The countdown detects this and shows an "event has ended" message instead of displaying negative values. The countdown interval is also stopped once the event has passed.

- The client requested a brand blue but did not provide an exact colour value.
    - I chose a modern electric blue that works with the supplied hero image and remains readable in both themes.

- No ticket URL was provided.
    - I linked the CTA to the notification/signup section rather than shipping a dead button. In production, this should be replaced with the client's ticketing URL.

- Social media URLs were not provided.
    - I used visible social placeholders and did not invent fictional client accounts.

## Assumptions I made to keep moving

- The page should preserve the same visual hierarchy and functionality across screen sizes rather than using an identical pixel-for-pixel layout on every device.
- The provided hero image is the primary visual asset for the landing page.
- A blue overlay is acceptable as part of the hero treatment because the client requested a brand-blue hero.
- The optional background video is not required for the page to meet the brief.
- The logo can be implemented as text because the brief explicitly allowed text instead of an image logo.
- The countdown should handle an expired event gracefully instead of continuing to calculate negative time.
- Dark mode should remember the user's preference after a page refresh.

## Media

- What I did with hero.jpg / bg-loop.mp4:
    - Used `hero.jpg` as the hero background image.
    - Did not use `bg-loop.mp4` because a 35 MB background video would add significant page weight without being necessary to meet the brief.
    - Added a blue gradient overlay to the hero image to improve text readability and support the requested brand direction.

- Before → after sizes:
    - `hero.jpg`: original provided asset is approximately 8 MB. Optimisation is still to be completed before final submission.
    - `bg-loop.mp4`: approximately 35 MB and intentionally not shipped.

## The CTA button and the signup form

- What each one actually does:
    - "GET TICKETS" scrolls the user to the notification/signup section because no ticket URL was supplied.
    - The signup form uses the browser's built-in email validation through `type="email"` and `required`.
    - The current static version does not store or send email addresses because GitHub Pages does not provide a backend and no API or form provider was supplied.

- Where there was more than one reasonable option, the options + which I picked and why:
    - CTA options were a dead link, a "coming soon" interaction, or linking to the available signup action.
    - I chose the signup section because it gives the primary CTA a useful interaction without inventing a ticket provider or destination.

    - Signup options included connecting a third-party form service, creating a backend/API, or keeping the page as an honest static prototype.
    - I kept it as a static prototype with native browser validation because no data handling or backend requirements were provided.

## Testing

- Devices / screen sizes / browsers I checked:
    - Tested the responsive layout across desktop, laptop, tablet, and mobile screen sizes.
    - Tested the page at different viewport widths to verify the responsive breakpoints.
    - Checked the main functionality in a modern desktop browser.

- What I specifically looked at:
    - Header remains sticky while scrolling.
    - Navigation links scroll to the correct sections.
    - Hero text remains readable over the background image.
    - Hero layout adapts without text or controls overflowing.
    - Feature cards change from a three-column layout to a stacked layout on smaller screens.
    - Countdown adapts to smaller screens and remains readable.
    - Schedule remains readable on smaller screens.
    - Signup form stacks correctly on smaller screens.
    - Footer content remains readable and aligned across screen sizes.
    - The expired countdown state does not show negative values.
    - Dark mode keeps text, borders, tables, inputs, and controls readable across the page.

## Left out on purpose (and why)

- The optional `bg-loop.mp4` background video was left out to avoid unnecessarily large page weight.
- A backend or database was not added because this is a single-page static site and no backend requirements were provided.
- No ticket provider integration was added because no ticketing platform or URL was supplied.
- No real social media URLs were invented.
- I did not add extra sections or animations that were not needed for the brief, to keep the page focused and avoid over-building.
