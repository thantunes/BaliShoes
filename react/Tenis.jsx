import style from "./components/MegaMenu/index.css";

export default function TenisMegaMenu() {
  const Roupas = [
    { name: "Femininos", link: "/tenis/feminino?initialMap=c&initialQuery=tenis&map=category-1,genero&order=OrderByReleaseDateDESC" },
    { name: "masculino", link: "/tenis/masculino?initialMap=c&initialQuery=tenis&map=category-1,genero&order=OrderByReleaseDateDESC" },
    { name: "Unissex", link: "/tenis/unissex?initialMap=c&initialQuery=tenis&map=category-1,genero&order=OrderByReleaseDateDESC" },
    { name: "Infantil", link: "/tenis/infantil?initialMap=c&initialQuery=tenis&map=category-1,genero&order=OrderByReleaseDateDESC" },
    { name: "Ver todos", link: "/tenis", More: true },
  ];
  const Tamanhos = [
    {
      name: "28",
      link: "/tenis/28?initialMap=c&initialQuery=tenis&map=category-1,tamanho&order=OrderByReleaseDateDESC",
    },
    {
      name: "29",
      link: "/tenis/29?initialMap=c&initialQuery=tenis&map=category-1,tamanho&order=OrderByReleaseDateDESC",
    },
    {
      name: "30",
      link: "/tenis/30?initialMap=c&initialQuery=tenis&map=category-1,tamanho&order=OrderByReleaseDateDESC",
    },
    {
      name: "31",
      link: "/tenis/31?initialMap=c&initialQuery=tenis&map=category-1,tamanho&order=OrderByReleaseDateDESC",
    },
    {
      name: "33",
      link: "/tenis/33?initialMap=c&initialQuery=tenis&map=category-1,tamanho&order=OrderByReleaseDateDESC",
    },
    {
      name: "34",
      link: "/tenis/34?initialMap=c&initialQuery=tenis&map=category-1,tamanho&order=OrderByReleaseDateDESC",
    },
    {
      name: "35",
      link: "/tenis/35?initialMap=c&initialQuery=tenis&map=category-1,tamanho&order=OrderByReleaseDateDESC",
    },
    {
      name: "36",
      link: "/tenis/36?initialMap=c&initialQuery=tenis&map=category-1,tamanho&order=OrderByReleaseDateDESC",
    },
    {
      name: "37",
      link: "/tenis/37?initialMap=c&initialQuery=tenis&map=category-1,tamanho&order=OrderByReleaseDateDESC",
    },
    {
      name: "38",
      link: "/tenis/38?initialMap=c&initialQuery=tenis&map=category-1,tamanho&order=OrderByReleaseDateDESC",
    },
    {
      name: "39",
      link: "/tenis/39?initialMap=c&initialQuery=tenis&map=category-1,tamanho&order=OrderByReleaseDateDESC",
    },
    {
      name: "40",
      link: "/tenis/40?initialMap=c&initialQuery=tenis&map=category-1,tamanho&order=OrderByReleaseDateDESC",
    },
    {
      name: "41",
      link: "/tenis/41?initialMap=c&initialQuery=tenis&map=category-1,tamanho&order=OrderByReleaseDateDESC",
    },
    {
      name: "42",
      link: "/tenis/42?initialMap=c&initialQuery=tenis&map=category-1,tamanho&order=OrderByReleaseDateDESC",
    },
    {
      name: "43",
      link: "/tenis/43?initialMap=c&initialQuery=tenis&map=category-1,tamanho&order=OrderByReleaseDateDESC",
    },
    {
      name: "44",
      link: "/tenis/44?initialMap=c&initialQuery=tenis&map=category-1,tamanho&order=OrderByReleaseDateDESC",
    },
  ];

  const Cores = [
    {
      color: "#F00",
      link: "/tenis/vermelho?initialMap=c&initialQuery=tenis&map=category-1,cor&order=OrderByReleaseDateDESC",
    },
    { color: "#000AF9", link: "/tenis/azul?initialMap=c&initialQuery=tenis&map=category-1,cor&order=OrderByReleaseDateDESC" },
    { color: "#11D200", link: "/tenis/verde?initialMap=c&initialQuery=tenis&map=category-1,cor&order=OrderByReleaseDateDESC" },
    { color: "#FFE500", link: "/tenis/amarelo?initialMap=c&initialQuery=tenis&map=category-1,cor&order=OrderByReleaseDateDESC" },
    { color: "#800000", link: "/tenis/bordo?initialMap=c&initialQuery=tenis&map=category-1,cor&order=OrderByReleaseDateDESC" },
    { color: "#E9E9E9", link: "/tenis/off-white?initialMap=c&initialQuery=tenis&map=category-1,cor&order=OrderByReleaseDateDESC" },
    { color: "#727272", link: "/tenis/cinza?initialMap=c&initialQuery=tenis&map=category-1,cor&order=OrderByReleaseDateDESC" },
    { color: "#F2EDD2", link: "/tenis/bege?initialMap=c&initialQuery=tenis&map=category-1,cor&order=OrderByReleaseDateDESC" },
    { color: "#FFC5DA", link: "/tenis/rosa?initialMap=c&initialQuery=tenis&map=category-1,cor&order=OrderByReleaseDateDESC" },
    { color: "#4F73A2", link: "/tenis/vermelho?initialMap=c&initialQuery=tenis&map=category-1,cor&order=OrderByReleaseDateDESC" },
    { color: "#000", link: "/tenis/preto?initialMap=c&initialQuery=tenis&map=category-1,cor&order=OrderByReleaseDateDESC" },
    { color: "#D69A3A", link: "/tenis/marrom?initialMap=c&initialQuery=tenis&map=category-1,cor&order=OrderByReleaseDateDESC" },
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
