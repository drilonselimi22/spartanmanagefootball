import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { Button, Modal, ModalHeader, ModalFooter, ModalBody } from 'reactstrap'
import axios from 'axios';
import {Form} from 'react-bootstrap'
export default function UserModal(props) {
    const { usernameModal } = props
    const [inputUsername, setInputUsername] = useState('')
    const [roles, setRoles] = useState('admin')

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
    function handleRoleChange(e){
        e.preventDefault()
        setRoles(e.target.value)
        console.log("ROLes666666", roles)
    }
    //modal
     const sendDataToAPI = (e) => {
         e.preventDefault();
         axios.put("https://localhost:7122/api/User/EditUserRoles", {
             username: usernameModal,
             roles: [roles],
         });
     };



    //SETROLEs
    // function handleChange(e) {
    //     e.preventDefault()

    //     setRoles(e.target.value)
    // }
    return (
        <div>
            <Button color="primary" onClick={toggle}><i class="far fa-edit"></i>edit</Button>
            <Modal isOpen={modal} toggle={toggle} style={{ width: "500px" }}>
                <ModalHeader toggle={toggle}>Form REGLOG</ModalHeader>
                <ModalBody>
              
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="username"
                value={usernameModal}
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
                <Form.Label>Role</Form.Label>
               <form onSubmit={handleRoleChange}>
                        <select name="roles" id="roles" onChange={handleRoleChange}>
                        <option value="admin">Admin</option>
                        <option value="agent">Agent</option>
                    </select>
                    </form> 
            </Form.Group>
          </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={sendDataToAPI}>Save</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}
