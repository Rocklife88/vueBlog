<template>
  <main class="container-fluid mx-auto px-4">
    <div class="pt-2 pb-4 text-center md:text-left font-medium text-lg">Blog posts</div>
    <div class="grid grid-cols-1 sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-4 pb-10 ">
      <BlogPostCard v-for="post in blogPostStore.posts" :key="post.id" :post="post" class="max-w-sm rounded overflow-hidden shadow-lg" @post-clicked="onGoToBlogPost(post.id)"/>
    </div>
  </main>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useBlogPostStore } from '@/stores/blogPosts';
import BlogPostCard from '@/components/BlogPostCard.vue';


const blogPostStore = useBlogPostStore();


// Metodo per recuperare i post al montaggio del componente
const fetchPosts = () => {
  blogPostStore.fetchPosts();
};

// Metodo per navigare a un post specifico
const onGoToBlogPost = (postId: string) => {
  blogPostStore.goToBlogPost(postId); 
};

// Chiamata al metodo per recuperare i post al montaggio del componente
onMounted(fetchPosts);
</script>
