<template>
  <div id="searchContainer" class="container">
    <div class="field">
      <p class="control has-icons-left">
        <input v-model="text" :placeholder="placeholder" class="input" type="text" @change="handleTextChange">
        <span class="icon is-small is-left">
          <i class="fa fa-search"/>
        </span>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from "nuxt-property-decorator"
import { SearchType } from "../models/SearchType"

@Component({})
export default class extends Vue {
  @Prop()
  searchType: SearchType

  // data
  text: string
  placeholder: string =
    this.searchType === SearchType.Phrase ? "フレーズを入力" : "タグを入力"

  @Emit("onTextChanged")
  onTextChanged(text: string): void {}

  // methods
  handleTextChange(): void {
    this.onTextChanged(this.text)
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/css/main.scss";
</style>
