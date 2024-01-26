import React from 'react';
import { Modal } from 'react-bootstrap';

function ModalC({ show, handleClose }) {
    return (
        <Modal show={show} onHide={handleClose} size="lg" scrollable={true}>
            <Modal.Header closeButton>
                <Modal.Title>Contact Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <p>Id:1</p>
                    <p>Country Name:Bangladesh</p>
                    <p>Phone:43345345</p>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <button className="button-close btn" onClick={handleClose}>
                    Close
                </button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalC;
