import React, { useState } from "react";
import Input from "./TextInput";
import Button from "./Button";
import router from "next/router";
import Cookies from "js-cookie";
import { postData } from "@/utils/fetchData";
import { toast } from "react-toastify";
import Link from "next/link";
const FormSignin = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    await postData("/app/v1/auth/signin", form).then((res) => {
      if (res.data) {
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
        Cookies.set("lastName", res.data.lastName);
        Cookies.set("firstName", res.data.firstName);
        router.push("/");
      }
    });
  };

  return (
    <form>
      <Input
        name="email"
        type="text"
        placeholder="Email"
        label="Email"
        onChange={handleChange}
        value={form.email}
      />
      <Input
        name="password"
        type="password"
        placeholder="Password"
        label="Password"
        onChange={handleChange}
        value={form.password}
      />
      <Link
        href="/lupa-password"
        className="block my-3 mx-4 hover:text-blue-10"
      >
        Forgot passowod?
      </Link>
      <Button
        className="btn_green py-3 border-0 w-full lg:w-full block   duration-300 outline-2 active:outline focus:outline-gray-10 hover:bg-green-10/90 bg-green-10 hover:outline-green-10"
        type="button"
        title="Sing in"
        onClick={handleSubmit}
      />
      <div className="my-3 mx-4 text-xl">
        New here
        <Link className=" text-blue-10 mx-2" href="/signup">
          sing up
        </Link>
      </div>
    </form>
  );
};

export default FormSignin;
