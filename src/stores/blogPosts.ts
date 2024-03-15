import { defineStore } from 'pinia';
import * as api from '@/api/api';
import router from '@/router';

interface Post {
  id: string;
  title: string;
  description?: string;
  content: string;
  date: Date;
  author: string;
  image?: string;
}

export const useBlogPostStore = defineStore('blogPost', {
  // Utilizzo di una funzione per lo stato per poter usare ref all'interno
  state: () => ({
    posts: [] as Post[],
  }),

  actions: {
    async fetchPosts() {
      try {
        const response = await api.getPosts();
        this.posts = response;
      } catch (error) {
        console.error('Errore durante il recupero dei post:', error);
      }
    },

    async createPost(newPost: Post) {
        try {
          await api.createPost(newPost);
          await this.fetchPosts();
          router.push("/");
        } catch (error) {
          console.error('Errore durante la creazione del post:', error);
        }
    },

    goToBlogPost(postId: string) {
      router.push({ name: 'post', params: { id: postId } });
    },
},
getters: {
  getPostById: (state) => {
    return (postId: string) => state.posts.find(post => post.id === postId);
  }
}

});
