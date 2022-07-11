import React from 'react';
import axios from "axios";

const App = () => {

  const createNewUser = async () => {
    console.log("Create new user");
    const res = await axios.post("http://localhost:5000/user/", { username: "testUser" });
    console.log(res);
    if (res.status === 200)
      console.log(res.data);
  };

  return <>
    <button onClick={() => createNewUser()}>New User</button>
  </>;
};

export default App;
