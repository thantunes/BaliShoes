import React, { useEffect, useState } from "react";
import { useProduct } from "vtex.product-context";
import axios from "axios";
import "./styles.global.css";
import { Link } from "vtex.render-runtime";

const ProductColorVariation = () => {
  const { product, selectedItem } = useProduct();
  const productModel = product?.specificationGroups
    ?.find((group) => group.name === "allSpecifications")
    ?.specifications?.find((specification) => specification.name === "Modelo SKU")
    ?.values?.[0];

  const currentSkuId = selectedItem?.itemId;

  const [variations, setVariations] = useState([]);

  const getVariationByModel = async () => {
    try {
      const productModelClean = productModel.trim();

      const url = `/api/catalog_system/pub/products/search?fq=specificationFilter_251:${encodeURIComponent(
        productModelClean
      )}`;

      const resp = await axios.get(url);

      if (resp.data?.length) {
        const sortedVariations = resp.data?.sort((a, b) => {
          const aHasCurrent = a.items.some(
            (item) => item.itemId === currentSkuId
          );
          const bHasCurrent = b.items.some(
            (item) => item.itemId === currentSkuId
          );

          if (aHasCurrent) return -1;
          if (bHasCurrent) return 1;
          return 0;
        });
        setVariations(sortedVariations);
      } else {
        setVariations([]); // garante reset se não tiver resultados
      }
    } catch (err) {
      console.error("Erro ao buscar variações:", err);
      setVariations([]);
    }
  };

  // Buscar variações sempre que mudar o modelo
  useEffect(() => {
    if (productModel) {
      getVariationByModel();
    } else {
      setVariations([]);
    }
  }, [productModel]);

  // Controlar exibição do skuSelector nativo
  useEffect(() => {
    const skuSelector = document.querySelector(
      ".vtex-store-components-3-x-skuSelectorSubcontainer--cor"
    );

    if (skuSelector) {
      if (variations.length > 0) {
        skuSelector.style.display = "none";
      } else {
        skuSelector.style.display = "";
      }
    }
  }, [variations, product]);

  return variations.length > 0 && (
    <div className="product-color-variation">
      {variations.map((variation) => {
        const variationImg = variation?.items?.[0]?.images[0]?.imageUrl;

        return (
          <Link
            href={`/${variation.linkText}/p`}
            className="variation"
            key={variation.productId}
          >
            <img src={variationImg} alt="" />
          </Link>
        );
      })}
    </div>
  );
};

export default ProductColorVariation;
