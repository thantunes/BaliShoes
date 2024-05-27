import style from "./components/MegaMenu/index.css";

export default function PlussizeMegaMenu() {
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
    { name: "Jaqueta", link: "/Jaqueta" },
    { name: "Bermudas", link: "/Bermudas" },
    { name: "Ver todos", link: "/Vertodos", More: true },
    { name: "Calças", link: "/Calças" },
    { name: "Moletons", link: "/Moletons" },
    { name: "Clubes de Basquete", link: "/ClubesdeBasquete" },
    { name: "Ofertas", link: "/Ofertas", Offer: true },
  ];
  const underwear = [
    { name: "Meias", link: "/Meias" },
    { name: "Ver todos", link: "/Vertodos", More: true },
  ];
  const Tamanhos = [
    { name: "33", link: "/product/33" },
    { name: "34", link: "/product/34" },
    { name: "35", link: "/product/35" },
    { name: "37", link: "/product/37" },
    { name: "38", link: "/product/38" },
    { name: "41", link: "/product/41" },
    { name: "P", link: "/product/p" },
    { name: "G1", link: "/product/g1" },
    { name: "M", link: "/product/m" },
    { name: "G", link: "/product/g" },
    { name: "GG", link: "/product/gg" },
  ];
  const Cores = [
    {
      color: "#F00",
      link: "/plus-size/vermelho?initialMap=c&initialQuery=plus-size&map=category-1,cor",
    },
    { color: "#000AF9", link: "/plus-size/azul?initialMap=c&initialQuery=plus-size&map=category-1,cor" },
    { color: "#11D200", link: "/plus-size/verde?initialMap=c&initialQuery=plus-size&map=category-1,cor" },
    { color: "#FFE500", link: "/plus-size/amarelo?initialMap=c&initialQuery=plus-size&map=category-1,cor" },
    { color: "#800000", link: "/plus-size/bordo?initialMap=c&initialQuery=plus-size&map=category-1,cor" },
    { color: "#E9E9E9", link: "/plus-size/off-white?initialMap=c&initialQuery=plus-size&map=category-1,cor" },
    { color: "#727272", link: "/plus-size/cinza?initialMap=c&initialQuery=plus-size&map=category-1,cor" },
    { color: "#F2EDD2", link: "/plus-size/bege?initialMap=c&initialQuery=plus-size&map=category-1,cor" },
    { color: "#FFC5DA", link: "/plus-size/rosa?initialMap=c&initialQuery=plus-size&map=category-1,cor" },
    { color: "#4F73A2", link: "/plus-size/jeans?initialMap=c&initialQuery=plus-size&map=category-1,cor" },
    { color: "#000", link: "/plus-size/preto?initialMap=c&initialQuery=plus-size&map=category-1,cor" },
    { color: "#D69A3A", link: "/plus-size/laranja?initialMap=c&initialQuery=plus-size&map=category-1,cor" },
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
      </div>
      <div className={`${style.ContainerMegaMenu} ${style.ContainerTam}`}>
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
