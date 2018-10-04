import { SearchType } from "~/models/SearchType"

export const state = () => ({
  searchType: SearchType,
  people: []
})

export const mutations = {
  setSearchType(state, searchType: SearchType) {
    state.searchType = searchType
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
  async changeSearchType({ commit }, searchType: SearchType) {
    commit("setSearchType", searchType)
  }
}
