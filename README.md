# basic-information-site

This project is a simple Node.js server that serves an informational site with four basic pages: Home, About, Contact, and a 404 error page.
The aim of this project is to get comfortable with building and serving content with Node.js by routing different URLs to specific HTML files.

## Features

- **Home Page (index.html)**: Basic homepage accessible via `localhost:8080`.
- **About Page (about.html)**: Provides information about the site accessible via `localhost:8080/about`.
- **Contact Me (contact-me.html)**: Displays contact information accessible via `localhost:8080/contact-me`.
- **404 Page (404.html)**: A custom 404 error page that is shown when a user navigates to any URL that doesn't match the specified pages.

```bash
.
├── index.js           # Node.js server file
├── index.html         # Home page
├── about.html         # About page
├── contact-me.html    # Contact page
└── 404.html           # 404 error page
```
