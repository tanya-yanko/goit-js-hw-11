import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250
});

export function createGallery(images) {
  const galleryContainer = document.querySelector('.gallery');
  const galleryMarkup = images
  .map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
  <li class="gallery-item">
    <a class="gallery-link" href="${largeImageURL}">
      <img class="gallery-image" src="${webformatURL}" alt="${tags}" />
    </a>
    <div class="info">
  <p> Likes ${likes} </p>
  <p> Views ${views}</p>
  <p> Comments ${comments}</p>
  <p>  Downloads ${downloads}</p>
    </div>
  </li>
`)
    .join('');
  
  galleryContainer.innerHTML = galleryMarkup;
  
  lightbox.refresh();
}

export function clearGallery() {
  document.querySelector('.gallery').innerHTML = '';
}

export function showLoader() {
  document.querySelector('.loader').classList.remove('hidden');
}

export function hideLoader() {
  document.querySelector('.loader').classList.add('hidden');
}
