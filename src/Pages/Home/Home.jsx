import React, { useEffect, useState } from 'react';
import Layout from '../../Layout';
import Session from '../../utils/Session';
import styles from './home.module.scss';

function Home() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const user = Session.user.data;
    setUserData(user);
    console.log('User Data:', user);
  }, []);

  return (
    <Layout>
      <div className={styles.container}>
        <h1>Home Page</h1>
        {userData ? (
          <div>
            <h2>User Data</h2>
            <p>email: {userData.email || 'N/A'}</p>
            <p>username: {userData.username || 'N/A'}</p>
          </div>
        ) : (
          <p>Loading user data...</p>
        )}
      </div>
    </Layout>
  );
}

export default Home;
