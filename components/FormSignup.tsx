import React, { useState } from "react";
import Input from "./TextInput";
import Button from "./Button";
import axios from "axios";
import { toast } from "react-toastify";
import router from "next/router";
import Cookies from "js-cookie";
import { postData } from "@/utils/fetchData";

const FormSingnup = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    role: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async () => {
    const res = await postData("/app/v1/auth/signin", form);

    toast.success("berhasil signin", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    Cookies.set("token", res.data.token);
    router.push("/");
  };

  return (
    <form>
      <Input
        name="First Name"
        type="text"
        placeholder="First Name"
        label="First Name"
        onChange={handleChange}
        value={form.firstName}
      />
      <Input
        name="Last Name"
        type="text"
        placeholder="Last Name"
        label="Last Name"
        onChange={handleChange}
        value={form.lastName}
      />
      <Input
        name="email"
        type="text"
        placeholder="email"
        label="email"
        onChange={handleChange}
        value={form.email}
      />
      <Input
        name="password"
        type="password"
        placeholder="password"
        label="Password"
        onChange={handleChange}
        value={form.password}
      />
      <Button
        className="btn_green py-3 border-0 w-full lg:w-full block   duration-300 outline-2 active:outline focus:outline-gray-10"
        type="button"
        title="Sing in"
        onClick={handleSubmit}
      />
    </form>
  );
};

export default FormSingnup;
