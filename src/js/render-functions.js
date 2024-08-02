function displayImages(images, gallery, lightboxGallery) {
  gallery.insertAdjacentHTML('beforeend', createImageMarkup(images));

  lightboxGallery.refresh();
}

function createImageMarkup(images) {
  return images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
      <li class="gallery-item">
        <a class="gallery-link" href="${largeImageURL}">
          <img class="gallery-image" src="${webformatURL}" alt="${tags}" />
        </a>
        <div class="gallery-info">
          <ul class="gallery-details">
            ${createImageDetailsMarkup(likes, views, comments, downloads)}
          </ul>
        </div>
      </li>
    `
    )
    .join('');
}

function createImageDetailsMarkup(likes, views, comments, downloads) {
  return `
    <li class="detail-item">
      <h3 class="detail-label">Likes</h3>
      <p class="detail-value">${likes}</p>
    </li>
    <li class="detail-item">
      <h3 class="detail-label">Views</h3>
      <p class="detail-value">${views}</p>
    </li>
    <li class="detail-item">
      <h3 class="detail-label">Comments</h3>
      <p class="detail-value">${comments}</p>
    </li>
    <li class="detail-item">
      <h3 class="detail-label">Downloads</h3>
      <p class="detail-value">${downloads}</p>
    </li>
  `;
}

export { displayImages };
