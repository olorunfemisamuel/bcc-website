<template>
  <footer class="partner-footer">
    <div class="footer-content">

      <!-- Logo Column -->
      <div class="footer-logo">
        <img src="@/assets/images/logo-image/logo.png" alt="Church Logo" class="footer-logo-img">
        <div class="footer-logo-text">
          <span class="footer-church-name">BELIEVERS CAVE<br>CONFERENCE</span>
        </div>
      </div>

      <!-- Links -->
      <div class="footer-links">

        <div class="footer-column">
          <ul class="footer-list">
            <li><a href="#host-section" class="footer-link footer-link-heading">The Lightfortress Church</a></li>
            <li><a href="https://www.instagram.com/thelightfortress?utm_source=ig_web_button_share_sheet&igsh=MWk1c3JwY3BpOWkxMQ==" class="footer-link">Believers Cave Conference</a></li>
          </ul>
        </div>

        <div class="footer-column">
          <ul class="footer-list">
            <li><a href="https://web.facebook.com/believerscaveconference" class="footer-link footer-link-heading">Facebook</a></li>
            <li><a href="https://www.instagram.com/believerscaveconference?utm_source=ig_web_button_share_sheet&igsh=MTd5OTJ6OGhtdWFoaA==" class="footer-link">Instagram</a></li>
          </ul>
        </div>

        <div class="footer-column">
          <ul class="footer-list">
            <li><a href="#" class="footer-link footer-link-heading">Camp Meeting</a></li>
            <li><a href="https://forms.gle/ztU1iaGkygpu22Tm8" class="footer-link">Merch</a></li>
            <li><a href="" class="footer-link">Camp Schedule</a></li>
            <li><a href="" class="footer-link">Get your DP</a></li>
          </ul>
        </div>

        <div class="footer-column">
          <ul class="footer-list">
            <li><a href="/" class="footer-link footer-link-heading">Home</a></li>
            <li><a href="https://forms.gle/fjgA26s9rX79xpTg6" class="footer-link">Register</a></li>
            <li><a href="give-page" class="footer-link">Give</a></li>
          </ul>
        </div>

        <div class="footer-column">
          <ul class="footer-list">
            <li class="footer-link footer-link-heading footer-address">Calvary International College, Ilekun, Oda Road, Akure.</li>
            <li><a href="https://mail.google.com/mail/?view=cm&fs=1&to=believerscaveconference@gmail.com" target="_blank" class="footer-link">believerscaveconference@gmail.com</a></li>
          </ul>
        </div>

      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="footer-bottom">
      <p>© 2025 Believers Cave Conference. All rights reserved.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterSection'
}
</script>

<style>
.partner-footer {
  background: linear-gradient(160deg, #5a0080 0%, #3a0060 60%, #1a0040 100%);
  color: white;
  padding: 3rem 4rem 0;
}

.footer-content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;
  padding-bottom: 3rem;
}

/* Logo */
.footer-logo {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.6rem;
  flex: 0 0 auto;
  min-width: 140px;
}

.footer-logo-img {
  width: 36px;
  height: auto;
}

.footer-church-name {
  font-weight: 800;
  font-size: 0.78rem;
  line-height: 1.4;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Links grid */
.footer-links {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 2rem;
  flex: 1;
}

.footer-column {
  text-align: left;
  min-width: 100px;
}

.footer-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.footer-link {
  color: rgba(255, 255, 255, 0.85);
  text-decoration: none;
  font-size: 0.85rem;
  line-height: 1.6;
  transition: color 0.3s;
}

.footer-link:hover {
  color: #f0c000;
}

.footer-link-heading {
  color: #ffffff;
  font-weight: 700;
  font-size: 0.9rem;
  margin-bottom: 0.3rem;
  display: block;
}

.footer-address {
  font-weight: 700;
  font-size: 0.9rem;
  color: #ffffff;
  line-height: 1.5;
  margin-bottom: 0.3rem;
}

/* Bottom bar */
.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  text-align: center;
  padding: 1.2rem 0;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.7);
}

/* Mobile */
@media (max-width: 768px) {
  .partner-footer {
    padding: 2rem 1.5rem 0;
  }

  .footer-content {
    flex-direction: column;
    gap: 2rem;
  }

  .footer-logo {
    justify-content: center;
  }

  .footer-links {
    flex-wrap: wrap;
    gap: 1.5rem;
  }

  .footer-column {
    min-width: calc(50% - 1rem);
  }
}
</style>