import client from '~/plugins/contentful'

export const state = () => ({
  posts: null,
  projects: null
})

export const mutations = {
  updatePosts: (state, posts) => {
    state.posts = posts
  },

  updateProjects: (state, projects) => {
    state.projects = projects
  }
}

export const actions = {
  async getPosts({ commit }) {
    try {
      if (!client) return
      const response = await client.getEntries({
        order: '-fields.date',
        content_type: process.env.CONTENTFUL_POST_ID
      })
      if (response.items.length > 0) {
        commit('updatePosts', response.items)
      }
    } catch (err) {
      console.error(err)
    }
  },

  async getProjects({ commit }) {
    try {
      if (!client) return
      const response = await client.getEntries({
        order: 'fields.position',
        content_type: process.env.CONTENTFUL_PROJECT_ID
      })
      if (response.items.length > 0) {
        commit('updateProjects', response.items)
      }
    } catch (err) {
      console.error(err)
    }
  }
}
