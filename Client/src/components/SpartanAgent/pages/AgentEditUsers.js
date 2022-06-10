// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import Team from "./Team";
// import { Form, Button, Table } from "reactstrap";
// import { Link } from "react-router-dom";
// import SidebarAgent from "../SidebarAgent";
// import Users from "./Users";

// export default function AgentEditUsers() {
//   const [APIData, setAPIData] = useState([]);
//   const [UsersData, setUsersData] = useState(false);

//   useEffect(() => {
//     axios.get(`https://localhost:7122/api/User/GetUserDetails`)
//       .then((response) => {
//         setAPIData(response.data);
//         console.log(response)
//       })
//   }, [])

//   return (
//     <div>
//       <SidebarAgent />

//       <div
//         style={{
//           position: "absolute",
//           top: "10%",
//           left: "25%",
//           width: "1000px",
//         }}
//       >
//         <Table bordered>
//           <thead>
//             <tr>
//               <th width={"20%"}>Username</th>
//               <th width={"20%"}>Email</th>
//               <th width={"20%"}>Identity Number</th>
//               <th width={"20%"}>Role</th>

//             </tr>
//           </thead>
//           {UsersData ? (
//             APIData.map(
//               ({ data }) => (

//                 Username = data.username,
//                 email = data.email,
//                 identityNumber = data.identityNumber,
//                 roleName = data.roleName
//               )
//             )
//           ) : (
//             <h1></h1>
//           )}

//         </Table>
//       </div>
//     </div>
//   );
// }


