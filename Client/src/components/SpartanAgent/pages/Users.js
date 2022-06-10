// import React, { useState } from "react";
// import { Form, Button, Table } from "reactstrap";
// import { Link } from "react-router-dom";
// import axios from "axios";
// export default function Users(props) {
//   const { Username, RoleName, Email, IdentityNumber} = props;
//   const [token, setToken] = useState("");

//    function EditUserRoles(e) {
    
//     axios({
//       method: "put",
//       url: `https://localhost:7122/api/User/EditUserRoles`,
//       headers: {
//       },
//       data: {
//         Username: Username,
//         RoleName: RoleName,
        
//       },
//     })
//       .then((res) => {
//         console.log("succeded", res.data);
//         window.location.reload()
//       })
//       .catch((error) => {
//           console.log("failed");
//           });
//          } 
//   return (
//     <div>
//       <Table bordered>
//         <tbody>
//           <tr>
//             <td width={"20%"}>{Username}</td>
//             <td width={"20%"}>{RoleName}</td>
//             <td width={"20%"}>{Email} </td>
//             <td width={"20%"}>{IdentityNumber}</td>
//           </tr>
//         </tbody>
//       </Table>
//     </div>
//   );
// }

