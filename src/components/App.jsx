// import { Component } from 'react';
import { useState, useEffect } from 'react';
import { SearchBar } from './SearchBar/SearchBar';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { api } from './Services/api';
import { mapper } from './Services/Mapper';
import styles from './Styles.module.scss';

// import { createRef } from 'react';
// import { postsRequest } from './services/api';

export const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [request, setRequest] = useState(null);
  const [error, setError] = useState('');
  const [isShown, setIsShown] = useState(false);
  const [currentImage, setCurrentImage] = useState();

  // const fetchImages = () => {
  //   const { page, request } = this.state;
  //   api(page, request)
  //     .then(response =>
  //       this.setState(prevState => ({
  //         images: [...prevState.images, ...mapper(response.data.hits)],
  //       }))
  //     )
  //     .catch(error => {
  //       this.setState({ error: error.message });
  //     })
  //     .finally(() => {
  //       this.setState({ isLoading: false });
  //     });
  // };

  const handleSubmit = data => {
    setLoading(true);
    if (isShown) {
      setImages([]);
    }
    setRequest(data);
    setIsShown(true);
    if (error) {
      console.log(error);
    }
  };

  const changeCurrentImage = (url, tags) => {
    setCurrentImage({ url, tags }); //{url: url, tags: tags}
  };

  const onModalClose = () => {
    setCurrentImage(null);
  };

  useEffect(() => {
    if (!request) {
      return;
    }
    api(page, request)
      .then(response =>
        setImages(prevImages => [...prevImages, ...mapper(response.data.hits)])
      )
      .catch(error => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [request, page]);

  const onNextPage = () => {
    setPage(prevPage => prevPage + 1);
  };

  // const { isLoading, isShown, images, currentImage } = this.state;

  return (
    <div className={styles.App}>
      <SearchBar handleSubmit={handleSubmit} />
      {isLoading && <Loader />}
      {isShown && (
        <>
          <ImageGallery images={images} openModal={changeCurrentImage} />
          <Button text="Load More" handlerClick={onNextPage} />
        </>
      )}
      {currentImage && (
        <Modal currentImage={currentImage} closeModal={onModalClose} />
      )}
    </div>
  );
};
