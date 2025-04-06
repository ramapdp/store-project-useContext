import { Link } from "react-router-dom";
import PlaceHolderImage from "@assets/images/placeholder-image.png";
import { formatURL } from "@helpers/formatURL";

const Product = (props) => {
  const { id, data } = props;

  console.log("DAAAAAAAAAAAAAAA", data);
  return (
    <Link key={id} to={`/products/${id}`} className="group text-sm">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-[20px] bg-gray-100 group-hover:opacity-75 group-hover:scale-110">
        <img
          src={data.images ? formatURL(data.images[0]) : PlaceHolderImage}
          alt={data.title}
          className="h-full w-full object-cover object-center"
        />
      </div>
      <h3 className="mt-4 font-bold text-lg text-black">{data.title}</h3>
      <p className="italic text-gray-500">{data.availability}</p>
      <p className="mt-2 font-bold text-xl text-black">${data.price}</p>
    </Link>
  );
};

export default Product;
