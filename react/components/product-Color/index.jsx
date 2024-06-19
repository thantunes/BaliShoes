import React, { useEffect, useState } from 'react'
import './index.global.css'

const SKUSelector = (props) => {
    const [loading, setLoading] = useState('none')

    useEffect(() => {
        const skuSelectorItems = document.querySelectorAll('.vtex-store-components-3-x-skuSelectorSubcontainer--cor .vtex-store-components-3-x-skuSelectorItem')
        const seenClasses = new Set()

        skuSelectorItems.forEach(item => {
            const classes = Array.from(item.classList)
            const newClasses = classes.filter(className => className.includes('--') && !className.includes('selected'))
            let keepItem = false

            newClasses.forEach(className => {
                if (!seenClasses.has(className) && !keepItem) {
                    seenClasses.add(className)
                    keepItem = true
                }
            })

            // if (!keepItem) {
            //     item.remove()
            // }
        })

        setLoading('block')
    }, [])

    return (
        <div style={{ display: loading }}>
            {props.children}
        </div>
    )
}

export { SKUSelector }
