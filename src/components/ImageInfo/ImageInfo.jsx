import { Component } from 'react';
import imageAPI from 'services/ImagesApi';
import LoaderImage from 'components/Loader/Loader';
import Input from 'components/Input/Input'
import ImageErrorView from 'components/ImageErrorView/ImageErrorView';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Button from 'components/Button/Button';
import Modal from 'components/Modal/Modal'

export default class ImageInfo extends Component {
   state = {
      images: [],
      status: 'idle',
      error: null,
      page: 1,
      showBtn: true,
      loading: false,
      showModal: false,
      URL: '',
      ALT: '',
   };

   getSnapshotBeforeUpdate(prevProps, prevState) {
      const prevImages = prevState.images;

      if (prevImages.length > 0) {
         const listRef = document.querySelector('ul');
         return listRef.clientHeight;
      }

      return null;
   }

   componentDidUpdate(prevProps, prevState, snapshot) {
      const prevQuery = prevProps.query;
      const currentQuery = this.props.query;

      if (prevQuery !== currentQuery) {
         prevState.page = 1;
         this.setState({
            status: 'pending',
            images: [],
            showBtn: true,
         });

         this.fetchImages();
      }

      if (
         prevState.images.length !== this.state.images.length &&
         snapshot !== null
      ) {
         window.scrollTo({
            top: snapshot,
            behavior: 'smooth',
         });
      }
   }

   fetchImages = () => {
      const currentQuery = this.props.query;
      const currentPage = this.state.page;

      this.setState({ loading: true });

      imageAPI
         .fetchImage(currentQuery, currentPage)
         .then(({ hits }) => {
            if (hits.length === 0) {
               return Promise.reject(
                  new Error(`Bad search query :( We have no ${currentQuery} images`),
               );
            }

            if (hits.length < 12) {
               this.setState({ showBtn: false });
            }

            this.setState(prevState => ({
               images: [...prevState.images, ...hits],
               page: prevState.page + 1,
               status: 'resolved',
            }));
         })
         .catch(error => this.setState({ error, status: 'rejected' }))
         .finally(() => this.setState({ loading: false }));
   };

   toggleModal = () => {
      this.setState(({ showModal }) => ({
         showModal: !showModal,
      }));
   };

   handleImgClick = img => {
      this.setState({ URL: img.dataset.source, ALT: img.alt });

      this.toggleModal();
   };

   render() {
      const {
         images,
         status,
         error,
         showBtn,
         loading,
         showModal,
         URL,
         ALT,
      } = this.state;

      if (status === 'idle') {
         return (
            <Input text="Enter in the searchbar the images you want to search" />
         );
      }

      if (status === 'pending') {
         return <LoaderImage />;
      }

      if (status === 'rejected') {
         return <ImageErrorView message={error.message} />;
      }

      if (status === 'resolved') {
         return (
            <>
               <ImageGallery hits={images} onClick={this.handleImgClick} />
               {showModal && (
                  <Modal largeImgUrl={URL} imgAlt={ALT} onClose={this.toggleModal} />
               )}
               {showBtn && !loading && <Button onBtnClick={this.fetchImages} />}
               {loading && <LoaderImage />}
            </>
         );
      }
   }
}

