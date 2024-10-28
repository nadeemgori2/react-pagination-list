import React from "react";
import { UserCardProps } from "../types/User";
import "../styles/UserCard.css";

/**
 * UserCard Component
 *
 * Displays user information for wider screens including their avatar, name, and "email".
 * Displays user information for smaller devices including their avatar, name.
 * Designed for use in a list of users, adapting layout based on screen size.
 *
 * Props:
 * - user: The user object containing details to be displayed.
 */
const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <>
      <div className="user-card">
        <div className="user-content">
          <img
            src={user.avatar}
            alt={`${user.first_name || `User`} ${user.last_name || `image`}`}
            className="user-image"
          />
          <h3 className="user-name">{`${user.first_name || `User`} ${user.last_name || `name`}`}</h3>
        </div>
        <p className="user-email">{user.email || `User email`}</p>
      </div>
    </>
  );
};

export default UserCard;
