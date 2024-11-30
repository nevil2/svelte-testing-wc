import { defineCustomElement } from 'vue'

import WebComponent from './WebComponent.vue'
export const WebElement = defineCustomElement(WebComponent)
customElements.define('wc-image', WebElement)