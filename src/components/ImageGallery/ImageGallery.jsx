import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import styles from '../Styles.module.scss';
import PropTypes from 'prop-types';

export const ImageGallery = ({ images, openModal = () => {} }) => {
  return (
    <>
      <ul className={styles.ImageGallery}>
        {images.map(image => (
          <ImageGalleryItem
            key={image.id}
            image={image}
            openModal={openModal}
          />
        ))}
      </ul>
    </>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  openModal: PropTypes.func.isRequired,
};
