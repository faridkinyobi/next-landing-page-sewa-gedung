import React, { useState } from "react";
import Input from "./TextInput";
import Button from "./Button";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { postData, putData } from "@/utils/fetchData";

const FormSingnup = () => {
  const router = useRouter();
  const { keyword } = router.query;
  const [otp, setOtp] = useState("");
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
    if (keyword === "otp") {
      const formOtp = {
        otp,
        email: form.email,
      };
      if (!otp) {
        toast.warning("Otp wajib diisi", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        putData("/app/v1/active", formOtp).then((res) => {
          if (res?.data) {
            toast.success("berhasil aktipkan akun", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            router.push("/signin");
          }
        });
      }
    } else {
      await postData("/app/v1/auth/signup", form).then((res) => {
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
      router.push({ pathname: "/signup", query: { keyword: "otp" } });
    }
  };

  return (
    <form>
      {keyword === "otp" ? (
        <div>
          <h1 className="text-center font-bold text-3xl my-4">Verfikasi Otp</h1>
          <Input
            name="otp"
            type="text"
            placeholder="Enter opt here"
            label="otp"
            onChange={(e) => {
              setOtp(e.target.value);
            }}
            value={otp}
          />
        </div>
      ) : (
        <div>
          <h1 className="text-center font-bold text-3xl">Sing Up</h1>
          <Input
            name="firstName"
            type="text"
            placeholder="First Name"
            label="First Name"
            onChange={handleChange}
            value={form.firstName}
          />
          <Input
            name="lastName"
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
        </div>
      )}
      <Button
        className="btn_green py-3 border-0 w-full lg:w-full block   duration-300 outline-2 active:outline focus:outline-gray-10 hover:bg-green-10/90 bg-green-10 hover:outline-green-10 "
        type="button"
        title={keyword === "otp" ? "Verfikasi" : "Sign Up"}
        onClick={handleSubmit}
      />
    </form>
  );
};

export default FormSingnup;
