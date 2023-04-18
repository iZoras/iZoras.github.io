import React from 'react';
import "../../styles/modal-styles/thankYouMadal.css"
import OrangeButton from '../button';

interface Props {
  onClose: () => void;
}

const ThankYouModal: React.FC<Props> = ({ onClose }) => {
  return (
    <div onClick = {onClose} className="modal" data-testid="modal">
      <div className="modal-content">
        <div className="modal-header">
          
          <OrangeButton className="close-btn" onClick={onClose}>
          ✓
          </OrangeButton>
        </div>
        <div className="modal-body">
          <p>Thank you for your purchase!</p>
        </div>
      </div>
    </div>
  );
};

export default ThankYouModal;
