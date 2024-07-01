// import ImgComponent from "../ImgComponen";
import Link from "next/link";
import dynamic from 'next/dynamic'
 
const ImgComponent = dynamic(() => import('../ImgComponen'), {
  loading: () => <p>Loading...</p>,
})
 
const About = () => {
  return (
    <section
      id="about"
      className="About justify-center  items-center mx-5 lg:mx-[6rem] md:mx-[2rem]  my-[8rem]"
    >
      <div className="flex flex-wrap max-w-max h-auto ">
        <div>
          <ImgComponent
            src="/Image/abaut.svg"
            alt="About Image"
            width={330}
            height={330}
            loading="lazy"
            className="shadow-alg rounded-2xl  mt-7 h-auto md:max-w-64  lg:max-w-74 xl:max-w-max"
          />
        </div>

        <div className="lg:mx-20 md:mx-[2rem] mt-7 w-[30rem] md:w-[20rem] lg:w-[27rem] ">
          <h1 className="font-bold text-3xl my-2 text-blue-40">About</h1>
          <h2 className=" font-medium text-xl md:text-2xl my-3">
            Gedung Pertemaan Dasa <br /> Cangkol Kecamatan Mojolaban{" "}
          </h2>
          <p className="font-normal md:text-xl text-lg mb-7">
            Baca kisah bagaimana gedung desa Cangkol berhasil dibangun dan di
            persewaan yang dapatmembantu warga untuk mensukses kan semuah acara.
          </p>
          <Link
            className="btn_green text-blue-30 px-10  font-semibold xl:py-3 py-3 rounded-full bg-green-10 hover:outline-green-10 hover:bg-green-600"
            href={`/about`}
          >
            Baca
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
