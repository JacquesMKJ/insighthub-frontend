# InsightHub — Frontend

> Academic Research and Capstone Repository for Academic City University

---

## 📌 Project Name
**InsightHub** — Academic Research and Capstone Repository

---

## 📖 Project Overview

InsightHub is a centralized digital platform for storing and exploring student research papers and capstone projects at Academic City University. It allows students to submit their academic work, discover projects from peers, bookmark favourites, leave comments, and contact project authors. An admin system ensures all submissions are reviewed before going public.

**Key Features:**
- Browse and search all approved research projects
- Filter by department, year, keywords, and technology
- Submit capstone projects with PDF upload
- Bookmark and save projects for later
- Comment and give feedback on projects
- Contact project authors directly
- Admin dashboard to approve, reject, edit, and delete submissions

---

## 🌐 Deployment Links

| Service | URL |
|---------|-----|
| 🖥️ Frontend (GitHub Pages) | https://jacquesmkj.github.io/insighthub-frontend/ |
| ⚙️ Backend (Render) | https://insighthub-backend-glsk.onrender.com |

---

## 🔐 Login Details

| Role | Email | Password |
|------|-------|----------|
| Student | testuser@acity.edu.gh | password123 |
| Admin | jacques.mawussi@acity.edu.gh | password123 |

---

## ✅ Feature Checklist

### 1. User Authentication and Project Submission
- ✅ Secure login and registration system (JWT)
- ✅ Students can submit projects with title
- ✅ Students can submit projects with abstract/description
- ✅ Students can submit projects with department
- ✅ Students can submit projects with supervisor
- ✅ Students can submit projects with year of completion
- ✅ File upload (PDF) supported
- ✅ Optional video/demo link supported

### 2. Project Discovery and Search
- ✅ Display list of all approved submitted projects
- ✅ Project preview shows title, author name, short description
- ✅ Search and filter by department
- ✅ Search and filter by year
- ✅ Search and filter by keywords/tags
- ✅ Search and filter by technology used

### 3. Project Details and Engagement
- ✅ Detailed page for each project
- ✅ Full project information displayed
- ✅ Logged-in users can save/bookmark projects
- ✅ Logged-in users can contact the author / request access
- ✅ Comments and feedback system

### 4. Admin Review and Approval System
- ✅ Submitted projects require review before publication
- ✅ Admin can approve submissions
- ✅ Admin can reject submissions
- ✅ Admin can edit project details
- ✅ Admin can remove/delete content
- ✅ Only approved projects visible to the public

---

## 🖥️ Installation Instructions (Run Locally)

### Prerequisites
- A local server (VS Code Live Server, Python, or Node)
- Backend must be running (see backend repo)

### Steps

**1. Clone the repository:**
```bash
git clone https://github.com/JacquesMKJ/insighthub-frontend.git
cd insighthub-frontend
```

**2. Update the API URL in `js/api.js`:**
```javascript
// For local development
const API_BASE = 'http://localhost:5000/api';

// For production (Render)
const API_BASE = 'https://insighthub-backend-glsk.onrender.com/api';
```

**3. Start a local server:**

Option A — VS Code Live Server:
- Right-click `index.html` → Open with Live Server

Option B — Python:
```bash
python3 -m http.server 3000
```
Then open: http://localhost:3000

Option C — Node.js:
```bash
npx serve .
```

**4. Open your browser and go to:**
```
http://localhost:3000
```

---

## 📁 File Structure

```
insighthub-frontend/
├── index.html        → Homepage — project feed with search & filters
├── login.html        → Login page
├── register.html     → Registration page
├── submit.html       → Submit a project (auth required)
├── project.html      → Single project detail page
├── profile.html      → My submissions, bookmarks, contact requests
├── admin.html        → Admin dashboard (admin role only)
├── css/
│   └── style.css     → All global styles
└── js/
    └── api.js        → API helper, auth utilities, shared UI functions
```

---

## 🛠️ Tech Stack

- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **Auth:** JWT (stored in localStorage)
- **Deployment:** GitHub Pages