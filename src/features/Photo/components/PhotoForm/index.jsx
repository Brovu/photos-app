import { PHOTO_CATEGORY_OPTIONS } from 'constants/catagory';
import Select from 'react-select';
import PropTypes from 'prop-types';
import React from 'react';
import { Button, FormGroup, Spinner, Input, Label, Row, Container } from 'reactstrap';
import Images from '../../../../constants/image';
import { Formik, Form, FastField } from 'formik';
import InputField from 'custom-fields/InputField';
import SelectField from 'custom-fields/SelectField';
import RandomPhotoField from 'custom-fields/RandomPhotoField';
import * as Yub from 'yup'


function PhotoForm(props) {
    const { initialValues } = props
    
    const validationSchema = Yub.object().shape({
        title: Yub.string().required('This is a required field'),

        catagoryId: Yub.number().required('This is a required field').nullable(),

        photo: Yub.string().required('This is a required field'),
    })
        return (
          <Container className='mt-5'>
                 <Formik 
                 initialValues={initialValues}
                 validationSchema={validationSchema}
                 onSubmit={props.onSubmit}
                 >
                    {formikProps => {
                        const { values, errors, touched, isSubmitting} = formikProps
                        console.log({ values, errors, touched })
                        return(
                            <Form>
                            <FastField 
                                name="title"
                                component={InputField}
                                label="Title"
                                placeholder="Eg: Pro cute"
                            />
                            <FastField 
                                name="catagoryId"
                                component={SelectField}
                                label="Catagory"
                                placeholder="What is your photo's catagory?"
                                options={PHOTO_CATEGORY_OPTIONS}
                            />
                            <FastField 
                                name="photo"
                                component={RandomPhotoField}
                                label="Photo"
                            />
        
                            <FormGroup>
                                <div>
                                    <Button type="submit" color='primary'>
                                        {isSubmitting && <Spinner size="sm" />}
                                        Add to Album
                                        </Button>
                                </div>
                            </FormGroup>
                          </Form>
                        )
                    }}
                 </Formik>
           </Container>
        );
        }
        PhotoForm.propTypes = {
            onSubmit: PropTypes.func,
          };
export default PhotoForm;