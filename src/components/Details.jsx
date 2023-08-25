import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchProductById from "./fetchProductById";
import Spinner from "./Spinner";
import ProductDetails from "./ProductDetails";
import ErrorBoundary from "./ErrorBoundary";
import Modal from "./Modal";
import { useState } from "react";
import ModalShow from "./ModalShow";

const Details = () => {
  const { id } = useParams();
  const results = useQuery(["products", id], fetchProductById);
  const [showModal, setShowModal] = useState(false);
  
  const onAddEventHandler = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const onConfirmEventHandler = (e) => {
    e.preventDefault();
    setShowModal(false);
    console.log("user membeli barang ini");
  };

  if (results.isLoading) {
    return <Spinner />;
  }

  const product = results.data[0];

  return (
    <>
      <ProductDetails product={product} onAddClick={onAddEventHandler} />
      {showModal ? (
        <Modal>
          <div>
            <ModalShow
              onConfirm={onConfirmEventHandler}
              setOpen={setShowModal}
              open={showModal}
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
