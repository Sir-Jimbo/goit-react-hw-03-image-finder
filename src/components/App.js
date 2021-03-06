import React from 'react';
import imagesApi from '../services/ImagesApi';

import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import Loader from 'react-loader-spinner';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export class App extends React.Component {
  state = {
    images: [],
    isLoading: false,
    query: '',
    page: 1,
    error: null,
    showModal: false,
    originalImageURL: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.query;
    const nextQuery = this.state.query;
    if (prevQuery !== nextQuery) {
      this.fetchImages();
    }
  }

  fetchImages = () => {
    const { query, page } = this.state;
    this.setState({ isLoading: true });
    imagesApi
      .fetchImagesWithQuery(query, page)
      .then(images =>
        this.setState(prevState => ({
          images: [...prevState.images, ...images],
          page: prevState.page + 1,
        })),
      )
      .catch(error => this.setState({ error }))
      .finally(() => {
        this.setState({ isLoading: false });
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      });
  };

  handleSubmitForm = searchQuery => {
    this.setState({ images: [], query: searchQuery, page: 1 });
  };

  handleClickImage = largeImageURL => {
    this.openModal(largeImageURL);
  };

  openModal = largeImageURL =>
    this.setState({ showModal: true, originalImageURL: largeImageURL });

  closeModal = () => this.setState({ showModal: false, originalImageURL: '' });

  render() {
    const { images, isLoading, showModal, originalImageURL } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleSubmitForm} />
        <ImageGallery images={images} onImageClick={this.handleClickImage} />
        {showModal && (
          <Modal
            largeImageURL={originalImageURL}
            closeModal={this.closeModal}
          ></Modal>
        )}
        <div className="Btnwrap">
          {isLoading && (
            <Loader
              type="ThreeDots"
              color="#303f9f"
              height={50}
              width={50}
              timeout={3000}
            />
          )}
          {images.length > 0 && !isLoading && (
            <Button onClick={this.fetchImages} />
          )}
        </div>
      </>
    );
  }
}
