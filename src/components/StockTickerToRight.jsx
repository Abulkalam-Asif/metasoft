import React from "react";
import { IoMdDownload } from "react-icons/io";

export default function DownloadTicker() {
  const data = [
    { text: "Name", downloads: "100 Downloads" },
    { text: "Name", downloads: "100 Downloads" },
    { text: "Name", downloads: "100 Downloads" },
    { text: "Name", downloads: "100 Downloads" },
    { text: "Name", downloads: "100 Downloads" },
    { text: "Name", downloads: "100 Downloads" },
    { text: "Name", downloads: "100 Downloads" },
    { text: "Name", downloads: "100 Downloads" },
    { text: "Name", downloads: "100 Downloads" },
    { text: "Name", downloads: "100 Downloads" },
    { text: "Name", downloads: "100 Downloads" },
    { text: "Name", downloads: "100 Downloads" },
    { text: "Name", downloads: "100 Downloads" },
    { text: "Name", downloads: "100 Downloads" },
    { text: "Name", downloads: "100 Downloads" },
  ];
  
  const tickerStyle = {
    animation: "tickerRight 30s linear infinite",
  };

  const StockTickerToRight = ({ item }) => (
    <li className="flex flex-col items-center bg-gradient-to-br from-red-600 via-red-600/50 to-white/40 py-2 px-16 gap-2 rounded-3xl">
      <span className="text-white text-2xl font-bold">{item.text}</span>
      <div className="flex items-center justify-center text-xl text-gray-400">
        <span>
          <IoMdDownload />
        </span>
        <span>{item.downloads}</span>
      </div>
    </li>
  );

  return (
    <div className="font-sans text-base leading-normal mt-4">
      <style jsx>{`
        @keyframes tickerRight {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>

      <div className="text-sm py-2 overflow-hidden select-none flex gap-5">
        <ul
          className="list-none flex-shrink-0 min-w-full flex justify-between items-center gap-5"
          style={tickerStyle}
        >
          {data.map((item, index) => (
            <StockTickerToRight key={`item-${index}`} item={item} />
          ))}
        </ul>

        <ul
          className="list-none flex-shrink-0 min-w-full flex justify-between items-center gap-5"
          style={tickerStyle}
          aria-hidden="true"
        >
          {data.map((item, index) => (
            <StockTickerToRight key={`item-clone-${index}`} item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}
