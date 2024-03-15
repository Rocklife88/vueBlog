<template>
  <div @click="$emit('post-clicked', post.id)" class="card rounded overflow-hidden shadow-lg cursor-pointer">
    <img class="h-auto" :src="post.img" alt="Sunset in the mountains">
    <div class="px-4 py-2">
      <div class="font-bold text-lg mb-1">{{ post.title }}</div>
      <p class="text-gray-700 text-sm">
        {{ post.content }}
      </p>
    </div>
    <div class="px-4 pt-2 pb-1">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(['post-clicked'])

const props = defineProps({
  post: Object
});
</script>

<style scoped>
.card {
  max-width: 18rem;
}


</style>
