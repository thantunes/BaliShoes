/* eslint-disable */
import React, { useEffect, useState } from "react";
import { useCssHandles } from "vtex.css-handles";
import { useProduct } from "vtex.product-context";
// @ts-ignore
import { useOrderItems } from "vtex.order-items/OrderItems";
import "./index.css";
// @ts-ignore
import { usePixel } from "vtex.pixel-manager";
const CSS_HANDLES = [
    "malSfvMain",
    "malSfvTitle",
    "malSfvBlockList",
    "malSfvList",
    "malSfvItem",
    "malSfvItemActive",
    "malSfvItemText",
    "malSfvBlockBuyButton",
    "malSfvBuyButtonBg",
    "malSfvBuyButton",
    "malSfvBuyButtonText",
];
const StorefrontSizeVariation = () => {
    const [scroll, setScroll] = useState(window.scrollY)
    const { addItems } = useOrderItems();

    // Instance the generator of class
    const handlesUser = useCssHandles(CSS_HANDLES);
    const hc = handlesUser.handles; // handle classes

    // Product Info
    const prodData = useProduct();

    const prodId = prodData?.product?.productId;
    const prodList = prodData?.product?.items;
    const [currentSize, setCurrentSize] = useState(null);

    let listSkusFormatted = [];

    const [sizeActive, setSizeActive] = useState("");
    const [isLoading, setIsLoading] = useState(null);
    const [prodAddedMsg, setAddedMsg] = useState(null);

    const { push } = usePixel()
    console.log(prodData)
    prodList &&
        prodList?.forEach((item) => {
            if (item.sellers[0].commertialOffer.AvailableQuantity > 0) {
                console.log({item})
                let valueSize = item.variations.find((typeVariation) => {
                    return typeVariation.name == "Tamanho";
                });
                try {
                    let dataSku = valueSize;
                    let link = `/${prodData?.product?.linkText}/p?skuId=${item.itemId}`;
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
        if (item.values[0] == "PP") {
            newItem.sizeOrder = 1;
            skusLetterSorted.push(newItem);
        } else if (item.values[0] == "P") {
            newItem.sizeOrder = 2;
            skusLetterSorted.push(newItem);
        } else if (item.values[0] == "M") {
            newItem.sizeOrder = 3;
            skusLetterSorted.push(newItem);
        } else if (item.values[0] == "G") {
            newItem.sizeOrder = 4;
            skusLetterSorted.push(newItem);
        } else if (item.values[0] == "GG") {
            newItem.sizeOrder = 5;
            skusLetterSorted.push(newItem);
        } else if (item.values[0] == "XGG") {
            newItem.sizeOrder = 6;
            skusLetterSorted.push(newItem);
        } else if (item.values[0] == "1") {
            newItem.sizeOrder = 7;
            skusLetterSorted.push(newItem);
        } else if (item.values[0] == "2") {
            newItem.sizeOrder = 8;
            skusLetterSorted.push(newItem);
        } else if (item.values[0] == "3") {
            newItem.sizeOrder = 9;
            skusLetterSorted.push(newItem);
        } else if (item.values[0] == "4") {
            newItem.sizeOrder = 10;
            skusLetterSorted.push(newItem);
        } else if (item.values[0] == "5") {
            newItem.sizeOrder = 11;
            skusLetterSorted.push(newItem);
        } else if (item.values[0] == "6") {
            newItem.sizeOrder = 12;
            skusLetterSorted.push(newItem);
        } else if (item.values[0] == "7") {
            newItem.sizeOrder = 13;
            skusLetterSorted.push(newItem);
        } else if (item.values[0] == "8") {
            newItem.sizeOrder = 14;
            skusLetterSorted.push(newItem);
        } else if (item.values[0] == "9") {
            newItem.sizeOrder = 15;
            skusLetterSorted.push(newItem);
        } else if (item.values[0] == "10") {
            newItem.sizeOrder = 16;
            skusLetterSorted.push(newItem);
        } else if (item.values[0] == "11") {
            newItem.sizeOrder = 17;
            skusLetterSorted.push(newItem);
        } else if (item.values[0] == "12") {
            newItem.sizeOrder = 18;
            skusLetterSorted.push(newItem);
        } else if (item.values[0] == "13") {
            newItem.sizeOrder = 19;
            skusLetterSorted.push(newItem);
        } else if (item.values[0] == "14") {
            newItem.sizeOrder = 20;
            skusLetterSorted.push(newItem);
        } else if (item.values[0] == "15") {
            newItem.sizeOrder = 21;
            skusLetterSorted.push(newItem);
        } else if (item.values[0] == "16") {
            newItem.sizeOrder = 22;
            skusLetterSorted.push(newItem);
        } else if (item.values[0] == "U") {
            newItem.sizeOrder = 23;
            skusLetterSorted.push(newItem);
        } else if (item.values[0] == "RN") {
            newItem.sizeOrder = 24;
            skusLetterSorted.push(newItem);
        }
    });

    let skusNumberSorted = [];
    listSkusFormatted?.forEach((item, index) => {
        let newItem = item;
        if (item.values[0] == "30") {
            newItem.sizeNumber = 1;
            skusNumberSorted.push(item);
        } else if (item.values[0] == "32") {
            newItem.sizeNumber = 2;
            skusNumberSorted.push(item);
        } else if (item.values[0] == "34") {
            newItem.sizeNumber = 3;
            skusNumberSorted.push(item);
        } else if (item.values[0] == "36") {
            newItem.sizeNumber = 4;
            skusNumberSorted.push(item);
        } else if (item.values[0] == "38") {
            newItem.sizeNumber = 5;
            skusNumberSorted.push(item);
        } else if (item.values[0] == "40") {
            newItem.sizeNumber = 6;
            skusNumberSorted.push(item);
        } else if (item.values[0] == "42") {
            newItem.sizeNumber = 7;
            skusNumberSorted.push(item);
        } else if (item.values[0] == "44") {
            newItem.sizeNumber = 8;
            skusNumberSorted.push(item);
        } else if (item.values[0] == "46") {
            newItem.sizeNumber = 9;
            skusNumberSorted.push(item);
        } else if (item.values[0] == "48") {
            newItem.sizeNumber = 10;
            skusNumberSorted.push(item);
        } else if (item.values[0] == "50") {
            newItem.sizeNumber = 11;
            skusNumberSorted.push(item);
        } else if (item.values[0] == "52") {
            newItem.sizeNumber = 12;
            skusNumberSorted.push(item);
        } else if (item.values[0] == "54") {
            newItem.sizeNumber = 13;
            skusNumberSorted.push(item);
        } else if (item.values[0] == "56") {
            newItem.sizeNumber = 14;
            skusNumberSorted.push(item);
        }
    });

    let skusLetterAndNumber = [];
    listSkusFormatted?.forEach((item, index) => {
        let newItem = item;
        if (item.values[0] == "G1") {
            newItem.sizeNumber = 1;
            skusLetterAndNumber.push(item);
        } else if (item.values[0] == "G2") {
            newItem.sizeNumber = 2;
            skusLetterAndNumber.push(item);
        } else if (item.values[0] == "G3") {
            newItem.sizeNumber = 3;
            skusLetterAndNumber.push(item);
        } else if (item.values[0] == "G4") {
            newItem.sizeNumber = 4;
            skusLetterAndNumber.push(item);
        } else if (item.values[0] == "G5") {
            newItem.sizeNumber = 5;
            skusLetterAndNumber.push(item);
        } else if (item.values[0] == "G6") {
            newItem.sizeNumber = 6;
            skusLetterAndNumber.push(item);
        } else if (item.values[0] == "G7") {
            newItem.sizeNumber = 7;
            skusLetterAndNumber.push(item);
        } else if (item.values[0] == "G8") {
            newItem.sizeNumber = 8;
            skusLetterAndNumber.push(item);
        } else if (item.values[0] == "G9") {
            newItem.sizeNumber = 9;
            skusLetterAndNumber.push(item);
        } else if (item.values[0] == "G10") {
            newItem.sizeNumber = 10;
            skusLetterAndNumber.push(item);
        }
    });

    let skusFeet = [];
    listSkusFormatted?.forEach((item, index) => {
        let newItem = item;
        if (item.values[0] == "16 ao 20" || item.values[0] == "16 a 20") {
            newItem.sizeNumber = 1;
            skusFeet.push(item);
        } else if (
            item.values[0] == "21 ao 25" ||
            item.values[0] == "16 a 20"
        ) {
            newItem.sizeNumber = 2;
            skusFeet.push(item);
        } else if (
            item.values[0] == "26 ao 30" ||
            item.values[0] == "26 a 30"
        ) {
            newItem.sizeNumber = 3;
            skusFeet.push(item);
        } else if (
            item.values[0] == "31 ao 35" ||
            item.values[0] == "31 a 35"
        ) {
            newItem.sizeNumber = 4;
            skusFeet.push(item);
        } else if (
            item.values[0] == "36 ao 40" ||
            item.values[0] == "36 a 40"
        ) {
            newItem.sizeNumber = 5;
            skusFeet.push(item);
        } else if (
            item.values[0] == "41 ao 45" ||
            item.values[0] == "41 a 45"
        ) {
            newItem.sizeNumber = 6;
            skusFeet.push(item);
        } else if (
            item.values[0] == "46 ao 50" ||
            item.values[0] == "46 a 50"
        ) {
            newItem.sizeNumber = 7;
            skusFeet.push(item);
        }
    });

    let skusNumbersIntegers = [];
    let skusAxusNi = [];
    listSkusFormatted?.forEach((item, index) => {
        if (item.values[0] < 30) {
            skusAxusNi.push(item);
        }
    });
    if (skusAxusNi && skusAxusNi.length) {
        skusAxusNi = skusAxusNi.sort(function (a, b) {
            return a.values[0] - b.values[0];
        });
        skusNumbersIntegers = skusAxusNi;
    }

    let skuListSorted = null;

    if (skusLetterSorted && skusLetterSorted.length) {
        skusNumberSorted = null;
        skusLetterAndNumber = null;
        skusNumbersIntegers = null;
        skusFeet = null;
        skusLetterSorted = skusLetterSorted.sort(function (a, b) {
            return a.sizeOrder - b.sizeOrder;
        });

        // Atribuindo ao array que renderiza
        skuListSorted = skusLetterSorted;
    }
    if (skusNumberSorted && skusNumberSorted.length) {
        skusLetterSorted = null;
        skusLetterAndNumber = null;
        skusNumbersIntegers = null;
        skusFeet = null;
        skusNumberSorted = skusNumberSorted.sort(function (a, b) {
            return a.sizeNumber - b.sizeNumber;
        });

        // Atribuindo ao array que renderiza
        skuListSorted = skusNumberSorted;
    }
    if (skusLetterAndNumber && skusLetterAndNumber.length) {
        skusLetterSorted = null;
        skusNumberSorted = null;
        skusNumbersIntegers = null;
        skusFeet = null;
        skusLetterAndNumber = skusLetterAndNumber.sort(function (
            a,
            b
        ) {
            // return a.sizeOrder - b.sizeOrder;
            return a.sizeNumber - b.sizeNumber;
        });

        // Atribuindo ao array que renderiza
        skuListSorted = skusLetterAndNumber;
    }
    if (skusNumbersIntegers && skusNumbersIntegers.length) {
        skusLetterSorted = null;
        skusNumberSorted = null;
        skusLetterAndNumber = null;
        skusFeet = null;

        // Atribuindo ao array que renderiza
        skuListSorted = skusNumbersIntegers;
    }

    if (skusFeet && skusFeet.length) {
        skusLetterSorted = null;
        skusNumberSorted = null;
        skusNumbersIntegers = null;
        skusLetterAndNumber = null;

        // Atribuindo ao array que renderiza
        skuListSorted = skusFeet;
    }
    //Corrigindo erro de scrollToTop
    window.addEventListener('scroll', function (event) {
        setScroll(window.scrollY)
    })
    const selectSize = (e, item) => {
        console.log(0, scroll);
        e.preventDefault();
        e.stopPropagation();
        window.scrollTo(0, scroll)
        setSizeActive(item);
        setCurrentSize(item);
    };

    const addToCart = (e) => {
        e.preventDefault();
        e.stopPropagation();
        window.scrollTo(0, scroll)
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
                    className={`${hc.malSfvItem} ${sizeActive === item ? hc.malSfvItemActive : ""
                        }`}
                    data-sku-id={item.id}
                >
                    <span className={hc.malSfvItemText}>{item?.values[0]}</span>
                </li>
            );
        });
    };

    const RenderBlockList = () => {
        if (!skuListSorted) {
            return null;
        } else {
            return (
                <div>
                    <span className={hc.malSfvTitle}>Tamanho</span>
                    <div className={hc.malSfvBlockList}>
                        <ul className={hc.malSfvList}>
                            <RenderItems />
                        </ul>
                    </div>
                </div>
            );
        }
    };

    const RenderBuyButton = () => {
        if (isLoading) {
            return (
                <button
                    className={`${hc.malSfvBuyButton} ${hc.malSfvBuyButtonBg}`}
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
                    <button className={hc.malSfvBuyButton}>
                        <span className={hc.malSfvBuyButtonText}>
                            Produto adicionado ao carrinho!
                        </span>
                    </button>
                );
            } else {
                return (
                    <button
                        onClick={(e) => {
                            addToCart(e);
                        }}
                        id="add-to-cart-button"
                        className={hc.malSfvBuyButton}
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
                        <span className={hc.malSfvBuyButtonText}>
                            Compra Rápida
                        </span>
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
        if (prodId == "34666") {
            console.log(prodData);
        }
    }, []);

    return (
        <div className={hc.malSfvMain} data-prod-id={prodId}>
            <RenderBlockList />
            <div className={hc.malSfvBlockBuyButton}>
                <RenderBuyButton />
            </div>
        </div>
    );
};

export default StorefrontSizeVariation;
