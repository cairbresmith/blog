# Deployment Guide

This guide provides multiple options for publishing your blog online.

## Option 1: GitHub Pages (Recommended - Free & Easy)

### Prerequisites
- A GitHub account (sign up at https://github.com)
- Git installed on your computer

### Steps

1. **Create a new repository on GitHub**
   - Go to https://github.com/new
   - Repository name: `blog` (or your preferred name)
   - Make it **public**
   - **Don't** initialize with README, .gitignore, or license
   - Click "Create repository"

2. **Deploy using the automated script**
   ```bash
   cd /Users/cairbresmith/blog
   chmod +x deploy.sh
   ./deploy.sh
   ```
   
   Or deploy manually:
   ```bash
   cd /Users/cairbresmith/blog
   
   # Initialize git
   git init
   git branch -M main
   
   # Add and commit files
   git add .
   git commit -m "Initial blog setup"
   
   # Add your GitHub repository
   git remote add origin https://github.com/YOUR_USERNAME/blog.git
   
   # Push to GitHub
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click the **Settings** tab
   - Click **Pages** in the left sidebar
   - Under **Source**, select **main** branch
   - Click **Save**
   - Wait 1-2 minutes for deployment

4. **Access your blog**
   - Your blog will be live at: `https://YOUR_USERNAME.github.io/blog/`
   - GitHub will show you the URL in the Pages settings

### Updating Your Blog

After making changes:
```bash
git add .
git commit -m "Update content"
git push
```

Changes will appear on your site in 1-2 minutes.

---

## Option 2: Netlify (Alternative - Also Free)

1. **Create a Netlify account**
   - Go to https://www.netlify.com
   - Sign up (can use GitHub account)

2. **Deploy via Drag & Drop**
   - Log in to Netlify
   - Click "Add new site" > "Deploy manually"
   - Drag the `/Users/cairbresmith/blog` folder to the upload area
   - Wait for deployment (30 seconds)

3. **Get your URL**
   - Netlify will provide a URL like `random-name-123.netlify.app`
   - You can customize it in Site Settings > Site details > Change site name

### Updating on Netlify
- Just drag and drop the folder again to update

---

## Option 3: Vercel (Alternative)

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   cd /Users/cairbresmith/blog
   vercel
   ```

3. **Follow the prompts**
   - Log in/sign up
   - Confirm deployment settings
   - Get your live URL

### Updating on Vercel
```bash
vercel --prod
```

---

## Option 4: Traditional Web Hosting

If you have traditional web hosting (cPanel, FTP access):

1. **Connect via FTP/SFTP**
   - Use FileZilla or Cyberduck
   - Connect to your hosting server

2. **Upload files**
   - Upload all files to your public_html or www directory
   - Maintain the folder structure

3. **Access**
   - Visit your domain: `https://yourdomain.com`

---

## Option 5: Cloudflare Pages

1. **Create Cloudflare account**
   - Go to https://pages.cloudflare.com

2. **Connect GitHub**
   - Click "Create a project"
   - Connect your GitHub account
   - Select your blog repository

3. **Configure**
   - Framework preset: None
   - Build command: (leave empty)
   - Build output directory: `/`
   - Click "Save and Deploy"

4. **Custom domain** (optional)
   - Add your custom domain in Pages settings

---

## Custom Domain Setup

Once deployed, you can use a custom domain:

### For GitHub Pages:
1. Buy a domain (Namecheap, Google Domains, etc.)
2. Add a `CNAME` file to your repository:
   ```
   yourdomain.com
   ```
3. Configure DNS:
   - Add a CNAME record pointing to `YOUR_USERNAME.github.io`
4. Enable custom domain in GitHub Pages settings

### For Netlify/Vercel/Cloudflare:
- Follow their custom domain setup guides (usually just add the domain in settings)

---

## Recommended Choice

**For beginners**: GitHub Pages (free, reliable, easy updates)
**For simplicity**: Netlify drag & drop
**For advanced**: Vercel or Cloudflare Pages

All options are free for this static site!

---

## Testing Locally

Before deploying, test locally:

```bash
# Python 3
python3 -m http.server 8000

# Then visit http://localhost:8000
```

---

## Troubleshooting

### GitHub Pages shows 404
- Wait 2-3 minutes after enabling Pages
- Check that `index.html` is in the root directory
- Verify the branch is set correctly in Pages settings

### Styles not loading
- Check that `styles.css` and `script.js` are in the same directory as `index.html`
- Use browser DevTools to check for 404 errors

### Need help?
- GitHub Pages docs: https://docs.github.com/pages
- Netlify docs: https://docs.netlify.com
- Vercel docs: https://vercel.com/docs

---

**Happy publishing!** 🚀
