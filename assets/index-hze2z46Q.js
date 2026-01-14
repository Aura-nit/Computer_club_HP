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
        <h1 class="hero-title">
          <span class="glitch" data-text="Code">Code</span>
          <span class="glitch" data-text="Your">Your</span>
          <span class="glitch" data-text="Future">Future</span>
        </h1>
        <p class="hero-subtitle">米子高専コンピュータ同好会で、<br>新しい技術と仲間に出会おう。</p>
        <div class="hero-buttons">
          <a href="#about" class="btn btn-primary">About Us</a>
          <a href="#contact" class="btn btn-secondary">Join Us</a>
        </div>
      </div>
    </section>
  `}function C(){return`
    <section id="news" class="section news-section">
      <div class="container">
        <h2 class="section-title">News</h2>
        <div class="news-list">
          ${[{id:"1",date:"2024.04.01",title:"新入生歓迎会のお知らせ",category:"Event"},{id:"2",date:"2024.03.15",title:"春休みプログラミング合宿を行いました",category:"Activity"},{id:"3",date:"2024.02.10",title:"Webサイトをリニューアルしました",category:"Update"}].map(t=>`
            <article class="news-item">
              <span class="news-date">${t.date}</span>
              <span class="news-category badge-${t.category.toLowerCase()}">${t.category}</span>
              <h3 class="news-title"><a href="#news/${t.id}">${t.title}</a></h3>
            </article>
          `).join("")}
        </div>
      </div>
    </section>
  `}function P(s){const i={1:{title:"新入生歓迎会のお知らせ",date:"2024.04.01",category:"Event",content:`
        <p>新入生の皆さん、入学おめでとうございます！</p>
        <p>コンピュータ同好会では、以下の日程で新入生歓迎会を行います。</p>
        <ul>
          <li>日時: 4月10日 (水) 16:30〜</li>
          <li>場所: 情報工学科棟 3F 演習室</li>
          <li>内容: 活動紹介、ゲーム大会、LT会</li>
        </ul>
        <p>興味のある方は、ぜひお気軽にお越しください。飛び入り参加も歓迎です！</p>
      `},2:{title:"春休みプログラミング合宿を行いました",date:"2024.03.15",category:"Activity",content:`
        <p>3月10日から12日にかけて、2泊3日のプログラミング合宿を行いました。</p>
        <p>ハッカソン形式でチーム開発を行い、それぞれのチームがユニークなアプリケーションを開発しました。</p>
        <p>夜はBBQやボードゲームで盛り上がり、部員同士の親睦も深まりました。</p>
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
    `}function E(){return`
    <section id="about" class="section about-section">
      <div class="container">
        <h2 class="section-title">About Us</h2>
        <div class="about-content">
          <div class="about-text">
            <p>米子高専コンピュータ同好会は、プログラミング、DTM、サーバー管理など、コンピュータに関する様々な活動を行っている同好会です。</p>
            <p>学年・学科を問わず、興味のある学生が集まり、互いに技術を高め合っています。初心者も大歓迎です。</p>
          </div>
        </div>
      </div>
    </section>
  `}function F(){return`
    <section id="activities" class="section activities-section">
      <div class="container content-relative">
        <h2 class="section-title">Activities</h2>
        <div class="activities-grid">
          ${[{id:"programming",title:"Programming",icon:"💻",desc:"Web, App, Game Development."},{id:"dtm",title:"DTM",icon:"🎵",desc:"Desktop Music Production."},{id:"server",title:"Server / Network",icon:"🌐",desc:"Linux Server Administration."}].map(t=>`
            <div class="activity-card">
              <div class="activity-icon">${t.icon}</div>
              <h3><a href="#activities/${t.id}">${t.title}</a></h3>
              <p>${t.desc}</p>
            </div>
          `).join("")}
        </div>
      </div>
    </section>
  `}function N(s){const i={programming:{title:"Programming",icon:"💻",content:`
            <p>Webアプリ、モバイルアプリ、ゲーム開発など、ソフトウェア開発の様々な分野に取り組んでいます。</p>
            <h3>最近のプロジェクト</h3>
            <ul>
                <li><strong>高専祭Webサイト:</strong> 毎年の高専祭のためのReact製Webアプリケーション。</li>
                <li><strong>Unityゲーム:</strong> 1年生が中心となって開発した3Dアクションゲーム。</li>
                <li><strong>CTFチーム:</strong> セキュリティコンテスト「Capture The Flag」への参加と勉強会。</li>
            </ul>
            <p>週に一度の定例会では、メンバー同士で知識を共有したり、チーム開発の進捗報告を行ったりしています。</p>
        `},dtm:{title:"DTM (Desktop Music)",icon:"🎵",content:`
            <p>DTM班では、FL StudioやCubaseなどのDAWソフトを使ってオリジナル楽曲を制作しています。</p>
            <h3>活動内容</h3>
            <ul>
                <li>ゲーム制作班への楽曲・効果音の提供。</li>
                <li>「M3」などの同人音楽即売会でのアルバム頒布。</li>
                <li>部内での楽曲発表会・講評会。</li>
            </ul>
            <p>楽器経験がなくても大丈夫です!</p>
        `},server:{title:"Server / Network",icon:"🌐",content:`
            <p>部室内のオンプレミスサーバーとネットワークインフラを学生自身で運用・管理しています。</p>
            <h3>インフラストラクチャ</h3>
            <ul>
                <li><strong>Proxmoxクラスタ:</strong> 部員の開発用VMやコンテナのホスティング基盤。</li>
                <li><strong>Webホスティング:</strong> 学生プロジェクトやポートフォリオサイトの公開。</li>
                <li><strong>ネットワークラボ:</strong> ルーティングやスイッチングの実践的な学習環境。</li>
            </ul>
            <p>インターネットがどのように動いているのか、実際に手を動かしながら学ぶことができます。</p>
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
    `}function S(){return`
    <section id="contact" class="section contact-section">
      <div class="container text-center">
        <h2 class="section-title">Contact</h2>
        <p class="contact-text">興味を持たれた方は、ICTルームへお越しいただくか、以下の連絡先までお問い合わせください。</p>
        <a href="mailto:23002@yonago.kosen-ac.jp" class="btn btn-primary">Send Email</a>
      </div>
    </section>
  `}function f(){return`
    <footer class="site-footer">
      <div class="container footer-content">
        <p>&copy; ${new Date().getFullYear()} Yonago National College of Technology Computer Club. All rights reserved.</p>
      </div>
    </footer>
  `}function g(){return setTimeout(()=>{W()},100),`
    <canvas id="tech-particles"></canvas>
  `}function W(){const s=document.getElementById("tech-particles");if(!s)return;const t=s.getContext("2d");let i,o,e=[];const a=100,d=150,v=200;let r={x:null,y:null};function y(){i=s.width=window.innerWidth,o=s.height=window.innerHeight}class x{constructor(){this.x=Math.random()*i,this.y=Math.random()*o,this.vx=(Math.random()-.5)*1.5,this.vy=(Math.random()-.5)*1.5,this.size=Math.random()*2+1,this.color="#00ffff"}update(){if(this.x+=this.vx,this.y+=this.vy,(this.x<0||this.x>i)&&(this.vx*=-1),(this.y<0||this.y>o)&&(this.vy*=-1),r.x!=null){let c=this.x-r.x,h=this.y-r.y,l=Math.sqrt(c*c+h*h);if(l<v){const u=c/l,D=h/l,w=(v-l)/v,M=u*w*.5,A=D*w*.5;this.vx+=M,this.vy+=A}}}draw(){t.beginPath(),t.arc(this.x,this.y,this.size,0,Math.PI*2),t.fillStyle=this.color,t.fill()}}function L(){y(),e=[];for(let n=0;n<a;n++)e.push(new x)}function m(){t.clearRect(0,0,i,o);for(let n=0;n<e.length;n++)for(let c=n;c<e.length;c++){let h=e[n].x-e[c].x,l=e[n].y-e[c].y,u=Math.sqrt(h*h+l*l);u<d&&(t.beginPath(),t.strokeStyle=`rgba(0, 255, 255, ${1-u/d})`,t.lineWidth=1,t.moveTo(e[n].x,e[n].y),t.lineTo(e[c].x,e[c].y),t.stroke())}e.forEach(n=>{n.update(),n.draw()}),requestAnimationFrame(m)}window.addEventListener("resize",y),window.addEventListener("mousemove",n=>{r.x=n.x,r.y=n.y}),window.addEventListener("mouseleave",()=>{r.x=null,r.y=null}),L(),m()}function b(){const s=window.location.hash,t=document.querySelector("#app");if(s.startsWith("#news/")){const i=s.split("/")[1];t.innerHTML=`
      ${g()}
      <div class="content-wrapper">
        ${p()}
        <main>
          ${P(i)}
        </main>
        ${f()}
      </div>
    `,window.scrollTo(0,0)}else if(s.startsWith("#activities/")){const i=s.split("/")[1];t.innerHTML=`
      ${g()}
      <div class="content-wrapper">
        ${p()}
        <main>
          ${N(i)}
        </main>
        ${f()}
      </div>
    `,window.scrollTo(0,0)}else t.innerHTML=`
      ${g()}
      <div class="content-wrapper">
        ${p()}
        <main>
          ${T()}
          ${C()}
          ${E()}
          ${F()}
          ${S()}
        </main>
        ${f()}
      </div>
    `,setTimeout(()=>{document.querySelectorAll("section").forEach(i=>{i.classList.add("fade-in-section"),$.observe(i)})},100)}window.addEventListener("hashchange",b);window.addEventListener("load",b);const $=new IntersectionObserver(s=>{s.forEach(t=>{t.isIntersecting&&t.target.classList.add("visible")})},{threshold:.1});setTimeout(()=>{document.querySelectorAll("section").forEach(s=>{s.classList.add("fade-in-section"),$.observe(s)})},100);
