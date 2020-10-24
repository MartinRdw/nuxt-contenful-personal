<template>
  <div class="max-w-2xl mx-auto mt-6">
    <div v-for="post in posts" :key="post.id" class="mb-6">
      <nuxt-link :to="post.fields.slug">
        <p class="text-xl font-bold">
          {{ post.fields.title }}
        </p>
        <p class="text-gray-700 mt-1">
          {{ post.fields.preview }}
        </p>
        <p class="text-gray-500 text-sm mt-1">
          {{ moment(post.fields.date).format('MMM D, YYYY') }} ({{
            post.fields.minutesRead
          }}
          min read)
        </p>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
const moment = require('moment')

export default {
  data() {
    return {
      moment
    }
  },
  computed: {
    posts() {
      return this.$store.state.posts
    }
  }
}
</script>
