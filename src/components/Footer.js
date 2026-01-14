import QRCode from 'qrcode';

export function Footer() {
    const year = new Date().getFullYear();

    // Wait for DOM to handle events
    setTimeout(() => {
        const btn = document.getElementById('show-qr-btn');
        const canvas = document.getElementById('qr-canvas');
        if (btn && canvas) {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const url = window.location.href;
                QRCode.toCanvas(canvas, url, {
                    width: 200,
                    color: {
                        dark: '#00ffff',
                        light: '#00000000'
                    }
                }, function (error) {
                    if (error) console.error(error)
                    canvas.style.display = 'block';
                    btn.style.display = 'none';
                })
            });
        }
    }, 500);

    return `
    <footer class="site-footer">
      <div class="container footer-content">
        <p>&copy; ${year} Yonago National College of Technology Computer Club. All rights reserved.</p>
        <div class="footer-actions">
            <a href="#" id="show-qr-btn" class="footer-link">Show Page QR Code</a>
            <canvas id="qr-canvas" style="display:none; margin: 0 auto;"></canvas>
        </div>
      </div>
    </footer>
  `;
}
