// ===========================
// State Management
// ===========================
let posts = [];
let currentFilter = 'all';

// ===========================
// Sample Data
// ===========================
const samplePosts = [
    {
        id: 1,
        title: "Embracing Simplicity in Design",
        category: "ideas",
        date: "2026-08-07",
        content: "There's something beautiful about minimalist design. It's not about having less—it's about making room for more of what matters. This week, I've been exploring how constraint breeds creativity.",
        tags: ["design", "minimalism", "philosophy"]
    },
    {
        id: 2,
        title: "Weekend Project: CLI Tool",
        category: "tech",
        date: "2026-08-06",
        content: "Built a simple command-line tool for managing daily notes. Used Go for speed and simplicity. The whole thing is under 200 lines of code. Sometimes the best tools are the ones you build yourself. Code available at <code>github.com/example/notes</code>",
        tags: ["golang", "cli", "productivity"]
    },
    {
        id: 3,
        title: "Sunset at Baker Beach",
        category: "snapshots",
        date: "2026-08-05",
        content: "Caught the golden hour yesterday. The fog was rolling in over the Golden Gate Bridge, creating this ethereal layer between the city and the ocean. These moments remind me why I love living here.",
        tags: ["photography", "san-francisco", "nature"]
    },
    {
        id: 4,
        title: "The Power of Weekly Reflection",
        category: "ideas",
        date: "2026-08-04",
        content: "Started a new practice: every Sunday evening, I write down three things I learned that week. It's forcing me to pay attention differently throughout the week. Already noticing patterns I wouldn't have seen otherwise.",
        tags: ["reflection", "learning", "habits"]
    },
    {
        id: 5,
        title: "Exploring Web Components",
        category: "tech",
        date: "2026-08-03",
        content: "Spent some time with native Web Components this week. No frameworks, just vanilla JavaScript and the platform. The API is surprisingly clean. Here's a simple example of a custom element that actually works everywhere.",
        tags: ["javascript", "web-components", "frontend"]
    },
    {
        id: 6,
        title: "Coffee Notes: Ethiopia Yirgacheffe",
        category: "snapshots",
        date: "2026-08-02",
        content: "Tasting notes from this morning's brew: bright citrus, floral jasmine, subtle honey sweetness. Temperature: 200°F. Ratio: 1:16. Bloom: 45s. Total time: 3:30. The ritual matters as much as the coffee.",
        tags: ["coffee", "ritual", "notes"]
    },
    {
        id: 7,
        title: "On Digital Minimalism",
        category: "ideas",
        date: "2026-08-01",
        content: "Deleted three apps from my phone this week. Turns out I don't miss them. The space left behind feels more valuable than what was there. Digital minimalism isn't about deprivation—it's about intentionality.",
        tags: ["minimalism", "digital", "intentionality"]
    }
];

// ===========================
// Initialization
// ===========================
document.addEventListener('DOMContentLoaded', () => {
    initializeTheme();
    loadPosts();
    renderPosts();
    attachEventListeners();
    updateYear();
});

// ===========================
// Theme Management
// ===========================
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

// ===========================
// Data Management
// ===========================
function loadPosts() {
    const savedPosts = localStorage.getItem('blogPosts');
    if (savedPosts) {
        posts = JSON.parse(savedPosts);
    } else {
        posts = samplePosts;
        savePosts();
    }
}

function savePosts() {
    localStorage.setItem('blogPosts', JSON.stringify(posts));
}

function addPost(postData) {
    const newPost = {
        id: Date.now(),
        title: postData.title,
        category: postData.category,
        date: new Date().toISOString().split('T')[0],
        content: postData.content,
        tags: postData.tags.split(',').map(tag => tag.trim()).filter(tag => tag)
    };
    
    posts.unshift(newPost);
    savePosts();
    return newPost;
}

// ===========================
// Rendering
// ===========================
function renderPosts() {
    const container = document.getElementById('posts-container');
    const filteredPosts = currentFilter === 'all' 
        ? posts 
        : posts.filter(post => post.category === currentFilter);
    
    if (filteredPosts.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <h3>No posts yet</h3>
                <p>Be the first to share something!</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = filteredPosts.map(post => createPostHTML(post)).join('');
}

function createPostHTML(post) {
    const formattedDate = formatDate(post.date);
    const tagsHTML = post.tags.map(tag => `<span class="tag">#${tag}</span>`).join('');
    
    return `
        <article class="post" data-category="${post.category}">
            <div class="post-header">
                <div>
                    <h2 class="post-title">${escapeHTML(post.title)}</h2>
                    <div class="post-meta">
                        <span class="post-date">${formattedDate}</span>
                        <span class="post-category ${post.category}">${post.category}</span>
                    </div>
                </div>
            </div>
            <div class="post-content">
                <p>${processContent(post.content)}</p>
            </div>
            ${post.tags.length > 0 ? `<div class="post-tags">${tagsHTML}</div>` : ''}
        </article>
    `;
}

// ===========================
// Event Listeners
// ===========================
function attachEventListeners() {
    // Navigation filter
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const filter = link.getAttribute('data-filter');
            
            if (filter === 'submit') {
                showSubmitForm();
            } else {
                setFilter(filter);
            }
            
            // Update active state
            document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
            link.classList.add('active');
        });
    });
    
    // Form submission
    const form = document.getElementById('update-form');
    form.addEventListener('submit', handleFormSubmit);
    
    // Theme toggle
    document.getElementById('theme-toggle').addEventListener('click', (e) => {
        e.preventDefault();
        toggleTheme();
    });
}

function setFilter(filter) {
    currentFilter = filter;
    showAllPosts();
    renderPosts();
}

function showSubmitForm() {
    document.getElementById('submit-section').classList.remove('hidden');
    document.getElementById('posts-container').classList.add('hidden');
}

function showAllPosts() {
    document.getElementById('submit-section').classList.add('hidden');
    document.getElementById('posts-container').classList.remove('hidden');
}

function handleFormSubmit(e) {
    e.preventDefault();
    
    const formData = {
        title: document.getElementById('title').value,
        category: document.getElementById('category').value,
        content: document.getElementById('content-input').value,
        tags: document.getElementById('tags').value
    };
    
    addPost(formData);
    
    // Reset form
    e.target.reset();
    
    // Switch back to all posts view
    currentFilter = 'all';
    document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
    document.querySelector('nav a[data-filter="all"]').classList.add('active');
    showAllPosts();
    renderPosts();
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===========================
// Utility Functions
// ===========================
function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}.${month}.${day}`;
}

function escapeHTML(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function processContent(content) {
    // Allow code tags to pass through
    return content.replace(/<code>(.*?)<\/code>/g, '<code>$1</code>');
}

function updateYear() {
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// ===========================
// Export functions for inline use
// ===========================
window.showAllPosts = showAllPosts;
window.toggleTheme = toggleTheme;
