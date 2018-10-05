<template>
  <div>
    <NavBar :search-type="searchType"/>
    <section class="section">
      <SearchBar :search-text="searchText" @onTextChanged="onSearchTextChanged"/>

      <div id="phrasesContainer" class="container">
        <div v-for="phrase in phrases" :key="phrase.id" class="phrase-row">
          <p class="is-medium" v-html="highlightText(phrase.text, searchText)"/>
          <div class="tags">
            <span v-for="tag in phrase.tag_list" :key="phrase.id + tag" class="tag is-light">{{ tag }}</span>
          </div>
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
import { SearchType } from "../../../models/SearchType"
import _ from "lodash"

@Component({
  components: {
    Card,
    NavBar,
    SearchBar
  }
})
export default class extends Vue {
  private searchType = SearchType.Phrase

  @State
  isSearching
  @State
  phrases
  searchText

  // methods
  onSearchTextChanged(text: string): void {
    this.searchText = text

    this.$store.dispatch("searchPhrases", {
      text: this.searchText,
      searchType: SearchType.Phrase
    })
  }

  highlightText(value: string, keyword: string): string {
    if (!value) return value
    return _.replace(
      value,
      keyword,
      `<span style="font-weight: bold; color: #F5558C;">${keyword}</span>`
    )
  }
}
</script>
<style lang="scss" scoped>
@import "../../../assets/css/components.scss";

#phrasesContainer {
  margin-top: 20px;

  .phrase-row {
    padding-top: 12px;
    padding-bottom: 12px;
    border-bottom: $sax 1px solid;

    .tags {
      margin-top: 4px;
    }
  }
}
</style>
