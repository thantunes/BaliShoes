import { useEffect, useState } from "react";
import { useOrderForm } from "vtex.order-manager/OrderForm";
import { formatPrice } from "../../utils/formatPrice";
import "./styles.global.css";

function FreeShipping() {
  const { orderForm } = useOrderForm();
  const [restValue, setRestValue] = useState(0);
  const [fillBarStyle, setFreeBarStyle] = useState({ width: "0" });

  const SHIPPING_TARGET = 20000;

  useEffect(() => {
    if (!orderForm?.value) return;

    const minicartTotal = orderForm.value;
    const newRestValue = SHIPPING_TARGET - minicartTotal;
    const fillBarPercentage = (100 * minicartTotal) / SHIPPING_TARGET;

    setRestValue(newRestValue);
    setFreeBarStyle({
      width: `${fillBarPercentage <= 100 ? fillBarPercentage : 100}%`,
    });
  }, [orderForm]);

  return (
    <>
      {orderForm?.value > 0 && (
        <div className="freeShipping">
          {restValue <= 0 ? (
            <h2>
              Parabéns, você ganhou <strong>frete grátis</strong>
              <img src="/arquivos/free-shipping-icon.svg" alt="Frete grátis" />
            </h2>
          ) : (
            <h2>
              Falta <span>{formatPrice(restValue / 100)}</span> para{" "}
              <span>Frete Grátis</span>
              <img src="/arquivos/free-shipping-icon.svg" alt="Frete grátis" />
            </h2>
          )}
          <div className="freeShippingBar">
            <span>0</span>
            <div style={{ ...fillBarStyle }}></div>
          </div>
          <span className="freeShippingBarText">
            *O desconto será aplicado automaticamente
          </span>
        </div>
      )}
    </>
  );
}

export default FreeShipping;
