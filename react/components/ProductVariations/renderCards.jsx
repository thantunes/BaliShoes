export default function renderCards(e) {
    return (
        <>
            {e.items.length > 0 ? SeparateColors.filter(elemento => elemento.items.length > 0).length > 1 ? (
                <>
                    {console.log('sep', SeparateColors.len)}
                    <div>
                        <button aria-label={e.Name.replace(' ', '-') + '-' + e.ProdID} style={{ border: '1px solid black' }}>
                            <img width={50} height={70} src={e.img} alt="Color Image" />
                        </button>

                        <div id="" style={{ display: 'none' }}>
                            {
                                e.items.map(f => (
                                    <div>
                                        <span style={{ textTransform: 'uppercase' }} >
                                            {f.__SIZE}
                                        </span>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </>
            ) : null : null}
        </>
    )
}