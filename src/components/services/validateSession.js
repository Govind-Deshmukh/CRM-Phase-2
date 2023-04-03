import account from "./appwriteConfig";
import { useState } from "react";

export default function validateSession() {
  const [userDetails, setUserDetails] = useState();
  try {
    const data = account.get();
    setUserDetails(data);
  } catch (error) {
    console.log(error);
    return false;
  }

  if (userDetails) {
    return true;
  }
  return false;
}
