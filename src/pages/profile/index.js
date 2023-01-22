import React, { useContext } from "react";
import AddressCard from "../../components/address-card";
import UserDetailCard from "../../components/user-detail-card";
import { UserContext } from "../../context/user-context";
const Profile = () => {
  const userData = useContext(UserContext);

  if (!userData?.id) {
    return (
      <div className="text-lg text-dark-muted text-center py-4">
        Oops.. No User Selected
      </div>
    );
  }
  return (
    <div className="p-6 md:flex justify-start">
      <UserDetailCard user={userData} />
      <AddressCard detail={userData?.address} />
    </div>
  );
};

export default Profile;
