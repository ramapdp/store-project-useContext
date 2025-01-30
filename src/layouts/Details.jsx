import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchProductById from "@utils/fetchProductById";
import Spinner from "@components/Spinner";
import ProductDetails from "@layouts/ProductDetails";
import Modal from "@components/modal";
import { useState } from "react";
import NotifAdded from "@components/NotifAdded";
import ErrorBoundary from "@components/ErrorBoundary";

const Details = () => {
  const { id } = useParams();
  const results = useQuery(["products", id], fetchProductById);
  const [showNotif, setShowNotif] = useState(false);
  
  const onAddEventHandler = (e) => {
    e.preventDefault();
    setShowNotif(true);
  };

  if (results.isLoading) {
    return <Spinner />;
  }

  const product = results.data[0];

  return (
    <>
      <ProductDetails product={product} onAddClick={onAddEventHandler} />
      {showNotif ? (
        <Modal>
          <div>
            <NotifAdded
              setShow={setShowNotif}
              show={showNotif}
            />
          </div>
        </Modal>
      ) : null}
    </>
  );
};

export default function DetailsErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
}
