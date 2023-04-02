import React, { useEffect, useState } from "react";
import Navbar from "./navbar";
import { useNavigate } from "react-router-dom";
import account from "../services/appwriteConfig";
import swal from "sweetalert";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
    </div>
  );
}
