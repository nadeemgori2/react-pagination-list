import React from "react";
import "../styles/Loading.css";

/**
 * Loading Component
 *
 * Displays a loading animation while data is being fetched.
 * This provides users with a visual cue that content is loading.
 *
 * Usage:
 * Render conditionally based on a loading state.
 * Example:
 * {isLoading && <Loading />}
 */
const Loading: React.FC = () => {
  return (
    <div className="loading">
      <div className="loading-circle">
        <div className="inner-circle"></div>
      </div>
    </div>
  );
};

export default Loading;
