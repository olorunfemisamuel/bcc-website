<template>
  <div class="home">
   
    <section class="hero">
      <div class="hero-background">
        <img src="@/assets/homepageimage.jpg" alt="Church gathering" class="hero-image">
      </div>
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <h1 class="hero-title">A PLACE OF ENCOUNTER, ALIGNMENT, AND FIRE</h1>
        <button class="hero-button" onclick="window.location.href='https://forms.gle/fjgA26s9rX79xpTg6'">Register</button>

      </div>
    </section>
    
    <!-- Content Section -->
    <section class="content-section">
      <div class="content-container">
        <div class="content-left">
          <h2 class="content-title">CELEBRATING THE GOSPEL, IGNITING PASSION FOR SOULS</h2>
        </div>
        <div class="content-right">
          <div class="content-text">
            <p class="content-description">
              <strong>Believers Cave Conference (BCC)</strong> is the annual Gospel camp meeting of <strong>The Lightfortress Church</strong>.
            </p>
            <p class="content-description">
              It is a sacred gathering of saints over several days, centred on the celebration of the Gospel and a stirring reminder of the Church's mission to win souls into God's Kingdom.
            </p>
            <p class="content-description">
              For six years and counting, <strong>BCC</strong> has remained a divine convergence where, under the ministry of Pastor Ibukun Ali, our lead pastor, the fire of ministry is rekindled in our hearts. Convictions are deepened through the sound preaching of God's Word and the mighty demonstration of the Spirit - both in us and among us.
            </p>
            <button class="content-button" onclick="window.location.href='https://forms.gle/fjgA26s9rX79xpTg6'">Register here</button>
          </div>
        </div>
      </div>
    </section>

 
    <section class="camp-wrapper">
    
      <div class="picture-section">
        <!-- Background Image -->
        <div class="picture-section-background">
          <img src="@/assets/BCC25-Main-Social-media-flyerArtboard-1-copy-3 1 (1).png" alt="Church gathering" class="picture-section-image">
        </div>

        <!-- Overlay -->
        <div class="picture-overlay"></div>

        <div class="picture-section-content">
          <h1 class="picture-section-title">BCC'25 IS HERE!</h1>
          <h3 class="picture-section-subtitle">This is the camp meeting you prayed about!</h3>
          <button class="picture-section-button" onclick="window.location.href='https://forms.gle/fjgA26s9rX79xpTg6'">Register here</button>
          <h4 class="picture-section-text">SIGHTS FROM LAST YEAR'S CAMP MEETING</h4>
        </div>
      </div>

      <!-- Camp Gallery Section -->
      <div class="camp-gallery">
        <div class="camp-gallery-overlay"></div>
        <div class="camp-gallery-images">
          <img src="@/assets/images/camp-gallery/Frame 2.png" alt="Camp Gallery" class="camp-gallery-image">
          <img src="@/assets/images/camp-gallery/Frame 3.png" alt="Camp Gallery" class="camp-gallery-image">
          <img src="@/assets/images/camp-gallery/Frame 8.png" alt="Camp Gallery" class="camp-gallery-image">
          <img src="@/assets/images/camp-gallery/Frame 5.png" alt="Camp Gallery" class="camp-gallery-image">
          <img src="@/assets/images/camp-gallery/Frame 7.png" alt="Camp Gallery" class="camp-gallery-image">
          <img src="@/assets/images/camp-gallery/Frame 11.png" alt="Camp Gallery" class="camp-gallery-image">
          <img src="@/assets/images/camp-gallery/Frame 9.png" alt="Camp Gallery" class="camp-gallery-image">
          <img src="@/assets/images/camp-gallery/Frame 10.png" alt="Camp Gallery" class="camp-gallery-image">
          <img src="@/assets/images/camp-gallery/Frame 12.png" alt="Camp Gallery" class="camp-gallery-image">
          <img src="@/assets/images/camp-gallery/Frame 13.png" alt="Camp Gallery" class="camp-gallery-image">
          <img src="@/assets/images/camp-gallery/Frame 14.png" alt="Camp Gallery" class="camp-gallery-image">
        </div>
      </div>
    </section>

    <!-- Host Section -->
    <section class="host-section" id="host-section">
      <div class="host-content">
        <div class="host-image">
          <a href="https://web.facebook.com/ibukun.ali.33" target="_blank" rel="noopener">
            <img src="@/assets/images/host-image/PASROR IBK 1.png" alt="Ibukun Ali - The Host">
          </a>
        </div>
        <div class="host-text">
          <h2>THE HOST</h2>
          <p>
            Ibukun Ali is a passionate minister of the Gospel with a divine mandate to reach the unsaved and unchurched through sound preaching and teaching. He serves as the lead pastor of The Lightfortress Church (TLC), a vibrant, Spirit-led assembly committed to the Great Commission.
          </p>
          <p>
            At TLC, he leads with clarity and fortify vision, hosting transformative gatherings such as the bimonthly Fortify Retreat, the annual Believers Cave Conference, and the annual Disciples Retreat all focused on kingdom advancement and raising an army unto the Lord.
          </p>
          <p>
            Alongside his pastoral work, Ibukun Ali is a sought-after speaker at conferences, gospel campaigns, and city-wide crusades. A dynamic leader, he firmly believes that every believer is called to be saved, to serve, and to partner in God's redemptive plan through the local church.
          </p>
        </div>
      </div>
    </section>

    <!-- Children Section -->
    <section class="children-section">
      <div class="container">
        <h1 class="title">THE CHILDREN ARE NOT LEFT OUT</h1>
        <p class="text">At Believers Conference 2025, provision has been made for the spiritual nourishment of children between the ages of 5 and 12. 
        This includes engaging activities, teachings, and interactions with the main conference attendees, all tailored, inspired, and impacted with a safe and 
        Spirit-led environment.</p>
      </div>
      <img src="@/assets/images/children-image/children.png" alt="Children Section Image" class="children-image">
    </section>

    <!-- Merch Section -->
     <MerchSection />
  

    <!-- Camp Schedule Section -->
  <camp-schedule />
    
