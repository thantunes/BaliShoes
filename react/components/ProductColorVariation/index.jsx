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

      // URL absoluta usando o host atual
      const url = `/api/catalog_system/pub/products/search?fq=specificationFilter_251:${encodeURIComponent(
        productModelClean
      )}`;

      const resp = await axios.get(url);

      console.log(resp.data)

      if (resp.data?.length) {
        const sortedVariations = resp.data?.sort((a, b) => {
          const aHasCurrent = a.items.some(
            (item) => item.itemId === currentSkuId
          );
          const bHasCurrent = b.items.some(
            (item) => item.itemId === currentSkuId
          );

          if (aHasCurrent) return -1; // coloca 'a' primeiro
          if (bHasCurrent) return 1; // coloca 'b' depois
          return 0; // mantém ordem para os demais
        });
        setVariations(sortedVariations);
      }
    } catch (err) {
      console.error("Erro ao buscar variações:", err);
    }
  };

  useEffect(() => {
    console.log({productModel, variations, product});

    if (productModel) {
      console.log("ProductModel:", productModel);
      getVariationByModel();
    }
  }, [productModel]);

  return variations && (
    <div className="product-color-variation">
      {variations?.map((variation) => {
        const variationImg = variation?.items?.[0]?.images[0].imageUrl;

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
