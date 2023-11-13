import data from "./NFTDetails";
import { Icon } from "@iconify/react";
import "./table.css";

const TableContainer = () => {
  const tableOne = data.slice(0, 6);
  const tableTwo = data.slice(6, 12);
  
  const firstTableRows = tableOne.map((nft, index) => {
    return (
      <tr className="whitespace-nowrap min-w-full text-sm border-b divide-slate-700" key={index}>

        <td className="">{nft.id}</td>
        <td className="text-left">
          <div className="flex flex-row flex-nowrap items-center px-4 py-2">
            <div className="mr-3">
              <Icon
                icon="pajamas:profile"
                color="#ccd1de"
                width="38"
                height="38"
                hFlip={true}
              />
            </div>
            <div>
              <div className="">
                {nft.Collections}
                </div>
                <div className=" md:hidden lg:hidden xl:hidden sm:hidden 2xl:hidden flex flex-row flex-nowrap gray-color">
                  FLOOR: {" "}<div className="ml-2 font-bold ">{nft.Floors[0]}</div>
                  <div className="gain flex flex-row flex-nowrap justify-self-center items-center ">
                    <Icon
                    className="small-hidden"
                      icon="ph:arrow-up-left-light"
                      color="#31c48d"
                      width="16"
                      height="16"
                      rotate={1}
                    />
                    <span className="ml-2">{nft.Floors[1]}</span>
                  
                </div>
              </div>
            </div>
          </div>
        </td>
        <td>
          <div className="flex flex-col flex-nowrap items-center px-4 py-2">
            <div className="font-bold">{nft.Volume[0]}</div>
            <div className="loss flex flex-row flex-nowrap justify-self-center mx-auto text-xs">
              <Icon
                icon="ph:arrow-up-left-light"
                color="#f05252"
                width="16"
                height="16"
                rotate={2}
              />
              <span>{nft.Volume[1]}</span>
            </div>
          </div>
        </td>
        <td className="small-hidden">
          <div className="flex flex-col flex-nowrap px-4 py-2">
            <div className="font-bold ">{nft.Floors[0]}</div>
            <div className="gain flex flex-row flex-nowrap justify-self-center mx-auto text-xs">
              <Icon
                icon="ph:arrow-up-left-light"
                color="#31c48d"
                width="16"
                height="16"
                rotate={1}
              />
              <span>{nft.Floors[1]}</span>
            </div>
          </div>
        </td>
        <td className="small-hidden">
          <div className="flex flex-col flex-nowrap px-4 py-2">
            <div className="font-bold ">{nft.Owners[0]}</div>
            <div className="loss flex flex-row flex-nowrap justify-self-center mx-auto text-xs">
              <Icon
                icon="ph:arrow-up-left-light"
                color="#f05252"
                width="16"
                height="16"
                rotate={2}
              />
              <span>{nft.Owners[1]}</span>
            </div>
          </div>
        </td>
      </tr>
    );
  });
  const secondTableRows = tableTwo.map((nft, index) => {
    return (
      <tr  className="whitespace-nowrap min-w-full text-sm border-b divide-slate-700" key={index}>

        <td className="">{nft.id}</td>
        <td className="text-left">
          <div className="flex flex-row flex-nowrap items-center px-4 py-2">
            <div className="mr-3">
              <Icon
                icon="pajamas:profile"
                color="#ccd1de"
                width="38"
                height="38"
                hFlip={true}
              />
            </div>
            <div>
              <div className=" ">
                {nft.Collections}
                </div>
                <div className=" md:hidden lg:hidden xl:hidden sm:hidden 2xl:hidden flex flex-row flex-nowrap gray-color">
                  FLOOR: {" "}<div className="ml-2 font-bold ">{nft.Floors[0]}</div>
                  <div className="gain flex flex-row flex-nowrap justify-self-center items-center ">
                    <Icon
                    className="small-hidden"
                      icon="ph:arrow-up-left-light"
                      color="#31c48d"
                      width="16"
                      height="16"
                      rotate={1}
                    />
                    <span className="ml-2">{nft.Floors[1]}</span>
                  
                </div>
              </div>
            </div>
          </div>
        </td>
        <td>
          <div className="flex flex-col flex-nowrap items-center px-4 py-2">
            <div className="font-bold ">{nft.Volume[0]}</div>
            <div className="loss flex flex-row flex-nowrap justify-self-center mx-auto text-xs">
              <Icon
                icon="ph:arrow-up-left-light"
                color="#f05252"
                width="16"
                height="16"
                rotate={2}
              />
              <span>{nft.Volume[1]}</span>
            </div>
          </div>
        </td>
        <td className="small-hidden">
          <div className="flex flex-col flex-nowrap px-4 py-2">
            <div className="font-bold ">{nft.Floors[0]}</div>
            <div className="gain flex flex-row flex-nowrap justify-self-center mx-auto text-xs">
              <Icon
                icon="ph:arrow-up-left-light"
                color="#31c48d"
                width="16"
                height="16"
                rotate={1}
              />
              <span>{nft.Floors[1]}</span>
            </div>
          </div>
        </td>
        <td className="small-hidden">
          <div className="flex flex-col flex-nowrap px-4 py-2">
            <div className="font-bold ">{nft.Owners[0]}</div>
            <div className="loss flex flex-row flex-nowrap justify-self-center mx-auto text-xs">
              <Icon
                icon="ph:arrow-up-left-light"
                color="#f05252"
                width="16"
                height="16"
                rotate={2}
              />
              <span>{nft.Owners[1]}</span>
            </div>
          </div>
        </td>
      </tr>
    );
  });
  return (
    <div className="w-full flex flex-col xl:flex-row flex-nowrap px-12 gap-8 items-center mt-7">
      <table className=" w-4/5 text-center flex-1 p-4 xl:w-1/2 xl:mr-auto">
        <thead className="gray-color border-b divide-slate-700">
          <tr className="">
            <th></th>
            <th className="text-left p-2">COLLECTION</th>
            <th>VOLUME</th>
            <th className="small-hidden p-2">FLOOR</th>
            <th className="small-hidden p-2">OWNERS</th>
          </tr>
        </thead>
        <tbody className="xl:hidden ">
          {firstTableRows}

          {secondTableRows}
        </tbody>
        <tbody className="sm:hidden lg:hidden md:hidden small-hidden xl:table-row-group">
          {firstTableRows}
        </tbody>
      </table>
      <table className="sm:hidden lg:hidden md:hidden small-hidden xl:table w-1/2 text-center">
        <thead className="gray-color border-b divide-slate-700">
          <tr>
            <th></th>
            <th className="p-2">COLLECTION</th>
            <th className="p-2">VOLUME</th>
            <th className="p-2">FLOOR</th>
            <th className="p-2">OWNERS</th>
          </tr>
        </thead>
        <tbody>{secondTableRows}</tbody>
      </table>
    </div>
  );
};

export default TableContainer;
