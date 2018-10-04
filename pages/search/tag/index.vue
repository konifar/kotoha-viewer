<template>
  <section>
    <div>
      <p>hoge</p>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"
import { State } from "vuex-class"
import Card from "~/components/Card.vue"
import NavBar from "~/components/NavBar.vue"
import { SearchType } from "../../../models/SearchType"

@Component({
  components: {
    Card,
    NavBar
  }
})
export default class extends Vue {
  @State
  people

  // lifecycle callback
  mounted(): void {
    this.$store.dispatch("changeSearchType", SearchType.Tag)
  }
}
</script>
<style scoped>
.cards {
  display: flex;
  flex-wrap: wrap;
}
</style>
