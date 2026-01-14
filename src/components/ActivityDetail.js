export function ActivityDetail(id) {
  const activitiesData = {
    "programming": {
      title: "Programming",
      icon: "💻",
      content: `
            <p>Webアプリ，モバイルアプリ，ゲーム開発など，ソフトウェア開発の様々な分野に取り組んでいます．</p>
            <h3>最近のプロジェクト</h3>
            <ul>
                <li><strong>同好会Webサイト:</strong> 米子高専同好会初となるWebアプリケーション．</li>
                <li><strong>Unityゲーム:</strong> 3年生が中心となって開発した3Dアクションゲーム．</li>
                <li><strong>CTF:</strong> セキュリティコンテスト「Capture The Flag」の勉強会．</li>
            </ul>
        `
    },
    "ai": {
      title: "Artificial Intelligence",
      icon: "🤖",
      content: `
            <p>PythonやPyTorchを用いて機械学習や深層学習（ディープラーニング）のモデル構築・学習を行っています．</p>
            <h3>活動内容</h3>
            <ul>
                <li>画像認識・強化学習モデルの作成と学習．</li>
                <li>最新のAI論文の輪読会と実装．</li>
            </ul>
            <p>数学や統計学の知識も身につけながら，最先端の技術に触れることができます．</p>
        `
    },
    "algorithm": {
      title: "Algorithms",
      icon: "🧩",
      content: `
            <p>アルゴリズム学習班では，効率的なプログラムを書くためのアルゴリズムやデータ構造を学び，競技プログラミングに取り組んでいます．</p>
            <h3>活動内容</h3>
            <ul>
                <li><strong>AtCoder:</strong> 毎週開催されるプログラミングコンテストへの参加と過去問演習．</li>
                <li><strong>アルゴリズム勉強会:</strong> 探索，動的計画法，グラフ理論などの基礎から応用まで．</li>
                <li><strong>ICPC:</strong> 国際大学対抗プログラミングコンテストへの挑戦．</li>
            </ul>
            <p>論理的思考力を鍛え，問題を効率的に解決する力を養います．</p>
        `
    },
    "procon": {
      title: "Kosen Procon",
      icon: "🏆",
      content: `
              <p>全国高等専門学校プログラミングコンテストは，全国の高専生が日頃の学習成果を活かし，情報技術（IT）におけるアイデアと実現力を競う大会です．</p>
              <p>米子高専コンピュータ同好会は，全国大会に連続で出場しています．</p>
              <h3>取り組み</h3>
              <ul>
                  <li><strong>課題部門:</strong> テーマに沿った作品を企画・開発し，プレゼンテーションを行います．</li>
                  <li><strong>自由部門:</strong> 自由な発想で独創的な作品を開発します．</li>
                  <li><strong>競技部門:</strong> 与えられたルールに基づく対抗戦で，アルゴリズムと戦略を競います．</li>
              </ul>
              <h3>実績</h3>
              <ul>
                  <li><strong>2025年:</strong> 競技部門-ラストワン決定戦出場</li>
                  <li><strong>2024年:</strong> 競技部門-準決勝出場</li>
              </ul>
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
