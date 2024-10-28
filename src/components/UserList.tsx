import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import UserCard from "./UserCard";
import { useFetchUsers } from "../hooks/useFetchUsers";
import Loading from "./Loading";
import "../styles/UserList.css";

/**
 * UserList Component
 *
 * Fetches and displays a list of users with infinite scrolling.
 * Shows a loading component for 3 seconds before displaying users.
 *
 * Features:
 * - Lazy loading of users as the user scrolls.
 * - Displays an error message if fetching fails.
 * - Indicates when there are no more users to load.
 */
const UserList: React.FC = () => {
  const { users, loading, error, hasMore, fetchMoreUsers } = useFetchUsers();
  const [showLoading, setShowLoading] = useState(true);

  // Show loading component for 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowLoading(false), 3000); // 3 seconds delay
    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  if (showLoading) {
    return <Loading />; // Show loading component initially
  }

  return (
    <div>
      {error && (
        <div className="error-container">
          <h1>Oops!</h1>
        </div>
      )}
      {!error && (
        <InfiniteScroll
          dataLength={users.length}
          next={fetchMoreUsers} // Fetch more users when scrolled to bottom
          hasMore={hasMore} // Control if more users are available
          loader={<p className="loading-message">Loading more users...</p>}
          endMessage={<p className="end-message">No more users to load.</p>}
        >
          <div className="user-list">
            {users.map((user) => (
              <UserCard key={user.id} user={user} />
            ))}
          </div>
        </InfiniteScroll>
      )}
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default UserList;
