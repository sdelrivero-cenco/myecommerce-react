import React from "react";
import Layout from "../../components/Layout/Layout";
import UserForm from "../../components/UserForm/UserForm";

export default function Register() {
  return (
    <Layout type="form">
      <UserForm type="register" />
    </Layout>
  );
}
