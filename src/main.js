import './assets/main.css'

import { createApp } from 'vue'

createApp({
    data() {
        return {
          isVisible: false
        };
    },
    methods: {
        toggleBox() {
            this.isVisible = !this.isVisible;
        }
    }
}).mount('#app')
