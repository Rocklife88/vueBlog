
<template>
  <div class="py-12 w-full mx-auto container-fluid  ">
        <div class=" mx-auto sm:px-4 lg:px-6 w-full ">
            <div>
              <div class="mx-auto container">
                <div class="pb-6">
                 <div class="text-3xl">Scrivi un Nuovo BlogPost</div>
                  </div>
                      <div class="mx-auto container">
                        <div class="mb-4 flex flex-col">
                            <label class="text-xl text-gray-600">Title <span class="text-red-500">*</span></label></br>
                            <input type="text" v-model="title" class=" w-full md:w-2/4 border-2 border-gray-300 p-2 " name="title" id="title" required>
                        </div>
                        <div class="mb-4  flex flex-col">
                            <label class="text-xl text-gray-600">Description</label></br>
                            <input type="text" v-model="description" class="border-2 border-gray-300 p-2 w-full md:w-2/4" name="description" id="description" placeholder="(Optional)">
                        </div>

                        <div class="mb-8 flex flex-col">
                            <label class="text-xl text-gray-600">Content <span class="text-red-500">*</span></label></br>
                            <textarea v-model="content" name="content" class="border-2 border-gray-500  w-full md:w-2/4 h-60">
                            </textarea>
                            <div class="pt-8 flex flex-col">
                    <label class="text-xl text-gray-600 ">Author <span class="text-red-500">*</span>
                     </label></br>
                      <input type="text" v-model="author" class=" w-2/4 md:w-1/4 border-2 border-gray-300 p-2 " name="title" id="author" required>
                  </div>
                        </div>
                            <button @click="onCreatePost" class="p-3 bg-slate-600 rounded-md text-white hover:bg-slate-400 transition-opacity" required>Submit</button>
                        </div>
                </div>
              <div>
            </div>
           </div>
         </div>
        </div>
    </template>



<script setup lang="ts">
import { ref, computed } from  'vue';
import * as api from '@/api/api'
import router from '@/router';
import { fetchRandomPhoto } from '@/api/unsplashApi';





//creo un oggetto fatto in un certo modo composto da più dati
const post = ref({
  title: '',
  description: '',
  content:"",
  date: new Date(),
  author:"",
  img:""
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

const author = computed({
  get() {
    return post.value.author
  },
  set(value) {
    post.value.author = value
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

const content =computed({
  get(){
    return post.value.content
  },
  set(value) {
    post.value.content = value
  }
})



async function onCreatePost() {
  try {
    // Chiama l'API per ottenere un'immagine casuale
    const imageUrl = await fetchRandomPhoto();
    post.value.img = imageUrl;
    await api.createPost(post.value);
    router.push("/");
  } catch (error) {
    console.error("Errore durante la creazione del post:", error);
    // Gestisci l'errore (ad esempio, mostrando un messaggio all'utente)
  }
}

</script>