<TestimonySection/>

 
<PartnerSection />
   

    
  </div>
</template>

<script setup>
import '@/assets/css/merch-style/merch.css';
import '@/assets/css/camp-schedule/camp-schedule.css';
import '@/assets/css/partner-style/partner.css';
import TestimonySection from '@/components/Testimony-section.vue';
import CampSchedule from '@/components/camp-schedule.vue';
import MerchSection from '@/components/MerchSection.vue'
import PartnerSection from '@/components/PartnerSection.vue';
</script>

<style scoped>
/* Hero Section */
.hero {
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden; 
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.hero-image {
  height: 100vh;
  width: 100%;
  object-fit: cover;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #24002D;
  opacity: 0.2;
  z-index: 2;
}

.hero-content {
  position: relative;
  z-index: 3;
  text-align: center;
  color: white;
  max-width: 800px;
  padding: 0 2rem;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 2rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.hero-button {
  background: #ffffff;
  color: #000000;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.hero-button:hover {
  background: #7C3AED;
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(139, 92, 246, 0.3);
}

/* Content Section */
.content-section {
  padding: 5rem 0;
  background: #f8f9fa;
}

.content-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  padding: 0 2rem;
}

.content-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.content-description {
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 2rem;
  line-height: 1.8;
}

.content-button {
  background: #8B5CF6;
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.content-button:hover {
  background: #7C3AED;
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(139, 92, 246, 0.3);
}

.content-image {
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

/*picture Section */
.picture-section {
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.picture-section-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.picture-section-image {
  height: 100vh;
  width: 100%;
  object-fit: cover;
}
.camp-wrapper {
  position: relative;
  overflow: hidden;
}

.picture-overlay {
  position: absolute;
  top: 40%;
  left: 0;
  width: 100%;
 height: 100vh;
  background: linear-gradient(
    to bottom,
    rgba(36, 0, 45, 0) 0%,
    rgba(36, 0, 45, 1) 20%
  );
  z-index: 2;
  pointer-events: none;
}
.picture-section,
.camp-gallery {
  position: relative;
  z-index: 2;
}

.picture-section-content {
  position: relative;
  z-index: 3;
  text-align: left;
  color: white;
  padding: 2rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
   align-items: center;
  text-align: center;
}

.picture-section-title {
  font-family: 'Impact', 'Arial Black', 'Bebas Neue', sans-serif;
  font-size: 3.5rem;
 font-weight: 550;
letter-spacing: 1px;
  line-height: 1.2;
  margin-top: 20rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  color: white;
}

.picture-section-subtitle {
   font-family: 'Arial', 'Helvetica', 'Open Sans', sans-serif;
   font-weight: 400;
  font-size: 1rem;
  letter-spacing: 0.5px;
  margin-bottom: 1rem;
  color: #D1D5DB;
}

.picture-section-text {
  font-family: 'Impact', 'Arial Black', 'Bebas Neue', sans-serif;
  font-size: 1.5rem;
  font-weight: 500;
  margin-top: 8rem;
  margin-bottom: 0;
  color: #D1D5DB;
  letter-spacing: 1px;
}

.picture-section-details {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 2rem;
  width: 100%;
}

.picture-section-date,
.picture-section-location {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.date-text,
.location-text {
  font-size: 1.2rem;
  font-weight: 600;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
}

.picture-section-location {
  text-align: right;
}

.picture-section-button {
  background: #ffffff;
  color: black;
  border: none;
  padding: 0.8rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  letter-spacing: 0.5px;
    align-self: center;
}

.picture-section-button:hover {
  background: #f0f0f0;
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

/* Camp Gallery Styles */
.camp-gallery {
  position: relative;
  width: 100%;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.camp-gallery-overlay {
  position: absolute;
  top: 0%;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: #24002D;
  pointer-events: none;
}

.camp-gallery-images {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 100%;
  padding: 2rem 0;
}

.camp-gallery-image {
  border-radius: 12px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  z-index: 2;
   width: 300px;
}

.camp-gallery-image:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  z-index: 3;
}

.camp-gallery > *:not(.camp-gallery-overlay) {
  position: relative;
  z-index: 2;
}

/* Host Section */
.host-section {
  background: #24002D;
  padding: 50px 20px;
  color: #fff;
}

.host-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 30px;
}

.host-image {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 350px;
  min-width: 220px;
  margin: 0 auto;       
}

.host-image:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  z-index: 3;
  transition: transform 0.3s ease, box-shadow 0.4s ease;
}

.host-image img {
  width: 100%;
  height: auto;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(36, 0, 45, 0.15);
  object-fit: cover;
  display: block;
}

.host-image img {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
}

.host-text {
  flex: 1;
}

.host-text h2 {
  font-size: 2em;
  margin-bottom: 20px;
}

.host-text p {
  font-size: 1em;
  line-height: 1.6;
  margin-bottom: 15px;
}

/*Children Section */
.children-section {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f5f5f5;
  padding: 20px;
  height: 200px;
}

.title {
  font-size: 48px;
  font-weight: bold;
  color: #2a2a72;
  text-transform: uppercase;
  margin: 0;
}

.text {
  max-width: 600px;
  color: #333;
  font-size: 1rem;
  font-weight: 900;
 
  letter-spacing: 0.05em;
  line-height: 1.4;
  font-family: 'Arial Black', 'Helvetica Bold Condensed', sans-serif;
  flex: 1;
}

.children-image {
  display: block;
  margin-bottom: 0;
  padding-bottom: 0;
  width: 100%;
  height: auto;
}

.merch-section {
  margin-top: 0;
  padding-top: 0;
}

/* Responsive Design */
@media (max-width: 768px) {
  .nav-menu {
    display: none;
  }
  
/* @media (max-width: 768px) {
  .hero {
    padding-top: 100px;
  }
} */ 


  .hero-title {
    font-size: 2.5rem;
  }
  
  .content-container {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .content-title {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .content-container {
    padding: 0 1rem;
  }
}

/* Make .host-content wrap on smaller screens */
@media (max-width: 992px) {
  .host-content {
    flex-direction: column;
    text-align: center;
  }

  .host-image {
    width: 100%;
    max-width: 300px;
  }

  .host-text {
    margin-top: 30px;
    text-align: left;
    padding: 0 10px;
  }

  .host-text h2 {
    font-size: 1.8em;
  }

  .host-text p {
    font-size: 0.95em;
  }
}

@media (max-width: 600px) {
  .host-text h2 {
    font-size: 1.5em;
  }

  .host-text p {
    font-size: 0.9em;
  }

  .host-section {
    padding: 40px 15px;
  }
}


/* ---------- Responsive Breakpoints ---------- */
@media (max-width: 1024px) {
  .container {
    flex-direction: column;
    text-align: center;
    height: auto;
    padding: 30px 15px;
  }

  .title {
    font-size: 2rem;
  }

  .text {
    max-width: 100%;
    font-size: 0.95rem;
    margin-bottom: 20px;
  }

  .children-image {
    max-width: 100%;
  }
}

@media (max-width: 600px) {
  .title {
    font-size: 1.5rem;
  }

  .text {
    font-size: 0.85rem;
    padding: 0 10px;
  }
}

</style>