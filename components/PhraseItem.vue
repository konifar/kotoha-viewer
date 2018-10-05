import {SearchType} from "../models/SearchType";
<template>
  <div class="phrase-row">
    <p class="is-medium" v-html="highlightText(phraseData.text, searchTextData)"/>
    <div class="tags">
      <span v-for="tag in phraseData.tag_list" :key="phraseData.id + tag" class="tag is-light">{{ tag }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from "nuxt-property-decorator"
import { Phrase } from "~/models/Phrase"
import _ from "lodash"

@Component({})
export default class extends Vue {
  @Prop()
  searchText: string
  @Prop()
  phrase: Phrase

  // data
  searchTextData: string = this.searchText
  phraseData: Phrase = this.phrase

  @Emit("onTextChanged")
  private onTextChanged(text: string): void {}

  // methods
  private highlightText(value: string, keyword: string): string {
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
@import "../assets/css/main.scss";

.phrase-row {
  padding-top: 12px;
  padding-bottom: 12px;
  border-bottom: $sax 1px solid;

  .tags {
    margin-top: 4px;
  }
}
</style>
