<template>
  <div class="mx-auto px-4 sm:px-6 lg:px-8">
    <div class="pb-32">
      <div class="py-6">
        <div class="max-w-2xl mx-auto flex items-center">
          <a
            class="w-16 h-16 object-cover rounded-full overflow-hidden"
            href="/"
            ><img src="~/assets/images/avatar.jpg" alt="logo"
          /></a>
          <div class="ml-5">
            <div class="font-semibold text-2xl">
              Martin Riedweg
            </div>
            <div class="flex items-center mt-1">
              <nuxt-link
                to="/"
                class="uppercase text-xs font-semibold text-gray-400 hover:text-gray-600 tracking-wide transition duration-300"
              >
                Articles
              </nuxt-link>
              <nuxt-link
                to="/projects"
                class="ml-5 uppercase text-xs font-semibold text-gray-400 hover:text-gray-600 tracking-wide transition duration-300"
              >
                Projects
              </nuxt-link>
              <nuxt-link
                to="/about"
                class="ml-5 uppercase text-xs font-semibold text-gray-400 hover:text-gray-600 tracking-wide transition duration-300"
              >
                About
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
      <nuxt />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style>
body {
  @apply text-gray-800;
}

.nuxt-link-exact-active {
  @apply text-gray-700;
}

code,
kbd,
samp,
pre {
  @apply text-sm;
}
</style>
