<template>
  <div class="max-w-2xl mx-auto mt-6 post">
    <h1>{{ post.fields.title }}</h1>

    <div class="mt-10">
      <p>
        {{ moment(post.fields.date).format('MMM D, YYYY') }} ({{
          post.fields.minutesRead
        }}
        min read)
      </p>
      <article v-html="$md.render(post.fields.content)"></article>
    </div>
  </div>
</template>

<script>
const moment = require('moment')

export default {
  data() {
    return {
      slug: this.$route.params.slug,
      moment
    }
  },
  computed: {
    post() {
      const post = this.$store.state.posts.filter(
        (el) => el.fields.slug === this.slug
      )
      return post[0]
    }
  },
  head() {
    return {
      title: this.post.fields.title,
      description: this.post.preview,
      'og:description': this.post.preview
    }
  }
}
</script>

<style>
.post {
  @apply mb-6;
}

.post p,
.post pre {
  @apply mb-6;
}

.post h1 {
  @apply border-b-8 border-indigo-200 text-4xl leading-12 font-bold text-gray-900 relative p-0 m-0 inline;
}

.post h2 {
  @apply text-2xl font-semibold text-gray-900 mb-6;
}

.post a {
  @apply text-indigo-500 bg-indigo-100;
}

.post a:hover {
  @apply text-white bg-indigo-500;
}

.post blockquote {
  @apply text-gray-600 text-sm text-center -mt-4;
}

.post p > code {
  @apply bg-gray-300;
}

.post ul {
  @apply list-disc mb-6;
  padding-left: 20px;
}
</style>
