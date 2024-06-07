import style from "./components/MegaMenu/index.css";

export default function TenisMegaMenu() {
  const Roupas = [
    { name: "Feminino", link: "/Feminino" },
    { name: "masculino", link: "/masculino" },
    { name: "Unissex", link: "/bucket-cata-ovo" },
    { name: "Infantil", link: "/bucket-cata-ovo" },
    { name: "Ver todos", link: "/tenis", More: true },
  ];
  const Tamanhos = [
    {
      name: "28",
      link: "/tenis/28?initialMap=c&initialQuery=tenis&map=category-1,tamanho",
    },
    {
      name: "29",
      link: "/tenis/29?initialMap=c&initialQuery=tenis&map=category-1,tamanho",
    },
    {
      name: "30",
      link: "/tenis/30?initialMap=c&initialQuery=tenis&map=category-1,tamanho",
    },
    {
      name: "31",
      link: "/tenis/31?initialMap=c&initialQuery=tenis&map=category-1,tamanho",
    },
    {
      name: "33",
      link: "/tenis/33?initialMap=c&initialQuery=tenis&map=category-1,tamanho",
    },
    {
      name: "34",
      link: "/tenis/34?initialMap=c&initialQuery=tenis&map=category-1,tamanho",
    },
    {
      name: "35",
      link: "/tenis/35?initialMap=c&initialQuery=tenis&map=category-1,tamanho",
    },
    {
      name: "36",
      link: "/tenis/36?initialMap=c&initialQuery=tenis&map=category-1,tamanho",
    },
    {
      name: "37",
      link: "/tenis/37?initialMap=c&initialQuery=tenis&map=category-1,tamanho",
    },
    {
      name: "38",
      link: "/tenis/38?initialMap=c&initialQuery=tenis&map=category-1,tamanho",
    },
    {
      name: "39",
      link: "/tenis/39?initialMap=c&initialQuery=tenis&map=category-1,tamanho",
    },
    {
      name: "40",
      link: "/tenis/40?initialMap=c&initialQuery=tenis&map=category-1,tamanho",
    },
    {
      name: "41",
      link: "/tenis/41?initialMap=c&initialQuery=tenis&map=category-1,tamanho",
    },
    {
      name: "42",
      link: "/tenis/42?initialMap=c&initialQuery=tenis&map=category-1,tamanho",
    },
    {
      name: "43",
      link: "/tenis/43?initialMap=c&initialQuery=tenis&map=category-1,tamanho",
    },
    {
      name: "44",
      link: "/tenis/44?initialMap=c&initialQuery=tenis&map=category-1,tamanho",
    },
  ];

  const Cores = [
    {
      color: "#F00",
      link: "/feminino/vermelho?fuzzy=0&initialMap=ft&initialQuery=Feminino&map=ft,cor&operator=and",
    },
    { color: "#000AF9", link: "/product/blue" },
    { color: "#11D200", link: "/product/green" },
    { color: "#FFE500", link: "/product/37" },
    { color: "#800000", link: "/product/38" },
    { color: "#E9E9E9", link: "/product/white" },
    { color: "#727272", link: "/product/p" },
    { color: "#F2EDD2", link: "/product/wheat" },
    { color: "#FFC5DA", link: "/product/pink" },
    { color: "#4F73A2", link: "/product/deepskyblue" },
    { color: "#000", link: "/product/black" },
    { color: "#D69A3A", link: "/product/orange" },
  ];
  return (
    <div className={`${style.ContainerMenuMain} ${style.ContainerTenis}`}>
      <div
        className={`${style.ContainerMegaMenu}`}
      >
        <h1>Modelos</h1>
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
      <div
        style={{ maxWidth: 223}}
        className={`${style.ContainerMegaMenu} ${style.ContainerTam}`}
      >
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
