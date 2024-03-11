// api.js
import axios from 'axios';



const baseURL = 'http://localhost:3000'; 





export const getPosts = async () => {
  try {
    const response = await axios.get(`${baseURL}/posts`);
    return response.data;
  } catch (error) {
    console.error('Errore durante il recupero dei post:', error);
    throw error; 
  }
};

//post dinamici

export const fetchPost = async (postId) => {
  try {
    const response = await axios.get(`${baseURL}/posts/${postId}`);
    return response.data;
  } catch (error) {
    console.error('Errore durante il recupero del post:', error);
    throw error; 
  }
};





// Altre funzioni per gestire altre chiamate al backend, ad esempio per salvare un nuovo post, aggiornare un post esistente, ecc.
