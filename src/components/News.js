export function News() {
    const newsItems = [
        { id: "1", date: "2026.01.14", title: "Webサイトをリニューアルしました", category: "Update" },
        { id: "2", date: "2025.10.12", title: "高専プロコン全国大会に参加しました", category: "Activity" },
    ];

    return `
    <section id="news" class="section news-section">
      <div class="container">
        <h2 class="section-title">News</h2>
        <div class="news-list">
          ${newsItems.map(item => `
            <article class="news-item">
              <span class="news-date">${item.date}</span>
              <span class="news-category badge-${item.category.toLowerCase()}">${item.category}</span>
              <h3 class="news-title"><a href="#news/${item.id}">${item.title}</a></h3>
            </article>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}
