import React, { useEffect, useState } from "react";
import UserService from "../../api/user-service";

function Profile() {
  let [user, setUser] = useState(null);

  useEffect(() => {
    UserService.getProfile().then((response) => setUser(response.data));
  }, []);

  return <>{user ? JSON.stringify(user) : null}</>;
}

export default Profile;
