# Browser Games

This repository preserves two small browser games created while learning JavaScript, DOM manipulation, event handling, and application state. It is a personal learning archive rather than a production application or portfolio project.

## Games

### Guess My Number

A single-player guessing game where the player identifies a random number between 1 and 20. It demonstrates form input, conditional logic, score tracking, DOM updates, and resetting application state.

### Pig Dice Game

A two-player dice game where players accumulate points and choose when to hold. Rolling a one loses the current turn's points, and the first player to reach 100 wins. It demonstrates event listeners, shared state, player switching, random values, and dynamic styles.

## Running locally

There is no installation or build step. Serve the repository through a local HTTP server so navigation behaves consistently:

```powershell
python -m http.server 8000
```

Then open <http://localhost:8000/web%20games/>.

The games use only HTML, CSS, and JavaScript. Google Fonts are the only external resources; the games remain functional if those fonts are unavailable.

## Repository status

No user accounts, stored data, backend services, credentials, or analytics are used. Scores exist only in the current browser page and reset when it is reloaded.
