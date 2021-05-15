import React, { useContext } from "react";
import InterestsContext from "../contexts/interests/interests.context";
import { UsersContext } from "../providers/users.providers";
import { usersTypes } from "../providers/users.providers";
type Props = {
  showDescription: string;
  fontWeightBold: string;
  user: usersTypes;
  index: number;
  onClick: () => void;
};
const AccordionItem: React.FC<Props> = ({
  showDescription,
  fontWeightBold,
  user,
  index,
  onClick,
}) => {
  const interests = useContext(InterestsContext);
  const { clearInterestsFromUser, clearUserFromList, users } =
    useContext(UsersContext);

  return (
    <>
      <div className="users__user" key={user.id}>
        <dt className="users__user-header">
          <div
            className="remove-button"
            onClick={() => clearUserFromList(user.id)}
          >
            &#10005;
          </div>
          <button
            aria-controls={`users${index + 1}_desc`}
            data-qa="users__user-button"
            className={`users__user-button ${fontWeightBold}`}
            onClick={onClick}
          >
            {user.name}
          </button>
        </dt>

        <dd>
          {" "}
          <p
            id={`users${index + 2}_desc`}
            data-qa="users__desc"
            className={`users__desc ${showDescription}`}
          >
            {/* Show followers count for each user */}
            Follower Count:
            {users.filter((usr) => usr.following.includes(user.id)).length}
          </p>
          {user.interests
            ? user.interests.map((int, idx) => (
                <div key={idx}>
                  {" "}
                  {interests
                    .filter((interest) => interest.id === int)
                    .map((interest) => (
                      <div className={` users__content`} key={interest.id}>
                        <p
                          id={`users${index + 2}_desc`}
                          data-qa="users__desc"
                          className={`users__desc ${showDescription}`}
                        >
                          {interest.name}
                        </p>
                        <div
                          className={`remove-button  users__desc ${showDescription}`}
                          id={`users${index + 2}_desc`}
                          data-qa="users__desc"
                          onClick={() => clearInterestsFromUser(user.id, int)}
                        >
                          &#10005;
                        </div>
                      </div>
                    ))}
                </div>
              ))
            : false}
        </dd>
      </div>
    </>
  );
};

export default AccordionItem;
