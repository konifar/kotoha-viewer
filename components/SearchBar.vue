import {SearchType} from "../models/SearchType";
<template>
  <div id="searchContainer" class="container">
    <div class="control has-icons-left">
      <input v-model="text" class="input" type="text" placeholder="名言からさがす" @change="handleTextChange">
      <span class="icon is-small is-left">
        <i class="fa fa-search"/>
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from "nuxt-property-decorator"

@Component({})
export default class extends Vue {
  @Prop()
  searchText: string

  // data
  text: string = this.searchText

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
