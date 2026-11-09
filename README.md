# Open Browser — Web Workspace

A responsive, installable Progressive Web App (PWA) that provides a browser-style workspace for organising web activity.

## Included capabilities
- Search/address field with Google, Bing, DuckDuckGo and Brave Search
- Workspace tabs, pinning, duplication, closing and reopening
- Bookmarks, history, reading list and quick links
- Collections, notes and saved browsing sessions
- Command palette and keyboard shortcuts
- Private workspace session with temporary tabs and no local history/session persistence while active
- Safe-search preferences for supported search providers
- Light/dark appearance, focus mode, responsive layouts and PWA installation
- Local data import/export and offline application shell

## Security and privacy notes
- Navigation accepts HTTP and HTTPS URLs only; script, file and data URL schemes are rejected.
- Plain HTTP destinations prompt before opening.
- Workspace information is stored in the browser profile on the current device. No account sync or analytics backend is configured.
- Private Session is a local workspace privacy feature. It does not replace private/incognito mode in the underlying browser and cannot clear or isolate cookies, cache, downloads, IP address or site permissions.
- External websites are opened by the installed browser because many websites block embedding. Their cookies, trackers, downloads, permissions and content security are governed by that browser.
- Safe Search asks supported search engines for stricter filtering; it is not a content filter or parental-control guarantee.

## Platform boundary
This is a PWA browser workspace, not a standalone browser engine. It cannot implement native extension APIs, engine-level ad blocking, password autofill, download interception, per-site permission controls, independent cookie stores or process isolation. Those capabilities require a native browser application and browser-engine integration.

## Deployment
Deploy the static site from the repository root on Vercel, Render, Netlify, Cloudflare Pages or another HTTPS static host. Configure `browser.ethandigitalacademy.org` on the selected host and add the DNS record requested by that host.
