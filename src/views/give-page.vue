<template>
  <div class="give-page">
    <!-- Hero Section -->
    <section class="give-hero">
      <div class="give-hero-background">
        <img src="@/assets/images/give-image/IMG_2817 1.png" alt="Woman in colorful clothing" class="give-hero-image">
      </div>
      <div class="give-hero-overlay"></div>
      <div class="give-hero-content">
        <h1 class="give-hero-title">
          YOUR GENEROSITY MAKES<br>
          <span class="purple-text">OUR WORK EASIER.</span>
        </h1>
        <button class="give-hero-button"  onclick="document.getElementById('give-partner').scrollIntoView({ behavior: 'smooth' });">
  Give here
</button>

      </div>
    </section>

    <!-- Additional Content Section -->
    <section class="give-content">
      <div class="give-container">
        <h2 class="give-section-title" id="give-partner">PARTNER WITH US</h2>
        <p class="styled-paragraph">
          We invite you to partner with us in advancing the Gospel through the Believers Cave Conference (BCC)
          and the ongoing work of ministry at The Lightfortress Church.
        </p>
      </div>
    </section>

    <!-- Banking Details Section -->
    <section class="banking-section">
      <div class="banking-container">
        <!-- Account Type Tabs -->
        <div class="account-tabs">
          <button class="tab-button" :class="{ active: activeTab === 'naira' }"
            @click="setTab('naira')">Naira Account</button>
          <button class="tab-button" :class="{ active: activeTab === 'dom' }"
            @click="setTab('dom')">Domiciliary Account</button>
        </div>

        <!-- Naira Banking Details -->
        <div class="banking-card" v-if="activeTab === 'naira'">
          <div class="bank-details">
            <div class="bank-section">
              <h3 class="bank-name">United Bank of Africa (UBA)</h3>
              <div class="account-info">
                <span class="account-label">Believers Cave Conference</span>
                <div class="account-number-container">
                  <span class="account-number">2289475999</span>
                  <button class="copy-button" @click="copyToClipboard('2289475999')">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div class="bank-section">
              <h3 class="bank-name">Sterling Bank</h3>
              <div class="account-info">
                <span class="account-label">The Light Fortress Church</span>
                <div class="account-number-container">
                  <span class="account-number">0121957820</span>
                  <button class="copy-button" @click="copyToClipboard('0121957820')">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Domiciliary Banking Details -->
        <div class="banking-card" v-if="activeTab === 'dom'">
          <div class="bank-details">
            <div class="bank-section">
              <h3 class="bank-name">Sterling Bank</h3>
              <div class="account-info">
                <span class="account-label">Pounds (GBP) Domiciliary Account</span>
                <div class="account-number-container">
                  <span class="account-number">0123165713</span>
                  <button class="copy-button" @click="copyToClipboard('0123165713')">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div class="bank-section">
              <h3 class="bank-name">Sterling Bank</h3>
              <div class="account-info">
                <span class="account-label">USD Domiciliary Account</span>
                <div class="account-number-container">
                  <span class="account-number">0123164929</span>
                  <button class="copy-button" @click="copyToClipboard('0123164929')">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Bottom Section -->
        <div class="bottom-section">
          <h3 class="bottom-title">WHAT DO WE DO WITH YOUR GIVINGS?</h3>
          <p class="styled-paragraph">
          We invite you to partner with us in advancing the Gospel through the Believers Cave Conference (BCC)
          and the ongoing work of ministry at The Lightfortress Church.
        </p>
        </div>
      </div>
    </section>

    <!-- Impact Section -->
    <div>
      <img src="@/assets/images/give-image/IMG_2785 (1) 1.png" alt="Impact Image" class="impact-image">
    </div>
  </div>

  <!---Merch Section-->
  <MerchSection />

  <!---Camp-Schedule-->
  <camp-schedule />

  <!---Testimony Section-->
  <TestimonySection/>

  <!--Partner Section -->
  <PartnerSection />

</template>

<script setup>
import { ref } from 'vue'

const activeTab = ref('naira')

const setTab = (tab) => {
  activeTab.value = tab
}

const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text)
}

import MerchSection from '@/components/MerchSection.vue'
import CampSchedule from '@/components/camp-schedule.vue'
import TestimonySection from '@/components/Testimony-section.vue';
import PartnerSection from '@/components/PartnerSection.vue'

</script>

<style scoped>
/* Give Page Styles */
.give-page {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.6;
}

/* Hero Section */
.give-hero {
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  z-index: 1;
}

.give-hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.give-hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  background-repeat: no-repeat;
  background-attachment: local;
}

