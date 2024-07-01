import NavbarLending from "../components/NavbarLending";
import React, { useState } from "react";
import Input from "../components/TextInput";
import Button from "../components/Button";
import { toast } from "react-toastify";
import { putData } from "@/utils/fetchData";

export default function LupaPassword() {
  const [email, setEmail] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handleSubmit = async () => {
    if (!email) {
      toast.warning("email wajid diisi", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      await putData("/app/v1/forgotPassword", { email: email }).then((res) => {
        if (res?.data) {
          toast.success("silahkan cek email anda", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      });
    }
  };

  return (
    <main className="bg-blue-30 h-screen w-screen ">
      <NavbarLending />
      <div className="bg-white-20 rounded-2xl  mt-7 my:my-auto shadow-x md:mx-auto max-w-fit mx-auto  my-20">
        <form className="p-7 ">
          <Input 
            name="email"
            type="text"
            placeholder="email"
            label="email"
            onChange={handleChange}
            value={email}
          />
          <Button
            className="btn_green py-3 border-0 w-full lg:w-full block   duration-300 outline-2 active:outline focus:outline-gray-10 hover:bg-green-10/90 bg-green-10 hover:outline-green-10"
            type="button"
            title="Email Password Reset Link"
            onClick={handleSubmit}
          />
        </form>
      </div>
    </main>
  );
}
