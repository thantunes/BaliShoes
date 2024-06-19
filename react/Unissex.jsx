import style from "./components/MegaMenu/index.css";

export default function UnissexMegaMenu() {
  const Acess = [
    { name: "Bucket", link: "/bucket?_q=bucket&map=ft&order=OrderByReleaseDateDESC" },
    { name: "Carteiras", link: "/carteira?_q=carteira&map=ft" },
    { name: "Chinelos", link: "/chinelo?_q=chinelo&map=ft" },
    { name: "Gorros", link: "/acessorios/toucas?order=OrderByReleaseDateDESC" },
    { name: "Mochilas", link: "/acessorios/mochilas?order=OrderByReleaseDateDESC" },
    { name: "Pochetes", link: "/pochetes?order=OrderByReleaseDateDESC" },
    { name: "Óculos", link: "/acessorios/oculos?order=OrderByReleaseDateDESC" },
    { name: "Bag", link: "/bag?_q=bag&map=ft&order=OrderByReleaseDateDESC" },
    { name: "Ver todos", link: "/acessorios/unissex?initialMap=c&initialQuery=acessorios&map=category-1,genero", More: true },
  ];
  const Roupas = [
    { name: "Moletons", link: "/moletom/unissex?fuzzy=0&initialMap=ft&initialQuery=moletom&map=ft,genero&operator=and&order=OrderByReleaseDateDESC" },
    { name: "Camisetas", link: "/camiseta/unissex?fuzzy=0&initialMap=ft&initialQuery=camiseta&map=ft,genero&operator=and&order=OrderByReleaseDateDESC" },
    { name: "Calças", link: "/calca/unissex?O=OrderByReleaseDateDESC&PS=48&fuzzy=0&initialMap=ft&initialQuery=calca&map=ft,genero&operator=and&order=OrderByReleaseDateDESC" },
    { name: "Ver todos", link: "/unissex?order=OrderByReleaseDateDESC", More: true },
    { name: "Ofertas", link: "/unissex/ofertas?fuzzy=auto&initialMap=ft&initialQuery=ofertas&map=genero,ft&operator=and&order=OrderByReleaseDateDESC", Offer: true },
  ];
  const underwear = [
    { name: "Meias", link: "/meias?_q=meias&map=ft" },
    { name: "Ver todos", link: "/underwear/unissex?O=OrderByReleaseDateDESC&PS=48&initialMap=c&initialQuery=underwear&map=category-1,genero", More: true },
  ];
  const Tamanhos = [
    {
      name: "33",
      link: "/unissex/33?initialMap=c&initialQuery=unissex&map=category-1,tamanho&order=OrderByReleaseDateDESC",
    },
    {
      name: "34",
      link: "/unissex/34?initialMap=c&initialQuery=unissex&map=category-1,tamanho&order=OrderByReleaseDateDESC",
    },
    {
      name: "35",
      link: "/unissex/35?initialMap=c&initialQuery=unissex&map=category-1,tamanho&order=OrderByReleaseDateDESC",
    },
    {
      name: "36",
      link: "/unissex/36?initialMap=c&initialQuery=unissex&map=category-1,tamanho&order=OrderByReleaseDateDESC",
    },
    {
      name: "37",
      link: "/unissex/37?initialMap=c&initialQuery=unissex&map=category-1,tamanho&order=OrderByReleaseDateDESC",
    },
    {
      name: "38",
      link: "/unissex/38?initialMap=c&initialQuery=unissex&map=category-1,tamanho&order=OrderByReleaseDateDESC",
    },
    {
      name: "39",
      link: "/unissex/39?initialMap=c&initialQuery=unissex&map=category-1,tamanho&order=OrderByReleaseDateDESC",
    },
    {
      name: "40",
      link: "/unissex/40?initialMap=c&initialQuery=unissex&map=category-1,tamanho&order=OrderByReleaseDateDESC",
    },
    {
      name: "41",
      link: "/unissex/41?initialMap=c&initialQuery=unissex&map=category-1,tamanho&order=OrderByReleaseDateDESC",
    },
    {
      name: "42",
      link: "/unissex/42?initialMap=c&initialQuery=unissex&map=category-1,tamanho&order=OrderByReleaseDateDESC",
    },
    {
      name: "43",
      link: "/unissex/43?initialMap=c&initialQuery=unissex&map=category-1,tamanho&order=OrderByReleaseDateDESC",
    },
    {
      name: "44",
      link: "/unissex/44?initialMap=c&initialQuery=unissex&map=category-1,tamanho&order=OrderByReleaseDateDESC",
    },
  ];

  const Tamanhos2 = [
    {
      name: "P",
      link: "/unissex/p?initialMap=c&initialQuery=unissex&map=category-1,tamanho&order=OrderByReleaseDateDESC",
    },
    {
      name: "M",
      link: "/unissex/m?initialMap=c&initialQuery=unissex&map=category-1,tamanho&order=OrderByReleaseDateDESC",
    },
    {
      name: "G",
      link: "/unissex/g?initialMap=c&initialQuery=unissex&map=category-1,tamanho&order=OrderByReleaseDateDESC",
    },
    {
      name: "GG",
      link: "/unissex/gg?initialMap=c&initialQuery=unissex&map=category-1,tamanho&order=OrderByReleaseDateDESC",
    },
    {
      name: "36",
      link: "/unissex/36?initialMap=c&initialQuery=unissex&map=category-1,tamanho&order=OrderByReleaseDateDESC",
    },
    {
      name: "38",
      link: "/unissex/38?initialMap=c&initialQuery=unissex&map=category-1,tamanho&order=OrderByReleaseDateDESC",
    },
    {
      name: "G1",
      link: "/unissex/g1?initialMap=c&initialQuery=unissex&map=category-1,tamanho&order=OrderByReleaseDateDESC",
    },
  ];
  const Cores = [
    {
      color: "#F00",
      link: "/unissex/vermelho?initialMap=c&initialQuery=unissex&map=category-1,cor&order=OrderByReleaseDateDESC",
    },
    {
      color: "#000AF9",
      link: "/unissex/azul?initialMap=c&initialQuery=unissex&map=category-1,cor&order=OrderByReleaseDateDESC",
    },
    {
      color: "#11D200",
      link: "/unissex/verde?initialMap=c&initialQuery=unissex&map=category-1,cor&order=OrderByReleaseDateDESC",
    },
    {
      color: "#FFE500",
      link: "/unissex/amarelo?initialMap=c&initialQuery=unissex&map=category-1,cor&order=OrderByReleaseDateDESC",
    },
    {
      color: "#800000",
      link: "/unissex/bordo?initialMap=c&initialQuery=unissex&map=category-1,cor&order=OrderByReleaseDateDESC",
    },
    {
      color: "#E9E9E9",
      link: "/unissex/off-white?initialMap=c&initialQuery=unissex&map=category-1,cor&order=OrderByReleaseDateDESC",
    },
    {
      color: "#727272",
      link: "/unissex/cinza?initialMap=c&initialQuery=unissex&map=category-1,cor&order=OrderByReleaseDateDESC",
    },
    {
      color: "#F2EDD2",
      link: "/unissex/bege?initialMap=c&initialQuery=unissex&map=category-1,cor&order=OrderByReleaseDateDESC",
    },
    {
      color: "#FFC5DA",
      link: "/unissex/rosa?initialMap=c&initialQuery=unissex&map=category-1,cor&order=OrderByReleaseDateDESC",
    },
    {
      color: "#4F73A2",
      link: "/unissex/jeans?initialMap=c&initialQuery=unissex&map=category-1,cor&order=OrderByReleaseDateDESC",
    },
    {
      color: "#000",
      link: "/unissex/preto?initialMap=c&initialQuery=unissex&map=category-1,cor&order=OrderByReleaseDateDESC",
    },
    {
      color: "#D69A3A",
      link: "/unissex/laranja?initialMap=c&initialQuery=unissex&map=category-1,cor&order=OrderByReleaseDateDESC",
    },
  ];
  return (
    <div className={`${style.ContainerMenuMain} ${style.ContainerMenuUni}`}>
      <div className={`${style.ContainerMegaMenu} ${style.ContainerRoupaFemi}`}>
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
