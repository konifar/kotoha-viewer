<template>
  <nav class="navbar has-shadow" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <img src="~/assets/img/logo.png">
      </a>
      <a :class="{'is-active': isPhrase}" class="navbar-item" href="/search/phrase">
        フレーズ
      </a>
      <a :class="{'is-active': isTag}" class="navbar-item" href="/search/tag">
        タグ
      </a>
      <!--<div class="navbar-item">-->
      <!--<a class="button is-primary" @click="onAddClick">追加</a>-->
      <!--</div>-->
      <a href="https://github.com/konifar/kotoha-viewer" class="navbar-item" target="_blank">
        <i class="fa fa-lg fa-github-alt"/>
      </a>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator"
import { SearchType } from "~/models/SearchType"

@Component({})
export default class extends Vue {
  @Prop()
  private searchType: SearchType

  // computed
  get isPhrase(): boolean {
    return this.searchType == SearchType.Phrase
  }
  get isTag(): boolean {
    return this.searchType == SearchType.Tag
  }

  // methods
  onAddClick() {
    console.log(this.searchType == SearchType.Tag)
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/css/main.scss";

.navbar-item {
  &.is-active {
    border-bottom: 2px solid $primary;
  }
}
</style>
