import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Banner from "../../../../components/Banner";
import Header from "../../../../components/Header";
import PhotoForm from "../../components/PhotoForm";
import { addPhoto } from "../../photoSlice";

function Add() {
    const dispatch = useDispatch()
    const history = useNavigate()
    const initialValues = {
        title: '',
        catagoryId: null,
        photo: ''
    }

    const handleSubmitClick = (values) => {
        return new Promise(resolve => {
        console.log('Submited!! ', values)
        
        setTimeout(() => {
            const action = addPhoto(values)
            console.log({action})
            dispatch(action)
    
            history('/photos')
        }, 3000)
        })
        
    }
    return ( 
        <div className="Add-page">
            <Header />
            <Banner title="Pick your amazing Photos :D" />
            <PhotoForm initialValues={initialValues} onSubmit={handleSubmitClick} />
        </div>
     );
}

export default Add;