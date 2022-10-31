import { useEffect } from 'react';
import styles from '../Styles.module.scss';
import PropTypes from 'prop-types';
import { Loader } from 'components/Loader/Loader';

export const Modal = ({ closeModal, currentImage: { url, tags } }) => {
  const [loaded, setLoaded]
  useEffect(() => {
    closeByEsc = () => {
      if (e.code === 'Escape') {
        closeModal();
      }
      window.addEventListener('keydown', closeByEsc);
    };
    return () => {
      window.removeEventListener('keydown', closeByEsc);
    };
  }, [closeModal]);

  const closeByBackdrop = evt => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const loadHendler = () => { //
    setLoaded(true);
  }

  return (
    <div className={styles.Overlay} onClick={closeByBackdrop}>
      <div className={styles.Modal}>
        <button className={styles.Button} onClick={closeModal}>
          &#9747;
        </button>
        <img
          src={url}
          alt={tags}
          onLoad={loadHendler}
          style={{ display: loaded ? 'block' : 'none' }} />
        {!loaded && <Loader />}
      </div>
    </div>
  );
};
