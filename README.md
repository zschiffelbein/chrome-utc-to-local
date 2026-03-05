# UTC to Local

A Chrome extension that converts a selected UTC timestamp to your local time via the right-click context menu.

## What it does

When browsing any webpage, highlight a UTC timestamp (e.g. `2024-06-15 14:30:00`), right-click, and choose **Convert From UTC: …** from the context menu. An alert will display the equivalent time in your local timezone.

## Manual Installation

Chrome does not require the extension to be published on the Chrome Web Store — you can sideload it directly using Developer Mode.

1. **Download the extension** — clone or download this repository to your machine.
   ```
   git clone https://github.com/zschiffelbein/chrome-utc-to-local.git
   ```
2. **Open the Extensions page** — navigate to `chrome://extensions` in your browser.
3. **Enable Developer mode** — toggle the **Developer mode** switch in the top-right corner of the page.
4. **Load the extension** — click **Load unpacked**, then select the folder you cloned/downloaded in step 1.
5. The **UTC to Local** extension will now appear in your extensions list and is ready to use.

> **Note:** If you update the source files later, return to `chrome://extensions` and click the refresh icon on the extension card to reload it.

## Usage

1. On any webpage, highlight a UTC time string (e.g. `2024-06-15 14:30:00`).
2. Right-click the selected text.
3. Click **Convert From UTC: [your selected text]** in the context menu.
4. An alert will display the converted local time.

## License

MIT — see [LICENSE](LICENSE).
