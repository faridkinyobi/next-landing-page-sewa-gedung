const NavbarLending = React.lazy(() => import("@/components/NavbarLending"));
import React, { useState } from "react";
import Input from "../components/TextInput";
import Button from "../components/Button";
import { toast } from "react-toastify";
import router from "next/router";
import { postData } from "@/utils/fetchData";

export default function ChangePassword() {
  const [form, setForm] = useState({
    email: "",
    OldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async () => {
    await postData("/app/v1/auth/changPassword", form);
    toast.success("successfully", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    // Cookies.set("token", res.data.token);
    router.push("/");
  };

  return (
    <main className="bg-blue-30 w-screen-sm h-screen">
      <NavbarLending />
      <div className="bg-white-20 rounded-2xl  mt-7 my:my-auto shadow-x md:mx-auto max-w-fit mx-auto  my-20">
        <form className="p-10">
          <Input
            name="email"
            type="text"
            placeholder="email"
            label="email"
            onChange={handleChange}
            value={form.email}
          />
          <Input
            name="OldPassword"
            type="password"
            placeholder="oldPassword"
            label="Password lama"
            onChange={handleChange}
            value={form.OldPassword}
          />
          <Input
            name="newPassword"
            type="password"
            placeholder="newPassword"
            label="New Password"
            onChange={handleChange}
            value={form.newPassword}
          />
          <Input
            name="confirmPassword"
            type="password"
            placeholder="newPassword"
            label="Confirm New Password"
            onChange={handleChange}
            value={form.confirmPassword}
          />
          <Button
            className="btn_green py-3 border-0 w-full lg:w-full block   duration-300 outline-2 active:outline focus:outline-gray-10 hover:bg-green-10/90 bg-green-10 hover:outline-green-10"
            type="button"
            title="change"
            onClick={handleSubmit}
          />
        </form>
      </div>
    </main>
  );
}
