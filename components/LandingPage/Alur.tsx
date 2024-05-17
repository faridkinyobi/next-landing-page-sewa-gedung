import { AlurComponen } from "../AlurComponen";
import alurData from "../itemsData";

const Alur = () => {
  return (
    <section
      id="alur"
      className="alur text-center items-center justify-center "
    >
      <div className="flex-1">
        <h1 className="p-4 font-bold text-3xl mb-8 text-blue-40">Alur Sewa</h1>
        <div className="flex flex-wrap gap-0  lg:gap-[10rem] justify-center">
          <div className="border-blue-30  border-l-8 sm:ml-6">
            {alurData.Aluritem.map((item, index) => (
              <div key={index} className=" relative ml-6">
                <AlurComponen
                  // className={item.className}
                  Number={item.Number}
                  desc={item.desc}
                />
              </div>
            ))}
          </div>
          <div className="border-blue-30  border-l-8 sm:ml-6">
            {alurData.Aluritem2.map((item, index) => (
              <div key={index} className=" relative ml-6">
                <AlurComponen Number={item.Number} desc={item.desc} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Alur;
