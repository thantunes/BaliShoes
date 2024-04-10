import style from "./components/MegaMenu/index.css";

export default function UnderWareMegaMenu() {
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
    { name: "Blusa", link: "/Blusa" },
    { name: "Camisa", link: "/Camisa" },
    { name: "Regata", link: "/bucket-cata-ovo" },
    { name: "Colete", link: "/bucket-cata-ovo" },
    { name: "Conjunto", link: "/Conjunto" },
    { name: "Jaqueta", link: "/Jaqueta" },
    { name: "Bermuda", link: "/Bermuda" },
    { name: "Calça", link: "/Calça" },
    { name: "Jogger", link: "/Jogger" },
    { name: "Moletom", link: "/Moletom" },
    { name: "Short", link: "/Short" },
    { name: "Ver todos", link: "/Vertodos", More: true },
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
    { name: "red", link: "/product/red" },
    { name: "blue", link: "/product/blue" },
    { name: "green", link: "/product/green" },
    { name: "yellow", link: "/product/37" },
    { name: "Purple", link: "/product/38" },
    { name: "white", link: "/product/white" },
    { name: "gray", link: "/product/p" },
    { name: "wheat", link: "/product/wheat" },
    { name: "pink", link: "/product/pink" },
    { name: "deepskyblue", link: "/product/deepskyblue" },
    { name: "black", link: "/product/black" },
  ];
  return (
    <div className={`${style.ContainerMenuMain} ${style.ContainerUnderMain}`}>
      <div
        className={`${style.ContainerMegaMenu} ${style.ContainerRoupaUnder}`}
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
                style={{ backgroundColor: e.name }}
                href={e.link}
              ></a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
