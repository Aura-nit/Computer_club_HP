export function Activities() {
    const activities = [
        { id: "programming", title: "Programming", icon: "💻", desc: "Web, App, Game Development." },
        { id: "dtm", title: "DTM", icon: "🎵", desc: "Desktop Music Production." },
        { id: "server", title: "Server / Network", icon: "🌐", desc: "Linux Server Administration." },
    ];

    return `
    <section id="activities" class="section activities-section">
      <div class="container content-relative">
        <h2 class="section-title">Activities</h2>
        <div class="activities-grid">
          ${activities.map(act => `
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
