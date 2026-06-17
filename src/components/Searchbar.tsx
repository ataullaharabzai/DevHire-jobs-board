import Button from "./Button";

interface Search {
  placeholder: string;
}

function Searchbar({ placeholder }: Search) {
  return (
    <div>
      <i className="fa-brands fa-sistrix"></i>
      <input type="text" placeholder={placeholder} />
      <Button text="SEARCH JOBS" visit="/" />
    </div>
  );
}

export default Searchbar;