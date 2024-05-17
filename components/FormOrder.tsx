import React, { useState, useEffect } from "react";
import Input from "./TextInput";
import Button from "./Button";
import { toast } from "react-toastify";
import Modal from "../components/modal";
import { postData } from "@/utils/fetchData";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import DetailOrder from "./DetailOrder";
import PaymentMethodCard from "./PaymentMethodCard";
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
  no_tlp: string;
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
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);

  const [dataModal, setDataModal] = useState({
    hargadetail: "",
    hari: "",
    kegiata: "",
    warga: "",
  });

  const objekDataModal: ObjekData = { dataModal };
  const [form, setForm] = useState<FormState>({
    paketId: detailPage._id,
    hargaCetagoriId: selectedHarga,
    MetPembayaran: "",
    Name: "",
    no_tlp: "",
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
    console.log(formgetHarga);
    if (
      !form.Name ||
      !form.no_tlp ||
      !form.email ||
      !form.alamat ||
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
      const response = await postData(
        `/app/v1/harga`,
        formgetHarga,
        Cookies.get("token")
      );

      setDataModal(response.data);
    }
  };

  const handleOpsiTanggal = () => {
    setSelectedOption((prevOption) => (prevOption === "1" ? "" : "1"));
  };

  const handleOChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
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
    if (res.data) {
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
    //console.log(method);
  };
  return (
    <form className="grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-1 md:mb-1">
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
      <div className="flex flex-grow text-center items-center mx-2 gap-2">
        <label className="label font-bold text-xl" htmlFor="lebih dari 1 hari">
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
          label="Tanggal Mulai"
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
            label="Tanggal akhir"
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
        <PaymentMethodCard
          method="Credit Card"
          image="credit_card_image.jpg"
          selected={form.MetPembayaran === "Credit Card"}
          onClick={() => handleSelectMethod("Credit Card")}
        />
        <PaymentMethodCard
          method="PayPal"
          image="paypal_image.jpg"
          selected={form.MetPembayaran === "transfer"}
          onClick={() => handleSelectMethod("transfer")}
        />
      </div>
      <Button
        className="btn_green rounded-full border-0 w-full my-5 py-2 lg:w-96 block duration-300 outline-2 active:outline focus:outline-gray-10"
        type="button"
        title="Order"
        onClick={handleOpenModal}
      />
      <Modal
        isOpen={showModal}
        className="  my-[1rem]  mx-3 md:mx-[17rem] bg-white-10 shadow-sm border-2"
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
