import style from './components/MegaMenu/index.css';

export default function AcessMegaMenu() {
    const Acess = [
        { name: 'Bolsas', link: '/bolsas' },
        { name: 'Bonés', link: '/bones' },
        { name: 'Bucket/Cata Ovo', link: '/bucket-cata-ovo' },
        { name: 'Carteiras', link: '/carteiras' },
        { name: 'Chinelos', link: '/chinelos' },
        { name: 'Gorros/Toucas', link: '/gorros-toucas' },
        { name: 'Meias', link: '/meias' },
        { name: 'Mochilas', link: '/mochilas' },
        { name: 'Pochetes', link: '/pochetes' },
        { name: 'Óculos', link: '/oculos' },
        { name: 'Shoulder Bag', link: '/shoulder-bag' },
        { name: 'Ver todos', link: '/Vertodos', More: true },

    ];
    const Tamanhos = [
        { name: '33', link: '/product/33' },
        { name: '34', link: '/product/34' },
        { name: '35', link: '/product/35' },
        { name: '37', link: '/product/37' },
        { name: '38', link: '/product/38' },
        { name: '41', link: '/product/41' },
        { name: 'P', link: '/product/p' },
        { name: 'G1', link: '/product/g1' },
        { name: 'M', link: '/product/m' },
        { name: 'G', link: '/product/g' },
        { name: 'GG', link: '/product/gg' },
    ];
    const Cores = [
        { name: 'red', link: '/product/red' },
        { name: 'blue', link: '/product/blue' },
        { name: 'green', link: '/product/green' },
        { name: 'yellow', link: '/product/37' },
        { name: 'Purple', link: '/product/38' },
        { name: 'white', link: '/product/white' },
        { name: 'gray', link: '/product/p' },
        { name: 'wheat', link: '/product/wheat' },
        { name: 'pink', link: '/product/pink' },
        { name: 'deepskyblue', link: '/product/deepskyblue' },
        { name: 'black', link: '/product/black' },
    ];
    return (
        <div className={style.ContainerMenuMain}>
            <div className={`${style.ContainerMegaMenu} ${style.ContainerAccesMasc}`}>
                <h1>Acessórios</h1>
                <div>
                    {
                        Acess.map((e) => {
                            return (
                                <a className={e.More ? style.MoreClass : e.Offer ? style.OfferClass : null} href={e.link}>{e.name}</a>
                            )
                        })
                    }
                </div>
            </div>
            <div className={`${style.ContainerMegaMenu} ${style.ContainerTam} ${style.ContainerAccesMasc}`}>
                <h1>Tamanhos</h1>
                <div>
                    {
                        Tamanhos.map((e) => {
                            return (
                                <a className={style["Tamanhos-" + e.name]} href={e.link}>{e.name}</a>
                            )
                        })
                    }
                </div>
            </div>
            <div className={`${style.ContainerMegaMenu} ${style.ContainerTam}`}>
                <h1>Cores</h1>
                <div>
                    {
                        Cores.map((e) => {
                            return (
                                <a className={style.Cores} style={{ backgroundColor: e.name }} href={e.link}></a>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}