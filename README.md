# cairbresmith - Weekly Blog

A minimalist Jekyll blog for weekly snapshots, ideas, and tech explorations.

## About

This blog uses Jekyll to store all content as Markdown files in GitHub. Posts are organized by category:
- **Ideas** - Thoughts and reflections
- **Snapshots** - Life moments and observations
- **Tech** - Technical projects and learnings

## Local Development

### Prerequisites
- Ruby (2.7 or higher)
- Bundler

### Setup

1. Install dependencies:
```bash
bundle install
```

2. Run locally:
```bash
bundle exec jekyll serve
```

3. Visit `http://localhost:4000/blog/`

## Adding New Posts

Create a new Markdown file in the `_posts` directory with the format:
```
YYYY-MM-DD-title-slug.md
```

**Example post:**
```markdown
---
layout: post
title: "Your Post Title"
category: ideas  # or snapshots, tech
tags: [tag1, tag2, tag3]
---

Your content here in Markdown format...
```

## Deployment

This blog is designed to work seamlessly with GitHub Pages:

1. Push your changes:
```bash
git add .
git commit -m "Add new post"
git push origin main
```

2. GitHub Pages will automatically build and deploy your site

3. Visit: `https://cairbresmith.github.io/blog/`

## Features

- ✅ Markdown-based posts stored in Git
- ✅ Category filtering (Ideas, Snapshots, Tech)
- ✅ Dark mode toggle
- ✅ RSS feed
- ✅ SEO optimized
- ✅ Fully responsive
- ✅ Fast and minimal
- ✅ No database required

## Structure

```
blog/
├── _config.yml          # Site configuration
├── _layouts/            # Page layouts
│   ├── default.html     # Base layout
│   ├── home.html        # Home/archive layout
│   └── post.html        # Individual post layout
├── _posts/              # Your blog posts (Markdown)
├── assets/
│   ├── css/main.css     # Styles
│   └── js/main.js       # JavaScript
├── index.md             # Homepage
├── ideas.md             # Ideas archive
├── snapshots.md         # Snapshots archive
├── tech.md              # Tech archive
├── Gemfile              # Ruby dependencies
└── README.md            # This file
```

## Customization

Edit `_config.yml` to customize:
- Site title and description
- URL and baseurl
- Author information
- Theme mode (light/dark/auto)

## License

Feel free to use this as inspiration for your own blog!
