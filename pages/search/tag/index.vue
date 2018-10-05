<template>
  <div>
    <NavBar :search-type="searchType"/>
    <section class="section">
      <SearchBar :search-type="searchType" @onTextChanged="onSearchTextChanged"/>
      <PhraseList :search-type="searchType" :search-text="searchText"/>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"
import NavBar from "~/components/NavBar"
import SearchBar from "~/components/SearchBar"
import PhraseList from "~/components/PhraseList"
import { SearchType } from "~/models/SearchType"

@Component({
  components: {
    NavBar,
    SearchBar,
    PhraseList
  }
})
export default class extends Vue {
  // data
  private searchType = SearchType.Tag
  private searchText: string = ""

  // methods
  onSearchTextChanged(text: string): void {
    this.searchText = text
    console.log(this.searchText)
    this.$store.dispatch("searchPhrases", {
      text: this.searchText,
      searchType: this.searchType
    })
  }
}
</script>

<style lang="scss" scoped>
</style>
