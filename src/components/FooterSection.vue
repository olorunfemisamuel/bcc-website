<template>
<footer class="partner-footer">
    <div class="footer-content">
      <div class="footer-logo">
        <!-- <img src="@/assets/images/partner-image/golden-falling-coins-white 1.png" alt="Church Logo" class="footer-logo-img"> -->
        <div class="footer-logo-text">
          <span class="footer-church-name">BELIEVERS CAVE CONFERENCE</span>
        </div>
      </div>

      <div class="footer-links">
        <div class="footer-column">
          <h4 class="footer-column-title">The Lightfortress Church</h4>
          <ul class="footer-list">
            <li><a href="#host-section" class="footer-link">About Us</a></li>
            <li><a href="https://www.instagram.com/thelightfortress?utm_source=ig_web_button_share_sheet&igsh=MWk1c3JwY3BpOWkxMQ==" class="footer-link">Ministries</a></li>
          </ul>
        </div>

        <div class="footer-column">
          <h4 class="footer-column-title"></h4>
          <ul class="footer-list">
            <li><a href= "https://web.facebook.com/believerscaveconference" class="footer-link">Facebook</a></li>
            <li><a href="https://www.instagram.com/believerscaveconference?utm_source=ig_web_button_share_sheet&igsh=MTd5OTJ6OGhtdWFoaA==" class="footer-link">Instagram</a></li>
          </ul>
        </div>

        <div class="footer-column">
          <h4 class="footer-column-title">Camp Meeting</h4>
          <ul class="footer-list">
            <li><a href="https://forms.gle/ztU1iaGkygpu22Tm8" class="footer-link">Merch</a></li>
            <li><a href="" class="footer-link">Camp Schedule</a></li>
          </ul>
        </div>

        <div class="footer-column">
          <h4 class="footer-column-title"><a href= "/" class="footer-link">Home</a></h4>
          <ul class="footer-list">
            <li><a href="https://forms.gle/fjgA26s9rX79xpTg6" class="footer-link">Register</a></li>
            <li><a href="give-page" class="footer-link">Give</a></li>
          </ul>
        </div>

        <div class="footer-column">
          <h4 class="footer-column-title">Calvary International College, Oda Road Akure, Ondo State, Nigeria.</h4>
          <ul class="footer-list">
           <li><a href="https://mail.google.com/mail/?view=cm&fs=1&to=believerscaveconference@gmail.com" target="_blank" class="footer-link">believerscaveconference@gmail.com</a></li>
            <!-- <li><a href="#" class="footer-link">@gmail.com</a></li>  -->
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterSection'
}
</script>

<style >
.partner-footer {
  background-color: #8101C6; 
  color: white;
  padding: 2rem 1rem;
}

.footer-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.footer-logo {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.footer-logo-img {
  width: 100px;
  height: auto;
  margin-bottom: 0.5rem;
}

.footer-church-name {
  font-weight: bold;
  font-size: 1rem;
}

.footer-links {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.footer-column {
  text-align: center;
}

.footer-column-title {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  color: #FFFFFF; /* Optional color for headings */
}

.footer-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-link {
  color: white;
  text-decoration: none;
  display: block;
  margin: 0.25rem 0;
  transition: color 0.3s;
}

.footer-link:hover {
  color: #f0c000;
}

/* ===================== */
/* DESKTOP / TABLET STYLES */
/* ===================== */
@media (min-width: 768px) {
  .footer-content {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }

  .footer-logo {
    flex: 1;
    align-items: flex-start;
    text-align: left;
  }

  .footer-links {
    flex: 4;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 2rem;
  }

  .footer-column {
    text-align: left;
  }
}

</style>
