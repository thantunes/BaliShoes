import { useProduct } from "vtex.product-context";
import "./styles.global.css";

const LowStockWarning = () => {
  const { selectedItem } = useProduct();
  const stock = selectedItem.sellers[0].commertialOffer.AvailableQuantity;

  return stock <= 6 && stock > 0 ? (
    <div className="lowStockWarning">
      <img src="/arquivos/available-stock.svg" alt="Quantidade disponível" />
      <div className="lowStockMessage">
        Corra! Só {stock} {stock > 1 ? "unidades" : "unidade"} em estoque.
      </div>
    </div>
  ) : null;
};

export default LowStockWarning;
