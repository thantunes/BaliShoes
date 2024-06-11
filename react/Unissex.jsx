import style from "./components/MegaMenu/index.css";

export default function UnissexMegaMenu() {
  const Acess = [
    { name: "Bolsas", link: "/bolsas/unissex?_q=bolsas&fuzzy=0&initialMap=ft&initialQuery=bolsas&map=ft,genero&operator=and" },
    { name: "Bonés", link: "/bones/unissex?_q=bones&fuzzy=0&initialMap=ft&initialQuery=bones&map=ft,genero&operator=and" },
    { name: "Bucket/Cata Ovo", link: "/bucket/unissex?_q=bucket&fuzzy=0&initialMap=ft&initialQuery=bucket&map=ft,genero&operator=and" },
    { name: "Carteiras", link: "/carteiras/unissex?_q=carteiras&fuzzy=0&initialMap=ft&initialQuery=carteiras&map=ft,genero&operator=and" },
    { name: "Chinelos", link: "/chinelos/unissex?_q=chinelos&fuzzy=0&initialMap=ft&initialQuery=chinelos&map=ft,genero&operator=and" },
    { name: "Gorros/Toucas", link: "/touca/unissex?_q=touca&fuzzy=0&initialMap=ft&initialQuery=touca&map=ft,genero&operator=and" },
    { name: "Meias", link: "/meias/unissex?_q=meias&fuzzy=0&initialMap=ft&initialQuery=meias&map=ft,genero&operator=and" },
    { name: "Mochilas", link: "/mochilas/unissex?_q=mochilas&fuzzy=0&initialMap=ft&initialQuery=mochilas&map=ft,genero&operator=and" },
    { name: "Pochetes", link: "/pochetes/unissex?_q=pochetes&fuzzy=0&initialMap=ft&initialQuery=pochetes&map=ft,genero&operator=and" },
    { name: "Óculos", link: "/oculos/unissex?_q=oculos&fuzzy=0&initialMap=ft&initialQuery=oculos&map=ft,genero&operator=and" },
    { name: "Shoulder Bag", link: "/shoulder-bag/unissex?_q=shoulder-bag&fuzzy=0&initialMap=ft&initialQuery=shoulder-bag&map=ft,genero&operator=and" },
    { name: "Ver todos", link: "/acessorios/unissex?initialMap=c&initialQuery=acessorios&map=category-1,genero", More: true },
  ];
  const Roupas = [
    { name: "Blusas", link: "/blusas/unissex?_q=blusas&fuzzy=0&initialMap=ft&initialQuery=blusas&map=ft,genero&operator=and" },
    { name: "Camisetas", link: "/camisetas/unissex?_q=camisetas&fuzzy=0&initialMap=ft&initialQuery=camisetas&map=ft,genero&operator=and" },
    { name: "Camisa", link: "/camisa/unissex?_q=camisa&fuzzy=0&initialMap=ft&initialQuery=camisa&map=ft,genero&operator=and" },
    { name: "regatas", link: "/regatas/unissex?_q=regatas&fuzzy=0&initialMap=ft&initialQuery=regatas&map=ft,genero&operator=and" },
    { name: "coletes", link: "/coletes/unissex?_q=coletes&fuzzy=0&initialMap=ft&initialQuery=coletes&map=ft,genero&operator=and" },
    { name: "Conjuntos", link: "/conjunto/unissex?_q=conjunto&fuzzy=0&initialMap=ft&initialQuery=conjunto&map=ft,genero&operator=and" },
    { name: "Ver todos", link: "/unissex", More: true },
    { name: "Jaqueta", link: "/jaqueta/unissex?_q=jaqueta&fuzzy=0&initialMap=ft&initialQuery=jaqueta&map=ft,genero&operator=and" },
    { name: "Bermuda", link: "/bermuda/unissex?_q=bermuda&fuzzy=0&initialMap=ft&initialQuery=bermuda&map=ft,genero&operator=and" },
    { name: "Calças", link: "/oculos/unissex?_q=oculos&fuzzy=0&initialMap=ft&initialQuery=oculos&map=ft,genero&operator=and" },
    { name: "Jogger", link: "/jogger/unissex?_q=jogger&fuzzy=0&initialMap=ft&initialQuery=jogger&map=ft,genero&operator=and" },
    { name: "Moletom", link: "/moletom/unissex?_q=moletom&fuzzy=0&initialMap=ft&initialQuery=moletom&map=ft,genero&operator=and" },
    { name: "Shorts", link: "/shorts/unissex?_q=shorts&fuzzy=0&initialMap=ft&initialQuery=shorts&map=ft,genero&operator=and" },
    { name: "Ofertas", link: "/unissex/ofertas?fuzzy=auto&initialMap=ft&initialQuery=ofertas&map=genero,ft&operator=and", Offer: true },
  ];
  const underwear = [
    { name: "Meias", link: "/meias/unissex?fuzzy=0&initialMap=ft&initialQuery=Meias&map=ft,genero&operator=and" },
    { name: "Ver todos", link: "/underwear/unissex?O=OrderByReleaseDateDESC&PS=48&initialMap=c&initialQuery=underwear&map=category-1,genero", More: true },
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
      name: "P",
      link: "/unissex/p?initialMap=c&initialQuery=unissex&map=category-1,tamanho",
    },
    {
      name: "M",
      link: "/unissex/m?initialMap=c&initialQuery=unissex&map=category-1,tamanho",
    },
    {
      name: "G",
      link: "/unissex/g?initialMap=c&initialQuery=unissex&map=category-1,tamanho",
    },
    {
      name: "GG",
      link: "/unissex/gg?initialMap=c&initialQuery=unissex&map=category-1,tamanho",
    },
    {
      name: "36",
      link: "/unissex/36?initialMap=c&initialQuery=unissex&map=category-1,tamanho",
    },
    {
      name: "38",
      link: "/unissex/38?initialMap=c&initialQuery=unissex&map=category-1,tamanho",
    },
    {
      name: "G1",
      link: "/unissex/g1?initialMap=c&initialQuery=unissex&map=category-1,tamanho",
    },
  ];
  const Cores = [
    {
      color: "#F00",
      link: "/unissex/vermelho?initialMap=c&initialQuery=unissex&map=category-1,cor",
    },
    {
      color: "#000AF9",
      link: "/unissex/azul?initialMap=c&initialQuery=unissex&map=category-1,cor",
    },
    {
      color: "#11D200",
      link: "/unissex/verde?initialMap=c&initialQuery=unissex&map=category-1,cor",
    },
    {
      color: "#FFE500",
      link: "/unissex/amarelo?initialMap=c&initialQuery=unissex&map=category-1,cor",
    },
    {
      color: "#800000",
      link: "/unissex/bordo?initialMap=c&initialQuery=unissex&map=category-1,cor",
    },
    {
      color: "#E9E9E9",
      link: "/unissex/off-white?initialMap=c&initialQuery=unissex&map=category-1,cor",
    },
    {
      color: "#727272",
      link: "/unissex/cinza?initialMap=c&initialQuery=unissex&map=category-1,cor",
    },
    {
      color: "#F2EDD2",
      link: "/unissex/bege?initialMap=c&initialQuery=unissex&map=category-1,cor",
    },
    {
      color: "#FFC5DA",
      link: "/unissex/rosa?initialMap=c&initialQuery=unissex&map=category-1,cor",
    },
    {
      color: "#4F73A2",
      link: "/unissex/jeans?initialMap=c&initialQuery=unissex&map=category-1,cor",
    },
    {
      color: "#000",
      link: "/unissex/preto?initialMap=c&initialQuery=unissex&map=category-1,cor",
    },
    {
      color: "#D69A3A",
      link: "/unissex/laranja?initialMap=c&initialQuery=unissex&map=category-1,cor",
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
