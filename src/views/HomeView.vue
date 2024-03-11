<template>
  <main class="container mx-auto px-4">
    <div class="pt-6 pb-4 text-center md:text-left font-medium text-lg">Blog posts</div>
    <div class="grid grid-cols-1 sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-6 pb-10">
      <!-- Componente CardPost per ogni post -->
      <CardPost v-for="post in posts" :key="post.id" :post="post" class="max-w-sm rounded overflow-hidden shadow-lg" @post-clicked="goToBlogPost"/>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import router from '@/router';
import CardPost from '@/components/CardPost.vue';
import {getPosts} from '@/api/api.js'
import { useRoute } from 'vue-router';

const route = useRoute();



const posts = ref();

const fetchPosts = async () => {
  try {
    posts.value = await getPosts();
  } catch (error) {
    console.error('Errore durante il recupero dei post:', error);
    
  }
};


const goToBlogPost = (postId: string) => {
  router.push({ name: 'post', params: { id: postId } }); 
}

onMounted(fetchPosts);

</script>
