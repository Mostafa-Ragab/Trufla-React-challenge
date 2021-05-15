import React, { createContext, useState } from "react";

// import { filterInterestFromUser } from "./users.utils";
import Users from "../contexts/users.json";

export type usersTypes = {
  id: number;
  name: string;
  following: number[];
  interests?: number[];
};

export type Interests = {
  id: number;
  name: string;
};

export interface DataTypes {
  users: Array<usersTypes>;
  clearUserFromList: (userId: number) => void;
  clearInterestsFromUser: (userId: number, int: number) => void;
}

export const UsersContext = createContext<DataTypes>({
  users: [],
  clearUserFromList: () => {},
  clearInterestsFromUser: () => {},
});

const UsersProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [users, setUsers] = useState<usersTypes[]>(Users);

  const clearUserFromList = (userId: number) => {
    return setUsers(users.filter((usr) => usr.id !== userId));
  };
  const clearInterestsFromUser = (usrId: number, interest: number) => {
    return setUsers(
      users.map((usr) =>
        usr.id === usrId
          ? {
              ...usr,
              interests: usr.interests?.filter((hobby) => hobby !== interest),
            }
          : usr
      )
    );
  };
  return (
    <UsersContext.Provider
      value={{
        users,
        clearUserFromList,
        clearInterestsFromUser,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export default UsersProvider;
