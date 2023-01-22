import React from "react";
import LineItem from "../line-item";

const UserDetailCard = ({ user }) => {
  return (
    <div>
      <ul className="w-60 flex items-center flex-col text-sm text-gray-700">
        <li className="flex items-center flex-col mb-2">
          <img
            className="w-16 h-16 rounded-full mr-2"
            src={user.profilepicture}
            alt={user.name}
          />
          <h4 className="text-dark-muted">{user.name}</h4>
        </li>
        <LineItem label="Username" value={user.username} />
        <LineItem label="E-mail" value={user.email} />
        <LineItem label="Phone" value={user.phone} />
        <LineItem label="Website" value={user.website} />
        <h5 className="text-light-muted text-xs border-t w-40 mx-4 mt-1 p-1 text-center">
          Company
        </h5>
        <LineItem label="Name" value={user.company.name} />
        <LineItem label="Catchphrase" value={user.company.catchPhrase} />
        <LineItem label="bs" value={user.company.bs} />
      </ul>
    </div>
  );
};

export default UserDetailCard;
