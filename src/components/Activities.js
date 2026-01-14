export function Activities() {
  const activities = [
    { id: "procon", title: "Kosen Procon", icon: "🏆", desc: "The Ultimate Challenge for Kosen Students.", featured: true },
    { id: "programming", title: "Programming", icon: "💻", desc: "Web, App, Game Development." },
    { id: "ai", title: "Artificial Intelligence", icon: "🤖", desc: "Machine Learning & Deep Learning." },
    { id: "algorithm", title: "Algorithms", icon: "🧩", desc: "Algorithm & Data Structures." },
  ];

  return `
    <section id="activities" class="section activities-section">
      <div class="container content-relative">
        <h2 class="section-title">Activities</h2>
        <div class="featured-activity-wrapper">
          ${activities.filter(act => act.featured).map(act => `
            <div class="activity-card featured">
              <div class="activity-icon">${act.icon}</div>
              <h3><a href="#activities/${act.id}">${act.title}</a></h3>
              <p>${act.desc}</p>
            </div>
          `).join('')}
        </div>
        <div class="activities-grid">
          ${activities.filter(act => !act.featured).map(act => `
            <div class="activity-card">
              <div class="activity-icon">${act.icon}</div>
              <h3><a href="#activities/${act.id}">${act.title}</a></h3>
              <p>${act.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}
