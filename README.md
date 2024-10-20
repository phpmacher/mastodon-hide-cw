# Mastodon Content Warning Hider

## Description

A Tampermonkey script that hides Mastodon content warnings.

## Features

- Hides all articles in a column, that have/are a content-warning.
- Works dynamically: new articles are automatically invisible
- nothing to configure during runtime
- Automatically handles columns added to the page dynamically.

## Installation

1. Install [Tampermonkey](https://www.tampermonkey.net/) in your browser if you haven’t already.
2. Create a new script and copy-paste the code from the `mastodon-hide-cw.user.js` repository.
3. Save and enable the script.
4. Change the @match directives to your mastodon server
5. Visit Mastodon, and you'll see no more content-warnings

## Usage

Once installed, the script will automatically hide content warnings on Mastodon pages.

## Compatibility

- Mastodon instances of your choice (default: `sueden.social`, `chaos.social`, `mastodon.social`)
- Works on other Mastodon instances as well (by modifying the `@match` rules).
- tested with Mastodon v4.3.0

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributions

Feel free to submit issues or pull requests if you'd like to contribute to improving the script.


