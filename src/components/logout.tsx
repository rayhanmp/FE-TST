import { logout } from './auth';

const LogoutComponent = () => {
  const handleLogout = () => {
    logout();
  };

  return (
    <button onClick={handleLogout}>
      Logout
    </button>
  );
};

export default LogoutComponent;
