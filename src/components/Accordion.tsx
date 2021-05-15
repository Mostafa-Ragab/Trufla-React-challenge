import React, { useState } from "react";
import AccordionItem from "./AccordionItem";
import { DataTypes } from "../providers/users.providers";
type UsersTypes = {
  usersList: DataTypes;
};
const Accordion: React.FC<UsersTypes> = ({ usersList }) => {
  const [activeIndex, setActiveIndex] = useState(1);
  const renderedUsers = usersList.users
    //sort users by follower count
    .sort((a, b) => b.following.length - a.following.length)
    .map((user, index) => {
      const showDescription = index === activeIndex ? "show-description" : "";
      const fontWeightBold = index === activeIndex ? "font-weight-bold" : "";
      return (
        <AccordionItem
          showDescription={showDescription}
          fontWeightBold={fontWeightBold}
          user={user}
          index={index}
          onClick={() => {
            setActiveIndex(index);
          }}
          key={user.id}
        />
      );
    });

  return (
    <div className="users">
      <h1 className="users__title">USERS</h1>
      <dl className="users__list">{renderedUsers}</dl>
    </div>
  );
};

export default Accordion;
