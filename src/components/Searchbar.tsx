import Button from "./Button";

interface Search {
  placeholder: string;
  searchItems: string;
  setSearchItems: React.Dispatch<React.SetStateAction<string>>;
}

function Searchbar({ placeholder, searchItems, setSearchItems }: Search) {
  return (
    <div className="w-full max-w-130 h-15 rounded-lg shadow shadow-gray-500 p-4 md:p-4 flex justify-start items-center border-2 border-transparent hover:border-2 hover:border-[#143cf4] transition-all">
      <i className="fa-brands fa-sistrix md:text-2xl mr-3"></i>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full focus:outline-0 md:text-[18px] text-[12px] px-2"
        value={searchItems}
        onChange={(e) => setSearchItems(e.target.value)}
      />
      {/* <Button
        text="SEARCH"
        visit="/jobs"
        className="bg-[#143] text-white md:py-3 text-[10px] md:text-[14px]"
      /> */}
    </div>
  );
}

export default Searchbar;
