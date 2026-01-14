(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function i(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(e){if(e.ep)return;e.ep=!0;const a=i(e);fetch(e.href,a)}})();function p(){return`
    <header class="site-header">
      <div class="container header-content">
        <a href="#" class="logo">
          <span class="logo-jp">米子高専</span>
          <span class="logo-en">Computer Club</span>
        </a>
        <nav class="main-nav">
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#news">News</a></li>
            <li><a href="#activities">Activities</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  `}function T(){return`
    <section class="hero-section">
      <div class="container hero-content">
        <p class="hero-club-name">米子高専コンピュータ同好会</p>
        <h1 class="hero-title">
          <span class="glitch" data-text="Code">Code</span>
          <span class="glitch" data-text="Your">Your</span>
          <span class="glitch" data-text="Future">Future</span>
        </h1>
        <div class="hero-subtitle-wrapper fade-in-up">
          <p class="hero-subtitle-en">Unlock Your Potential with Code & Creativity.</p>
          <p class="hero-subtitle-jp">新しい技術と仲間に出会う，クリエイティブな空間．</p>
        </div>
        <div class="hero-buttons">
          <a href="#about" class="btn btn-primary">About Us</a>
          <a href="#contact" class="btn btn-secondary">Join Us</a>
        </div>
      </div>
    </section>
  `}function D(){return`
    <section id="news" class="section news-section">
      <div class="container">
        <h2 class="section-title">News</h2>
        <div class="news-list">
          ${[{id:"1",date:"2026.01.14",title:"Webサイトをリニューアルしました",category:"Update"},{id:"2",date:"2025.10.12",title:"高専プロコン全国大会に参加しました",category:"Activity"}].map(t=>`
            <article class="news-item">
              <span class="news-date">${t.date}</span>
              <span class="news-category badge-${t.category.toLowerCase()}">${t.category}</span>
              <h3 class="news-title"><a href="#news/${t.id}">${t.title}</a></h3>
            </article>
          `).join("")}
        </div>
      </div>
    </section>
  `}function I(s){const i={1:{title:"Webサイトをリニューアルしました",date:"2026.01.14",category:"Update",content:`
        <p>コンピュータ同好会のサイトがリニューアルされました！</p>
      `},2:{title:"高専プロコン全国大会in松江 に参加しました",date:"2025.10.12",category:"Activity",content:`
        <p>10月11日から12日にかけて，松江くにびきメッセにて高専プロコン全国大会が行われました．</p>
        <p>同好会からは3年生2名，4年生1名が競技部門に参加し，ラストワン決定戦へ出場しました．</p>
      `}}[s];return i?`
    <section class="section news-detail-section">
      <div class="container">
        <a href="#" class="back-link">← Back to Home</a>
        <article class="news-article">
          <header class="article-header">
            <div class="article-meta">
              <span class="news-date">${i.date}</span>
              <span class="news-category badge-${i.category.toLowerCase()}">${i.category}</span>
            </div>
            <h1 class="article-title">${i.title}</h1>
          </header>
          <div class="article-content">
            ${i.content}
          </div>
        </article>
      </div>
    </section>
  `:`
      <section class="section">
        <div class="container">
          <h2>Article Not Found</h2>
          <a href="#" class="btn btn-primary">Back to Home</a>
        </div>
      </section>
    `}function M(){return`
    <section id="about" class="section about-section">
      <div class="container">
        <h2 class="section-title">About Us</h2>
        <div class="about-content">
          <div class="about-text">
            <p>米子高専コンピュータ同好会は，プログラミング，人工知能学習，アルゴリズムの学習など，<br>コンピュータに関する様々な活動を行っている同好会です．</p>
            <p>学年・コースを問わず，興味のある学生が集まり，互いに技術を高め合っています．初心者も大歓迎です．</p>
          </div>
        </div>
      </div>
    </section>
  `}function E(){const s=[{id:"procon",title:"Kosen Procon",icon:"🏆",desc:"The Ultimate Challenge for Kosen Students.",featured:!0},{id:"programming",title:"Programming",icon:"💻",desc:"Web, App, Game Development."},{id:"ai",title:"Artificial Intelligence",icon:"🤖",desc:"Machine Learning & Deep Learning."},{id:"algorithm",title:"Algorithms",icon:"🧩",desc:"Algorithm & Data Structures."}];return`
    <section id="activities" class="section activities-section">
      <div class="container content-relative">
        <h2 class="section-title">Activities</h2>
        <div class="featured-activity-wrapper">
          ${s.filter(t=>t.featured).map(t=>`
            <div class="activity-card featured">
              <div class="activity-icon">${t.icon}</div>
              <h3><a href="#activities/${t.id}">${t.title}</a></h3>
              <p>${t.desc}</p>
            </div>
          `).join("")}
        </div>
        <div class="activities-grid">
          ${s.filter(t=>!t.featured).map(t=>`
            <div class="activity-card">
              <div class="activity-icon">${t.icon}</div>
              <h3><a href="#activities/${t.id}">${t.title}</a></h3>
              <p>${t.desc}</p>
            </div>
          `).join("")}
        </div>
      </div>
    </section>
  `}function W(s){const i={programming:{title:"Programming",icon:"💻",content:`
            <p>Webアプリ，モバイルアプリ，ゲーム開発など，ソフトウェア開発の様々な分野に取り組んでいます．</p>
            <h3>最近のプロジェクト</h3>
            <ul>
                <li><strong>同好会Webサイト:</strong> 米子高専同好会初となるWebアプリケーション．</li>
                <li><strong>Unityゲーム:</strong> 3年生が中心となって開発した3Dアクションゲーム．</li>
                <li><strong>CTF:</strong> セキュリティコンテスト「Capture The Flag」の勉強会．</li>
            </ul>
        `},ai:{title:"Artificial Intelligence",icon:"🤖",content:`
            <p>PythonやPyTorchを用いて機械学習や深層学習（ディープラーニング）のモデル構築・学習を行っています．</p>
            <h3>活動内容</h3>
            <ul>
                <li>画像認識・強化学習モデルの作成と学習．</li>
                <li>最新のAI論文の輪読会と実装．</li>
            </ul>
            <p>数学や統計学の知識も身につけながら，最先端の技術に触れることができます．</p>
        `},algorithm:{title:"Algorithms",icon:"🧩",content:`
            <p>アルゴリズム学習班では，効率的なプログラムを書くためのアルゴリズムやデータ構造を学び，競技プログラミングに取り組んでいます．</p>
            <h3>活動内容</h3>
            <ul>
                <li><strong>AtCoder:</strong> 毎週開催されるプログラミングコンテストへの参加と過去問演習．</li>
                <li><strong>アルゴリズム勉強会:</strong> 探索，動的計画法，グラフ理論などの基礎から応用まで．</li>
                <li><strong>ICPC:</strong> 国際大学対抗プログラミングコンテストへの挑戦．</li>
            </ul>
            <p>論理的思考力を鍛え，問題を効率的に解決する力を養います．</p>
        `},procon:{title:"Kosen Procon",icon:"🏆",content:`
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
          `}}[s];return i?`
    <section class="section activity-detail-section">
      <div class="container">
        <a href="#" class="back-link">← ホームに戻る</a>
        <article class="activity-article">
          <header class="activity-header">
            <div class="activity-icon-large">${i.icon}</div>
            <h1 class="activity-title">${i.title}</h1>
          </header>
          <div class="activity-content">
            ${i.content}
          </div>
        </article>
      </div>
    </section>
  `:`
      <section class="section">
        <div class="container">
          <h2>活動が見つかりません</h2>
          <a href="#" class="btn btn-primary">ホームに戻る</a>
        </div>
      </section>
    `}function F(){return`
    <section id="contact" class="section contact-section">
      <div class="container text-center">
        <h2 class="section-title">Contact</h2>
        <div class="contact-info-card">
            <dl class="contact-details">
                <div class="contact-item">
                    <dt>📍 Location</dt>
                    <dd>ICTルーム@Jコース棟2階</dd>
                </div>
                <div class="contact-item">
                    <dt>📅 Days</dt>
                    <dd>月・木</dd>
                </div>
                <div class="contact-item">
                    <dt>⏰ Time</dt>
                    <dd>16:00 ~ </dd>
                </div>
                <div class="contact-item">
                    <dt>👤 Leader</dt>
                    <dd>3J-秋田</dd>
                </div>
            </dl>
        </div>
        <p class="contact-text">興味を持たれた方は，ICTルームへお越しいただくか，<br>以下の連絡先までお問い合わせください．</p>
        <a href="mailto:23002@yonago.kosen-ac.jp" class="btn btn-primary">Send Email</a>
      </div>
    </section>
  `}function f(){return`
    <footer class="site-footer">
      <div class="container footer-content">
        <p>&copy; ${new Date().getFullYear()} Yonago National College of Technology Computer Club. All rights reserved.</p>
      </div>
    </footer>
  `}function g(){return setTimeout(()=>{N()},100),`
    <canvas id="tech-particles"></canvas>
  `}function N(){const s=document.getElementById("tech-particles");if(!s)return;const t=s.getContext("2d");let i,o,e=[];const a=100,d=150,v=200;let r={x:null,y:null};function m(){i=s.width=window.innerWidth,o=s.height=window.innerHeight}class x{constructor(){this.x=Math.random()*i,this.y=Math.random()*o,this.vx=(Math.random()-.5)*1.5,this.vy=(Math.random()-.5)*1.5,this.size=Math.random()*2+1,this.color="#00ffff"}update(){if(this.x+=this.vx,this.y+=this.vy,(this.x<0||this.x>i)&&(this.vx*=-1),(this.y<0||this.y>o)&&(this.vy*=-1),r.x!=null){let c=this.x-r.x,h=this.y-r.y,l=Math.sqrt(c*c+h*h);if(l<v){const u=c/l,C=h/l,w=(v-l)/v,L=u*w*.5,P=C*w*.5;this.vx+=L,this.vy+=P}}}draw(){t.beginPath(),t.arc(this.x,this.y,this.size,0,Math.PI*2),t.fillStyle=this.color,t.fill()}}function A(){m(),e=[];for(let n=0;n<a;n++)e.push(new x)}function y(){t.clearRect(0,0,i,o);for(let n=0;n<e.length;n++)for(let c=n;c<e.length;c++){let h=e[n].x-e[c].x,l=e[n].y-e[c].y,u=Math.sqrt(h*h+l*l);u<d&&(t.beginPath(),t.strokeStyle=`rgba(0, 255, 255, ${1-u/d})`,t.lineWidth=1,t.moveTo(e[n].x,e[n].y),t.lineTo(e[c].x,e[c].y),t.stroke())}e.forEach(n=>{n.update(),n.draw()}),requestAnimationFrame(y)}window.addEventListener("resize",m),window.addEventListener("mousemove",n=>{r.x=n.x,r.y=n.y}),window.addEventListener("mouseleave",()=>{r.x=null,r.y=null}),A(),y()}function b(){const s=window.location.hash,t=document.querySelector("#app");if(s.startsWith("#news/")){const i=s.split("/")[1];t.innerHTML=`
      ${g()}
      <div class="content-wrapper">
        ${p()}
        <main>
          ${I(i)}
        </main>
        ${f()}
      </div>
    `,window.scrollTo(0,0)}else if(s.startsWith("#activities/")){const i=s.split("/")[1];t.innerHTML=`
      ${g()}
      <div class="content-wrapper">
        ${p()}
        <main>
          ${W(i)}
        </main>
        ${f()}
      </div>
    `,window.scrollTo(0,0)}else t.innerHTML=`
      ${g()}
      <div class="content-wrapper">
        ${p()}
        <main>
          ${T()}
          ${D()}
          ${M()}
          ${E()}
          ${F()}
        </main>
        ${f()}
      </div>
    `,setTimeout(()=>{document.querySelectorAll("section").forEach(i=>{i.classList.add("fade-in-section"),$.observe(i)})},100)}window.addEventListener("hashchange",b);window.addEventListener("load",b);const $=new IntersectionObserver(s=>{s.forEach(t=>{t.isIntersecting&&t.target.classList.add("visible")})},{threshold:.1});setTimeout(()=>{document.querySelectorAll("section").forEach(s=>{s.classList.add("fade-in-section"),$.observe(s)})},100);
