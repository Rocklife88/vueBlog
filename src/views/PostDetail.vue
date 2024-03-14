<!-- SinglePost.vue -->

<template>
  <div class="w-full container-fluid mx-auto flex justify-center pt-6">
    <div class="flex flex-col justify-between items-center" v-if="post">
      <div class="flex flex-col items-center">
        <img class="w-full md:w-2/6 mx-auto pb-6 rounded-md" :src="post.img" />
        <div class="pb-6 text-2xl font-semibold">{{ post.title }}</div>
        <p class="text-normal text-left text-md text-gray-600">{{ post.content }}</p>
      </div>
      <div>
        <div>Autore: {{ post.author }}</div>
        <p>Data di pubblicazione: new Date</p>
      </div>
    </div>
    <div class="w-full max-h-full" v-else>
      <Spinner />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { fetchPost } from "@/api/api";
import { useRoute } from "vue-router";
import Spinner from "@/components/Spinner.vue";

const post = ref(null);
const route = useRoute();
const postId = route.params.id;

//pesca i post dinamicamente in base all'id selezionato cliccando sulla card

onMounted(async () => {
  try {
    post.value = await fetchPost(postId);
  } catch (error) {
    console.error("Errore durante il recupero del post:", error);
  }
});
</script>

<style scoped>
.img {
  min-width: 400px;
  height: 300px;
}
</style>