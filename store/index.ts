import { SearchType } from "~/models/SearchType"
import { Phrase } from "~/models/Phrase"
import { plainToClass } from "class-transformer"
import axios from "axios"

export const state = () => ({
  isSearching: false,
  phrases: []
})

export const mutations = {
  setSearching(state, isSearching: boolean) {
    state.isSearching = isSearching
  },
  setPhrases(state, phrases: Phrase[]) {
    state.phrases = phrases
  }
}

export const actions = {
  async searchPhrases({ commit }, params) {
    commit("setSearching", true)

    const parameterKey =
      params["searchType"] === SearchType.Phrase ? "text" : "tag"
    const url = `${"https://cors-anywhere.herokuapp.com/"}https://kotoha-server.herokuapp.com/api/phrases.json?${parameterKey}=${
      params["text"]
    }`
    const res: Object = (await axios.get(url)).data
    const phrases: Phrase[] = plainToClass(Phrase, res as Object[])

    console.log(phrases)
    commit("setPhrases", phrases)
    commit("setSearching", false)
  }
}
