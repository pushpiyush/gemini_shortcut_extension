# Gemini Shortcut

A lightweight browser extension for Gemini that helps you start typing faster without needing to move the mouse to the input box.

## Why I built this

When chatting with Gemini, it can be annoying to:
- scroll with the mouse,
- then move the cursor back to the text area,
- and click again just to start typing.

This extension solves that by letting you focus the input area with a single keyboard shortcut.

## Features

- Focus the Gemini input box with `Shift + F`
- Remove focus from the editor with `Escape`
- Works on Gemini pages at `https://gemini.google.com/*`

## Keyboard shortcuts

- `Shift + F` — focus the text area
- `Escape` — blur the editor if it is focused

## How it works

The extension injects a content script into Gemini pages and finds the editor element used by Gemini’s composer. When you press the shortcut, it focuses that text input so you can begin typing immediately.

## Installation

1. Open your browser’s extension page.
2. Turn on Developer Mode.
3. Load the unpacked extension from this repository.
4. Open https://gemini.google.com
5. Press `Shift + F` to focus the text box.

## Files

- `manifest.json` — extension metadata and permissions
- `scripts/content.js` — keyboard shortcut logic
- `icons/` — icon assets used by the extension

## Notes

This is a simple productivity-focused extension designed for faster keyboard-based chatting on Gemini.

## License

This project is provided as-is for personal use.