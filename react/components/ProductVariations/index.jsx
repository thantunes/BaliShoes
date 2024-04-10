import React, { useState } from 'react';
import { useCssHandles } from "vtex.css-handles";
import { useOrderItems } from "vtex.order-items/OrderItems";
import "./index.css";
// import colors from './colors.css'
import './colors.global.css'
const CSS_HANDLES = [
    "BaliSKUSelectorContainer",
    "BaliSKUSelectorBoxContainer",
    "BaliSKUSelectorMainButton",
    "BaliSKUSelectorContainerMainButton",
    "BaliSKUSelectorContainerSubButton",
    "BaliSKUSelectorSubButton",
    "buyButton",
    'Selected'
]
export default function Variations(props) {
    const [Selected, setSelected] = useState({})
    const [Cart, setCart] = useState({})
    const [Color, setColor] = useState(false)
    const { addItems } = useOrderItems();
    const handlesUser = useCssHandles(CSS_HANDLES);
    const hc = handlesUser.handles; // handle classes
    var item = {}

    if (props.item !== undefined) {
        item = props.item
    }
    console.log(
        {
            id: 'teste',
            item,
            name: item.productName
        }
    )
    var myVari = []
    var Mytemp = []
    item.items.map((e, i) => {
        e.sellers?.[0].commertialOffer.AvailableQuantity > 0 ? myVari.push(
            {
                __COLOR: e.Cor?.[0],
                __SIZE: e["TAMANHO"]?.[0],
                _IMG_SRC: e.images?.[0].imageUrl,
                __id: e.itemId,
                __SellerId: e.sellers?.[0].sellerId
            }
        ) : null
        Mytemp.push(e.Cor?.[0])
    })

    var Finish = [...new Set(Mytemp)]
    var SeparateColors = []
    Finish.map((el) => {
        SeparateColors.push({
            Name: el,
            img: myVari.filter(e => e.__COLOR == el)?.[0]?._IMG_SRC,
            items: myVari.filter(e => e.__COLOR == el),
            ProdID: myVari.filter(e => e.__COLOR == el)?.[0]?.__id
        })
    })
    function normalizeText(text) {
        return text?.toLowerCase()?.replace(/\s+/g, '-').replace(/\//g, '-');
    }
    return (
        <div className={hc["BaliSKUSelectorContainer"]}>
            <div className={hc["BaliSKUSelectorContainerMainButton"]}>
                {SeparateColors.map((e, i) => e.items.length > 0 && i < 3 ? (
                    <div style={{margin:'0px 5px'}}>
                        <div className={hc["BaliSKUSelectorBoxContainer"]}>
                            <button className={`${hc["BaliSKUSelectorMainButton"]} PS-Color PS-Color-${normalizeText(e.Name)} ${Selected.ProdID == e.ProdID ? 'PS-color-Active': ''}`} onClick={(event) => {
                                // console.log(event.target)
                                setSelected(e)
                                setColor(true)
                                console.log({ e })
                                setCart({ id: e.items[0].__id, seller: e.items[0].__SellerId, quantity: 1 })
                            }}>
                                {/* <img width={50} height={70} src={e.img} alt="Color Image" /> */}
                                <p style={{opacity:0}}>{e.Name}</p>
                            </button>
                        </div>
                        <div className={hc["BaliSKUSelectorContainerSubButton"]} id={e.ProdID} style={{ display: Selected.ProdID == e.ProdID ? 'flex' : 'none' }}>
                            {/* {
                                e.items.map(f => (
                                    <button CartID={f.__id} className={`${Cart.id == f.__id ? hc['Selected'] : ''} ${hc["BaliSKUSelectorSubButton"]}`} onClick={(event2) => {
                                        // console.log(event2.target.getAttribute('CartID'))
                                        setCart({ id: event2.target.getAttribute('CartID'), seller: f.__SellerId, quantity: 1 })
                                        console.log(f.__SellerId, f.__id)
                                    }} >
                                        <span CartID={f.__id} style={{ textTransform: 'uppercase' }} >
                                            {f.__SIZE}
                                        </span>
                                    </button>
                                ))
                            } */}
                        </div>
                    </div>
                ) : null)}
            </div>
            <button className={hc["buyButton"]} onClick={() => {
                addItems([Cart])
                setCart([{}])
                setColor(false)
                setSelected({})
            }}>
                {
                    !Color ? 'Selecione uma variação' : 'EU QUERO'
                }
            </button>
        </div>
    )
}