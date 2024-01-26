import React, { useEffect, useState } from 'react';
import ModalA from './ModalA';
import ModalB from './ModalB';
import ModalC from './ModalC';

const Problem2 = () => {
    const [modalA, setModalA] = useState(false);
    const [modalB, setModalB] = useState(false);
    const [modalC, setModalC] = useState(false);
    const [pageCount, setPageCount] = useState(1);
    const [limit, setLimit] = useState(10);

    const [allContact, setAllContact] = useState([]);
    const [usContact, setUSContact] = useState([]);

    const [isLoading, setIsLoading] = useState(true);

    const [searchA, setSearchA] = useState('');
    const [searchB, setSearchB] = useState('');

    useEffect(() => {
        getContactList();
        getUSContactList();
    }, [searchA, searchB]);

    const handleModalAClose = () => setModalA(false);
    const handleModalShow = () => setModalA(true);
    const handleModalBClose = () => setModalB(false);
    const handleModalBShow = () => setModalB(true);
    const handleModalCClose = () => setModalC(false);
    const handleModalCShow = () => setModalC(true);

    // get all contact list
    function getContactList() {
        const url = `https://contact.mediusware.com/api/contacts/?page=${pageCount}&page_size=${limit}&search=${searchA}`;
        fetch(url, {
            method: 'GET',
        })
            .then((res) => res.json())
            .then((data) => {
                setPageCount(data?.count);
                setAllContact(data?.results);
                setIsLoading(false);
            });
    }

    //    get all filter  United States conatct list

    function getUSContactList() {
        const url = `https://contact.mediusware.com/api/country-contacts/United States/?search=${searchB}`;
        fetch(url, {
            method: 'GET',
        })
            .then((res) => res.json())
            .then((data) => {
                setUSContact(data?.results);
                setIsLoading(false);
            });
    }

    if (isLoading) {
        return (
            <div className="min-vh-100 d-flex align-items-center justify-content-center">
                loading...
            </div>
        );
    }

    return (
        <>
            <div className="container">
                <div className="row justify-content-center mt-5">
                    <h4 className="text-center text-uppercase mb-5">
                        Problem-2
                    </h4>

                    <div className="d-flex justify-content-center gap-3">
                        <button
                            onClick={handleModalShow}
                            className="btn btn-lg btn-outline-primary"
                            type="button"
                        >
                            All Contacts
                        </button>
                        <button
                            onClick={handleModalBShow}
                            className="btn btn-lg btn-outline-warning"
                            type="button"
                        >
                            US Contacts
                        </button>
                    </div>
                </div>
            </div>
            <ModalA
                show={modalA}
                handleClose={handleModalAClose}
                allContact={allContact}
                handleModalCShow={handleModalCShow}
                setSearchA={setSearchA}
                searchA={searchA}
            />
            <ModalB
                show={modalB}
                handleClose={handleModalBClose}
                usContact={usContact}
                handleModalCShow={handleModalCShow}
                setSearchB={setSearchB}
                searchB={searchB}
            />
            <ModalC show={modalC} handleClose={handleModalCClose} />
        </>
    );
};

export default Problem2;
