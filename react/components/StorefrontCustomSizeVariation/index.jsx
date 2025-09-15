/* eslint-disable */
// @ts-ignore
import React, { useEffect, useState } from "react";
import { useCssHandles } from "vtex.css-handles";
import { useProduct } from "vtex.product-context";
// @ts-ignore
import { useOrderItems } from "vtex.order-items/OrderItems";
import "./index.css";
// @ts-ignore
import { usePixel } from "vtex.pixel-manager";

const CSS_HANDLES = [
  "BaliScsvMain",
  "BaliScsvTitle",
  "BaliScsvBlockList",
  "BaliScsvList",
  "BaliScsvItem",
  "BaliScsvItemActive",
  "BaliScsvItemText",
  "BaliScsvBlockBuyButton",
  "BaliScsvBuyButtonBg",
  "BaliScsvBuyButton",
  "BaliScsvBuyButtonText",
];

const StorefrontCustomSizeVariation = (props) => {
  const { addItems } = useOrderItems();

  // Instance the generator of class
  const handlesUser = useCssHandles(CSS_HANDLES);
  const hc = handlesUser.handles; // handle classes

  // Product Info
  const prodData = useProduct();
  const prodList = prodData?.product?.items;

  let mainList = props.dataItem.item.items;
  let mainLink = props.dataItem.item.linkText;

  const [currentSize, setCurrentSize] = useState(null);

  let listSkusFormatted = [];

  const [sizeActive, setSizeActive] = useState("");
  const [isLoading, setIsLoading] = useState(null);
  const [prodAddedMsg, setAddedMsg] = useState(null);

  const { push } = usePixel();

  mainList?.forEach((item) => {
    if (item.sellers[0].commertialOffer.AvailableQuantity > 0) {
      let newValueSize = item?.["TAMANHO"]?.[0];
      let newValueName = item?.["name"];
      let newValueCor = item?.["Cor"]?.[0];
      newValueSize = {
        size: newValueSize,
        name: newValueName,
        color: newValueCor,
      };
      try {
        let dataSku = newValueSize;
        let link = `/${mainLink}/p?skuId=${item.itemId}`;
        dataSku.link = link;
        dataSku.id = item.itemId;
        dataSku.seller = item.sellers[0].sellerId;
        listSkusFormatted.push(dataSku);
      } catch (e) {
        console.log("Error em: ", item.nameComplete);
      }
    }
  });

  let skusLetterSorted = [];
  listSkusFormatted?.forEach((item, index) => {
    let newItem = item;
    if (item.size == "pp") {
      newItem.sizeOrder = 1;
      skusLetterSorted.push(newItem);
    } else if (item.size == "P") {
      newItem.sizeOrder = 2;
      skusLetterSorted.push(newItem);
    } else if (item.size == "M") {
      newItem.sizeOrder = 3;
      skusLetterSorted.push(newItem);
    } else if (item.size == "G") {
      newItem.sizeOrder = 4;
      skusLetterSorted.push(newItem);
    } else if (item.size == "GG") {
      newItem.sizeOrder = 5;
      skusLetterSorted.push(newItem);
    } else if (item.size == "XGG") {
      newItem.sizeOrder = 6;
      skusLetterSorted.push(newItem);
    } else if (item.size == "G1") {
      newItem.sizeOrder = 7;
      skusLetterSorted.push(newItem);
    } else if (item.size == "G2") {
      newItem.sizeOrder = 8;
      skusLetterSorted.push(newItem);
    } else if (item.size == "G3") {
      newItem.sizeOrder = 9;
      skusLetterSorted.push(newItem);
    } else if (item.size == "G4") {
      newItem.sizeOrder = 10;
      skusLetterSorted.push(newItem);
    } else if (item.size == "G5") {
      newItem.sizeOrder = 11;
      skusLetterSorted.push(newItem);
    } else if (item.size == "G6") {
      newItem.sizeOrder = 12;
      skusLetterSorted.push(newItem);
    }
  });

  let skusNumberSorted = [];
  listSkusFormatted?.forEach((item, index) => {
    let newItem = item;
    if (item.size == "30") {
      newItem.sizeNumber = 1;
      skusNumberSorted.push(item);
    } else if (item.size == "32") {
      newItem.sizeNumber = 2;
      skusNumberSorted.push(item);
    } else if (item.size == "34") {
      newItem.sizeNumber = 3;
      skusNumberSorted.push(item);
    } else if (item.size == "36") {
      newItem.sizeNumber = 4;
      skusNumberSorted.push(item);
    } else if (item.size == "38") {
      newItem.sizeNumber = 5;
      skusNumberSorted.push(item);
    } else if (item.size == "40") {
      newItem.sizeNumber = 6;
      skusNumberSorted.push(item);
    } else if (item.size == "42") {
      newItem.sizeNumber = 7;
      skusNumberSorted.push(item);
    } else if (item.size == "44") {
      newItem.sizeNumber = 8;
      skusNumberSorted.push(item);
    } else if (item.size == "46") {
      newItem.sizeNumber = 9;
      skusNumberSorted.push(item);
    } else if (item.size == "48") {
      newItem.sizeNumber = 10;
      skusNumberSorted.push(item);
    } else if (item.size == "50") {
      newItem.sizeNumber = 11;
      skusNumberSorted.push(item);
    } else if (item.size == "52") {
      newItem.sizeNumber = 12;
      skusNumberSorted.push(item);
    } else if (item.size == "54") {
      newItem.sizeNumber = 13;
      skusNumberSorted.push(item);
    } else if (item.size == "56") {
      newItem.sizeNumber = 14;
      skusNumberSorted.push(item);
    }
  });

  let skuListSorted = null;

  if (skusLetterSorted && skusLetterSorted.length) {
    skusNumberSorted = null;
    skusLetterSorted = skusLetterSorted.sort(function (a, b) {
      return a.sizeOrder - b.sizeOrder;
    });
    skuListSorted = skusLetterSorted;
  }
  if (skusNumberSorted && skusNumberSorted.length) {
    skusLetterSorted = null;
    skusNumberSorted = skusNumberSorted.sort(function (a, b) {
      return a.sizeNumber - b.sizeNumber;
    });
    skuListSorted = skusNumberSorted;
  }

  const selectSize = (e, item) => {
    e.preventDefault();
    e.stopPropagation();

    setSizeActive(item);
    setCurrentSize(item);
  };

  const addToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsLoading(true);

    if (!currentSize) {
      alert(
        "Ops! Você precisa selecionar um tamanho para adicionar um produto ao carrinho."
      );
      setIsLoading(false);
      return;
    }

    setTimeout(function () {
      let itemToCart = [
        {
          id: currentSize?.id,
          quantity: 1,
          seller: currentSize?.seller,
        },
      ];

      addItems(itemToCart);

      setIsLoading(false);
      setAddedMsg(true);
      setTimeout(function () {
        setAddedMsg(false);
      }, 2500);
    }, 2000);
  };

  // Renders
  const RenderItems = () => {
    if (!skuListSorted) {
      return null;
    }

    return skuListSorted.map((item, index) => {
      return (
        <li
          onClick={(e) => selectSize(e, item)}
          key={index}
          className={`${hc.BaliScsvItem} ${
            sizeActive.id === item.id ? hc.BaliScsvItemActive : ""
          }`}
          data-sku-id={item.id}
        >
          <span className={hc.BaliScsvItemText}>{item?.size}</span>
        </li>
      );
    });

    // className={`${hc.BaliScsvItem} ${sizeActive === true ? hc.BaliScsvItemActive : ''}`}
  };

  const RenderBuyButton = () => {
    if (isLoading) {
      return (
        <button
          className={`${hc.BaliScsvBuyButton} ${hc.BaliScsvBuyButtonBg}`}
        ></button>
      );
    } else {
      if (prodAddedMsg) {
        {
          setTimeout(() => {
            push({
              event: "cart",
              id: "add-to-cart-button",
            });
          }, 1000);
        }
        return (
          <>
            <button className={hc.BaliScsvBuyButton}>
              <span className={hc.BaliScsvBuyButtonText}>
                Produto adicionado ao carrinho!!!!
              </span>
            </button>
          </>
        );
      } else {
        return (
          <button
            onClick={(e) => {
              addToCart(e);
            }}
            id="add-to-cart-button"
            className={hc.BaliScsvBuyButton}
          >
            <svg
              fill="#FFFFFF"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="19"
              viewBox="0 0 16 19"
            >
              <path
                fill="#FFFFFF"
                d="M16 18.376L14.592 4.624a.556.556 0 0 0-.547-.506H11.4V3.5A3.456 3.456 0 0 0 8 0a3.456 3.456 0 0 0-3.4 3.5v.619H1.955a.556.556 0 0 0-.547.506L0 18.376a.577.577 0 0 0 .138.437A.544.544 0 0 0 .55 19h14.9a.544.544 0 0 0 .409-.187.576.576 0 0 0 .141-.437zM5.7 3.5a2.304 2.304 0 1 1 4.607 0v.619H5.7zM1.161 17.869L2.45 5.249H4.6v1.246a.55.55 0 1 0 1.1 0V5.249h4.6v1.246a.55.55 0 1 0 1.1 0V5.249h2.145l1.29 12.621zm0 0"
              ></path>
            </svg>
            <span className={hc.BaliScsvBuyButtonText}>EU QUERO</span>
          </button>
        );
      }
    }
  };

  useEffect(() => {
    if (skuListSorted && skuListSorted[0]) {
      setSizeActive(skuListSorted[0]);
      setCurrentSize(skuListSorted[0]);
    }
  }, []);

  return (
    <div className={hc.BaliScsvMain}>
      {/* <span className={hc.BaliScsvTitle}>Tamanho</span>
      <div className={hc.BaliScsvBlockList}>
        <ul className={hc.BaliScsvList}>
          <RenderItems />
        </ul>
      </div> */}
      <div className={hc.BaliScsvBlockBuyButton}>
        <button
          onClick={(e) => {
            addToCart(e);
          }}
          id="add-to-cart-button"
          className={hc.BaliScsvBuyButton}
        >
          <svg
            fill="#FFFFFF"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="19"
            viewBox="0 0 16 19"
          >
            <path
              fill="#FFFFFF"
              d="M16 18.376L14.592 4.624a.556.556 0 0 0-.547-.506H11.4V3.5A3.456 3.456 0 0 0 8 0a3.456 3.456 0 0 0-3.4 3.5v.619H1.955a.556.556 0 0 0-.547.506L0 18.376a.577.577 0 0 0 .138.437A.544.544 0 0 0 .55 19h14.9a.544.544 0 0 0 .409-.187.576.576 0 0 0 .141-.437zM5.7 3.5a2.304 2.304 0 1 1 4.607 0v.619H5.7zM1.161 17.869L2.45 5.249H4.6v1.246a.55.55 0 1 0 1.1 0V5.249h4.6v1.246a.55.55 0 1 0 1.1 0V5.249h2.145l1.29 12.621zm0 0"
            ></path>
          </svg>
          <span className={hc.BaliScsvBuyButtonText}>EU QUERO</span>
        </button>
      </div>
    </div>
  );
};

export default StorefrontCustomSizeVariation;
