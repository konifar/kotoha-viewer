import {SearchType} from "../models/SearchType";
<template>
  <div class="phrase-row">
    <p class="is-medium" v-html="highlightText(phrase.text, searchText)"/>
    <div class="tags">
      <span v-for="tag in phrase.tag_list" :class="{'is-success': isTagMatched(tag, searchText)}" :key="phrase.id + tag" class="tag is-light">{{ tag }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from "nuxt-property-decorator"
import { Phrase } from "~/models/Phrase"
import { SearchType } from "~/models/SearchType"
import _ from "lodash"

@Component({})
export default class extends Vue {
  @Prop()
  searchText: string
  @Prop()
  phrase: Phrase
  @Prop()
  searchType: SearchType

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

  private isTagMatched(tag: string, keyword: string): boolean {
    if (!tag) return false
    return tag.includes(keyword)
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
