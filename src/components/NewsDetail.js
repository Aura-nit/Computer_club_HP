export function NewsDetail(id) {
  // Mock data - in a real app this would fetch based on ID
  const newsData = {
    "1": {
      title: "Webサイトをリニューアルしました",
      date: "2026.01.14",
      category: "Update",
      content: `
        <p>コンピュータ同好会のサイトがリニューアルされました！</p>
      `
    },
    "2": {
      title: "高専プロコン全国大会in松江 に参加しました",
      date: "2025.10.12",
      category: "Activity",
      content: `
        <p>10月11日から12日にかけて，松江くにびきメッセにて高専プロコン全国大会が行われました．</p>
        <p>同好会からは3年生2名，4年生1名が競技部門に参加し，ラストワン決定戦へ出場しました．</p>
      `
    }
  };

  const article = newsData[id];

  if (!article) {
    return `
      <section class="section">
        <div class="container">
          <h2>Article Not Found</h2>
          <a href="#" class="btn btn-primary">Back to Home</a>
        </div>
      </section>
    `;
  }

  return `
    <section class="section news-detail-section">
      <div class="container">
        <a href="#" class="back-link">← Back to Home</a>
        <article class="news-article">
          <header class="article-header">
            <div class="article-meta">
              <span class="news-date">${article.date}</span>
              <span class="news-category badge-${article.category.toLowerCase()}">${article.category}</span>
            </div>
            <h1 class="article-title">${article.title}</h1>
          </header>
          <div class="article-content">
            ${article.content}
          </div>
        </article>
      </div>
    </section>
  `;
}
