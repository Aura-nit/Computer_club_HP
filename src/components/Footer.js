export function Footer() {
    const year = new Date().getFullYear();
    return `
    <footer class="site-footer">
      <div class="container footer-content">
        <p>&copy; ${year} Yonago National College of Technology Computer Club. All rights reserved.</p>
      </div>
    </footer>
  `;
}
