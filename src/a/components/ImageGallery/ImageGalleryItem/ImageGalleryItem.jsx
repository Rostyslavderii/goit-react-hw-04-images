import styles from './ImageGalleryItem.module.scss';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({
  image: { largeImageURL, webformatURL, tags },
  openModal,
}) => {
  return (
    <li
      className={styles.ImageGalleryItem}
      onClick={() => openModal(largeImageURL, tags)}
    >
      <img
        className={styles.ImageGalleryItemImage}
        src={webformatURL}
        alt={tags}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.object.isRequired,
  openModal: PropTypes.func.isRequired,
};
