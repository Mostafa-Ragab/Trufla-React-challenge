import React, { useContext } from "react";
import Accordion from "./Accordion";
import { UsersContext } from "../providers/users.providers";

const UserList = () => {
  const users = useContext(UsersContext);

  return (
    <div className="container">
      <div className="component">
        <Accordion usersList={users} />
      </div>
      <div className="attribution">
        Challenge by
        <a href="https://www.trufla.com/" target="_blank" rel="noreferrer">
          Trufla Technologies.
        </a>
        Coded by <a href="https://github.com/Mostafa-Ragab"> Mostafa raslan.</a>
      </div>
    </div>
  );
};

export default UserList;
