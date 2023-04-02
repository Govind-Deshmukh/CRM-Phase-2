import appwriteConfig from "./appwriteConfig";
import { useState } from "react";
export default function validateSession() {
  const [userDetails, setUserDetails] = useState();

  const promise = appwriteConfig.get();
  promise.then(
    function(response) {
      console.log(response); // Success
      setUserDetails(response);
    },
    function(error) {
      console.log(error); // Failure
      return error;
    }
  );

  if (!userDetails) {
    return false;
  } else {
    return true;
  }
}
