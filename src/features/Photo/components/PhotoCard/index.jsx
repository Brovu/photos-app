import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import styles from './PhotoCard.module.scss';

function PhotoCard(props) {
    const { photo, onEditClick, onRemoveClick } = props

    const handleEditClick = () => {
        if (onEditClick) onEditClick(photo)
    }

    const handleRemoveClick = () => {
        if (onRemoveClick) onRemoveClick(photo)
    }
    return (
        <div className={styles.photo}>
          <img src={photo.photo} alt={photo.title} />
    
          <div className={styles.overlay}>
            <h3 className={styles.title}>{photo.title}</h3>
    
            <div className={styles.actions}>
              <div>
                <Button outline size="sm" color="light" onClick={handleEditClick}>
                  Edit
                </Button>
              </div>
    
              <div>
                <Button outline size="sm" color="danger" onClick={handleRemoveClick}>
                  Remove
                </Button>
              </div>
            </div>
          </div>
        </div>
      );
}

PhotoCard.propTypes = {
    photo: PropTypes.object,
    onEditClick: PropTypes.func,
    onRemoveClick: PropTypes.func,
  };
  
  PhotoCard.defaultProps = {
    photo: {},
    onEditClick: null,
    onRemoveClick: null,
  }

export default PhotoCard;