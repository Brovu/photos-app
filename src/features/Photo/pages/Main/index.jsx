import { Button, Container } from "reactstrap";
import Banner from "../../../../components/Banner";
import Images from "../../../../constants/image"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import PhotoList from "../../components/PhotoList";
import styles from './Main.module.scss'
import { removePhoto } from "../../photoSlice";

function Main(props) {
    const dispatch = useDispatch()
    const photos = useSelector(state => state.photos)

    const handleRemoveClick = (photo) => {
        const removePhotoId =  photo.id
        const action = removePhoto(removePhotoId)
        dispatch(action)
    }

    return ( 
        <div className="main-page">
        <Banner title="Your awesome Photos" backgroundUrl={Images.CITY_BG}/>
        <Container className="text-center mt-5">
                <Link to="/photos/add" className={styles.add}>
                    <Button type="primary" className={styles.btn}>
                    Add new photos
                    </Button>
                </Link>
        </Container>

        <PhotoList 
        photoList={photos}
        onPhotoRemoveClick={handleRemoveClick}
        />
        </div>
     );
}

export default Main;