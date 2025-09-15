import React from "react";
import { useCssHandles } from "vtex.css-handles";
import { useOrderItems } from "vtex.order-items/OrderItems";
import "./index.css";
import "./colors.global.css";

const CSS_HANDLES = ["buyButton"];

export default function Variations(props) {
  const { addItems } = useOrderItems();
  const handlesUser = useCssHandles(CSS_HANDLES);
  const hc = handlesUser.handles;

  // pega o primeiro SKU disponível
  const firstAvailableSku = props.item?.items?.find(
    (e) => e.sellers?.[0]?.commertialOffer.AvailableQuantity > 0
  );

  // monta o objeto do carrinho
  const cartItem = firstAvailableSku
    ? {
        id: firstAvailableSku.itemId,
        seller: firstAvailableSku.sellers?.[0]?.sellerId,
        quantity: 1,
      }
    : null;

  const handleBuy = async () => {
    if (cartItem) {
      await addItems([cartItem]);

      // dá trigger no botão do minicart
      const minicartButton = document.querySelector(
        ".vtex-minicart-2-x-openIconContainer .vtex-button"
      );
      if (minicartButton) {
        minicartButton.click();
      }
    }
  };

  return (
    <div>
      <button
        className={hc["buyButton"]}
        disabled={!cartItem}
        onClick={handleBuy}
      >
        {cartItem ? "Comprar" : "Indisponível"}
      </button>
    </div>
  );
}
