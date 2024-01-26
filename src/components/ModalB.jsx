import React from 'react';
import { Button, Modal } from 'react-bootstrap';

export default function ModalB({
    show,
    handleClose,
    usContact,
    handleModalCShow,
    searchB,
    setSearchB,
}) {
    return (
        <Modal show={show} onHide={handleClose} size="lg" scrollable={true}>
            <Modal.Header closeButton>
                <Modal.Title>Modal B</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <div class="mb-3">
                        <input
                            value={searchB}
                            onChange={(e) => setSearchB(e.target.value)}
                            type="text"
                            class="form-control"
                            id="search"
                            placeholder="search.."
                        />
                    </div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Country Name</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {usContact?.map((data) => (
                                <tr key={data?.id}>
                                    <th>{data?.id}</th>
                                    <td>{data?.country?.name}</td>
                                    <td>{data?.phone}</td>
                                    <td>
                                        <button
                                            onClick={handleModalCShow}
                                            className="btn btn-info"
                                        >
                                            Details
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
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
