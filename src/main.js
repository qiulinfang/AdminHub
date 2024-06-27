import { createApp } from 'vue'
import App from './App.vue'
import store from './store';
import router from './router'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import './styles/global.css';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
// import 'element-plus/theme-chalk/dark/css-vars.css'
import {
  QuillEditor
} from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import '@vueup/vue-quill/dist/vue-quill.bubble.css'
const app = createApp(App);

// 全局注册所有图标组件
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.component('QuillEditor', QuillEditor)

app.use(store);
app.use(router);
app.use(ElementPlus)
app.use(mavonEditor)
app.mount('#app')
