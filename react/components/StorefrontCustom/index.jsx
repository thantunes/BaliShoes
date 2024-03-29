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
    "BaliPSPrimarySliderContainer"
];

const StorefrontCustom = (props) => {
    // Instance the generator of class
    const handlesUser = useCssHandles(CSS_HANDLES);
    const hc = handlesUser.handles; // handle classes
    const CollectionId = props.message
    const CollectionLink = props.collectionlink
    const CollectionTitle = props.collectiontitle
    console.log(CollectionLink, CollectionId)
    const [productList, setProductList] = useState(null);
    let sliderRef1 = useRef(null);
    let sliderRef2 = useRef(null);
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
        phone: 1,
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
            let valueInstallment = smallInstallment.Value.toLocaleString(
                "pt-BR",
                {
                    style: "currency",
                    currency: "BRL",
                }
            );
            installmentText = `ou ${totalInstallments}x de ${valueInstallment} sem juros`;
        } else {
            installmentText = "";
        }

        return (
            <div className={hc.BaliPSMain} style={style}>
                <div className={hc.BaliPSBlockTop}>
                    <a href={link} className={hc.BaliPSBlockTopLink}>
                        <div className={hc.BaliPSBlockName}>
                            <span className={hc.BaliPSName}>
                                {item.productName}
                            </span>
                        </div>
                        <StorefrontFlagDiscount />

                        <div className={hc.BaliPSBlockImage}>
                            <img
                                src={item.items[0].images[0].imageUrl}
                                className={hc.BaliPSFirstImage}
                            />
                            {item.items[0].images[1] &&
                                item.items[0].images[1].imageUrl && (
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
                                    {/* <del className={hc.BaliPSListPrice}>{listPrice}</del> */}
                                    <span className={hc.BaliPSBestPrice}>
                                        {bestPrice}
                                    </span>
                                </span>
                                <span className={hc.BaliPSInstallmentPrice}>
                                    {installmentText}
                                </span>
                            </div>
                        </a>
                    </div>
                    {/* <StorefrontCustomSizeVariation
                        dataItem={{ item }}
                    /> */}
                    <div>
                        <Variations item={item} />
                    </div>
                </div>
            </div>
        );
    };

    useEffect(() => {
        getProductList();
    }, []);
    console.log('load', productList)

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
                                usePagination={true}
                                asNavFor={sliderRef1}
                                ref={slider => (sliderRef2 = slider)}
                                showPaginationDots={'never'}
                            >
                                {productList &&
                                    productList.map((item, index) => (
                                        <RenderItem
                                            key={index}
                                            data={{
                                                dataItem: item,
                                                dataIndex: index,
                                            }}
                                            style={{ display: 'none' }}
                                        />
                                    ))}
                            </SliderLayout>
                        </div>
                        <SliderLayout
                            showPaginationDots={'never'}
                            itemsPerPage={itemsPerPage}
                            usePagination={true}
                            asNavFor={sliderRef1}
                            ref={slider => (sliderRef2 = slider)}
                            showNavigationArrows={"never"}

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
