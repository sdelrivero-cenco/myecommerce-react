import React from "react";
import Layout from "../../components/Layout/Layout";
import UserForm from "../../components/UserForm/UserForm";

export default function Register() {
  return (
    <Layout>
      <UserForm type="register" />
    </Layout>
  );
}
