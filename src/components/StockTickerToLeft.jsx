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

  const StockTickerToLeft = ({ item }) => (
    <li className="flex flex-col items-center  py-2 px-16 gap-2 rounded-3xl bg-gradient-to-br dark:from-red-600 dark:via-red-600/50  dark:to-white/40 from-[#FF7EED] to-[#FF7EED]/20">
      <span className="text-[var(--text-primary)] text-2xl font-bold">
        {item.text}
      </span>
      <div className="flex items-center justify-center text-xl text-[var(--text-secondary)]">
        <span>
          <IoMdDownload />
        </span>
        <span>{item.downloads}</span>
      </div>
    </li>
  );

  return (
    <div className="font-sans text-base leading-normal   ">
      <div className="text-sm py-2 overflow-hidden select-none flex gap-5">
        <ul className="list-none flex-shrink-0  min-w-full flex justify-between items-center gap-5 animate-ticker-left">
          {data.map((item, index) => (
            <StockTickerToLeft key={`item-${index}`} item={item} />
          ))}
        </ul>

        <ul
          className="list-none flex-shrink-0 min-w-full flex justify-between items-center gap-5 animate-ticker-left"
          aria-hidden="true"
        >
          {data.map((item, index) => (
            <StockTickerToLeft key={`item-clone-${index}`} item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}
