import style from "./components/MegaMenu/index.css";

export default function InfantilMegaMenu() {
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
    { name: "Ver todos", link: "/Vertodos", More: true },
  ];
  const Roupas = [
    { name: "Camisetas", link: "/Camisetas" },
    { name: "Moletons", link: "/Moletons" },
    { name: "Conjuntos", link: "/Conjuntos" },
    { name: "Ver todos", link: "/Vertodos", More: true },
    { name: "Bermudas", link: "/Bermudas" },
    { name: "Saias", link: "/Saias" },
    { name: "Ofertas", link: "/Ofertas", Offer: true },
  ];
  const underwear = [
    { name: "Top", link: "/Top" },
    { name: "Cuecas", link: "/Cuecas" },
    { name: "Meias", link: "/Meias" },
    { name: "Ver todos", link: "/Vertodos", More: true },
  ];
  const Tamanhos = [
    {
      name: "28",
      link: "/infantil/28?initialMap=c&initialQuery=infantil&map=category-1,tamanho",
    },
    {
      name: "29",
      link: "/infantil/29?initialMap=c&initialQuery=infantil&map=category-1,tamanho",
    },
    {
      name: "30",
      link: "/infantil/30?initialMap=c&initialQuery=infantil&map=category-1,tamanho",
    },
    {
      name: "31",
      link: "/infantil/31?initialMap=c&initialQuery=infantil&map=category-1,tamanho",
    },
    {
      name: "33",
      link: "/infantil/33?initialMap=c&initialQuery=infantil&map=category-1,tamanho",
    },
    {
      name: "34",
      link: "/infantil/34?initialMap=c&initialQuery=infantil&map=category-1,tamanho",
    },
    {
      name: "35",
      link: "/infantil/35?initialMap=c&initialQuery=infantil&map=category-1,tamanho",
    },
    {
      name: "36",
      link: "/infantil/36?initialMap=c&initialQuery=infantil&map=category-1,tamanho",
    },
    {
      name: "37",
      link: "/infantil/37?initialMap=c&initialQuery=infantil&map=category-1,tamanho",
    },
    {
      name: "38",
      link: "/infantil/38?initialMap=c&initialQuery=infantil&map=category-1,tamanho",
    },
    {
      name: "39",
      link: "/infantil/39?initialMap=c&initialQuery=infantil&map=category-1,tamanho",
    },
  ];
  const Tamanhos2 = [
    {
      name: "02",
      link: "/infantil/02?initialMap=c&initialQuery=infantil&map=category-1,tamanho",
    },
    {
      name: "04",
      link: "/infantil/04?initialMap=c&initialQuery=infantil&map=category-1,tamanho",
    },
    {
      name: "06",
      link: "/infantil/06?initialMap=c&initialQuery=infantil&map=category-1,tamanho",
    },
    {
      name: "08",
      link: "/infantil/08?initialMap=c&initialQuery=infantil&map=category-1,tamanho",
    },
    {
      name: "10",
      link: "/infantil/10?initialMap=c&initialQuery=infantil&map=category-1,tamanho",
    },
    {
      name: "12",
      link: "/infantil/12?initialMap=c&initialQuery=infantil&map=category-1,tamanho",
    },
    {
      name: "14",
      link: "/infantil/14?initialMap=c&initialQuery=infantil&map=category-1,tamanho",
    },
  ];
  const Cores = [
    {
      color: "#F00",
      link: "/infantil/vermelho?fuzzy=0&initialMap=ft&initialQuery=Infantil&map=ft,cor&operator=and",
    },
    {
      color: "#000AF9",
      link: "/infantil/azul?fuzzy=0&initialMap=ft&initialQuery=Infantil&map=ft,cor&operator=and",
    },
    {
      color: "#11D200",
      link: "/infantil/verde?fuzzy=0&initialMap=ft&initialQuery=Infantil&map=ft,cor&operator=and",
    },
    {
      color: "#FFE500",
      link: "/infantil/amarelo?fuzzy=0&initialMap=ft&initialQuery=Infantil&map=ft,cor&operator=and",
    },
    {
      color: "#800000",
      link: "/infantil/bordo?fuzzy=0&initialMap=ft&initialQuery=Infantil&map=ft,cor&operator=and",
    },
    {
      color: "#E9E9E9",
      link: "/infantil/off-white?fuzzy=0&initialMap=ft&initialQuery=Infantil&map=ft,cor&operator=and",
    },
    {
      color: "#727272",
      link: "/infantil/cinza?fuzzy=0&initialMap=ft&initialQuery=Infantil&map=ft,cor&operator=and",
    },
    {
      color: "#F2EDD2",
      link: "/infantil/bege?fuzzy=0&initialMap=ft&initialQuery=Infantil&map=ft,cor&operator=and",
    },
    {
      color: "#FFC5DA",
      link: "/infantil/rosa?fuzzy=0&initialMap=ft&initialQuery=Infantil&map=ft,cor&operator=and",
    },
    {
      color: "#4F73A2",
      link: "/infantil/jeans?fuzzy=0&initialMap=ft&initialQuery=Infantil&map=ft,cor&operator=and",
    },
    {
      color: "#000",
      link: "/infantil/preto?fuzzy=0&initialMap=ft&initialQuery=Infantil&map=ft,cor&operator=and",
    },
    {
      color: "#D69A3A",
      link: "/infantil/laranja?fuzzy=0&initialMap=ft&initialQuery=Infantil&map=ft,cor&operator=and",
    },
  ];
  return (
    <div className={style.ContainerMenuMain}>
      <div className={`${style.ContainerMegaMenu} ${style.ContainerRoupaInf} ${style.ContainerRoupaInfantil}`}>
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
