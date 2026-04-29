# InsightHub — Frontend

Plain HTML, CSS, and JavaScript frontend for the InsightHub Academic Research Repository.

## 📁 File Structure

```
frontend/
├── index.html        → Homepage — project feed with search & filters
├── login.html        → Login page
├── register.html     → Registration page
├── submit.html       → Submit a project (auth required)
├── project.html      → Single project detail, comments, bookmarks
├── profile.html      → My submissions, bookmarks, contact requests
├── admin.html        → Admin dashboard (admin role only)
├── css/
│   └── style.css     → All global styles
└── js/
    └── api.js        → API helper, auth utilities, shared UI functions
```

## ⚙️ Configuration (IMPORTANT)

```javascript
// js/api.js — line 2
const API_BASE = 'https://insighthub-backend-glsk.onrender.com/api';
```

## 🖥️ Running Locally

No build step needed — just open with a local server to avoid CORS issues with `fetch`:

```bash
# Option 1: VS Code Live Server extension (easiest)
# Right-click index.html → "Open with Live Server"

# Option 2: Python
python3 -m http.server 3000
# Then open http://localhost:3000

# Option 3: Node.js serve
npx serve .
```

## 🌐 Deployment (GitHub Pages)

1. Push this folder to a **public GitHub repository**
2. Go to **Settings → Pages**
3. Set Source: `Deploy from a branch` → `main` → `/ (root)`
4. Your site will be live at: `https://jacquesmkj.github.io/insighthub-frontend/`



## 🔐 Pages & Access

| Page | Public | Logged In | Admin Only |
|------|--------|-----------|------------|
| `index.html` | ✅ | ✅ | ✅ |
| `login.html` | ✅ | redirect | redirect |
| `register.html` | ✅ | redirect | redirect |
| `project.html` | ✅ (view only) | ✅ (+ bookmark, comment, contact) | ✅ |
| `submit.html` | redirect | ✅ | ✅ |
| `profile.html` | redirect | ✅ | ✅ |
| `admin.html` | redirect | redirect | ✅ |

## 🧪 Test Credentials (update after setup)

| Role | Email | Password |
|------|-------|----------|
| Student | testuser@acity.edu.gh | password123 |
| Admin | admin@acity.edu.gh | admin123 |
