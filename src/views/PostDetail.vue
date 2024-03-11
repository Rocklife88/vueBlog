<!-- SinglePost.vue -->

<template>
    <div class="w-full container-fluid mx-auto flex justify-center pt-6">
      <div v-if="post">
         <img class="img mx-auto pb-6" :src="post.img">
        <div class="pb-6">{{ post.title }}</div>
        <p>{{ post.content }}</p>
        <p>Autore: {{ post.author }}</p>
        <p>Data di pubblicazione: new Date </p>
      </div>
      <div class="w-full max-h-full" v-else>
   <Spinner/>
      </div>
    </div>
  </template>
  
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { fetchPost } from '@/api/api.js'; 
  import { useRoute } from 'vue-router';
  import Spinner from '@/components/Spinner.vue'
  
  const post = ref(null);
  const route = useRoute();
  const postId = route.params.id;

  //pesca i post dinamicamente in base all'id selezionato cliccando sulla card
  
  onMounted(async () => {
    try {
      post.value = await fetchPost(postId);
    } catch (error) {
      console.error('Errore durante il recupero del post:', error);
      
    }
  });
  </script>

  <style scoped>
.img{
  min-width:400px;
  height:300px;
}

</style>