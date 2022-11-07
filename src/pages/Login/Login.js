import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Layout from "../../components/Layout/Layout";
import UserForm from "../../components/UserForm/UserForm";

export default function Login() {
  return (
    <Layout type="form">
      <UserForm type="login" />
    </Layout>
  );
}
