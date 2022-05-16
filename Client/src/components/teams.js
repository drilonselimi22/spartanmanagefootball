import React from 'react';
import stadiumimage from '../images/stadium.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap';

function Teams() {
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
                    <h1><span className="text-warning"> Teams</span></h1>
                </div>
            </div>

            <div className='w-75 justify-content-center align-items-center text-center' style={{
                margin: 'auto',
                marginTop: '40px'
            }}>
                <Table style={{
                    height: '40vh',
                    backgroundColor: '#1C5AB9'
                }}>
               
                    <tbody style={{textAlign:'left'}} className='text-white'>
                        <tr>

                            <td><b>Drita</b></td>
                            
                          
                        </tr>

                        <tr>
                            <td><b>Drenica</b></td>
                        
                        </tr>

                        <tr>
                            <td><b>Ulpiana</b></td>
                        </tr>

                        <tr>
                            <td><b>Ballkani</b></td>
                        </tr>

                        <tr>
                            <td><b>Dukagjini</b></td>
                        </tr>

                        <tr>
                            <td><b>Drita</b></td>
                        </tr>

                        <tr>
                            <td><b>Ulpiana</b></td>
                        </tr>

                    </tbody>
                </Table>
            </div>
        </div >
    );
};

export default Teams;