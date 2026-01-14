export function ActivityDetail(id) {
    const activitiesData = {
        "programming": {
            title: "Programming",
            icon: "💻",
            content: `
            <p>Webアプリ、モバイルアプリ、ゲーム開発など、ソフトウェア開発の様々な分野に取り組んでいます。</p>
            <h3>最近のプロジェクト</h3>
            <ul>
                <li><strong>高専祭Webサイト:</strong> 毎年の高専祭のためのReact製Webアプリケーション。</li>
                <li><strong>Unityゲーム:</strong> 1年生が中心となって開発した3Dアクションゲーム。</li>
                <li><strong>CTFチーム:</strong> セキュリティコンテスト「Capture The Flag」への参加と勉強会。</li>
            </ul>
            <p>週に一度の定例会では、メンバー同士で知識を共有したり、チーム開発の進捗報告を行ったりしています。</p>
        `
        },
        "dtm": {
            title: "DTM (Desktop Music)",
            icon: "🎵",
            content: `
            <p>DTM班では、FL StudioやCubaseなどのDAWソフトを使ってオリジナル楽曲を制作しています。</p>
            <h3>活動内容</h3>
            <ul>
                <li>ゲーム制作班への楽曲・効果音の提供。</li>
                <li>「M3」などの同人音楽即売会でのアルバム頒布。</li>
                <li>部内での楽曲発表会・講評会。</li>
            </ul>
            <p>楽器経験がなくても大丈夫です!</p>
        `
        },
        "server": {
            title: "Server / Network",
            icon: "🌐",
            content: `
            <p>部室内のオンプレミスサーバーとネットワークインフラを学生自身で運用・管理しています。</p>
            <h3>インフラストラクチャ</h3>
            <ul>
                <li><strong>Proxmoxクラスタ:</strong> 部員の開発用VMやコンテナのホスティング基盤。</li>
                <li><strong>Webホスティング:</strong> 学生プロジェクトやポートフォリオサイトの公開。</li>
                <li><strong>ネットワークラボ:</strong> ルーティングやスイッチングの実践的な学習環境。</li>
            </ul>
            <p>インターネットがどのように動いているのか、実際に手を動かしながら学ぶことができます。</p>
        `
        }
    };

    const activity = activitiesData[id];

    if (!activity) {
        return `
      <section class="section">
        <div class="container">
          <h2>活動が見つかりません</h2>
          <a href="#" class="btn btn-primary">ホームに戻る</a>
        </div>
      </section>
    `;
    }

    return `
    <section class="section activity-detail-section">
      <div class="container">
        <a href="#" class="back-link">← ホームに戻る</a>
        <article class="activity-article">
          <header class="activity-header">
            <div class="activity-icon-large">${activity.icon}</div>
            <h1 class="activity-title">${activity.title}</h1>
          </header>
          <div class="activity-content">
            ${activity.content}
          </div>
        </article>
      </div>
    </section>
  `;
}
