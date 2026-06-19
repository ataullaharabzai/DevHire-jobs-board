interface CardType {
  title: string;
  company: string;
  location: string;
  src: string;
  type: string;
}

function JobCard({ title, company, location, type, src }: CardType) {
  return (
    <div className="w-full rounded-2xl p-6 md:p-8 bg-white shadow shadow-gray-300 border border-transparent hover:border hover:border-[#143cf4] transition-all">
      <div className="flex items-center gap-5">
        <div className="w-20 h-20 md:w-24 md:h-24 shrink-0">
          <img
            src={src}
            alt="company Image"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="flex flex-col min-w-0 leading-relaxed">
          <p className="text-[#143cf4] font-semibold md:text-[18px]">
            {company}
          </p>
          <p className="md:text-[20px] font-bold truncate">{title}</p>
          <div className="flex text-[#4e524a] items-center gap-4 text-[12px] lg:text-[14px] mt-1">
            <div className="flex items-center gap-2">
              <i className="fa-regular fa-clock text-[#143cf4]"></i>
              <p>{type}</p>
            </div>
            <p className="truncate">{location}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobCard;
