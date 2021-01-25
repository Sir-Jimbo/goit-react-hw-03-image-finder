import Searchbar from 'components/Searchbar/Searchbar'
import ImageInfo from 'components/ImageInfo/ImageInfo'
import { Component } from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

export default class ImageFinder extends Component {
   state = {
      searchQuery: '',
   };

   handleFormSubmit = query => {
      this.setState({
         searchQuery: query,
      });
   };

   render() {
      const { searchQuery } = this.state;

      return (
         <div className="App">
            <Searchbar onSubmit={this.handleFormSubmit} />
            <ImageInfo query={searchQuery} />
            <ToastContainer autoClose={2500} />
         </div>
      );
   }
}
