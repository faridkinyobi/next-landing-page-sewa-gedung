import React, { useState, useRef, useEffect } from "react";
import dynamic from "next/dynamic";
import { getData, putData } from "../../utils/fetchData";
import { GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { useReactToPrint } from "react-to-print";
import { PrintComponent } from "../../components/PrintComponent";
import { postDataHarga, postData } from "../../utils/fetchData";
import Cookies from "js-cookie";
import Button from "@/components/Button";
import CardBank from "../../components/CardBank";
import NavbarLending from "@/components/NavbarLending";
const BuktiPemayaran = dynamic(
  () => import("@/components/BuktiPembayaranComponen")
);
const Pemayaran = dynamic(() => import("@/components/PembayaranComponent"));
interface HistoryPaket {
  title: string;
  hari: string;
  kegiatan: string;
  warga: string;
  waktu: string;
  lama_sewa: number;
  tgl_mulai: Date;
  tgl_akhir: Date;
  hargadetail: number;
}
interface Order {
  historyPaket: HistoryPaket;
  status: string;
  total: number;
  total_dp: number;
  sisa_pembayaran: number;
  NumberOrder: string;
  date: Date;
  MetPembayaran: string;
  _id: string;
}
interface ImageData {
  image: {
    name: string;
  };
  Number: string;
  type: string;
  BuktiUangMuka: {
    name: string;
    _id: string;
  };
  BuktiPelunasan: {
    name: string;
    _id: string;
  };
}
interface ChangeEvent {
  target: {
    files: FileList | null;
    name: string;
    value: string;
  };
}
interface DashType {
  data: Order[];
  img: ImageData[];
  RePay: ImageData[];
}

export default function Dashboard({ data, img, RePay }: DashType) {
  const router = useRouter();
  const componentRef = useRef(null);
  const urlFoto = process.env.NEXT_PUBLIC_API;
  const [form, setForm] = useState({
    avatar: "",
    avatarLunas: "",
    Order: "",
    BuktiUangMuka: "",
    BuktiPelunasan: "",
    getBuktiUangmuka: "",
    getBuktiLunas: "",
  });

  useEffect(() => {
    img.forEach((item) => {
      setForm((prevForm) => ({
        ...prevForm,
        getBuktiUangmuka: item.BuktiUangMuka?._id,
        getBuktiLunas: item.BuktiPelunasan?._id,
      }));
    });

    data.forEach((item) => {
      setForm((prevForm) => ({
        ...prevForm,
        Order: item._id,
      }));
    });
  }, [img, data]);

  const handleImage = async (file: File) => {
    let formData = new FormData();
    formData.append("avatar", file);

    const res = await postDataHarga(
      `/app/v1/cms/images`,
      formData,
      Cookies.get("token")
    );
    return res;
  };

  const handleChange = async (e: ChangeEvent) => {
    if (e.target.name === "avatar" || e.target.name === "avatarLunas") {
      if (e.target?.files === null || e.target?.files[0].type == null) {
        return null;
      } else if (
        e?.target?.files[0]?.type === "image/jpg" ||
        e?.target?.files[0]?.type === "image/png" ||
        e?.target?.files[0]?.type === "image/jpeg"
      ) {
        let size = (e.target.files[0].size / 3145728).toFixed(2);
        if (Number(size) > 3) {
          toast.warning("Please select image size less than 3 MB", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          setForm({ ...form, BuktiPelunasan: "", [e.target.name]: "" });
          setForm({ ...form, BuktiUangMuka: "", [e.target.name]: "" });
        } else {
          const res = await handleImage(e.target.files[0]);
          console.log(res);
          if (e.target.name === "avatarLunas") {
            setForm({
              ...form,
              BuktiPelunasan: res.data?._id,
              [e.target.name]: res.data?.name,
            });
          } else {
            setForm({
              ...form,
              BuktiUangMuka: res.data._id,
              [e.target.name]: res.data.name,
            });
          }
        }
      } else {
        toast.warning("type image png | jpg | jpeg", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        setForm({ ...form, BuktiPelunasan: "", [e.target.name]: "" });
        setForm({ ...form, BuktiUangMuka: "", [e.target.name]: "" });
      }
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
  };

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const handPembayaran = async () => {
    const token = Cookies.get("token");
    const format = {
      BuktiUangMuka: form.BuktiUangMuka,
      Order: form.Order,
    };
    const res = await postData(`/app/v1/pembayaran`, format, token);
    if (res.data) {
      toast.success("Upload Bukti Pembayaran Uangmuka Sukses", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setTimeout(() => {
        router.reload();
      }, 1000);
    }
  };

  const handelUpate = async () => {
    const token = Cookies.get("token");
    const format = {
      BuktiPelunasan: form.BuktiPelunasan,
    };
    const res = await putData(`/app/v1/pembayaran`, format, token);
    if (res.data) {
      toast.success("Upload Bukti Pembayaran Lunas Sukses", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setTimeout(() => {
        router.reload();
      }, 1000);
    }
  };

  return (
    <div className="bg-blue-30  h-full w-auto">
      <NavbarLending />
      <div className="md:mx-24 mx-5 pb-20 ">
        <h1 className="text-left font-bold text-3xl text-white-10 my-5">
          Dashboard
        </h1>
        <Button
          className="btn_slate  px-10  xl:py-2 py-1 mb-2 text-xl rounded-full "
          type="button"
          title="Print"
          onClick={handlePrint}
        />
        <div ref={componentRef}>
          <PrintComponent data={data} />
        </div>
        {/*rekening*/}
        {data.map((item, index) => (
          <div key={index}>
            {item.MetPembayaran === "transfer" && (
              <>
                <BuktiPemayaran img={img} />
              </>
            )}
            {item.MetPembayaran === "transfer" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="grid grid-flow-row-dense mt-10">
                  {RePay.map((items, index) => (
                    <div key={index}>
                      <CardBank
                        image={`${urlFoto}/${items.image?.name}`}
                        title={items.type}
                        NoRekening={items.Number}
                      />
                    </div>
                  ))}

                  {/*Pembayaran*/}
                </div>
                <Pemayaran
                  form={form}
                  handelUpate={handelUpate}
                  handleChange={handleChange}
                  handPembayaran={handPembayaran}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { token } = context.req.cookies;

  if (!token) {
    return {
      redirect: {
        destination: "/signin",
        permanent: false,
      },
    };
  }

  const result = await getData("/app/v1/dashboardPelanggan", {}, token);
  const data = result.data;
  const res = await getData("/app/v1/dashboardPembayaran", {}, token);
  const img = res.data;
  const pay = await getData("/app/v1/NoReken", {}, token);
  const RePay = pay.data;

  return {
    props: {
      data: data,
      img: img,
      RePay: RePay,
    },
  };
}
