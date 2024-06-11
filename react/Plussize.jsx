import style from "./components/MegaMenu/index.css";

export default function PlussizeMegaMenu() {
  const Acess = [
    { name: "Bolsas", link: "/meias/femin?fuzzy=0&initialMap=ft&initialQuery=Meias&map=ft,genero&operator=and" },
    { name: "Bonés", link: "/bones" },
    { name: "Bucket/Cata Ovo", link: "/bucket-cata-ovo" },
    { name: "Carteiras", link: "/carteiras" },
    { name: "Chinelos", link: "/chinelos" },
    { name: "Gorros/Toucas", link: "/gorros-toucas" },
    { name: "Meias", link: "/meias" },
    { name: "Mochilas", link: "/mochilas" },
    { name: "Pochetes", link: "/pochetes" },
    { name: "Óculos", link: "/oculos" },
    { name: "Shoulder Bag", link: "/shoulder-bag" },
    { name: "Ver todos", link: "/acessorios/plussize?initialMap=c&initialQuery=acessorios&map=category-1,genero", More: true },
  ];
  const Roupas = [
    { name: "Camisetas", link: "/camisetas/g1/g2/g3/g4/g5?fuzzy=0&initialMap=ft&initialQuery=Camisetas&map=ft,tamanho,tamanho,tamanho,tamanho,tamanho&operator=and" },
    { name: "Jaqueta", link: "/jaqueta/g1/g2/g3/g4/g5?fuzzy=0&initialMap=ft&initialQuery=Jaqueta&map=ft,tamanho,tamanho,tamanho,tamanho,tamanho&operator=and" },
    { name: "Bermudas", link: "/bermudas/g1/g2/g3/g4/g5?fuzzy=0&initialMap=ft&initialQuery=Bermudas&map=ft,tamanho,tamanho,tamanho,tamanho,tamanho&operator=and" },
    { name: "Ver todos", link: "/plussize", More: true },
    { name: "Calças", link: "/calcas/g1/g2/g3/g4/g5?fuzzy=0&initialMap=ft&initialQuery=Calcas&map=ft,tamanho,tamanho,tamanho,tamanho,tamanho&operator=and" },
    { name: "Moletons", link: "/moletons/g1/g2/g3/g4/g5?fuzzy=0&initialMap=ft&initialQuery=Moletons&map=ft,tamanho,tamanho,tamanho,tamanho,tamanho&operator=and" },
    { name: "Clubes de Basquete", link: "/ClubesdeBasquete" },
    { name: "Ofertas", link: "/plus-size/ofertas?fuzzy=auto&initialMap=ft&initialQuery=ofertas&map=genero,ft&operator=and", Offer: true },
  ];
  const underwear = [
    { name: "Meias", link: "/meias/g1/g2/g3/g4/g5?fuzzy=0&initialMap=ft&initialQuery=Meias&map=ft,tamanho,tamanho,tamanho,tamanho,tamanho&operator=and" },
    { name: "Ver todos", link: "/underwear/plus-size?O=OrderByReleaseDateDESC&PS=48&initialMap=c&initialQuery=underwear&map=category-1,genero", More: true },
  ];
  const Tamanhos = [
    {
      name: "33",
      link: "/unissex/33?initialMap=c&initialQuery=unissex&map=category-1,tamanho",
    },
    {
      name: "34",
      link: "/unissex/34?initialMap=c&initialQuery=unissex&map=category-1,tamanho",
    },
    {
      name: "35",
      link: "/unissex/35?initialMap=c&initialQuery=unissex&map=category-1,tamanho",
    },
    {
      name: "36",
      link: "/unissex/36?initialMap=c&initialQuery=unissex&map=category-1,tamanho",
    },
    {
      name: "37",
      link: "/unissex/37?initialMap=c&initialQuery=unissex&map=category-1,tamanho",
    },
    {
      name: "38",
      link: "/unissex/38?initialMap=c&initialQuery=unissex&map=category-1,tamanho",
    },
    {
      name: "39",
      link: "/unissex/39?initialMap=c&initialQuery=unissex&map=category-1,tamanho",
    },
    {
      name: "40",
      link: "/unissex/40?initialMap=c&initialQuery=unissex&map=category-1,tamanho",
    },
    {
      name: "41",
      link: "/unissex/41?initialMap=c&initialQuery=unissex&map=category-1,tamanho",
    },
    {
      name: "42",
      link: "/unissex/42?initialMap=c&initialQuery=unissex&map=category-1,tamanho",
    },
    {
      name: "43",
      link: "/unissex/43?initialMap=c&initialQuery=unissex&map=category-1,tamanho",
    },
    {
      name: "44",
      link: "/unissex/44?initialMap=c&initialQuery=unissex&map=category-1,tamanho",
    },
  ];

  const Tamanhos2 = [
    {
      name: "G1",
      link: "/unissex/g1?initialMap=c&initialQuery=unissex&map=category-1,tamanho",
    },
    {
      name: "G2",
      link: "/unissex/g2?initialMap=c&initialQuery=unissex&map=category-1,tamanho",
    },
    {
      name: "G3",
      link: "/unissex/g3?initialMap=c&initialQuery=unissex&map=category-1,tamanho",
    },
  ];
  const Cores = [
    {
      color: "#F00",
      link: "/plus-size/vermelho?initialMap=c&initialQuery=plus-size&map=category-1,cor",
    },
    {
      color: "#000AF9",
      link: "/plus-size/azul?initialMap=c&initialQuery=plus-size&map=category-1,cor",
    },
    {
      color: "#11D200",
      link: "/plus-size/verde?initialMap=c&initialQuery=plus-size&map=category-1,cor",
    },
    {
      color: "#FFE500",
      link: "/plus-size/amarelo?initialMap=c&initialQuery=plus-size&map=category-1,cor",
    },
    {
      color: "#800000",
      link: "/plus-size/bordo?initialMap=c&initialQuery=plus-size&map=category-1,cor",
    },
    {
      color: "#E9E9E9",
      link: "/plus-size/off-white?initialMap=c&initialQuery=plus-size&map=category-1,cor",
    },
    {
      color: "#727272",
      link: "/plus-size/cinza?initialMap=c&initialQuery=plus-size&map=category-1,cor",
    },
    {
      color: "#F2EDD2",
      link: "/plus-size/bege?initialMap=c&initialQuery=plus-size&map=category-1,cor",
    },
    {
      color: "#FFC5DA",
      link: "/plus-size/rosa?initialMap=c&initialQuery=plus-size&map=category-1,cor",
    },
    {
      color: "#4F73A2",
      link: "/plus-size/jeans?initialMap=c&initialQuery=plus-size&map=category-1,cor",
    },
    {
      color: "#000",
      link: "/plus-size/preto?initialMap=c&initialQuery=plus-size&map=category-1,cor",
    },
    {
      color: "#D69A3A",
      link: "/plus-size/laranja?initialMap=c&initialQuery=plus-size&map=category-1,cor",
    },
  ];
  return (
    <div className={`${style.ContainerMenuMain} ${style.ContainerPluss}`}>
      <div
        className={`${style.ContainerMegaMenu} ${style.ContainerRoupaPluss}`}
      >
        <h1>Roupas</h1>
        <div>
          {Roupas.map((e) => {
            return (
              <a
                className={
                  e.More ? style.MoreClass : e.Offer ? style.OfferClass : null
                }
                href={e.link}
              >
                {e.name}
              </a>
            );
          })}
        </div>
      </div>
      <div className={style.ContainerMegaMenu}>
        <h1>Underwear</h1>
        <div>
          {underwear.map((e) => {
            return (
              <a
                className={
                  e.More ? style.MoreClass : e.Offer ? style.OfferClass : null
                }
                href={e.link}
              >
                {e.name}
              </a>
            );
          })}
        </div>
      </div>
      <div className={`${style.ContainerMegaMenu} ${style.ContainerAccesMasc}`}>
        <h1>Acessórios</h1>
        <div>
          {Acess.map((e) => {
            return (
              <a
                className={
                  e.More ? style.MoreClass : e.Offer ? style.OfferClass : null
                }
                href={e.link}
              >
                {e.name}
              </a>
            );
          })}
        </div>
      </div>
      <div className={`${style.ContainerMegaMenu} ${style.ContainerTam}`}>
        <h1>Tamanhos</h1>
        <div>
          {Tamanhos.map((e) => {
            return (
              <a className={style["Tamanhos-" + e.name]} href={e.link}>
                {e.name}
              </a>
            );
          })}
        </div>
        <div style={{ marginTop: 19, width: "100%" }}>
          {Tamanhos2.map((e) => {
            return (
              <a className={style["Tamanhos-" + e.name]} href={e.link}>
                {e.name}
              </a>
            );
          })}
        </div>
      </div>
      <div className={`${style.ContainerMegaMenu} ${style.ContainerColor}`}>
        <h1>Cores</h1>
        <div>
          {Cores.map((e) => {
            return (
              <a
                className={style.Cores}
                style={{ backgroundColor: e.color }}
                href={e.link}
              ></a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
