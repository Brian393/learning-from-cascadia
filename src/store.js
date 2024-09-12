import { createStore } from "vuex";

// root state object.
// each Vuex instance is just a single state tree.
const state = {
  asideHidden: false,
  animTimeouts: [],
};

// mutations are operations that actually mutates the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
const mutations = {
  toggle(state) {
    // console.log('store toggle!!')
    state.asideHidden = !state.asideHidden;
  },
  clearAnimTimeouts(state) {
    state.animTimeouts = [];
  },
};

const actions = {
  toggle(context) {
    context.commit("toggle");
  },
  clearAnimTimeouts(context) {
    context.commit("clearAnimTimeouts");
  },
};

// getters are functions
const getters = {
  asideHidden: (state) => state.asideHidden,
  animTimeouts: (state) => state.animTimeouts,
};

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
// export default new Vuex.Store({
//   state,
//   getters,
//   actions,
//   mutations,
// });

const store = createStore({
  state() {
    return {
      asideHidden: false,
      animTimeouts: [],
    };
  },
  getters,
  actions,
  mutations,
});

export default store;
