export function NewsDetail(id) {
    // Mock data - in a real app this would fetch based on ID
    const newsData = {
        "1": {
            title: "新入生歓迎会のお知らせ",
            date: "2024.04.01",
            category: "Event",
            content: `
        <p>新入生の皆さん、入学おめでとうございます！</p>
        <p>コンピュータ同好会では、以下の日程で新入生歓迎会を行います。</p>
        <ul>
          <li>日時: 4月10日 (水) 16:30〜</li>
          <li>場所: 情報工学科棟 3F 演習室</li>
          <li>内容: 活動紹介、ゲーム大会、LT会</li>
        </ul>
        <p>興味のある方は、ぜひお気軽にお越しください。飛び入り参加も歓迎です！</p>
      `
        },
        "2": {
            title: "春休みプログラミング合宿を行いました",
            date: "2024.03.15",
            category: "Activity",
            content: `
        <p>3月10日から12日にかけて、2泊3日のプログラミング合宿を行いました。</p>
        <p>ハッカソン形式でチーム開発を行い、それぞれのチームがユニークなアプリケーションを開発しました。</p>
        <p>夜はBBQやボードゲームで盛り上がり、部員同士の親睦も深まりました。</p>
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
