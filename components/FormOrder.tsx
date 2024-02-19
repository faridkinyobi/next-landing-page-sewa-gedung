import React, { useState, useEffect } from "react";
import Input from "./TextInput";
import Button from "./Button";
import { toast } from "react-toastify";
import Modal from "../components/modal";
import { postData } from "@/utils/fetchData";

import DetailOrder from "./DetailOrder";
type DetailPage = {
  detailPage: {
    _id: string | null;
    titel: string;
    fasilitas: Array<{ detail: string }>;
    harga: Array<{
      _id: string;
      kegiata: string;
      hari: string;
      warga: string;
      hargadetail: string;
    }>;
  };
  selectedHarga: string | null;
  isCardChecked: boolean | null;
  objekData: {
    data: {
      hari: string;
      kegiata: string;
      warga: string;
      hargadetail: string;
    };
  };
};
type FormState = {
  paketId: string | null;
  hargaCetagoriId: string | null;
  Name: string;
  no_tlp: string;
  email: string;
  alamat: string;
  no_ktp: string;
  tgl_mulai: string;
  tgl_akhir: string;
  waktu: string;
  kegiatan: string;
};
type ObjekData = {
  data: {
    hari: string;
    kegiata: string;
    warga: string;
    hargadetail: string;
  };
};

export default function FormOrder({
  selectedHarga,
  detailPage,
  isCardChecked,
}: DetailPage): React.JSX.Element {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);
  const [data, setData] = useState({
    hargadetail: "",
    hari: "",
    kegiata: "",
    warga: "",
  });
  const objekData: ObjekData = { data };
  const [form, setForm] = useState<FormState>({
    paketId: detailPage._id,
    hargaCetagoriId: selectedHarga,
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

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const formgetHarga = {
    paketId: form.paketId,
    hargaCetagoriId: selectedHarga,
  };
  // console.log(formgetHarga)
  const handleOpenModal = async () => {
    if (
      !form.Name ||
      !form.no_tlp ||
      !form.email ||
      !form.alamat ||
      !form.no_ktp ||
      !form.tgl_mulai ||
      !form.waktu ||
      !form.kegiatan ||
      !isCardChecked
    ) {
      toast.error("Silakan isi semua persyaratan", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    setShowModal(!showModal);
    if (!showModal) {
      const response = await postData(`/app/v1/cms/harga`, formgetHarga);
      setData(response.data);
    }
  };

  const handleOpsei = () => {
    setSelectedOption((prevOption) => (prevOption === "1" ? "" : "1"));
  };

  const handleOChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const format = {
      paketId: form.paketId,
      hargaCetagoriId: form.hargaCetagoriId,
      penyewaData: {
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
    };

    const res = await postData("/app/v1/checkout", format);
    toast.success("berhasil signin", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    // localStorage.removeItem("selectedHarga");
  };

  return (
    <form className="grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-0 md:mb-1">
      <Input
        name="Name"
        type="text"
        placeholder="Enter your name"
        label="Name"
        onChange={handleOChange}
        value={form.Name}
      />
      <Input
        name="no_tlp"
        type="number"
        placeholder="Enter your phone number"
        label="No Telfon"
        onChange={handleOChange}
        value={form.no_tlp}
      />
      <Input
        name="email"
        type="email"
        placeholder="Enter your email"
        label="Email"
        onChange={handleOChange}
        value={form.email}
      />
      <Input
        name="alamat"
        type="text"
        placeholder="Enter your address"
        label="Alamat"
        onChange={handleOChange}
        value={form.alamat}
      />
      <Input
        name="no_ktp"
        type="text"
        placeholder="Enter your address"
        label="no_ktp"
        onChange={handleOChange}
        value={form.no_ktp}
      />
      <div className="md:flex lg:w-96 max-w-80 gap-2 lg:gap-10">
        <Input
          name="tgl_mulai"
          type="date"
          placeholder="Select start date"
          label="Tanggal Mulai"
          onChange={handleOChange}
          value={form.tgl_mulai}
          className=" w-32 md:w-40 lg:w-[10rem]"
        />
          <Input
            name="tgl_akhir"
            type="date"
            placeholder="Select end date"
            label="Tanggal akhir"
            onChange={handleOChange}
            value={selectedOption === "1" ? form.tgl_akhir : form.tgl_akhir =''}
            className={`w-32 md:w-40 lg:w-[10rem] ${selectedOption === "1" ? "" : "hidden"}`}
          />
      </div>
      <Input
        name="lebih dari 1 hari"
        type="checkbox"
        placeholder="Select start date"
        label="lebih dari 1 hari"
        onChange={handleOpsei}
        value={"1"}
        className="checkbox absolute lg:top-[86rem] lg:left-[-4rem] left-48 md:left-14 md:top-[91.8rem] w-5 h-5"
      />
      <Input
        name="waktu"
        type="text"
        placeholder="Pagi/Sore/Malam"
        label="Waktu"
        onChange={handleOChange}
        value={form.waktu}
      />
      <Input
        name="kegiatan"
        type="text"
        placeholder="Enter event details"
        label="Kegiatan"
        onChange={handleOChange}
        value={form.kegiatan}
      />
      <Button
        className="btn_green border-0 w-full my-5 py-2 lg:w-96 block duration-300 outline-2 active:outline focus:outline-gray-10"
        type="button"
        title="Order"
        onClick={handleOpenModal}
      />
      <Modal
        isOpen={showModal}
        className="  my-[1rem]  mx-10 md:mx-[17rem] bg-white-10 shadow-sm border-2"
      >
        <DetailOrder
          form={form}
          selectedOption={selectedOption}
          detailPage={detailPage}
          handleCloseModal={handleCloseModal}
          handleSubmit={handleSubmit}
          objekData={objekData}
        />
      </Modal>
    </form>
  );
}
