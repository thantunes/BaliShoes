import React, { useState, useEffect } from 'react'
import './index.global.css'
import { useProduct } from 'vtex.product-context'
import { OrderQueueProvider, useOrderQueue, useQueueStatus } from 'vtex.order-manager/OrderQueue'
import { OrderFormProvider, useOrderForm } from 'vtex.order-manager/OrderForm'
const SKUSelector = (props) => {
    const { product } = useProduct()
    const { orderForm } = useOrderForm()
    const [loading, setLoading] = useState('none')

    console.log({ product, orderForm })
    useEffect(() => {
        var arr = Array.prototype.slice.call(document.getElementsByClassName("vtex-store-components-3-x-skuSelectorItem "))
        arr.map((item) => { console.log(Array.prototype.slice.call(document.getElementsByClassName(item.classList[1])).map((it, index) => { index > 0 ? it.style.display = 'none' : null })) })
        setLoading('block')
    }, [])
    return (
        <div style={{ display: loading }}>
            {props.children}
        </div>
    )
}

export { SKUSelector }