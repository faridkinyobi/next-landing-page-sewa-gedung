import React, { useState, useRef, useEffect } from "react";
import { getData, putData } from "../../utils/fetchData";
import { GetServerSidePropsContext } from "next";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import NavbarLending from "../../components/NavbarLending";
import { toast } from "react-toastify";
import Button from "@/components/Button";
import { useReactToPrint } from "react-to-print";
import { PrintComponent } from "../../components/PrintComponent";
import CardBank from "../../components/CardBank";
import { postDataHarga, postData } from "../../utils/fetchData";
interface HistoryPaket {
  title: string;
  hari: string;
  kegiatan: string;
  warga: string;
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

interface DashType {
  data: Order[];
  img: ImageData[];
}
interface ImageData {
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
export default function dashboard({ data, img }: DashType) {
  const router = useRouter();
  const componentRef = useRef(null);

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
          if (e.target.name === "avatarLunas") {
            setForm({
              ...form,
              BuktiPelunasan: res.data._id,
              [e.target.name]: res.data.name,
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
    const res = await postData(`/app/v1/cms/pembayaran`, format, token);
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
      // setTimeout(() => {
      //   router.reload();
      // }, 10000);
    }
  };

  const handelUpate = async () => {
    const token = Cookies.get("token");
    const format = {
      BuktiPelunasan: form.BuktiPelunasan,
    };
    const res = await putData(`/app/v1/cms/pembayaran`, format, token);
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
      }, 10000);
    }
  };

  return (
    <div className="bg-blue-30  h-full">
      <NavbarLending />
      <div className="md:mx-24 mx-10 pb-20 ">
        <h1 className="text-left font-bold text-3xl text-white-10 my-5">
          Dashboard
        </h1>
        <div className="flex gap-1">
          <Button
            className="btn_slate  px-14  xl:py-2 py-2 mb-2 text-xl rounded-sm "
            type="button"
            title="Print"
            onClick={handlePrint}
          />
          <Button
            className="btn_slate  px-14  xl:py-2 py-2 mb-2 text-xl  rounded-sm"
            type="button"
            title="Dowload"
            onClick={handlePrint}
          />
        </div>
        <div ref={componentRef}>
          <PrintComponent data={data} />
        </div>
        {/*rekening*/}
        {data.map((item, index) => (
          <div key={index}>
            {item.MetPembayaran === "transfer" && (
              <>
                {img.map((items, index) => (
                  <div key={index} className="flex gap-5 mt-6">
                    <div className="border-2 p-2 text-white-10">
                      <h1>Bukti Pembayaran Uang Muka</h1>
                      <img
                        width={121}
                        height={126}
                        alt="121x126"
                        src={`http://localhost:5000/${items.BuktiUangMuka?.name}`}
                        loading="lazy"
                      />
                    </div>
                    <div className="border-2 p-2 text-white-10">
                      <h1>Bukti Pembayaran Lunas</h1>
                      <img
                        width={121}
                        height={126}
                        alt="121x126"
                        src={`http://localhost:5000/${items.BuktiPelunasan?.name}`}
                        loading="lazy"
                      />
                    </div>
                  </div>
                ))}
              </>
            )}
            {item.MetPembayaran === "transfer" && (
              <div className="flex items-center flex-wrap justify-around mt-10">
                <CardBank
                  image="http://localhost:5000/upload/66501470-2425812_bank_bni_indonesia_indonesian_negara_icon.png"
                  title="BRI"
                  NoRekening="00000"
                />
                {/*Pembayaran*/}
                <div className="Pembayaran  flex-col">
                  {!form.getBuktiUangmuka && (
                    <div className="flex flex-col">
                      <label className=" mx-1 text-xl text-gray-10  ">
                        Uang Muka
                      </label>
                      {form.avatar !== "" && (
                        <div>
                          <img
                            width={91}
                            height={100}
                            alt="91x100"
                            src={`http://localhost:5000/${form.avatar}`}
                          />
                        </div>
                      )}
                      <input
                        name="avatar"
                        type="file"
                        placeholder="img"
                        onChange={handleChange}
                        className="max-w-[19rem] rounded-lg focus:border-blue-20 focus:outline-none box-border border-2 border-gray-10 px-4 py-3 md:w-96 my-2 md:mx-1"
                      />
                      <button onClick={handPembayaran}>submite</button>
                    </div>
                  )}
                  {form.getBuktiUangmuka !== "" && !form.getBuktiLunas && (
                    <div className="flex flex-col">
                      <label className="mx-1 text-xl text-gray-10">
                        Pelunasan
                      </label>
                      {form.avatarLunas !== "" && (
                        <div>
                          <img
                            width={91}
                            height={100}
                            alt="91x100"
                            src={`http://localhost:5000/${form.avatarLunas}`}
                          />
                        </div>
                      )}
                      <input
                        name="avatarLunas"
                        type="file"
                        placeholder="img"
                        onChange={handleChange}
                        className="max-w-[19rem] rounded-lg focus:border-blue-20 focus:outline-none box-border border-2 border-gray-10 px-4 py-3 md:w-96 my-2 md:mx-1"
                      />
                      <button onClick={handelUpate}>update</button>
                    </div>
                  )}
                </div>
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

  return {
    props: {
      data: data,
      img: img,
    },
  };
}
