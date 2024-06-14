<template>
  <mavon-editor v-model="content" />
</template>

<script>
import { mavonEditor } from 'mavon-editor'

export default {
  components: {
    mavonEditor
  },
  data () {
    return {
      content: ''
    }
  }
}
</script>