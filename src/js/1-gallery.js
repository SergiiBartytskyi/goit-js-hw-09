import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import images from './exemple';

const gallery = document.querySelector('.gallery');
gallery.innerHTML = render(images);

function render(arr) {
  return arr
    .map(
      ({ preview, original, description }) => `<li class="gallery-item">
  <a class="gallery-link" href="${original}">
    <img
      class="gallery-image"
      src="${preview}"      
      alt="${description}"
    />
  </a>
</li>
`
    )
    .join('');
}

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
