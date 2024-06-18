import style from "./components/MegaMenu/index.css";

export default function PlussizeMegaMenu() {
  const Roupas = [
    {
      name: "Camisetas",
      link: "/plus-size/camisetas?order=OrderByReleaseDateDESC",
    },
    {
      name: "Jaquetas",
      link: "/plus-size/jaquetas?order=OrderByReleaseDateDESC",
    },
    {
      name: "Bermudas",
      link: "/plus-size/bermudas?order=OrderByReleaseDateDESC",
    },
    {
      name: "Ver todos",
      link: "/plus-size?order=OrderByReleaseDateDESC",
      More: true,
    },
    { name: "Calças", link: "/plus-size/calcas?order=OrderByReleaseDateDESC" },
    {
      name: "Moletons",
      link: "/plus-size/moletons?order=OrderByReleaseDateDESC",
    },
    {
      name: "Jersey",
      link: "mitchel/regata?_q=regata&fuzzy=0&initialMap=ft&initialQuery=regata&map=brand,ft&operator=and",
    },
    {
      name: "Ofertas",
      link: "/plus-size/ofertas?fuzzy=auto&initialMap=ft&initialQuery=ofertas&map=genero,ft&operator=and&order=OrderByReleaseDateDESC",
      Offer: true,
    },
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
