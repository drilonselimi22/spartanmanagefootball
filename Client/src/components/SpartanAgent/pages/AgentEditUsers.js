import axios from "axios";
import React, { useEffect, useState } from "react";
import SidebarAgent from "../SidebarAgent";

import Modal from 'react-bootstrap/Modal';
import Button from "react-bootstrap/Button";
import UserModal from "./UserModal";

function EditUserRoles() {


  const [userName, setUserName] = useState("");
  const [roles, setRoleName] = useState("admin");
  const [modalShow, setModalShow] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const toggleModal = () => {
    setShowModal(true);
  }

  const [posts, setPosts] = useState([]);
  const apiEndPoint = "https://localhost:7122/api/User";
  useEffect(() => {
    const getPosts = async () => {
      const { data: res } = await axios.get(apiEndPoint + "/GetUserDetails");
      setPosts(res);
      console.log(res, "res");

    };
    getPosts();
  }, []);

  const handleDelete = async (post) => {
    await axios.delete(apiEndPoint + "/Delete/" + post.userId);
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  // if (posts.length === 0) return <h2> Loading Users... </h2>;

  return (
    <>
      <div>
        <SidebarAgent /> 
      <div style={{
                position: "absolute",
                top: '10%',
                left: '30%'
            }}>
        <h2> There are {posts.length} Users </h2>
        <table className="table">
          <thead>
            <tr>
              <th width={"20%"}>Username</th>
              <th width={"20%"}>Email</th>
              <th width={"20%"}>Identity Number</th>
              <th width={"20%"}>Role</th>
              <th width={"10%"}>Update</th>
              <th width={"10%"}>Delete</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr>
                <td width={"20%"}> {post.username} </td>
                <td width={"20%"}> {post.email} </td>
                <td width={"20%"}> {post.identityNumber} </td>
                <td width={"20%"}> {post.roleName} </td>
                <td width={"10%"}>
                  <UserModal usernameModal={post.username} />

                  {/* </Link>  */}
                </td>
                <td width={"10%"}>
                  <>
                  <button type="button" class="btn btn-danger" onClick={handleShow}>Delete</button>

                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Do u really want to delete this User?</Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                      <button type="button" class="btn btn-danger" onClick={handleShow}>Delete</button>
                    </Modal.Footer>
                  </Modal>
                </>
                      
                  
                </td>
        </tr>
            ))}
      </tbody>
    </table>
      </div >
      </div>
    </>
  );
};

export default EditUserRoles;

