<template>
  <div>
    <NavBar/>
    <nuxt/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"
import Card from "~/components/Card.vue"
import NavBar from "~/components/NavBar.vue"

@Component({
  components: {
    Card,
    NavBar
  }
})
export default class extends Vue {}
</script>
