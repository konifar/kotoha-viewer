import { SearchType } from "~/models/SearchType"
import { plainToClass, Type } from "class-transformer"
import axios from "axios"
import { Phrase } from "~/models/Phrase"

export const state = () => ({
  isSearching: false,
  phrases: [],
  people: []
})

export const mutations = {
  setSearching(state, isSearching: boolean) {
    state.isSearching = isSearching
  },
  setPhrases(state, phrases: Phrase[]) {
    state.phrases = phrases
  },
  setPeople(state, people) {
    state.people = people
  }
}

export const actions = {
  async nuxtServerInit({ commit }, { app }) {
    const people = await app.$axios.$get("./random-data.json")
    commit("setPeople", people.slice(0, 10))
  },
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
