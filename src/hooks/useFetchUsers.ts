import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { UseFetchUsersProps, User } from "../types/User";

/**
 * Defines the shape of the return value from the useFetchUsers hook.
 *
 * Properties:
 * - users: Array of User objects fetched from the API.
 * - loading: Boolean indicating if data is currently being fetched.
 * - error: Error message if the fetch fails, otherwise null.
 * - hasMore: Boolean indicating if more users are available to load.
 * - fetchMoreUsers: Function to fetch additional users when called.
 */
export const useFetchUsers = (): UseFetchUsersProps => {
  const [users, setUsers] = useState<User[]>([]);
  const [page, setPage] = useState(1); // Start with page 1
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(true);

  const fetchMoreUsers = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(`https://reqres.in/api/users`, {
        params: { page },
      });

      const newUsers = response.data.data;

      if (newUsers.length === 0) {
        setHasMore(false);
      } else {
        setUsers((prevUsers) => [...prevUsers, ...newUsers]);
        setPage((prevPage) => prevPage + 1);
      }
    } catch (err: any) {
      setError("Failed to load users.");
    } finally {
      setLoading(false);
    }
  }, [page]); // Add 'page' as a dependency if it's used in the function

  useEffect(() => {
    fetchMoreUsers(); // Fetch users on the initial render
  }, []);

  return {
    users,
    loading,
    error,
    hasMore,
    fetchMoreUsers,
  };
};
