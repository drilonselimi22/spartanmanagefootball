import React from 'react';

import stadiumimage from '../images/stadium.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap';

function Match() {
    return (
        <div>
            <div style={{
                backgroundImage: `url(${stadiumimage})`,
                height: '40vh',
                objectFit: "cover"
            }}>
                <div style={{
                    position: "absolute",
                    top: '50%',
                    left: '48%',
                    transform: 'translate(-50%, -50%)',
                    color: 'white'
                }}>
                    <h1>Match<span className="text-warning"> Fixtures</span></h1>
                </div>
            </div>

            <div className='w-75 justify-content-center align-items-center text-center' style={{
                margin: 'auto',
                marginTop: '50px'
            }}>
                <Table style={{
                    backgroundColor: '#1C5AB9'
                }}>
                    <thead>
                        <tr>
                            <th className='text-warning'>First Team</th>
                            <th></th>
                            <th className='text-warning'>Second Team</th>
                            <th className='text-warning'>Date</th>
                        </tr>
                    </thead>
                    <tbody className='text-white'>
                        <tr>
                            <td>Drita</td>
                            <td>vs</td>
                            <td>Feronikeli</td>
                            <td>21 August 2022 - 5:00 pm</td>
                        </tr>

                        <tr>
                            <td>Drenica</td>
                            <td>vs</td>
                            <td>Gjilani</td>
                            <td>22 August 2022 - 4:00 pm</td>
                        </tr>

                        <tr>
                            <td>Ulpiana</td>
                            <td>vs</td>
                            <td>Malisheva</td>
                            <td>23 August 2022 - 5:00 pm</td>
                        </tr>

                        <tr>
                            <td>Ballkani</td>
                            <td>vs</td>
                            <td>Llapio</td>
                            <td>25 August 2022 - 3:00 pm</td>
                        </tr>

                        <tr>
                            <td>Dukagjini</td>
                            <td>vs</td>
                            <td>Drita</td>
                            <td>26 August 2022 - 5:00 pm</td>
                        </tr>

                        <tr>
                            <td>Drita</td>
                            <td>vs</td>
                            <td>Malisheva</td>
                            <td>27 August 2022 - 2:00 pm</td>
                        </tr>

                        <tr>
                            <td>Ulpiana</td>
                            <td>vs</td>
                            <td>Drita</td>
                            <td>27 August 2022 - 8:00 pm</td>
                        </tr>

                    </tbody>
                </Table>
            </div>
        </div >
    );
};

export default Match;