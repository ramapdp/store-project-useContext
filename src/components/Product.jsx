import { Link } from "react-router-dom";

const Product = (props) => {
   const { id, image_url, image_alt, name, availability, price } = props;

  return (
    <Link key={id} to={`/products/${id}`} className="group text-sm">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
        <img
          src={image_url}
          alt={image_alt}
          className="h-full w-full object-cover object-center"
        />
      </div>
      <h3 className="mt-4 font-medium text-gray-900">{name}</h3>
      <p className="italic text-gray-500">{availability}</p>
      <p className="mt-2 font-medium text-gray-900">{price}</p>
    </Link>
  );
};

export default Product;
