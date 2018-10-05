<template>
  <div>
    <NavBar :search-type="searchType"/>
    <section class="section">
      <SearchBar :search-text="searchText" @onTextChanged="onSearchTextChanged"/>

      <div id="phrasesContainer" class="container">
        <div v-for="phrase in phrases" :key="phrase.id">
          <PhraseItem :search-text="searchText" :phrase="phrase"/>
        </div>
      </div>
    </section>
    <div v-if="isSearching" class="loading-page">
      <p>検索中...</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"
import { State } from "vuex-class"
import Card from "~/components/Card.vue"
import NavBar from "~/components/NavBar.vue"
import SearchBar from "~/components/SearchBar.vue"
import PhraseItem from "~/components/PhraseItem.vue"
import { SearchType } from "~/models/SearchType"
import { Phrase } from "../../../models/Phrase"

@Component({
  components: {
    Card,
    NavBar,
    SearchBar,
    PhraseItem
  }
})
export default class extends Vue {
  private searchType = SearchType.Phrase

  @State
  isSearching: boolean
  @State
  phrases: Phrase[]

  searchText: string

  // methods
  onSearchTextChanged(text: string): void {
    console.log(this.searchText)
    this.searchText = text

    this.$store.dispatch("searchPhrases", {
      text: this.searchText,
      searchType: this.searchType
    })
  }
}
</script>
<style lang="scss" scoped>
@import "../../../assets/css/components.scss";

#phrasesContainer {
  margin-top: 20px;
}
</style>
