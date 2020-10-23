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
          {{ post.fields.publishedAt }}
        </p>
      </nuxt-link>
    </div>
    <!-- <section v-for="post in posts" :key="post.fields.slug">
      <h2 class="title">
        <nuxt-link :to="post.fields.slug">{{ post.fields.title }}</nuxt-link>
      </h2>
      <p class="description">
        {{ post.fields.content }}<br />
        <nuxt-link :to="post.fields.slug" class="more">Read more ⟶</nuxt-link>
      </p>
    </section> -->
  </div>
</template>

<script>
export default {
  components: {},
  computed: {
    posts() {
      return this.$store.state.posts
    }
  },
  head: {
    title: 'Paw Waves, Latest Posts'
  }
}
</script>
