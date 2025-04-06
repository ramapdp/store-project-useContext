import { HiOutlineChevronUp, HiOutlineChevronDown } from "react-icons/hi";

const PriceFilter = ({ showFilters, setShowFilters }) => {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center w-full">
        <p className="font-bold text-[20px] text-black">Price</p>
        <button
          onClick={() =>
            setShowFilters({ ...showFilters, price: !showFilters.price })
          }
        >
          {showFilters.price ? (
            <HiOutlineChevronUp className="font-bold text-[20px] text-black/40" />
          ) : (
            <HiOutlineChevronDown className="font-bold text-[20px] text-black/40" />
          )}
        </button>
      </div>
      {showFilters.price && (
        <div className="flex flex-col w-full gap-4 mt-4">
          <input 
            type="range" 
            min="0" 
            max="1000" 
            className="w-full"
          />
          <div className="flex justify-between">
            <span className="text-sm text-black/60">$0</span>
            <span className="text-sm text-black/60">$1000</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default PriceFilter;
