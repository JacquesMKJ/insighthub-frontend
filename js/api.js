// ─── Config ───────────────────────────────────────────────────
// Change this to your Render backend URL before deploying
const API_BASE = 'https://insighthub-backend.onrender.com/api';

// ─── Token helpers ────────────────────────────────────────────
const getToken = () => localStorage.getItem('ih_token');
const getUser = () => {
  const u = localStorage.getItem('ih_user');
  return u ? JSON.parse(u) : null;
};
const setAuth = (token, user) => {
  localStorage.setItem('ih_token', token);
  localStorage.setItem('ih_user', JSON.stringify(user));
};
const clearAuth = () => {
  localStorage.removeItem('ih_token');
  localStorage.removeItem('ih_user');
};
const isLoggedIn = () => !!getToken();
const isAdmin = () => { const u = getUser(); return u && u.role === 'admin'; };

// ─── Fetch wrapper ────────────────────────────────────────────
const api = async (path, options = {}) => {
  const token = getToken();
  const headers = { 'Content-Type': 'application/json', ...options.headers };
  if (token) headers['Authorization'] = `Bearer ${token}`;
  if (options.body instanceof FormData) delete headers['Content-Type'];

  const res = await fetch(`${API_BASE}${path}`, { ...options, headers });
  const data = await res.json().catch(() => ({}));

  if (!res.ok) throw new Error(data.error || `Error ${res.status}`);
  return data;
};

// ─── Navbar renderer ──────────────────────────────────────────
const renderNav = (activePage = '') => {
  const user = getUser();
  const navEl = document.getElementById('navbar');
  if (!navEl) return;

  const links = [
    { href: 'index.html', label: 'Browse' },
    ...(isLoggedIn() ? [
      { href: 'submit.html', label: 'Submit' },
      { href: 'profile.html', label: 'My Profile' },
    ] : []),
    ...(isAdmin() ? [{ href: 'admin.html', label: 'Admin' }] : []),
  ];

  navEl.innerHTML = `
    <nav class="navbar">
      <div class="nav-inner">
        <a href="index.html" class="nav-logo">Insight<span>Hub</span></a>
        <button class="hamburger" id="hamburger">☰</button>
        <div class="nav-links" id="navLinks">
          ${links.map(l => `
            <a href="${l.href}" class="${activePage === l.href ? 'active' : ''}">${l.label}</a>
          `).join('')}
          ${isLoggedIn()
            ? `<span class="nav-user">Hi, <strong>${user.name.split(' ')[0]}</strong></span>
               <button class="btn btn-sm btn-secondary" onclick="logout()">Log out</button>`
            : `<a href="login.html" class="btn-nav ${activePage === 'login.html' ? 'active' : ''}">Log in</a>
               <a href="register.html" class="btn btn-primary btn-sm">Sign up</a>`
          }
        </div>
      </div>
    </nav>`;

  document.getElementById('hamburger')?.addEventListener('click', () => {
    document.getElementById('navLinks').classList.toggle('open');
  });
};

// ─── Auth guards ──────────────────────────────────────────────
const requireLogin = () => {
  if (!isLoggedIn()) { window.location.href = 'login.html'; return false; }
  return true;
};
const requireAdmin = () => {
  if (!isAdmin()) { window.location.href = 'index.html'; return false; }
  return true;
};

// ─── Logout ───────────────────────────────────────────────────
const logout = () => { clearAuth(); window.location.href = 'index.html'; };

// ─── UI helpers ───────────────────────────────────────────────
const showAlert = (id, message, type = 'error') => {
  const el = document.getElementById(id);
  if (!el) return;
  el.className = `alert alert-${type} show`;
  el.textContent = message;
  setTimeout(() => el.classList.remove('show'), 5000);
};

const formatDate = (dateStr) => {
  return new Date(dateStr).toLocaleDateString('en-GB', {
    day: 'numeric', month: 'short', year: 'numeric'
  });
};

const badgeHTML = (status) => {
  return `<span class="badge badge-${status}">${status}</span>`;
};

const tagHTML = (arr) => {
  if (!arr || arr.length === 0) return '';
  return arr.map(t => `<span class="tag">${t}</span>`).join('');
};

const spinner = () => `<div class="loading-wrap"><div class="spinner"></div></div>`;

const emptyState = (icon, title, text, action = '') => `
  <div class="empty-state">
    <div class="empty-state-icon">${icon}</div>
    <h3>${title}</h3>
    <p>${text}</p>
    ${action}
  </div>`;
