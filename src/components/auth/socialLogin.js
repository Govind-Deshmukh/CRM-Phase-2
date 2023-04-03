import React from "react";
import account from "../services/appwriteConfig";
import Button from "@mui/material/Button";
import { Widgets } from "@mui/icons-material";
import "./style.css";
export default function SocialLogin() {
  const GoogleLogin = (e) => {
    e.preventDefault();
    console.log("Google Login");
    try {
      account.createOAuth2Session(
        "google",
        "http://localhost:3000/dashboard",
        "http://localhost:3000/login"
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div class="row">
        <div class="col-md-12">
          <a
            class="btn btn-lg btn-google btn-block btn-outline"
            onClick={(e) => GoogleLogin(e)}
          >
            <img src="https://img.icons8.com/color/16/000000/google-logo.png" />{" "}
            Login Using Google
          </a>
        </div>
      </div>
    </>
  );
}
