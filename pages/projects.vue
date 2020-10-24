<template>
  <div class="max-w-2xl mx-auto mt-6">
    <div
      v-for="(project, i) in projects"
      :key="i"
      class="project mb-6"
      :class="{ 'border-b': i + 1 !== projects.length }"
    >
      <div class="flex mb-6">
        <h2>{{ project.fields.title }}</h2>
        <a
          class="self-end ml-2 mb-1 link"
          :href="`https://${project.fields.url}`"
          target="_blank"
          >({{ project.fields.url }})</a
        >
      </div>
      <div>
        <img
          class="h-20 w-auto"
          :src="project.fields.logo.fields.file.url"
          alt=""
        />
      </div>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div class="editor" v-html="$md.render(project.fields.content)" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  computed: {
    projects() {
      return this.$store.state.projects
    }
  },
  head: {
    title: 'Martin Riedweg | Projects'
  }
}
</script>

<style>
.project h2 {
  @apply text-2xl font-semibold text-gray-900;
}

.project p {
  @apply mb-6;
}

.project img {
  @apply my-6;
}

.project .editor > p:first-child {
  @apply font-semibold text-gray-700;
}

.project a.link {
  @apply text-indigo-500 bg-indigo-100;
}

.project a.link:hover {
  @apply text-white bg-indigo-500;
}

.project a {
  @apply text-indigo-500;
}

.project a:hover {
  @apply text-indigo-600;
}
</style>
