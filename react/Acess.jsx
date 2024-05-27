import style from "./components/MegaMenu/index.css";

export default function AcessMegaMenu() {
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
      link: "/acessorios/vermelho?initialMap=c&initialQuery=acessorios&map=category-1,cor",
    },
    { color: "#000AF9", link: "/acessorios/azul?initialMap=c&initialQuery=acessorios&map=category-1,cor" },
    { color: "#11D200", link: "/acessorios/verde?initialMap=c&initialQuery=acessorios&map=category-1,cor" },
    { color: "#FFE500", link: "/acessorios/amarelo?initialMap=c&initialQuery=acessorios&map=category-1,cor" },
    { color: "#800000", link: "/acessorios/bordo?initialMap=c&initialQuery=acessorios&map=category-1,cor" },
    { color: "#E9E9E9", link: "/acessorios/off-white?initialMap=c&initialQuery=acessorios&map=category-1,cor" },
    { color: "#727272", link: "/acessorios/cinza?initialMap=c&initialQuery=acessorios&map=category-1,cor" },
    { color: "#F2EDD2", link: "/acessorios/bege?initialMap=c&initialQuery=acessorios&map=category-1,cor" },
    { color: "#FFC5DA", link: "/acessorios/rosa?initialMap=c&initialQuery=acessorios&map=category-1,cor" },
    { color: "#4F73A2", link: "/acessorios/jeans?initialMap=c&initialQuery=acessorios&map=category-1,cor" },
    { color: "#000", link: "/acessorios/preto?initialMap=c&initialQuery=acessorios&map=category-1,cor" },
    { color: "#D69A3A", link: "/acessorios/laranja?initialMap=c&initialQuery=acessorios&map=category-1,cor" },
  ];
  return (
    <div className={`${style.ContainerMenuMain} ${style.ContainerAcessMenu}`}>
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
      <div
        className={`${style.ContainerMegaMenu} ${style.ContainerTam} ${style.ContainerAccesMasc}`}
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
