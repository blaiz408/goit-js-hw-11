const API_KEY = '29154782-64abcd202d8466e583ce5ca87';
const BASE_URL = 'https://pixabay.com/api';
import axios from 'axios';
const axios = require('axios');

export default class NewsApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  fetchGallery = async () => {
    const url = `${BASE_URL}/?key=${API_KEY}&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${this.page}`;

    const response = await axios.get(url);
    const data = response.data;
    this.incrementPage();
    return data;
  };

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
