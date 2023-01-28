import React, { useEffect } from "react";
import axios from "axios";

import { Link } from "react-router-dom";

const HomePage = () => {
  const getUserData = async() => {
    try {
        await axios.post('/api/v1/user/getUserData',{},{
        headers:{
          Authorization : "Bearer "+ localStorage.getItem('token')
        }
      })

    } catch (error) {
      console.log(error);
    }
  };
  useEffect(()=>{
    getUserData();
  },[])
  return (
    <div>
      <h2>HOME PAGE</h2>
      <Link to={"/register"}>
        <button>Register</button>
      </Link>
    </div>
  );
};

export default HomePage;
