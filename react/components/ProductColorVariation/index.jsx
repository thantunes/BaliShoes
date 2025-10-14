import React, { useEffect, useState } from "react"
import { useProduct } from "vtex.product-context"
import axios from "axios"
import "./styles.global.css"
import { Link } from "vtex.render-runtime"
import { SliderLayout } from "vtex.slider-layout"

const ProductColorVariation = () => {
  const { product, selectedItem } = useProduct()
  const productModel = product?.specificationGroups
    ?.find((group) => group.name === "allSpecifications")
    ?.specifications?.find(
      (specification) => specification.name === "Modelo SKU"
    )?.values?.[0]

  const currentSkuId = selectedItem?.itemId
  const [variations, setVariations] = useState([])

  const getVariationByModel = async () => {
    try {
      const productModelClean = productModel?.trim()
      const url = `/api/catalog_system/pub/products/search?fq=specificationFilter_251:${encodeURIComponent(
        productModelClean
      )}&_from=0&_to=49`

      const resp = await axios.get(url)

      if (resp.data?.length) {
        const otherVariations = resp.data.filter(
          (v) => !v.items.some((item) => item.itemId === currentSkuId)
        )

        const currentProduct = {
          productId: product.productId,
          linkText: product.linkText,
          items: [
            {
              images: [
                {
                  imageUrl:
                    selectedItem?.images?.[0]?.imageUrl ??
                    product.items?.[0]?.images?.[0]?.imageUrl ??
                    "",
                },
              ],
            },
          ],
        }

        const finalVariations = [currentProduct, ...otherVariations]
        setVariations(finalVariations)
      } else {
        setVariations([])
      }
    } catch (err) {
      console.error("Erro ao buscar variações:", err)
      setVariations([])
    }
  }

  useEffect(() => {
    if (productModel) {
      getVariationByModel()
    } else {
      setVariations([])
    }
  }, [productModel])

  useEffect(() => {
    const skuSelector = document.querySelector(
      ".vtex-store-components-3-x-skuSelectorSubcontainer--cor"
    )

    if (skuSelector) {
      skuSelector.style.display = variations.length > 0 ? "none" : ""
    }
  }, [variations, product])

  // conteúdo principal
  const variationItems = variations.map((variation) => {
    const variationImg = variation?.items?.[0]?.images[0]?.imageUrl
    return (
      <Link
        href={`/${variation.linkText}/p`}
        className="variation"
        key={variation.productId}
      >
        <img src={variationImg} alt="" />
      </Link>
    )
  })

  if (variations.length === 0) return null

  return (
    <div className="product-color-variation">
      {variations.length > 8 ? (
        <SliderLayout
          infinite={true}
          showNavigationArrows="always"
          showPaginationDots="always"
          itemsPerPage={{
            desktop: 4,
            tablet: 4,
            phone: 3,
          }}
        >
          {variationItems}
        </SliderLayout>
      ) : (
        <div className="variation-grid">{variationItems}</div>
      )}
    </div>
  )
}

export default ProductColorVariation
