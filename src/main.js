import { createGallery, clearGallery, showLoader, hideLoader } from './js/render-functions';
import { getImagesByQuery } from './js/pixabay-api';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';



const form = document.querySelector('.form');
const searchInput = document.querySelector('[name="search-text"]');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  
  const query = searchInput.value.trim();
  
  if (!query) {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search query.',
    });
    return;
  }
  
  showLoader();
  
  try {
    clearGallery();
    
    const images = await getImagesByQuery(query);
 
    if (images.length === 0) {
      iziToast.info({
        title: 'No Results',
        message: 'Sorry, there are no images matching your search query. Please try again!',
      });
    } else {
      createGallery(images);
    }
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Something went wrong. Please try again later.',
    });
  } finally {

    hideLoader();
    searchInput.value = "";
  }

  function showNotification(message, type = "info") {
    iziToast[type]({
      title: type === "error" ? "Помилка" : "Повідомлення",
      message,
      position: "topRight",
      timeout: 3000,
    });
  }
  

  
  
    const loader = document.getElementById("loader");
    
    loader.classList.remove("hidden"); 
  
    try {
      const response = await fetch(`https://api.example.com/images?q=${query}`);
      if (!response.ok) throw new Error("Не вдалося отримати дані!");
  
      const data = await response.json();
      showNotification("Зображення завантажено!", "success");
      renderGallery(data.hits);
    } catch (error) {
      showNotification(error.message, "error");
    } finally {
      loader.classList.add("hidden"); 
    }
 
});
