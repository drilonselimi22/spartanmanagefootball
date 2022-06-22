import axios from "axios";
import React, { useEffect, useState } from "react";
import SidebarAgent from "../SidebarAgent";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import UserModal from "./UserModal";
import PaginatedUsers from "./PaginationUsers/PaginatedUsers";

function EditUserRoles() { 
 
 

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
 

  return (
    <>
       <PaginatedUsers data={posts}/>
    </>
  );
}

export default EditUserRoles;
