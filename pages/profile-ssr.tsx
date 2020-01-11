import * as React from "react";

// custom imports
import Layout from "../components/Layout";
import withAuth from "../components/withAuth";

const Profile = ({ user }) => (
  <Layout user={user}>
    <h1>Profile</h1>

    <div>
      <h3>Profile (server rendered)</h3>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  </Layout>
);

export default withAuth(Profile);
