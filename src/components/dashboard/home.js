import React, { useEffect, useState } from "react";
import account from "../services/appwriteConfig";
import { useNavigate } from "react-router";
import swal from "sweetalert";
import Navbar from "./navbar";
const Home = () => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState();

  const fetchUser = async () => {
    try {
      const data = await account.get();
      setUserDetails(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, [userDetails]);

  if (userDetails) {
    return (
      <>
        <Navbar />
      </>
    );
  } else {
    return (
      <div className="d-flex justify-content-center">
        <div class="card m-5" style={{ width: "18rem" }}>
          <div class="card-body">
            <h5 class="card-title">You are not logged in</h5>
            <h6 class="card-subtitle mb-2 text-muted">
              Please login first to continue . . .
            </h6>
            <button
              className="btn btn-primary text-center"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    );
  }
};

export default Home;
