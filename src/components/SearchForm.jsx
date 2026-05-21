import { useState } from "react";

const SearchForm = ({ onSearch }) => {
  const [city, setCity] = useState("");
  return (
    <div className="flex items-center justify-between gap-4 mt-4 ">
      <input
        className="bg-slate-800 border border-slate-600 rounded-lg py-2 px-4 flex-1 text-white "
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onSearch(city);
          }
        }}
        placeholder="Search a city weather"
      ></input>
      <button
        className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition"
        onClick={() => onSearch(city)}
      >
        Search
      </button>
    </div>
  );
};

export default SearchForm;
