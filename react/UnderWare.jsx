import style from "./components/MegaMenu/index.css";

export default function UnderWareMegaMenu() {
  const underwear = [
    { name: "Cuecas", link: "/cuecas?_q=cuecas&map=ft" },
    { name: "Top", link: "/top?_q=TOP&map=ft" },
    { name: "Meias", link: "/meias?_q=meias&map=ft" },
    { name: "Ver todos", link: "/underwear", More: true },
  ];

  const Cores = [
    {
      color: "#F00",
      link: "/underware/vermelho?initialMap=c&initialQuery=underwear&map=category-1,cor",
    },
    {
      color: "#000AF9",
      link: "/underware/azul?initialMap=c&initialQuery=underwear&map=category-1,cor",
    },
    {
      color: "#11D200",
      link: "/underware/verde?initialMap=c&initialQuery=underwear&map=category-1,cor",
    },
    {
      color: "#FFE500",
      link: "/underware/amarelo?initialMap=c&initialQuery=underwear&map=category-1,cor",
    },
    {
      color: "#800000",
      link: "/underware/bordo?initialMap=c&initialQuery=underwear&map=category-1,cor",
    },
    {
      color: "#E9E9E9",
      link: "/underware/off-white?initialMap=c&initialQuery=underwear&map=category-1,cor",
    },
    {
      color: "#727272",
      link: "/underware/cinza?initialMap=c&initialQuery=underwear&map=category-1,cor",
    },
    {
      color: "#F2EDD2",
      link: "/underware/bege?initialMap=c&initialQuery=underwear&map=category-1,cor",
    },
    {
      color: "#FFC5DA",
      link: "/underware/rosa?initialMap=c&initialQuery=underwear&map=category-1,cor",
    },
    {
      color: "#4F73A2",
      link: "/underware/jeans?initialMap=c&initialQuery=underwear&map=category-1,cor",
    },
    {
      color: "#000",
      link: "/underware/preto?initialMap=c&initialQuery=underwear&map=category-1,cor",
    },
    {
      color: "#D69A3A",
      link: "/underware/laranja?initialMap=c&initialQuery=underwear&map=category-1,cor",
    },
  ];
  return (
    <div className={`${style.ContainerMenuMain} ${style.ContainerUnderMain}`}>
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
