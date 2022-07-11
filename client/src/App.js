import React, { useState } from "react";

// Api
import { createNewUser } from "./api/userApi";

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

  const createNewUserSubmit = async (username) => {
    const res = await createNewUser(username);
    if (res) setCurrentUser(res.data);
    else alert("Something went wrong while creating a user. Please try again");
    console.log(currentUser);
  };

  return <>
    <button onClick={() => createNewUserSubmit("newUser")}>New User</button>
  </>;
};

export default App;
