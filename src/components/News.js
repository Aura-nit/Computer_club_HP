export function News() {
    const newsItems = [
        { id: "1", date: "2024.04.01", title: "新入生歓迎会のお知らせ", category: "Event" },
        { id: "2", date: "2024.03.15", title: "春休みプログラミング合宿を行いました", category: "Activity" },
        { id: "3", date: "2024.02.10", title: "Webサイトをリニューアルしました", category: "Update" },
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
