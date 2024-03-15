<template>
  <div class="w-full container-fluid mx-auto flex justify-center pt-6 text-left">
    <div class="flex flex-col justify-between items-center" v-if="post">
      <div class="flex flex-col items-center">
        <img class="w-full md:w-3/6 mx-auto pb-6 rounded-md" :src="post.img" />
        <div class="pb-2 text-2xl font-semibold text-slate-900">{{ post.title }}</div>
        <div class="pb-6 text-lg md:text-xl text-slate-500"> {{ post.description }}</div>
        <p class="text-normal text-left text-md text-slate-700 px-4 leading-relaxed">{{ post.content }}</p>
      </div>
      <div>
        <div>Autore: {{ post.author }}</div>
        <p>Data di pubblicazione: {{ new Date(post.date).toLocaleDateString() }}</p>
      </div>
    </div>
    <div class="w-full max-h-full" v-else>
      <Spinner />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { fetchPost } from "@/api/api";
import { useRoute } from "vue-router";
import Spinner from "@/components/Spinner.vue";

const post = ref(null);
const route = useRoute();

// Carica il post dinamicamente in base all'id selezionato cliccando sulla card
onMounted(async () => {
  try {
    const postId = route.params.id;
    post.value = await fetchPost(postId);
  } catch (error) {
    console.error("Errore durante il recupero del post:", error);
  }
});
</script>
