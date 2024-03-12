import { useEffect, useState } from 'react';
import { useProduct } from 'vtex.product-context';

export default function RemoveHrefSummary() {
    const [count, setCount] = useState(1)
    const { product } = useProduct()
    useEffect(() => {
        var value = count
        setInterval(() => {
            if (count < 3) {
                setCount(value + 1)
            } else {
                setCount(1)
            }
        }, 1000);
        let Myarry = Array.from(document.getElementsByClassName('vtex-product-summary-2-x-clearLink'))

        Myarry.map((e) => { e.setAttribute('href', '') })
    }, [])
    return (
        null
    )
}