import style from "./components/MegaMenu/index.css";

export default function FemininoMegaMenu() {
  const Acess = [
    { name: "Bolsas", link: "/bolsas" },
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
    { name: "Ver todos", link: "/acessorios/feminino?initialMap=c&initialQuery=acessorios&map=category-1,genero", More: true },
  ];
  const Roupas = [
    { name: "body", link: "/body" },
    { name: "Blusas", link: "/blusas" },
    { name: "Camisetas", link: "/Camisetas" },
    { name: "coletes", link: "/coletes" },
    { name: "Jaqueta", link: "/Jaqueta" },
    { name: "regatas", link: "/Jaqueta" },
    { name: "Ver todos", link: "/feminino", More: true },
    { name: "Conjuntos", link: "/Conjuntos" },
    { name: "Calças", link: "/Calças" },
    { name: "Macacões", link: "/Macacoes" },
    { name: "Shorts", link: "/Shorts" },
    { name: "Saias", link: "/Saias" },
    { name: "Vestidos", link: "/Vestidos" },
    { name: "Ofertas", link: "/Ofertas", Offer: true },
  ];
  const underwear = [
    { name: "Top", link: "/Top" },
    { name: "Meias", link: "/Meias" },
    { name: "Ver todos", link: "/underwear/feminino?O=OrderByReleaseDateDESC&PS=48&initialMap=c&initialQuery=underwear&map=category-1,genero", More: true },
  ];
  const Tamanhos = [
    {
      name: "33",
      link: "/feminino/33?initialMap=c&initialQuery=feminino&map=category-1,tamanho",
    },
    {
      name: "34",
      link: "/feminino/34?initialMap=c&initialQuery=feminino&map=category-1,tamanho",
    },
    {
      name: "35",
      link: "/feminino/35?initialMap=c&initialQuery=feminino&map=category-1,tamanho",
    },
    {
      name: "36",
      link: "/feminino/36?initialMap=c&initialQuery=feminino&map=category-1,tamanho",
    },
    {
      name: "37",
      link: "/feminino/37?initialMap=c&initialQuery=feminino&map=category-1,tamanho",
    },
    {
      name: "38",
      link: "/feminino/38?initialMap=c&initialQuery=feminino&map=category-1,tamanho",
    },
    {
      name: "39",
      link: "/feminino/39?initialMap=c&initialQuery=feminino&map=category-1,tamanho",
    },
    {
      name: "40",
      link: "/feminino/40?initialMap=c&initialQuery=feminino&map=category-1,tamanho",
    },
    {
      name: "41",
      link: "/feminino/41?initialMap=c&initialQuery=feminino&map=category-1,tamanho",
    },
    {
      name: "42",
      link: "/feminino/42?initialMap=c&initialQuery=feminino&map=category-1,tamanho",
    },
    {
      name: "43",
      link: "/feminino/43?initialMap=c&initialQuery=feminino&map=category-1,tamanho",
    },
    {
      name: "44",
      link: "/feminino/44?initialMap=c&initialQuery=feminino&map=category-1,tamanho",
    },
  ];

  const Tamanhos2 = [
    {
      name: "P",
      link: "/feminino/p?initialMap=c&initialQuery=feminino&map=category-1,tamanho",
    },
    {
      name: "M",
      link: "/feminino/m?initialMap=c&initialQuery=feminino&map=category-1,tamanho",
    },
    {
      name: "G",
      link: "/feminino/g?initialMap=c&initialQuery=feminino&map=category-1,tamanho",
    },
    {
      name: "GG",
      link: "/feminino/gg?initialMap=c&initialQuery=feminino&map=category-1,tamanho",
    },
  ];
  const Cores = [
    {
      color: "#F00",
      link: "/feminino/vermelho?fuzzy=0&initialMap=ft&initialQuery=Feminino&map=ft,cor&operator=and",
    },
    {
      color: "#000AF9",
      link: "/feminino/azul?fuzzy=0&initialMap=ft&initialQuery=Feminino&map=ft,cor&operator=and",
    },
    {
      color: "#11D200",
      link: "/feminino/verde?fuzzy=0&initialMap=ft&initialQuery=Feminino&map=ft,cor&operator=and",
    },
    {
      color: "#FFE500",
      link: "/feminino/amarelo?fuzzy=0&initialMap=ft&initialQuery=Feminino&map=ft,cor&operator=and",
    },
    {
      color: "#800000",
      link: "/feminino/bordo?fuzzy=0&initialMap=ft&initialQuery=Feminino&map=ft,cor&operator=and",
    },
    {
      color: "#E9E9E9",
      link: "/feminino/off-white?fuzzy=0&initialMap=ft&initialQuery=Feminino&map=ft,cor&operator=and",
    },
    {
      color: "#727272",
      link: "/feminino/cinza?fuzzy=0&initialMap=ft&initialQuery=Feminino&map=ft,cor&operator=and",
    },
    {
      color: "#F2EDD2",
      link: "/feminino/bege?fuzzy=0&initialMap=ft&initialQuery=Feminino&map=ft,cor&operator=and",
    },
    {
      color: "#FFC5DA",
      link: "/feminino/rosa?fuzzy=0&initialMap=ft&initialQuery=Feminino&map=ft,cor&operator=and",
    },
    {
      color: "#4F73A2",
      link: "/feminino/jeans?fuzzy=0&initialMap=ft&initialQuery=Feminino&map=ft,cor&operator=and",
    },
    {
      color: "#000",
      link: "/feminino/preto?fuzzy=0&initialMap=ft&initialQuery=Feminino&map=ft,cor&operator=and",
    },
    {
      color: "#D69A3A",
      link: "/feminino/laranja?fuzzy=0&initialMap=ft&initialQuery=Feminino&map=ft,cor&operator=and",
    },
  ];
  return (
    <div className={style.ContainerMenuMain}>
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
