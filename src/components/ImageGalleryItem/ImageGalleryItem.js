import s from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';
import Img from '../../images/No_Image-512.webp';

const ImageGalleryItem = ({ webformatURL, tags, clickOnItem, index, largeImageURL }) => (
    <div className={s.ImageGalleryItem}>
        <li key={index}>
            <img
                src={webformatURL ? webformatURL : Img}
                alt={tags}
                onClick={() => clickOnItem(largeImageURL, tags)}
                className={s.ImageGalleryItemImage} />
        </li>
    </div>
)

ImageGalleryItem.defaultProps = {
    webformatURL: Img,
};

ImageGalleryItem.propTypes = {
    webformatURL: PropTypes.string,
    tags: PropTypes.string.isRequired,
    clickOnItem: PropTypes.func,
};

export default ImageGalleryItem;