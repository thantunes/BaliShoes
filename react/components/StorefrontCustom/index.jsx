/* eslint-disable */
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useCssHandles } from "vtex.css-handles";
import { SliderLayout, SliderLayoutGroup } from "vtex.slider-layout";
import StorefrontFlagDiscount from "../StorefrontFlagDiscount";
import "../../css/styles.css";
import Variations from "../ProductVariations";
import "./index.css";

const CSS_HANDLES = [
  "BaliPSMain",
  "BaliPSProduct",
  "BaliPSBlockTitle",
  "BaliPSTitle",
  "BaliPSBlockTop",
  "BaliPSBlockTopLink",
  "BaliPSBlockImage",
  "BaliPSFirstImage",
  "BaliPSSecondImage",
  "BaliPSBlockSize",
  "BaliPSBlockInfo",
  "BaliPSBlockName",
  "BaliPSName",
  "BaliPSBlockPrice",
  "BaliPSBlockPriceListToBest",
  "BaliPSListPrice",
  "BaliPSBestPrice",
  "BaliPSInstallmentPrice",
  "BaliPSBlockBottomLink",
  "BaliPSPrimarySliderContainer",
];

const StorefrontCustom = (props) => {
  // Instance the generator of class
  const handlesUser = useCssHandles(CSS_HANDLES);
  const hc = handlesUser.handles; // handle classes
  const CollectionId = props.message;
  const CollectionLink = props.collectionlink;
  const CollectionTitle = props.collectiontitle;
  console.log(CollectionLink, CollectionId);
  const [productList, setProductList] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);
  const refImage = useRef(null);
  const [uniqid, setuniqid] = useState(Math.random().toString(16).slice(2));
  const getProductList = async () => {
    await axios({
      method: "get",
      url: `/api/catalog_system/pub/products/search?fq=productClusterIds:${CollectionId}`,
    }).then((resp) => {
      if (resp.data && resp.data.length) {
        setProductList(resp.data);
      }
    });
  };
  const itemsPerPage = {
    desktop: 4,
    tablet: 3,
    phone: 2,
  };

  const findSmallerInstallment = (list) => {
    let res = list.reduce((item, itemNext) =>
      item.Value < itemNext.Value ? item : itemNext
    );
    return res;
  };

  const RenderItem = (props) => {
    let item = props.data.dataItem;
    let defaultItem = item.items[0].sellers[0];
    let style = props.style ? props.style : {};
    let link = `/${item.linkText}/p`;
    let listPrice = defaultItem.commertialOffer.ListPrice;
    let bestPrice = defaultItem.commertialOffer.Price;
    let hasBestPrice = listPrice !== bestPrice;
    let bestPriceInstallments = bestPrice / 10;
    let listPriceInstallments = listPrice / 10;
    let installments = hasBestPrice
      ? `ou 10x de ${bestPriceInstallments.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })} sem juros`
      : `ou 10x de ${listPriceInstallments.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })} sem juros`;

    listPrice = listPrice.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
    bestPrice = bestPrice.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    let installmentText;
    if (
      defaultItem.commertialOffer.Installments &&
      defaultItem.commertialOffer.Installments.length
    ) {
      let smallInstallment = findSmallerInstallment(
        defaultItem.commertialOffer.Installments
      );
      let totalInstallments = smallInstallment.NumberOfInstallments;
      let valueInstallment = smallInstallment.Value.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
      installmentText = `ou ${totalInstallments}x de ${valueInstallment} sem juros`;
    } else {
      installmentText = "";
    }

    return (
      <div className={[hc.BaliPSMain + " " + hc.BaliPSProduct]} style={style}>
        <div className={hc.BaliPSBlockTop}>
          <a href={link} className={hc.BaliPSBlockTopLink}>
            <div className={hc.BaliPSBlockName}>
              <span className={hc.BaliPSName}>{item.productName}</span>
            </div>
            <StorefrontFlagDiscount product={item} />

            <div className={hc.BaliPSBlockImage}>
              <img
                src={item.items[0].images[0].imageUrl}
                className={hc.BaliPSFirstImage}
                id={item.items[0].images[0].imageId}
              />
              {item.items[0].images[1] && item.items[0].images[1].imageUrl && (
                <img
                  src={item.items[0].images[1].imageUrl}
                  className={hc.BaliPSSecondImage}
                />
              )}
            </div>
          </a>
        </div>
        <div className={hc.BaliPSBlockSize}>
          <div className={hc.BaliPSBlockInfo}>
            <a href={link} className={hc.BaliPSBlockBottomLink}>
              <div className={hc.BaliPSBlockPrice}>
                <span className={hc.BaliPSBlockPriceListToBest}>
                  {hasBestPrice ? (
                    <del className={hc.BaliPSListPrice}>{listPrice}</del>
                  ) : null}
                  <span className={hc.BaliPSBestPrice}>{bestPrice}</span>
                </span>
                <span className={hc.BaliPSInstallmentPrice}>
                  {installments}
                </span>
              </div>
            </a>
          </div>
          {/* <StorefrontCustomSizeVariation
                        dataItem={{ item }}
                    /> */}
          <div>
            <Variations
              imageref={item.items[0].images[0].imageId}
              item={item}
            />
          </div>
        </div>
      </div>
    );
  };

  useEffect(() => {
    getProductList();
  }, []);
  console.log("load", productList);

  const RenderShelf = () => {
    if (!productList) {
      return null;
    }

    return (
      <div className={hc.BaliPSMain}>
        <div className={hc.BaliPSBlockTitle}>
          <h2 className={hc.BaliPSTitle}>{CollectionTitle}</h2>
        </div>

        <div>
          <SliderLayoutGroup>
            <div className={hc.BaliPSPrimarySliderContainer}>
              <a href={CollectionLink}> VER MAIS</a>
              <SliderLayout
                itemsPerPage={itemsPerPage}
                autoplay={{
                  timeout: 3000,
                }}
                usePagination={true}
                asNavFor={sliderRef1}
                ref={(slider) => (sliderRef2 = slider)}
                showPaginationDots={"never"}
                infinite={true}
              >
                {productList &&
                  productList.map((item, index) => (
                    <RenderItem
                      key={index}
                      data={{
                        dataItem: item,
                        dataIndex: index,
                      }}
                      style={{ display: "none" }}
                    />
                  ))}
              </SliderLayout>
            </div>
            <SliderLayout
              showPaginationDots={"never"}
              itemsPerPage={itemsPerPage}
              usePagination={true}
              autoplay={{
                timeout: 3000,
              }}
              asNavFor={sliderRef1}
              ref={(slider) => (sliderRef2 = slider)}
              showNavigationArrows={"never"}
              infinite={true}
            >
              {productList &&
                productList.map((item, index) => (
                  <RenderItem
                    key={index}
                    data={{
                      dataItem: item,
                      dataIndex: index,
                    }}
                  />
                ))}
            </SliderLayout>
          </SliderLayoutGroup>
        </div>
      </div>
    );
  };

  return <RenderShelf />;
};

// StorefrontCustom.getSchema = () => {
//     return {
//         title: 'Prateleira Customizada',
//         type: 'object',
//         properties: {
//             message: {
//                 title: 'ID da coleção',
//                 type: 'string',
//                 default: null
//             }
//         }
//     }
// }

export default StorefrontCustom;
