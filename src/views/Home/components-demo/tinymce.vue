<template>
  <main id="sample">
    <Editor
      api-key="u6uamj8mv91yq95kwduljmi9ulzdc7z06xy7s2l1yppztbio"
      :init="initOptions"
    />
  </main>
</template>

<script setup>
import Editor from '@tinymce/tinymce-vue'

// TinyMCE初始化配置
const initOptions = {
  selector: 'textarea', // 不需要在Vue中设置，因为<Tinymce>组件会处理
  height: 500,
  plugins: 'link image lists code',
  toolbar: 'undo redo | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image code',
  language: 'zh_CN', // 语言设置
  language_url: '/public/tinymce/zh_CN.js', // 语言包路径
};

</script>

<style scoped>
.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  #sample {
    display: flex;
    flex-direction: column;
    place-items: center;
    width: 1000px;
  }
}
</style>