import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router.js'
import './assets/tailwind.css'

const app = createApp(App)


const fadeInObserver = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
        fadeInObserver.unobserve(entry.target) // animate once
      }
    }
  },
  { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
)

app.directive('fade-in', {
  mounted(el) {
    el.classList.add('fade-in-section')
    fadeInObserver.observe(el)
  },
  unmounted(el) {
    fadeInObserver.unobserve(el)
  },
})

app.use(router)
app.mount('#app')




