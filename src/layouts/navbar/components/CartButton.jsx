import { Link } from "react-router-dom";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

const CartButton = () => (
  <Link
    className="relative flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    to="/cart"
  >
    <span className="absolute -inset-1.5" />
    <span className="sr-only">View cart</span>
    <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
  </Link>
);

export default CartButton;
