interface CardType {
  title: string;
  company: string;
  location: string;
  src: string;
  type: string;
}

function JobCard({ title, company, location, type, src }: CardType) {
  return (
    <div className="w-full rounded-2xl lg:px-15 lg:py-10 px-5 py-2 bg-white shadow shadow-gray-400">
      <div className="w-25 h-25 flex justify-between items-center gap-5 shadow rounded-2xl shadow-gray-400">
        <img
          src={src}
          alt="company Image"
          className="w-full h-full object-cover rounded-lg shadow shadow-gray-400"
        />
        <div className="flex justify-center items-start flex-col min-w-100 leading-10">
          <p className="text-[#143] font-semibold md:text-[20px]">{company}</p>
          <p className="md:text-[26px] font-bold">{title}</p>
          <div className="flex text-[#4e524a] justify-center items-center gap-4 text-[12px] lg:text-[16px]">
            <div className="flex justify-center items-center gap-2">
              <i className="fa-regular fa-clock"></i>
              <p>{type}</p>
            </div>
            <p>{location}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobCard;