.give-hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(36, 0, 45, 0.7) 0%,
    rgba(139, 92, 246, 0.3) 50%,
    rgba(36, 0, 45, 0.8) 100%
  );
  z-index: 2;
}

.give-hero-content {
  position: relative;
  z-index: 3;
  text-align: center;
  color: white;
  max-width: 800px;
  padding: 0 2rem;
}

.give-hero-title {
  font-size: 4rem;
  font-weight: 900;
  line-height: 1.1;
  margin-bottom: 2.5rem;
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.7);
  letter-spacing: -0.02em;
  text-transform: uppercase;
}

.purple-text {
  color: #C084FC;
  text-shadow: 3px 3px 6px rgba(192, 132, 252, 0.5);
}

.give-hero-button {
  background: #ffffff;
  color: #24002D;
  border: none;
  padding: 1.2rem 3rem;
  font-size: 1.2rem;
  font-weight: 700;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
}

.give-hero-button:hover {
  background: #C084FC;
  color: white;
  transform: translateY(-3px);
  box-shadow: 0 12px 32px rgba(192, 132, 252, 0.4);
}

/* Content Section */
.give-content {
  padding: 6rem 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  position: relative;
  z-index: 10;
}

.give-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
}

.give-section-title {
  font-size: 3rem;
  font-weight: 800;
  color: #24002D;
  margin-bottom: 4rem;
  text-transform: uppercase;
  letter-spacing: -0.02em;
}

.styled-paragraph {
  text-align: center;
  color: #4B5563;
  font-size: 1rem;
  line-height: 1.6;
  max-width: 700px;
  margin: 0 auto;
}

/* Banking Section */
.banking-section {
  padding: 3rem 0;
  background: #f8f9fa;
  position: relative;
  z-index: 10;
}

.banking-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Account Tabs */
.account-tabs {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  gap: 0;
}

.tab-button {
  padding: 0.7rem 1.5rem;
  border: none;
  background: #e9ecef;
  color: #666;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
}

.tab-button:first-child {
  border-radius: 20px 0 0 20px;
}

.tab-button:last-child {
  border-radius: 0 20px 20px 0;
}

.tab-button.active {
  background: #8B5CF6;
  color: white;
}

/* Banking Card */
.banking-card {
  background: linear-gradient(135deg, #f3e8ff 0%, #e9d5ff 100%);
  border-radius: 15px;
  padding: 2rem;
  margin-bottom: 2rem;
  border: 1px solid rgba(139, 92, 246, 0.2);
}

.bank-details {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.bank-section {
  background: rgba(255, 255, 255, 0.8);
  padding: 1.5rem;
  border-radius: 10px;
  backdrop-filter: blur(10px);
}

.bank-name {
  font-size: 1.1rem;
  font-weight: 700;
  color: #24002D;
  margin-bottom: 1rem;
}

.account-info {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.account-label {
  font-size: 0.85rem;
  color: #666;
  font-weight: 500;
}

.account-number-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.account-number {
  font-size: 1rem;
  font-weight: 700;
  color: #24002D;
  font-family: 'Courier New', monospace;
}

.copy-button {
  background: none;
  border: none;
  color: #8B5CF6;
  cursor: pointer;
  padding: 0.3rem;
  border-radius: 4px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.copy-button:hover {
  background: rgba(139, 92, 246, 0.1);
  color: #7C3AED;
}

.bottom-section {
  text-align: center;
  margin-top: 3rem;
}

.bottom-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #24002D;
  text-transform: uppercase;
  letter-spacing: -0.02em;
}

/* Impact Section */
.impact-section {
  padding: 6rem 0;
  background: #24002D;
  color: white;
  text-align: center;
  position: relative;
  z-index: 10;
}

.impact-image {
  max-width: 100%;
  height: 100%;
  /* border-radius: 15px; */
}

/* Responsive Design */
@media (max-width: 768px) {
  .give-hero-title {
    font-size: 2.5rem;
  }
  
  .give-section-title {
    font-size: 2rem;
  }
  
  .bank-details {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .account-tabs {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .tab-button:first-child,
  .tab-button:last-child {
    border-radius: 20px;
  }
}

@media (max-width: 480px) {
  .give-hero-title {
    font-size: 2rem;
  }
  
  .give-hero-content {
    padding: 0 1rem;
  }
  
  .give-container,
  .banking-container {
    padding: 0 1rem;
  }
  
  .give-hero-button {
    padding: 1rem 2rem;
    font-size: 1rem;
  }
  
  .banking-card {
    padding: 1.5rem;
  }
}
</style>