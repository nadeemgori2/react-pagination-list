/**
 * User Interface
 *
 * Represents a user object with details such as id, email, name, and avatar.
 */
export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

/**
 * UserCardProps Interface
 *
 * Defines the prop structure for the UserCard component.
 * - user: A single User object to display.
 */
export interface UserCardProps {
  user: User;
}

/**
 * UseFetchUsersProps Interface
 *
 * Defines the structure of the return value from the useFetchUsers hook.
 * - users: Array of User objects.
 * - loading: Boolean indicating if users are being fetched.
 * - error: Error message or null if no error.
 * - hasMore: Boolean indicating if there are more users to load.
 * - fetchMoreUsers: Function to load more users.
 */
export interface UseFetchUsersProps {
  users: User[];
  loading: boolean;
  error: string | null;
  hasMore: boolean;
  fetchMoreUsers: () => void;
}
