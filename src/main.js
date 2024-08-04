import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { fetchImages } from './js/pixabay-api';
import { displayImages } from './js/render-functions/';

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const loadMoreBtn = document.querySelector('.load-more-btn');

const errorToastSettings = {
  messageColor: '#fafafb',
  messageSize: '16px',
  messageLineHeight: '1.5',
  backgroundColor: '#ef4040',
  position: 'topRight',
  progressBarColor: '#b51b1b',
};

const lightboxGallery = new SimpleLightbox('.gallery a', {});

let currentPage = 1;
let currentQuery = '';

form.addEventListener('submit', handleSearch);
loadMoreBtn.addEventListener('click', loadMore);

async function handleSearch(event) {
  event.preventDefault();

  const query = event.currentTarget[0].value.trim().toLowerCase();

  if (!query) {
    return;
  }

  if (query === currentQuery) {
    return;
  } else {
    currentQuery = query;
    currentPage = 1;
  }

  gallery.innerHTML = '';
  loader.style.display = 'block';
  loadMoreBtn.style.display = 'none';

  try {
    const data = await fetchImages(currentQuery, currentPage);

    if (data.hits.length === 0) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        ...errorToastSettings,
      });
    } else {
      displayImages(data.hits, gallery, lightboxGallery);

      loadMoreBtn.style.display = 'block';

      form.reset();
    }
  } catch {
    iziToast.error({
      message: 'An error occurred while fetching data. Please try again later.',
      ...errorToastSettings,
    });
  } finally {
    loader.style.display = 'none';
  }
}

async function loadMore() {
  currentPage += 1;

  loadMoreBtn.style.display = 'none';
  loader.style.display = 'block';

  try {
    const data = await fetchImages(currentQuery, currentPage);

    displayImages(data.hits, gallery, lightboxGallery);

    const image = document.querySelector('.gallery-item');
    const imageHeight = image.getBoundingClientRect().height;

    window.scrollBy({
      top: imageHeight * 2 + 24 * 2,
      behavior: 'smooth',
    });

    const totalPages = Math.ceil(data.totalHits / 15);
    if (currentPage >= totalPages) {
      loadMoreBtn.style.display = 'none';
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
    } else {
      loadMoreBtn.style.display = 'block';
    }
  } catch {
    iziToast.error({
      message: 'An error occurred while fetching data. Please try again later.',
      ...errorToastSettings,
    });
  } finally {
    loader.style.display = 'none';
  }
}
