import React, { useState } from "react";
import Input from "./TextInput";
import Button from "./Button";
import axios from "axios";
type DetailPage = {
  _id: string | number;

};

type FormOrderProp = {
  selectedHarga: string;
  detailPage: Array<DetailPage>;
};
export default function FormOrder({ selectedHarga, detailPage}:FormOrderProp) {

  const [form, setForm] = useState({
    paketId: detailPage.length > 0 ? detailPage[0]._id : "",
    hargaCetagoriId:selectedHarga,
    Name: "",
    no_tlp: "",
    email: "",
    alamat: "",
    no_ktp: "",
    tgl_mulai: "",
    tgl_akhir: "",
    waktu: "",
    kegiatan: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // const { name, value } = e.target;
    // if (name === "tgl_mulai" || name === "tgl_akhir") {
    //   const selectedDate = new Date(value);
    //   const currentDate = new Date();
      
    //   return selectedDate > currentDate
    // }
    // setForm({ ...form, [name]: value });
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  

  const handleSubmit = async () => {
    const BEARER_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsYXN0TmFtZSI6IiIsImZpcnN0TmFtZSI6Im11aGFtbWFkIGZhcmlkIGsgYSIsInVzZXJJZCI6IjY1OTA0MGViMDQxOThlMWU5ZjEyMTgxMiIsInJvbGUiOiJwYXJ0aWNpcGFuIiwiZW1haWwiOiJha2JhckBnbWFpbC5jb20iLCJpYXQiOjE3MDU0NzI1MDAsImV4cCI6MTcwNTU1ODkwMH0.i4SSViQLqARmMpUo24JKpkqqPBXuliukZ8-VIs09OdM"

    try {
      const res = await axios.post(
        "http://localhost:5000/app/v1/checkout",
        {
          paketId: form.paketId,
          hargaCetagoriId: form.hargaCetagoriId,
          penyewaData:{
            name: form.Name,
            no_tlp: form.no_tlp,
            email: form.email,
            alamat: form.alamat,
            no_ktp: form.no_ktp,
          },
          jadwalData: {
            tgl_mulai: form.tgl_mulai,
            tgl_akhir: form.tgl_akhir,
            waktu: form.waktu,
            kegiatan: form.kegiatan,
          },
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${BEARER_TOKEN}`,
          },
        }
      );
      console.log("Response:", res.data);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <form className="grid grid-cols-2 gap-2 mb-1">
      <Input
        name="Name"
        type="text"
        placeholder="Enter your name"
        label="Name"
        onChange={handleChange}
        value={form.Name}
        
      />
      <Input
        name="no_tlp"
        type="text"
        placeholder="Enter your phone number"
        label="No Telfon"
        onChange={handleChange}
        value={form.no_tlp}
        
      />
      <Input
        name="email"
        type="email"
        placeholder="Enter your email"
        label="Email"
        onChange={handleChange}
        value={form.email}
        
      />
      <Input
        name="alamat"
        type="text"
        placeholder="Enter your address"
        label="Alamat"
        onChange={handleChange}
        value={form.alamat}
        
      />
    <Input
        name="no_ktp"
        type="text"
        placeholder="Enter your address"
        label="no_ktp"
        onChange={handleChange}
        value={form.no_ktp}
        
      />
      <Input
        name="tgl_mulai"
        type="date"
        placeholder="Select start date"
        label="Tanggal Mulai"
        onChange={handleChange}
        value={form.tgl_mulai}
      />

      <Input
        name="tgl_akhir"
        type="date"
        placeholder="Select end date"
        label="Tanggal Berakhir"
        onChange={handleChange}
        value={form.tgl_akhir}
        
      />
      <Input
        name="waktu"
        type="text"
        placeholder="Enter event time"
        label="Waktu"
        onChange={handleChange}
        value={form.waktu}
        
      />
      <Input
        name="kegiatan"
        type="text"
        placeholder="Enter event details"
        label="Kegiatan"
        onChange={handleChange}
        value={form.kegiatan}
        
      />
      <Button
        className="btn_green border-0 w-full my-5 lg:w-96 block duration-300 outline-2 active:outline focus:outline-gray-10"
        type="button"
        title="Order"
        onClick={handleSubmit}
      />
    </form>
  );
}
