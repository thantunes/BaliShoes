import style from "./components/MegaMenu/index.css";

export default function UnissexMegaMenu() {
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
    { name: "Blusas", link: "/blusas" },
    { name: "Camisetas", link: "/Camisetas" },
    { name: "Camisa", link: "/Camisa" },
    { name: "regatas", link: "/Jaqueta" },
    { name: "coletes", link: "/coletes" },
    { name: "Conjuntos", link: "/Conjuntos" },
    { name: "Ver todos", link: "/Vertodos", More: true },
    { name: "Jaqueta", link: "/Jaqueta" },
    { name: "Bermuda", link: "/Bermuda" },
    { name: "Calças", link: "/Calças" },
    { name: "Jogger", link: "/Jogger" },
    { name: "Moletom", link: "/Moletom" },
    { name: "Shorts", link: "/Shorts" },
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
      link: "/unissex/vermelho?initialMap=c&initialQuery=unissex&map=category-1,cor",
    },
    { color: "#000AF9", link: "/unissex/azul?initialMap=c&initialQuery=unissex&map=category-1,cor" },
    { color: "#11D200", link: "/unissex/verde?initialMap=c&initialQuery=unissex&map=category-1,cor" },
    { color: "#FFE500", link: "/unissex/amarelo?initialMap=c&initialQuery=unissex&map=category-1,cor" },
    { color: "#800000", link: "/unissex/bordo?initialMap=c&initialQuery=unissex&map=category-1,cor" },
    { color: "#E9E9E9", link: "/unissex/off-white?initialMap=c&initialQuery=unissex&map=category-1,cor" },
    { color: "#727272", link: "/unissex/cinza?initialMap=c&initialQuery=unissex&map=category-1,cor" },
    { color: "#F2EDD2", link: "/unissex/bege?initialMap=c&initialQuery=unissex&map=category-1,cor" },
    { color: "#FFC5DA", link: "/unissex/rosa?initialMap=c&initialQuery=unissex&map=category-1,cor" },
    { color: "#4F73A2", link: "/unissex/jeans?initialMap=c&initialQuery=unissex&map=category-1,cor" },
    { color: "#000", link: "/unissex/preto?initialMap=c&initialQuery=unissex&map=category-1,cor" },
    { color: "#D69A3A", link: "/unissex/laranja?initialMap=c&initialQuery=unissex&map=category-1,cor" },
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
