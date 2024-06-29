import ImgComponen from "../ImgComponen";
import itemsData from "../itemsData";
export const Galery = () => {
  return (
    <section id="galery" className="galery mx-5 lg:mx-[6rem] my-5 md:mt-20 ">
      <h1 className=" font-bold text-3xl ml-4 text-blue-40 ">Galery</h1>
      <p className="py-2 md:text-2xl text-xl  ml-4 text-blue-20">
        Documentasi Gedung
      </p>
      <div className="static grid col-auto gap-4">
        <div className=" md:flex grid justify-items-start md:items-center md:justify-center gap-6">
          <div className="grid grid-cols-2 gap-6 max-w-max h-auto">
            <ImgComponen
              src={itemsData.DaftarImag.gambar1}
              alt="gambar"
              width={210}
              height={189}
              className="md:w-[10rem] lg:w-[13rem]"
              loading="lazy"
            />
            <ImgComponen
              src={itemsData.DaftarImag.gambar3}
              alt="gambar"
              width={210}
              height={189}
              className="md:w-[10rem] lg:w-[13rem]"
              loading="lazy"
            />
          </div>
          <ImgComponen
            src={itemsData.DaftarImag.gambar2}
            alt="gambar"
            width={604}
            height={194}
            className="md:w-[27rem] lg:w-[38rem]"
            loading="lazy"
          />
        </div>
        <div className=" md:flex grid justify-items-start md:items-center md:justify-center gap-6 max-w-max h-auto">
          <ImgComponen
            src={itemsData.DaftarImag.gambar8}
            alt="gambar"
            width={604}
            height={194}
            className="md:w-[27rem] lg:w-[38rem]"
            loading="lazy"
          />
          <div className="grid grid-cols-2 gap-6">
            <ImgComponen
              src={itemsData.DaftarImag.gambar5}
              alt="gambar"
              width={210}
              height={189}
              className="md:w-[10rem] lg:w-[13rem]"
              loading="lazy"
            />
            <ImgComponen
              src={itemsData.DaftarImag.gambar6}
              alt="gambar"
              width={210}
              height={189}
              className="md:w-[10rem] lg:w-[13rem]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Galery;
