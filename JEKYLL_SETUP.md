# Jekyll Blog Setup Complete! 🎉

Your blog has been converted to a Jekyll-powered static site that stores all content as Markdown files in GitHub.

## What Changed

### ✅ New Jekyll Structure
- **`_config.yml`** - Jekyll configuration
- **`_layouts/`** - HTML templates for pages
- **`_posts/`** - Your blog posts as Markdown files
- **`assets/css/main.css`** - Moved from `styles.css`
- **`assets/js/main.js`** - Simplified theme toggle
- **`index.md`**, **`ideas.md`**, **`snapshots.md`**, **`tech.md`** - Category pages
- **`Gemfile`** - Ruby dependencies for GitHub Pages

### 📝 Sample Posts Included
7 sample posts have been created in the `_posts/` directory:
- 2026-08-07-embracing-simplicity.md
- 2026-08-06-weekend-cli-tool.md
- 2026-08-05-sunset-baker-beach.md
- 2026-08-04-weekly-reflection.md
- 2026-08-03-web-components.md
- 2026-08-02-coffee-notes.md
- 2026-08-01-digital-minimalism.md

## Next Steps

### 1. Install Dependencies (Optional - for local testing)

```bash
cd /Users/cairbresmith/blog

# Install Ruby gems
bundle install

# Run Jekyll locally
bundle exec jekyll serve

# Visit http://localhost:4000/blog/
```

### 2. Deploy to GitHub Pages

```bash
# Add all the new files
git add .

# Commit the changes
git commit -m "Convert to Jekyll blog with Markdown posts"

# Push to GitHub
git push origin main
```

### 3. Configure GitHub Pages

1. Go to: `https://github.com/cairbresmith/blog/settings/pages`
2. Under **Source**, select: **Deploy from a branch**
3. Under **Branch**, select: **main** and **/ (root)**
4. Click **Save**
5. Wait 2-3 minutes for deployment

### 4. View Your Site

Your blog will be live at: **https://cairbresmith.github.io/blog/**

## Adding New Posts

To add a new post, create a file in the `_posts/` directory:

**Filename format:** `YYYY-MM-DD-post-title.md`

**Example:** `_posts/2026-08-08-my-new-post.md`

```markdown
---
layout: post
title: "My New Post Title"
category: ideas  # ideas, snapshots, or tech
tags: [tag1, tag2]
---

Your content here using Markdown formatting...

## You can use headings

- Bullet points
- More bullets

**Bold text** and *italic text*

[Links work too](https://example.com)

\`\`\`javascript
// Code blocks
console.log('Hello World');
\`\`\`
```

## How It Works

1. **Write posts in Markdown** - Store in `_posts/` directory
2. **Commit to Git** - `git add .` → `git commit` → `git push`
3. **GitHub Pages builds** - Automatically converts Markdown to HTML
4. **Site updates** - Live in 1-2 minutes

## Features

✅ **Content in Git** - All posts stored as Markdown files  
✅ **Version Control** - Full history of all changes  
✅ **No Database** - Pure static files  
✅ **Free Hosting** - GitHub Pages is free forever  
✅ **Fast & Secure** - Static files load instantly  
✅ **Dark Mode** - Theme toggle saves preference  
✅ **RSS Feed** - Automatic feed at `/blog/feed.xml`  
✅ **SEO Ready** - Meta tags and sitemap included  

## Customization

### Change Site Info
Edit `_config.yml`:
```yaml
title: Your Name
description: Your tagline
author: Your Name
```

### Change Colors
Edit `assets/css/main.css` - modify CSS variables in `:root`

### Add/Remove Categories
- Create new `.md` file (e.g., `projects.md`)
- Add to navigation in `_layouts/default.html`

## Troubleshooting

### Site Not Updating?
1. Check GitHub Actions tab for build errors
2. Wait 2-3 minutes after push
3. Hard refresh browser (Cmd+Shift+R)
4. Try incognito/private window

### Local Testing Not Working?
```bash
# Make sure Ruby and Bundler are installed
ruby --version  # Should be 2.7+
bundle install
bundle exec jekyll serve --trace  # Shows detailed errors
```

### Posts Not Showing?
- Check filename format: `YYYY-MM-DD-title.md`
- Verify frontmatter has `layout: post`
- Ensure file is in `_posts/` directory
- Check date is not in the future

## Resources

- [Jekyll Documentation](https://jekyllrb.com/docs/)
- [GitHub Pages Guide](https://docs.github.com/en/pages)
- [Markdown Syntax](https://www.markdownguide.org/basic-syntax/)

---

**You're all set!** Start writing posts in Markdown and push to GitHub. 🚀
