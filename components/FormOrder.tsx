import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { postData } from "@/utils/fetchData";
import { useRouter } from "next/router";
import { MdOutlineCurrencyExchange, MdHandshake } from "react-icons/md";
import Input from "./TextInput";
import TextAralInput from "./TextareaInput";
import Button from "./Button";
import Modal from "../components/modal";
import Cookies from "js-cookie";
import DetailOrder from "./DetailOrder";
type DetailPage = {
  detailPage: {
    _id: string | null;
    titel: string;
    fasilitas: Array<{ detail: string }>;
    harga: Array<{
      _id: string;
      kegiatan: string;
      hari: string;
      warga: string;
      hargadetail: string | number;
    }>;
  };
  selectedHarga: string;
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
  hargaCetagoriId: string;
  MetPembayaran: string;
  Name: string;
  no_tlp: null;
  email: string;
  alamat: string;
  tgl_mulai: string;
  tgl_akhir: string;
  waktu: string;
  kegiatan: string;
};

type ObjekData = {
  dataModal: {
    hari: string;
    kegiatan: string;
    warga: string;
    hargadetail: string | number;
  };
};

export default function FormOrder({
  selectedHarga,
  detailPage,
  isCardChecked,
}: DetailPage): React.JSX.Element {
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);

  const [dataModal, setDataModal] = useState({
    hargadetail: "",
    hari: "",
    kegiatan: "",
    warga: "",
  });

  const objekDataModal: ObjekData = { dataModal };
  const [form, setForm] = useState<FormState>({
    paketId: detailPage._id,
    hargaCetagoriId: selectedHarga,
    MetPembayaran: "",
    Name: "",
    no_tlp: null,
    email: "",
    alamat: "",
    tgl_mulai: "",
    tgl_akhir: "",
    waktu: "",
    kegiatan: "",
  });
  useEffect(() => {
    setForm((prevForm) => ({
      ...prevForm,
      hargaCetagoriId: selectedHarga,
    }));
  }, [selectedHarga]);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOpenModal = async () => {
    const formgetHarga = {
      paketId: form.paketId,
      hargaCetagoriId: selectedHarga,
    };
    if (
      !form.Name ||
      !form.no_tlp ||
      !form.email ||
      !form.alamat ||
      !form.tgl_mulai ||
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
    if (!form.waktu) {
      toast.error("Silakan Pilih wakatu ", {
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
    if (!/pernikahan/i.test(form.kegiatan) &&
      !/event/i.test(form.kegiatan)) {
      toast.error("Input kegiatan harus memilika kayword pernikahan/envent ", {
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
      const response = await postData(
        `/app/v1/harga`,
        formgetHarga,
        Cookies.get("token")
      );

      setDataModal(response?.data);
    }
  };

  const handleOpsiTanggal = () => {
    setSelectedOption((prevOption) => (prevOption === "1" ? "" : "1"));
  };

  const handleOChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    let timeRange = "";
    if (value === "Pagi") {
      timeRange = "(06:00 - 18:00) Pagi";
    } else if (value === "Malam") {
      timeRange = "(18:00 - 06:00) Malam";
    }
    setForm({
      ...form,
      [name]: value,
      waktu: timeRange,
    });
  };

  const handleSubmit = async () => {
    const format = {
      paketId: form.paketId,
      hargaCetagoriId: selectedHarga,
      MetPembayaran: form.MetPembayaran,
      penyewaData: {
        name: form.Name,
        no_tlp: form.no_tlp,
        email: form.email,
        alamat: form.alamat,
      },
      jadwalData: {
        tgl_mulai: form.tgl_mulai,
        tgl_akhir: form.tgl_akhir,
        waktu: form.waktu,
        kegiatan: form.kegiatan,
      },
    };
    const res = await postData(
      "/app/v1/checkout",
      format,
      Cookies.get("token")
    );
    if (res?.data) {
      toast.success("berhasil order", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      router.push("/dash/dashboard");
    }
  };

  const MinCreatDateMUlai = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const MinCreatDateAkhir = () => {
    const today = new Date(form.tgl_mulai);
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate() + 1).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const handleSelectMethod = (method: string) => {
    setForm({ ...form, MetPembayaran: method });
  };
  return (
    <form className="grid grid-cols-1 md:grid-cols-2 gap-1 md:mb-1">
      <Input
        name="Name"
        type="text"
        placeholder="Name"
        label="Name"
        onChange={handleOChange}
        value={form.Name}
      />
      <Input
        name="no_tlp"
        type="tel"
        placeholder="08XXXXXXXXXX"
        label="No Telfon"
        onChange={handleOChange}
        value={form.no_tlp}
        maxLength={12}
      />
      <Input
        name="email"
        type="email"
        placeholder=" Alamat Email"
        label="Email"
        onChange={handleOChange}
        value={form.email}
      />
      <TextAralInput
        name="alamat"
        placeholder="Alamat"
        label="Alamat"
        onChange={handleOChange}
        value={form.alamat}
      />
      <div className="my-1">
        <label className="text-blue-30">Pilih Waktu</label>
        <select
          name="waktu"
          className="block appearance-auto rounded-lg focus:border-blue-20  focus:outline-slate-500  border border-neutral-300  px-4 py-3 lg:w-96 my-2 md:mx-1"
          onChange={handleOChange}
          value={form.waktu}
        >
          <option value="">
            {form.waktu === "" ? " --Pilih Waktu--" : form.waktu}
          </option>
          <option value="Pagi">Pagi</option>
          <option value="Malam">Malam</option>
        </select>
      </div>
      <Input
        name="kegiatan"
        type="text"
        placeholder="Contoh Event wisuda"
        label="Kegiatan"
        onChange={handleOChange}
        value={form.kegiatan}
      />
      <div className="flex flex-grow text-center items-center my-2 md:mx-2 gap-2">
        <label className="label font-semibold md:font-bold text-xl" htmlFor="lebih dari 1 hari">
          lebih dari 1 hari
        </label>
        <input
          type="checkbox"
          placeholder="Select start date"
          onChange={handleOpsiTanggal}
          value={"1"}
          className="form-checkbox h-6 w-6 text-indigo-600 "
        />
      </div>
      <div className="flex flex-row gap-2">
        <Input
          name="tgl_mulai"
          type="date"
          placeholder="Select start date"
          label="Tanggal Mulai Penggunaan"
          onChange={handleOChange}
          min={MinCreatDateMUlai()}
          value={form.tgl_mulai}
          className=" w-36 md:w-40 lg:w-[13.7rem]"
        />
        <div className={`${selectedOption === "1" ? "" : "hidden"}`}>
          <Input
            name="tgl_akhir"
            type="date"
            placeholder="Select end date"
            label="Tanggal akhir Penggunaan"
            onChange={handleOChange}
            min={MinCreatDateAkhir()}
            value={
              selectedOption === "1" ? form.tgl_akhir : (form.tgl_akhir = "")
            }
            className={`w-36 md:w-40 lg:w-[13.7rem]`}
          />
        </div>
      </div>
      <div className="paymen flex flex-row gap-2">
        <div
          className={`flex justify-between items-center  border-2 rounded-lg p-2 w-56 h-16 ${
            form.MetPembayaran === "Cash On Delivery"
              ? "border-green-500"
              : "border-gray-10"
          }`}
          onClick={() => handleSelectMethod("Cash On Delivery")}
        >
          <MdHandshake className="font-bold text-4xl mx-3" />
          {/* <img src={image} alt={method} className="w-10 h-10 mb-2" /> */}
          <div>
            <p className="text-base md:text-lg font-semibold">COD</p>
            <p className="font-light text-sm">cash on delivery</p>
          </div>
        </div>
        <div
          className={`flex justify-between items-center  border-2 rounded-lg p-2 w-56 h-16 ${
            form.MetPembayaran === "transfer"
              ? "border-green-500"
              : "border-gray-10"
          }`}
          onClick={() => handleSelectMethod("transfer")}
        >
          <MdOutlineCurrencyExchange className="font-bold text-4xl mx-3" />
          {/* <img src={image} alt={method} className="w-10 h-10 mb-2" /> */}
          <p className="text-base md:text-lg font-semibold">Transfer</p>
        </div>
      </div>
      <Button
        className="btn_green rounded-full border-0 w-full my-5 py-2 md:py-3 lg:w-96 block duration-300 outline-2 active:outline focus:outline-gray-10 bg-green-10 hover:outline-green-10 hover:bg-green-10/75"
        type="button"
        title="Order"
        onClick={handleOpenModal}
      />
      <Modal
        isOpen={showModal}
        className="my-5 mx-3 md:mx-[10rem] lg:mx-[17rem] bg-white-10 shadow-sm border-2"
      >
        <DetailOrder
          form={form}
          selectedOption={selectedOption}
          detailPage={detailPage}
          handleCloseModal={handleCloseModal}
          handleSubmit={handleSubmit}
          objekDataModal={objekDataModal}
        />
      </Modal>
    </form>
  );
}
