import axios from 'axios';
const API_URL = 'http://localhost:8080/word'; // Ensure this matches your backend URL
const API_URL_2 = 'http://localhost:8080/word2';
const API_AI_URL = 'http://127.0.0.1:5000/predict';

const WordService = {
    predictWord: async (word: string): Promise<any> => {
        try {
          const response = await axios.post(`${API_AI_URL}`, { word }, {
            headers: {
              'Content-Type': 'application/json'
            }
          });
          return response.data;
        } catch (error) {
          console.error("Prediction error:", error);
          throw error;
        }
      },
    // Fetch all words
    findAll: async (): Promise<any[]> => {
        const response = await axios.get(`${API_URL}/all`);
        return response.data;
    },
    // Find word by word
    findByWord: async (word: string): Promise<any[]> => {
        const response = await axios.get(`${API_URL}/find/${word}`);
        return response.data;
    },
    // Get words with the same rhyme
    getWordsWithSameRhyme: async (word: string): Promise<any[]> => {
        const response = await axios.get(`${API_URL}/rhyme/${word}`);
        return response.data;
    },

    // For two-syllable words:
    // Fetch all two-syllable words
    findAllTwoSyllable: async (): Promise<any[]> => {
        const response = await axios.get(`${API_URL_2}/all`);
        return response.data;
    },
    // Find two-syllable word by word
    findTwoSyllableByWord: async (word: string): Promise<any[]> => {
        const response = await axios.get(`${API_URL_2}/find/${word}`);
        return response.data;
    },
    // Get two-syllable words with the same rhyme
    getTwoSyllableWordsWithSameRhyme: async (word: string): Promise<any[]> => {
        const response = await axios.get(`${API_URL_2}/rhyme/${word}`);
        return response.data;
    },
};
export default WordService;