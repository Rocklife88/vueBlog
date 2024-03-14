<template>
  <div class="container-fluid w-2/4 mx-auto p-4">
    <div >
      <div class="text-2xl text-gray-700 pb-6">Scrivi qui il tuo articolo</div>
      <textarea v-model="title"
        rows="4"
        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-300 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500    dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Write your thoughts here..."
      ></textarea>
      <div>
      <label
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Your message</label
      >
      <textarea
        v-model="description"
        rows="4"
        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-300 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 d dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Write your thoughts here..."
      ></textarea>
    </div>
      <button @click="onCreatePost" class="mt-6 px-6 py-2 bg-slate-400 text-white rounded-md">Send Document to backend</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from  'vue';
import * as api from '@/api/api'
import router from '@/router';

const postId=ref('')


//creo un oggetto fatto in un certo modo composto da più dati
const post = ref({
  title: '',
  description: ''
})


//uso questo metodo per raccogliere i dati ( qui sotto prendo titl)
const title = computed({
  get() {
    return post.value.title
  },
  set(value) {
    post.value.title = value
  }
})


const description =computed({
  get(){
    return post.value.description
  },
  set(value) {
    post.value.description = value
  }
})

async function onCreatePost(){
  await api.createPost(post.value)
  router.push("/")
  api.getPosts()
}
</script>


