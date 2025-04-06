import { HiAdjustments } from "react-icons/hi";
import CategoryList from "./CategoryList";
import PriceFilter from "./PriceFilter";

const FilterSection = ({ showFilters, setShowFilters }) => {
  const categories = ["Shoes", "Shorts", "Shirts", "Hoodie", "Jeans"];

  return (
    <div className="h-fit my-4 border border-color-black/100 rounded-[20px] bg-white">
      <div className="flex flex-col gap-5 w-[295px] items-center px-6 py-5 max-h-[calc(100vh-2rem)] overflow-y-auto">
        <div className="flex justify-between items-center w-full">
          <p className="font-bold text-[20px] text-black">Filters</p>
          <HiAdjustments className="text-[30px] text-black/40" />
        </div>
        <div className="inline-block h-[1.25px] w-full bg-black/10" />
        
        <CategoryList categories={categories} />
        <div className="inline-block h-[1.25px] w-full bg-black/10" />
        
        <PriceFilter showFilters={showFilters} setShowFilters={setShowFilters} />
        
        <button className="w-full p-4 bg-black text-white rounded-full text-sm">
          Apply Filter
        </button>
      </div>
    </div>
  );
};

export default FilterSection;
