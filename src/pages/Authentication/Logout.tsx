import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Logout = () => {
  const { logout } = useAuth0();

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 4429efe (This reverts commit 0ceb8ae3d82a9e82f0c517cb95e9051a25d99a27, reversing)
  return (
    <button
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
    >
      Log Out
    </button>
  );
<<<<<<< HEAD
=======
  return <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</button>;
>>>>>>> 8434a49 (ch: CI/CD configurations)
=======
>>>>>>> 4429efe (This reverts commit 0ceb8ae3d82a9e82f0c517cb95e9051a25d99a27, reversing)
};

export default Logout;
