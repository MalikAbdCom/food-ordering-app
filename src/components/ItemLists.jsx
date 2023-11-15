import { useEffect, useState } from "react";
import Button from "./UI/Button.jsx";

export function ItemLists() {
  const [dataMakanan, setDataMakanan] = useState([]);

  useEffect(() => {
    const dapetinData = async () => {
      try {
        const dataUrl = await fetch("http://localhost:3000/meals");
        const data = await dataUrl.json();
        setDataMakanan(data);
      } catch (error) {
        console.log(error);
      }
    };

    dapetinData();
  }, []);

  return (
    <div
      className={
        " grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-8 py-16 w-11/12 xl:w-full max-w-screen-xl mx-auto"
      }
    >
      {dataMakanan.map((menu) => {
        return (
          <div
            className={
              "rounded-xl bg-slate-200 border border-slate-600 overflow-hidden"
            }
            key={menu.id}
          >
            <img
              className={"h-[20rem] object-cover"}
              src={`http://localhost:3000/${menu.image}`}
              alt={menu.name}
            />
            <div className={"p-4"}>
              <div>
                <h2 className={"font-bold text-xl"}>{menu.name}</h2>
                <p className={"text-orange-700 font-semibold"}>${menu.price}</p>
                <p className={"text-xs line-clamp-2"}>{menu.description}</p>
              </div>
              <Button
                className={
                  "bg-red-700 rounded-md font-semibold text-white mt-4 ml-auto transition-all flex hover:bg-red-800 hover:outline hover:outline-2 hover:outline-offset-4 hover:outline-red-600"
                }
                type={"button"}
              >
                Beli sekarang
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
