# Warm Corner Cafe Landing Page

Warm Corner is a responsive, single-page landing website for a cozy cafe in Tallinn, Estonia. The page presents the cafe's atmosphere, menu, lunch offer, guest reviews, contact details, opening hours, and location map in one scrolling experience.

The website content is currently written in Russian, while the project documentation is provided in English.

## Author

Hanna Zozulia

## Features

- Responsive layout for desktop, tablet, and mobile screens
- Sticky navigation with a mobile hamburger menu
- Hero section with cafe branding and calls to action
- Menu category tabs for breakfast, main dishes, soups, desserts, and coffee
- Full menu modal rendered from the data in `script.js`
- Lunch offer with pricing and weekday hours
- Interior and food image gallery
- Customer testimonials and cafe highlights
- Contact section with phone, email, opening hours, and an embedded Google Map
- Mobile sticky actions for calling the cafe and opening directions
- Reveal-on-scroll animations with reduced-motion support
- Automatic light/dark color scheme support through CSS media queries

## Tech Stack

- HTML5
- CSS3 with responsive media queries and custom properties
- Vanilla JavaScript
- Google Fonts: Fraunces and Manrope
- Google Maps embed

No build tools, package manager, or external JavaScript framework is required.

## Getting Started

### Open directly

Open `index.html` in a modern web browser. Most functionality works without a local server.

### Run with a local server

For the most reliable behavior, especially for browser security restrictions and external embeds, serve the project directory with any static HTTP server. For example, with Python installed:

```bash
python -m http.server 8000
```

Then open <http://localhost:8000> in your browser.

## Project Structure

```text
.
├── index.html       # Page structure and content
├── styles.css       # Layout, responsive styles, themes, and animations
├── script.js        # Menu tabs, modal, mobile navigation, and scroll behavior
├── img/             # Logo, hero image, interior photos, and gallery assets
└── README.md        # Project documentation
```

## Updating the Menu

The menu data is stored in the `MENU` object at the top of `script.js`. Each category contains a label and an array of items with a name, description, and price:

```js
breakfast: {
	label: "Breakfast",
	items: [
		{ n: "Dish name", d: "Short description", p: "7.20" }
	]
}
```

Update this object to change both the category preview and the full menu modal.

## Customization

- Change page text, navigation labels, contact details, and opening hours in `index.html`.
- Adjust colors, fonts, spacing, and breakpoints in the variables and rules in `styles.css`.
- Replace images in `img/` while keeping the filenames, or update the corresponding image paths in `index.html`.
- Update the Google Maps URLs in `index.html` when changing the cafe location.

## Browser Support

The page is designed for current versions of Chrome, Edge, Firefox, and Safari. JavaScript uses standard browser APIs including `IntersectionObserver`, `matchMedia`, and `dataset`.

## License

No license has been specified for this project. Add a license before distributing or reusing the code publicly.
