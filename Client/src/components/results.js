import React from 'react';

import stadiumimage from '../images/stadium.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap';
function Results() {
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
                    <h1>Match<span className="text-warning"> Results</span></h1>
                </div>
            </div>

            <div className='w-75 justify-content-center align-items-center text-center' style={{
                margin: 'auto',
                marginTop: '50px'
            }}>
                
                <Table striped bordered hover>
                
                    <thead>
                        <tr>
                            <th className='text-warning'>First Team</th>
                            <th className='text-warning'>Result</th>
                            <th className='text-warning'>Second Team</th>
                            <th className='text-warning'>Date</th>
                        </tr>
                    </thead>
                    <tbody className='text-black'>
                        <tr>   
                        
                            <td>Drita</td>
                            <td><b>1-0</b></td>
                            <td>Feronikeli</td>
                            <td>21 August 2022</td>
                        </tr>

                        <tr>
                            <td>Drenica</td>
                            <td><b>2-0</b></td>
                            <td>Gjilani</td>
                            <td>22 August 2022</td>
                        </tr>

                        <tr>
                            <td>Ulpiana</td>
                            <td><b>2-1</b></td>
                            <td>Malisheva</td>
                            <td>23 August 2022</td>
                        </tr>

                        <tr>
                            <td>Ballkani</td>
                            <td><b>1-2</b></td>
                            <td>Llapi</td>
                            <td>25 August 2022</td>
                        </tr>

                        <tr>
                            <td>Dukagjini</td>
                            <td><b>2-3</b></td>
                            <td>Drita</td>
                            <td>26 August 2022</td>
                        </tr>

                        <tr>
                            <td>Drita</td>
                            <td><b>4-0</b></td>
                            <td>Malisheva</td>
                            <td>27 August 2022</td>
                        </tr>

                        <tr>
                            <td>Ulpiana</td>
                            <td><b>2-2</b></td>
                            <td>Drita</td>
                            <td>27 August 2022</td>
                        </tr>

                    </tbody>
                </Table>
            </div>
        </div >
    );
};


export default Results;
