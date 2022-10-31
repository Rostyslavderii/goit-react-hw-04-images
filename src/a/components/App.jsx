import { useState, useEffect } from 'react';

import { Component } from 'react';
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
  const [isShown, setIsShown] = useState(false);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [request, setRequest] = useState(null);
  const [error, setError] = useState('');
  const [currentImage, setCurrentImage] = useState(null);

  useEffect(() => {
    if (request) {
      setRequest(true) //
      const { page, request } = this.state;
      api(page, request)
        .then(response =>

          setImages(prevMovies => [...prevMovies, ...mapper(response.data.hits)]))
        // this.setState(prevState => ({
        //   images: [...prevState.images, ...mapper(response.data.hits)],
        // }))
        .catch(error => {
          setError(error.message)
          // this.setState({ error: error.message });
        })
        .finally(() => setIsLoading(false))

      // this.setState({ isLoading: false });
    };

  }, [request, page]);

  const deleteContact = ContactID => {
    setContact(prevContacts => prevContacts.filter(
      contact => contact.id !== e.target.value
    ),)

  }

  // fetchImages = () => {
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

  const handleSubmit = data => { // 111
    setIsLoading({ isLoading: true });
    if (this.state.isShown) {
      this.setState({ images: [] });
    }
    this.setState({ request: data });
    this.setState({ isShown: true });
  };

  const changeCurrentImage = (url, tags) => {
    setCurrentImage({ currentImage: { url, tags } }); //{url: url, tags: tags}
  };


  const onModalClose = () => { //!!
    setCurrentImage(null);
  };


const onNextPage = () => {
    setPage(prevPage => prevPage +1)
  };


  render() {
    const { isLoading, isShown, images, currentImage } = this.state;
    return (
      <div className={styles.App}>
        <SearchBar handleSubmit={this.handleSubmit} />
        {isLoading && <Loader />}
        {isShown && (
          <>
            <ImageGallery images={images} openModal={this.changeCurrentImage} />
            <Button text="Load More" handlerClick={this.onNextPage} />
          </>
        )}
        {currentImage && (
          <Modal currentImage={currentImage} closeModal={this.onModalClose} />
        )}
      </div>
    );
  }
}

//   render() {
//     // console.log(this.btnRef.current);
//     // const {posts, error, isLoading} = this.state; //!!!
//     return (
//       <>
//         {/* {error && <Error className="error">Some error occured: {error}</Error>}
//         {isLoading && <Loader className="loader">loading</Loader>} */}
//         <Section title="Phonebook">
//           <FormAddContact
//             addNewContact={this.addNewContact}
//             handleInput={this.handleInput}
//           />
//         </Section>
//         <Section title="Contacts">
//           <Input handleInput={this.handleInput} />
//           <ListContacts
//             contacts={this.state.contacts}
//             filter={this.state.filter}
//             userDelete={this.deleteContact}
//           />
//         </Section>
//         <button className="btn" onClick={this.onNextPage}>
//           NextPage</button>
//         {<modal.isVisible && <modal >
//           <h2>{modal.data.title}</h2>
//           <p>{modal.data.body}</p>
//         </modal>}
//         {/* <button ref={this.btnRef} className="btn" onChange={this.onNextPage}>
//           {' '}
//           NextPage
//         </button> */}
//       </>
//     );
//   }
// }

export { App };
