# Liquid OTP UI Animation

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://mrchandrayee.github.io/liquid-otp-ui-animation/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org) [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

A self-contained, runnable recreation of the supplied screen recording.

## Visible elements and behavior in the video
- Header: **Liquid OTP UI Animation**
- White rounded verification card with “Enter Security Code”
- Six one-character OTP inputs
- Pale blue liquid/blob layer behind the inputs
- Dark “Confirm Identity” button
- Processing state with a blue circular indicator
- Incorrect-code state with a red cross and red button
- Successful state with a green check and green button

## HTML structure transcribed from the screen
The recording visibly shows these class names and elements:
- `.interaction-area`
- `.liquid-layer`
- `.blob-wrapper` with `id="blobs"`
- Six `.blob` elements
- `.inputs-layer` with `id="inputs"`
- Six `input type="text" maxlength="1" class="otp-input"` elements; the first has `autofocus`
- `.icon-container.check` and `.icon-container.cross`, each containing an SVG `.draw-path`

The project retains those class names and the visible SVG path data.

## How to run
1. Extract the ZIP.
2. Open `index.html` in Chrome, Firefox, Safari, or Edge.
3. Enter the demo code `123456` and press **Confirm Identity** for success.
4. Enter any other six digits to see the error animation.
5. Paste a six-digit code to fill all six boxes.

No npm install, build step, or external dependency is required.

## Files
- `index.html` — OTP markup and inline SVG status icons
- `style.css` — card, six input cells, liquid blob layer and status animations
- `script.js` — auto-advance, backspace, paste, validation and processing states
- `README.md` — extraction notes and run guide

## Source fidelity
The visible HTML element structure, class names, input attributes, six blob elements, and SVG path data have been transcribed from the video. The screen recording does not expose the complete original CSS or JavaScript source; the styling and interaction logic needed to make the demo functional have therefore been reconstructed to match the visible behavior. This is not a byte-for-byte recovery of the original source project.

## 👨‍💻 Author

**mrchandrayee** · [GitHub](https://github.com/mrchandrayee)

## 📄 License

[MIT License](./LICENSE)
