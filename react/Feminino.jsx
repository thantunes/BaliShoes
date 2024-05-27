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
    { name: "Ver todos", link: "/Vertodos", More: true },
  ];
  const Roupas = [
    { name: "body", link: "/body" },

    { name: "Blusas", link: "/blusas" },
    { name: "Camisetas", link: "/Camisetas" },
    { name: "coletes", link: "/coletes" },
    { name: "Jaqueta", link: "/Jaqueta" },
    { name: "regatas", link: "/Jaqueta" },
    { name: "Ver todos", link: "/Vertodos", More: true },
    { name: "Conjuntos", link: "/Conjuntos" },
    { name: "Calças", link: "/Calças" },
    { name: "Macacoes", link: "/Macacoes" },
    { name: "Shorts", link: "/Shorts" },
    { name: "Vestidos", link: "/Vestidos" },
    { name: "Ofertas", link: "/Ofertas", Offer: true },
  ];
  const underwear = [
    { name: "Top", link: "/Top" },
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
      link: "/feminino/vermelho?fuzzy=0&initialMap=ft&initialQuery=Feminino&map=ft,cor&operator=and",
    },
    { color: "#000AF9", link: "/feminino/azul?fuzzy=0&initialMap=ft&initialQuery=Feminino&map=ft,cor&operator=and" },
    { color: "#11D200", link: "/feminino/verde?fuzzy=0&initialMap=ft&initialQuery=Feminino&map=ft,cor&operator=and" },
    { color: "#FFE500", link: "/feminino/amarelo?fuzzy=0&initialMap=ft&initialQuery=Feminino&map=ft,cor&operator=and" },
    { color: "#800000", link: "/feminino/bordo?fuzzy=0&initialMap=ft&initialQuery=Feminino&map=ft,cor&operator=and" },
    { color: "#E9E9E9", link: "/feminino/off-white?fuzzy=0&initialMap=ft&initialQuery=Feminino&map=ft,cor&operator=and" },
    { color: "#727272", link: "/feminino/cinza?fuzzy=0&initialMap=ft&initialQuery=Feminino&map=ft,cor&operator=and" },
    { color: "#F2EDD2", link: "/feminino/bege?fuzzy=0&initialMap=ft&initialQuery=Feminino&map=ft,cor&operator=and" },
    { color: "#FFC5DA", link: "/feminino/rosa?fuzzy=0&initialMap=ft&initialQuery=Feminino&map=ft,cor&operator=and" },
    { color: "#4F73A2", link: "/feminino/jeans?fuzzy=0&initialMap=ft&initialQuery=Feminino&map=ft,cor&operator=and" },
    { color: "#000", link: "/feminino/preto?fuzzy=0&initialMap=ft&initialQuery=Feminino&map=ft,cor&operator=and" },
    { color: "#D69A3A", link: "/feminino/laranja?fuzzy=0&initialMap=ft&initialQuery=Feminino&map=ft,cor&operator=and" },
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
