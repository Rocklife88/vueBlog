import axios from 'axios';

const UNSPLASH_ACCESS_KEY = "-uZJkHa4DVmzQbljnM1xF7sUImnF8nlNZULl_QK2OFU";
const UNSPLASH_BASE_URL = "https://api.unsplash.com";

// Funzione per ottenere un'immagine casuale da Unsplash
export async function fetchRandomPhoto() {
  try {
    const response = await axios.get(`${UNSPLASH_BASE_URL}/photos/random`, {
      params: { client_id: UNSPLASH_ACCESS_KEY },
    });
    return response.data.urls.regular; 
  } catch (error) {
    console.error('Errore durante il recupero dell\'immagine da Unsplash:', error);
    throw error; 
  }
}