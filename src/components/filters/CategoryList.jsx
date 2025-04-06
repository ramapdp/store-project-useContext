import { HiOutlineChevronRight } from "react-icons/hi";

const CategoryList = ({ categories }) => {
  return (
    <div className="w-full flex flex-col gap-4">
      {categories.map((category) => (
        <div key={category} className="flex justify-between items-center">
          <p className="font-normal text-base text-black/60">{category}</p>
          <HiOutlineChevronRight className="text-[20px] text-black/40" />
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
