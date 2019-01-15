import React from "react";
import useStore from "../store/useStore";

const IdCardContainer = () => {
  const { currentUser } = useStore("CurrentUser");

  return <IdCard user={currentUser} />;
};

const IdCard = ({ user }) => {
  if (user) {
    return (
      <>
        <h3>ID Card for {user.name}</h3>
        {user.img && <img src={user.img} />}
      </>
    );
  } else {
    return <div>No current user</div>;
  }
};

export default IdCardContainer;
export { IdCard };
