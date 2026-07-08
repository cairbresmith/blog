#!/bin/bash

# Blog Deployment Script
# This script will deploy your blog to GitHub Pages

echo "🚀 Blog Deployment Script"
echo "========================="
echo ""

# Check if git is initialized
if [ ! -d .git ]; then
    echo "📦 Initializing git repository..."
    git init
    git branch -M main
else
    echo "✅ Git repository already initialized"
fi

# Add all files
echo "📝 Adding files to git..."
git add .

# Commit
echo "💾 Committing changes..."
git commit -m "Initial blog setup - Weekly Updates site"

# Ask for GitHub repository URL
echo ""
echo "📌 Next steps:"
echo "1. Create a new repository on GitHub (https://github.com/new)"
echo "   - Repository name: blog (or your preferred name)"
echo "   - Make it public"
echo "   - Don't initialize with README"
echo ""
echo "2. Copy your repository URL (e.g., https://github.com/cairbresmith/blog.git)"
echo ""
read -p "Enter your GitHub repository URL: " REPO_URL

if [ -z "$REPO_URL" ]; then
    echo "❌ No URL provided. Please run this script again with a repository URL."
    exit 1
fi

# Add remote
echo "🔗 Adding remote repository..."
git remote add origin "$REPO_URL" 2>/dev/null || git remote set-url origin "$REPO_URL"

# Push to GitHub
echo "⬆️  Pushing to GitHub..."
git push -u origin main

echo ""
echo "✅ Blog pushed to GitHub!"
echo ""
echo "🌐 To enable GitHub Pages:"
echo "1. Go to your repository on GitHub"
echo "2. Click 'Settings' tab"
echo "3. Click 'Pages' in the left sidebar"
echo "4. Under 'Source', select 'main' branch"
echo "5. Click 'Save'"
echo ""
echo "Your blog will be live at: https://cairbresmith.github.io/blog/"
echo "(Replace 'cairbresmith' and 'blog' with your username and repo name)"
echo ""
