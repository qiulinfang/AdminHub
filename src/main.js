import { createApp } from 'vue'
import App from './App.vue'
import store from './store';
import router from './router'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import './styles/global.css';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';


const app = createApp(App);

// 全局注册所有图标组件
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.use(store);
app.use(router);
app.use(ElementPlus)
app.mount('#app')
