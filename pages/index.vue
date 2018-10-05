<template>
  <div>
    <NavBar :search-type="searchType"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"
import NavBar from "~/components/NavBar.vue"

@Component({
  components: {
    NavBar
  }
})
export default class extends Vue {
  fetch({ params, redirect }) {
    redirect(301, "/search/phrase")
  }
}
</script>
<style lang="scss" scoped>
</style>
