import React, { useState } from "react";

import SingUp from "./SignUp";
import Orders from "./Orders";

const Admin = () => {
  const [authorized, setAuthorized] = useState(false);
  return (
    <div
      className=" row"
      style={{ textAlign: "center", justifyContent: "center" }}
    >
      {authorized ? <Orders /> : <SingUp />}
    </div>
  );
};

export default Admin;
