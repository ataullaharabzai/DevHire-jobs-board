import Button from "./Button";

interface Search {
  placeholder: string;
}

function Searchbar({ placeholder }: Search) {
  return (
    <div className="w-full max-w-130 rounded-lg shadow shadow-gray-500 p-3 relative flex justify-around items-center border-2 border-transparent hover:border-2 hover:border-[#143] transition-all">
      <i className="fa-brands fa-sistrix text-2xl"></i>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full max-w-75 h-10 focus:outline-0 text-[18px]"
      />
      <Button
        text="SEARCH JOBS"
        visit="/jobs"
        className="bg-[#143] text-white py-3"
      />
    </div>
  );
}

export default Searchbar;
