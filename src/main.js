import './style.css'
import { Header } from './components/Header.js'
import { Hero } from './components/Hero.js'
import { News } from './components/News.js'
import { NewsDetail } from './components/NewsDetail.js'
import { About } from './components/About.js'
import { Activities } from './components/Activities.js'
import { ActivityDetail } from './components/ActivityDetail.js'
import { Contact } from './components/Contact.js'
import { Footer } from './components/Footer.js'
import { Particles } from './components/Particles.js'

function renderPage() {
  const hash = window.location.hash;
  const app = document.querySelector('#app');

  // Router Logic
  if (hash.startsWith('#news/')) {
    const id = hash.split('/')[1];
    app.innerHTML = `
      ${Particles()}
      <div class="content-wrapper">
        ${Header()}
        <main>
          ${NewsDetail(id)}
        </main>
        ${Footer()}
      </div>
    `;
    window.scrollTo(0, 0);
  } else if (hash.startsWith('#activities/')) {
    const id = hash.split('/')[1];
    app.innerHTML = `
      ${Particles()}
      <div class="content-wrapper">
        ${Header()}
        <main>
          ${ActivityDetail(id)}
        </main>
        ${Footer()}
      </div>
    `;
    window.scrollTo(0, 0);
  } else {
    // Home Page
    app.innerHTML = `
      ${Particles()}
      <div class="content-wrapper">
        ${Header()}
        <main>
          ${Hero()}
          ${News()}
          ${About()}
          ${Activities()}
          ${Contact()}
        </main>
        ${Footer()}
      </div>
    `;

    // Re-run animation observer for home page
    setTimeout(() => {
      document.querySelectorAll('section').forEach(section => {
        section.classList.add('fade-in-section');
        observer.observe(section);
      });
    }, 100);
  }
}

// Handle navigation
window.addEventListener('hashchange', renderPage);
window.addEventListener('load', renderPage);

// Simple intersection observer for fade-in animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });


// Delay slightly to let DOM populate
setTimeout(() => {
  document.querySelectorAll('section').forEach(section => {
    section.classList.add('fade-in-section');
    observer.observe(section);
  });
}, 100);
