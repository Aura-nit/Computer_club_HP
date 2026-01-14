export function Contact() {
  return `
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
  `;
}
