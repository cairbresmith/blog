# Weekly Updates Blog

A modern, minimalist blog for weekly updates, snapshots, ideas, and explorations. Inspired by the simplicity of calomel.org but designed for the modern era.

## Features

### 🎨 Modern Design
- **Clean, minimalist interface** - Focus on content, not clutter
- **Responsive layout** - Works beautifully on desktop, tablet, and mobile
- **Dark mode support** - Automatically saves your preference
- **Smooth animations** - Subtle transitions and effects

### 📝 Content Management
- **Category filtering** - Filter by Ideas, Snapshots, or Tech
- **Tag system** - Organize and discover related content
- **Simple submission form** - Add new posts directly from the browser
- **LocalStorage persistence** - Your posts are saved locally

### 🚀 Technical Highlights
- **No build process** - Just HTML, CSS, and vanilla JavaScript
- **No dependencies** - Pure web standards
- **Lightweight** - Fast loading and performance
- **Accessible** - Semantic HTML and keyboard navigation

## Getting Started

### Quick Start
1. Open `index.html` in your browser
2. That's it! The blog is ready to use.

### Adding Content
1. Click "Submit" in the navigation
2. Fill in the form:
   - **Title**: Your update's headline
   - **Category**: Choose Ideas, Snapshots, or Tech
   - **Content**: Your post content (supports basic HTML like `<code>`)
   - **Tags**: Comma-separated tags for organization
3. Click "Submit Update"

Your post will appear at the top of the feed!

### Filtering Content
- **All**: Shows all posts
- **Ideas**: Thoughts, reflections, and concepts
- **Snapshots**: Quick captures, photos, moments
- **Tech**: Technical notes, projects, code

## Customization

### Changing the Name/Title
Edit the `<h1>` tag in `index.html`:
```html
<h1>Your Name Here</h1>
```

### Modifying Colors
All colors are defined in CSS variables in `styles.css`:
```css
:root {
    --accent-color: #0066cc;  /* Change to your preferred color */
    --max-width: 800px;       /* Adjust content width */
    /* ... more variables ... */
}
```

### Dark Mode Colors
Customize dark mode in the `[data-theme="dark"]` section in `styles.css`.

### Adding Categories
1. Add the category option in the form (`index.html`)
2. Add navigation link
3. Add category styling in `styles.css`

## Data Storage

Posts are stored in the browser's LocalStorage. This means:
- ✅ No backend required
- ✅ Fast and private
- ✅ Works offline
- ⚠️ Data is browser-specific
- ⚠️ Clearing browser data will delete posts

### Exporting Your Data
Open the browser console and run:
```javascript
console.log(localStorage.getItem('blogPosts'));
```
Copy the JSON output to save your posts.

### Importing Data
```javascript
localStorage.setItem('blogPosts', 'YOUR_JSON_DATA_HERE');
location.reload();
```

## Publishing Options

### Option 1: Static Hosting (Easiest)
Deploy to any static hosting service:
- **GitHub Pages**: Free, automatic
- **Netlify**: Drag and drop deployment
- **Vercel**: One-click deployment
- **Cloudflare Pages**: Fast global CDN

### Option 2: Traditional Web Server
Upload all files to any web server via FTP/SFTP.

### Option 3: Local Development
Use a simple HTTP server:
```bash
# Python 3
python3 -m http.server 8000

# Node.js
npx http-server

# PHP
php -S localhost:8000
```

Then visit `http://localhost:8000`

## File Structure

```
blog/
├── index.html          # Main HTML structure
├── styles.css          # All styling (including dark mode)
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers

## Philosophy

This blog embraces:
- **Simplicity** - No complicated frameworks or build tools
- **Speed** - Fast loading, instant interactions
- **Privacy** - All data stays in your browser
- **Ownership** - You control everything
- **Longevity** - Built on web standards that will last

Inspired by the minimalist approach of sites like calomel.org, but with modern features like dark mode, responsive design, and interactive filtering.

## Tips for Weekly Updates

1. **Be consistent** - Set a specific day/time each week
2. **Keep it casual** - These are snapshots, not essays
3. **Mix categories** - Variety keeps things interesting
4. **Use tags** - They help you see patterns over time
5. **Write for yourself** - Authenticity resonates

## License

Feel free to use, modify, and distribute this project however you like. No attribution required (but appreciated!).

## Future Enhancements

Ideas for extending this blog:
- RSS feed generation
- Search functionality
- Post editing/deletion
- Export to Markdown
- Image upload support
- Backend integration
- Social sharing buttons
- Comments system

---

**Happy blogging!** 🚀
