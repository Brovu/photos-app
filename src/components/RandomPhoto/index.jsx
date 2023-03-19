import PropTypes from 'prop-types'
import { Button } from 'reactstrap';
import styles from './RandomPhoto.module.scss'


const getRandomImageUrl = () => {
    const randomUrl = Math.trunc(Math.random() * 1000)
    return `https://picsum.photos/id/${randomUrl}/300/300`;
}

function RandomPhoto(props) {

    const { name, imageUrl, onImageUrlChange, onRamdomButtonBlur } = props
    const handleRandomPhotoClick = () => {
        if(onImageUrlChange) {
            const randomImageUrl = getRandomImageUrl()
            onImageUrlChange(randomImageUrl)
        }
    }
    return ( 
        <div className={styles.main}>
            <div className={styles.btn}>
                <Button
                    outline
                    name={name}
                    onBlur={onRamdomButtonBlur}
                    onClick={handleRandomPhotoClick}
                    color="primary" 
                >
                    Random a Photo
                </Button>
            </div>
        <div className={styles.photo}>
        {imageUrl && (
          <img
            src={imageUrl}
            alt="Ooops ... not found. Please click random again!"
            onError={handleRandomPhotoClick}
          />
        )}
      </div>
        </div>
     );
}

RandomPhoto.propTypes = {
  name: PropTypes.string,
  imageUrl: PropTypes.string,
  onImageUrlChange: PropTypes.func,
  onRandomButtonBlur: PropTypes.func,
};

RandomPhoto.defaultProps = {
  name: '',
  imageUrl: '',
  onImageUrlChange: null,
  onRandomButtonBlur: null,
}

export default RandomPhoto;