// api.js
import axios from 'axios';

const baseURL = 'http://localhost:3000'; 

export const getPosts = async () => {
  try {
    const response = await axios.get(`${baseURL}/posts`);
    return response.data;
  } catch (error) {
    console.error('Errore durante il recupero dei post:', error);
    throw error; // Lancia l'errore per gestirlo nei componenti
  }
};

// Altre funzioni per gestire altre chiamate al backend, ad esempio per salvare un nuovo post, aggiornare un post esistente, ecc.
