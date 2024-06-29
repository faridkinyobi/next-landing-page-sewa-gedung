import NavbarLending from "../components/NavbarLending";
import React, { useState, useEffect } from "react";
import Input from "../components/TextInput";
import Button from "../components/Button";
import { toast } from "react-toastify";
import { putData } from "@/utils/fetchData";
import { useRouter } from "next/router";
export default function ResetPassword() {
  const router = useRouter();
  const { token, email } = router.query;
  const [form, setForm] = useState({
    email: "",
    newPassword: "",
    confirmPassword: "",
  });

  useEffect(() => {
    if (email) {
      setForm((prevForm) => ({ ...prevForm, email: email as string }));
    }
  }, [email]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async () => {
    if (!form.newPassword || !form.confirmPassword) {
      toast.warning("newPassword dan confirmPassword wajid diisi", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      const result = await putData(`/app/v1/resetpassword/${token}`, form);
      console.log(result);
      toast.success("successfully", {
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
  };
  return (
    <main className="bg-blue-30 w-screen-sm h-screen">
      <NavbarLending />
      <div className="bg-white-20 rounded-2xl  mt-7 md:mt-[1rem] p-7 shadow-x md:mx-[27rem] mx-10">
        <form>
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
            className="btn_green py-3 border-0 w-full lg:w-full block   duration-300 outline-2 active:outline focus:outline-gray-10 hover:bg-green-10/90"
            type="button"
            title="change"
            onClick={handleSubmit}
          />
        </form>
      </div>
    </main>
  );
}
