/* =========================================================
   NEON NIGHTS
   MAIN JAVASCRIPT
========================================================= */

/*
    Nothing is implemented here. These are the two moving parts.

    How you build them — and what edge cases you handle — is the test.
*/

/* =========================================================
   COUNTDOWN
========================================================= */

/*
    Target: #countdown in index.html

    Client-provided event date:
    Saturday, 14 March 2026, 7:00 PM

    Event location/timezone was not provided.

    We use the visitor's local browser timezone rather than
    silently assuming a specific city or timezone.
*/

// Actual date
const eventDate = new Date(2026, 2, 14, 19, 0, 0);

// For example future date
// const eventDate = new Date(2026, 8, 10, 19, 0, 0);
const countdown = document.getElementById("countdown");
const countdownMessage = document.getElementById("countdownMessage");

function updateCountdown() {
    const now = new Date();

    const timeRemaining = eventDate.getTime() - now.getTime();

    /*
        Edge case:
        The event date has already passed.
    */

    if (timeRemaining <= 0) {
        countdown.innerHTML = `
            <div class="countdown-ended">
                This event has ended. Thanks for being part of Neon Nights!
            </div>
        `;

        countdownMessage.textContent = "";

        return false;
    }

    /*
        Convert remaining milliseconds into
        days, hours, minutes and seconds.
    */

    const totalSeconds = Math.floor(timeRemaining / 1000);

    const days = Math.floor(totalSeconds / (60 * 60 * 24));

    const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));

    const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);

    const seconds = totalSeconds % 60;

    /*
        Render countdown.

        padStart() keeps the visual format consistent:
        04 instead of 4.
    */

    countdown.innerHTML = `
        <div class="countdown-item">
            <span>${String(days).padStart(2, "0")}</span>
            <small>Days</small>
        </div>

        <div class="countdown-item">
            <span>${String(hours).padStart(2, "0")}</span>
            <small>Hours</small>
        </div>

        <div class="countdown-item">
            <span>${String(minutes).padStart(2, "0")}</span>
            <small>Minutes</small>
        </div>

        <div class="countdown-item">
            <span>${String(seconds).padStart(2, "0")}</span>
            <small>Seconds</small>
        </div>
    `;

    return true;
}

/*
    Update immediately so the visitor does not
    wait one second to see the countdown.
*/

const isCountdownActive = updateCountdown();

/*
    Only keep the interval running while the
    event is still in the future.
*/

if (isCountdownActive) {
    const countdownInterval = setInterval(() => {
        const isActive = updateCountdown();

        /*
            Stop unnecessary updates once
            the event has started.
        */

        if (!isActive) {
            clearInterval(countdownInterval);
        }
    }, 1000);
}

/* =========================================================
   DARK MODE TOGGLE
========================================================= */

const themeToggle = document.getElementById("themeToggle");

const themeIcon = themeToggle.querySelector(".theme-icon");

/*
    Check for a previously saved preference.
*/

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");

    themeToggle.setAttribute("aria-pressed", "true");

    themeIcon.textContent = "☀️";
}

/*
    Toggle between light and dark mode.
*/

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    const isDarkMode = document.body.classList.contains("dark-mode");

    /*
        Update accessibility state.
    */

    themeToggle.setAttribute("aria-pressed", String(isDarkMode));

    /*
        Update the visible icon.
    */

    themeIcon.textContent = isDarkMode ? "☀️" : "🌙";

    /*
        Save the user's preference so the
        selected theme remains after refresh.
    */

    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
});
