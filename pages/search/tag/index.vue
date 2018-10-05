<template>
  <section>
    <div>
      <p>hoge</p>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"
import NavBar from "~/components/NavBar.vue"

@Component({
  components: {
    NavBar
  }
})
export default class extends Vue {}
</script>
<style scoped>
</style>
