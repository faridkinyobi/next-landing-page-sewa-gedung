import React, { useState } from "react";
import Input from "./TextInput";
import Button from "./Button";
import router from "next/router";
import Cookies from 'js-cookie'
import { postData } from "@/utils/fetchData";
import { toast } from 'react-toastify';
import NavLink from "./NavLink";
const FormSignin = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    
      const res = await postData("/app/v1/auth/signin",form)

        toast.success('berhasil signin', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        Cookies.set('token', res.data.token);
        router.push('/');
  };

  return (
    <form>
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
      {/* <NavLink href="" className="block my-3 mx-4 hover:text-blue-10">
        Forgot passowod?
      </Link> */}
      <Button
        className="btn_green py-3 border-0 w-full lg:w-full block   duration-300 outline-2 active:outline focus:outline-gray-10 hover:bg-green-10/90"
        type="button"
        title="Sing in"
        onClick={handleSubmit}
      />
      <div className="my-3 mx-4 text-xl">
        New here
        <NavLink className=" text-blue-10 mx-2" href="/signup">
          sing up
        </NavLink>
      </div>
    </form>
  );
};

export default FormSignin;
