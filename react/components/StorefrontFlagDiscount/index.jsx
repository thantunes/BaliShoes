/* eslint-disable */
import React from 'react';
import { useCssHandles } from 'vtex.css-handles';
import { useProduct } from "vtex.product-context";
import './index.css';

const CSS_FD = [
    'malSfFlagDiscountMain',
    'malSfFlagDiscountWp',
    'malSfFlagDiscountLine'
]

const StorefrontFlagDiscount = () => {

    // Instance the generator of class
    const handlesDefault = useCssHandles(CSS_FD);
    const fd = handlesDefault.handles;

    // Product Info
    const productContextValue = useProduct();
    const dataPrice = productContextValue?.product?.priceRange;

    if ((dataPrice?.listPrice?.highPrice === dataPrice?.sellingPrice?.highPrice) || dataPrice?.listPrice?.lowPrice === dataPrice?.sellingPrice?.lowPrice) {
        return null;
    }

    let total = dataPrice?.listPrice?.lowPrice - dataPrice?.sellingPrice?.lowPrice;
    let discountAmount = ((total / dataPrice.listPrice.highPrice) * 100).toFixed(0);

    return (
        <div className={fd.malSfFlagDiscountMain}>
            <div className={fd.malSfFlagDiscountWp}>
                <span className={fd.malSfFlagDiscountLine}>-{discountAmount}%</span>
            </div>
        </div>
    )
}

export default StorefrontFlagDiscount;
