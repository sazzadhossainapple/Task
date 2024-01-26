import React, { useState } from 'react';

const Problem1 = () => {
    const instialData = {
        name: '',
        status: '',
    };
    const [addData, setAddData] = useState(instialData);
    const [tableData, setTableData] = useState([]);

    const [show, setShow] = useState('all');

    // handle change
    const handleChange = (e) => {
        setAddData({ ...addData, [e.target.name]: e.target.value });
    };

    const handleClick = (val) => {
        setShow(val);
    };

    // submit data
    const handleSubmit = (e) => {
        e.preventDefault();

        const newData = {
            name: addData?.name,
            status: addData?.status,
        };
        console.log(newData);
        setTableData((prevData) => [...prevData, newData]);

        setAddData(instialData);
    };

    // data filtering
    const filteredData = tableData
        .filter((data) => {
            if (show === 'all') {
                return true;
            } else if (show === 'active') {
                return data.status.toLowerCase() === 'active';
            } else if (show === 'completed') {
                return data.status.toLowerCase() === 'completed';
            }
            return true;
        })
        .sort((a, b) => {
            // sort by statuts
            const order = ['active', 'completed', 'pending', 'archive'];
            console.log(order.indexOf(a));

            const A = order.indexOf(a.status.toLowerCase());
            const B = order.indexOf(b.status.toLowerCase());

            return A - B;
        });

    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className="text-center text-uppercase mb-5">Problem-1</h4>
                <div className="col-6 ">
                    <form
                        onSubmit={handleSubmit}
                        className="row gy-2 gx-3 align-items-center mb-4"
                    >
                        <div className="col-auto">
                            <input
                                type="text"
                                onChange={handleChange}
                                value={addData?.name}
                                name="name"
                                className="form-control"
                                placeholder="Name"
                            />
                        </div>
                        <div className="col-auto">
                            <input
                                type="text"
                                onChange={handleChange}
                                value={addData?.status}
                                name="status"
                                className="form-control"
                                placeholder="Status"
                            />
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
                <div className="col-8">
                    <ul
                        className="nav nav-pills mb-3"
                        id="pills-tab"
                        role="tablist"
                    >
                        <li className="nav-item">
                            <button
                                className={`nav-link ${
                                    show === 'all' && 'active'
                                }`}
                                type="button"
                                onClick={() => handleClick('all')}
                            >
                                All
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className={`nav-link ${
                                    show === 'active' && 'active'
                                }`}
                                type="button"
                                onClick={() => handleClick('active')}
                            >
                                Active
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className={`nav-link ${
                                    show === 'completed' && 'active'
                                }`}
                                type="button"
                                onClick={() => handleClick('completed')}
                            >
                                Completed
                            </button>
                        </li>
                    </ul>
                    <div className="tab-content"></div>
                    <table className="table table-striped ">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredData?.map((data, i) => (
                                <tr key={i}>
                                    <td>{data?.name}</td>
                                    <td>{data?.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Problem1;
