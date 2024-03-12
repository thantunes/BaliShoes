import React, { useEffect, useState } from 'react'
import { useOrderForm } from 'vtex.order-manager/OrderForm'
import { useProduct } from 'vtex.product-context'
import './index.global.css'
const SKUSelector = (props) => {
    const { product } = useProduct()
    const { orderForm } = useOrderForm()
    const [loading, setLoading] = useState('none')

    useEffect(() => {
        var arr = Array.prototype.slice.call(document.getElementsByClassName("vtex-store-components-3-x-skuSelectorItem "))
        arr.map((item) => { (Array.prototype.slice.call(document.getElementsByClassName(item.classList[1])).map((it, index) => { index > 0 ? it.style.display = 'none' : null })) })
        setLoading('block')
    }, [])
    return (
        <div style={{ display: loading }}>
            {props.children}
        </div>
    )
}

export { SKUSelector }

