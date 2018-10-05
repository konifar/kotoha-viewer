<template>
  <div id="phrasesContainer" class="container">
    <div v-for="phrase in phrases" :key="phrase.id">
      <PhraseItem :search-type="searchType" :search-text="searchText" :phrase="phrase"/>
    </div>
    <div v-if="isSearching" class="loading-page">
      <p>検索中...</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator"
import { State } from "vuex-class"
import PhraseItem from "./PhraseItem"
import { SearchType } from "~/models/SearchType"
import { Phrase } from "~/models/Phrase"

@Component({
  components: {
    PhraseItem
  }
})
export default class extends Vue {
  @Prop()
  searchType: SearchType
  @Prop()
  searchText: string

  @State
  isSearching: boolean
  @State
  phrases: Phrase[]
}
</script>

<style lang="scss" scoped>
@import "../assets/css/components.scss";

#phrasesContainer {
  margin-top: 20px;
}
</style>
