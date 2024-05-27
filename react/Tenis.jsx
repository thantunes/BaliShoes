import style from "./components/MegaMenu/index.css";

export default function TenisMegaMenu() {
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
    { name: "Feminino", link: "/Feminino" },
    { name: "masculino", link: "/masculino" },
    { name: "Unissex", link: "/bucket-cata-ovo" },
    { name: "Infantil", link: "/bucket-cata-ovo" },
    { name: "Ver todos", link: "/Vertodos", More: true },
  ];
  const underwear = [
    { name: "Meias", link: "/Meias" },
    { name: "Ver todos", link: "/Vertodos", More: true },
  ];
  const Tamanhos = [
    { name: "28", link: "/product/28" },
    { name: "29", link: "/product/29" },
    { name: "30", link: "/product/30" },
    { name: "31", link: "/product/31" },
    { name: "32", link: "/product/32" },
    { name: "33", link: "/product/33" },
    { name: "34", link: "/product/34" },
    { name: "35", link: "/product/35" },
    { name: "36", link: "/product/36" },
    { name: "37", link: "/product/37" },
    { name: "38", link: "/product/38" },
    { name: "39", link: "/product/39" },
    { name: "40", link: "/product/40" },
    { name: "41", link: "/product/41" },
    { name: "42", link: "/product/42" },
    { name: "43", link: "/product/43" },
    { name: "44", link: "/product/44" },
  ];
  const Cores = [
    {
      color: "#F00",
      link: "/feminino/vermelho?fuzzy=0&initialMap=ft&initialQuery=Feminino&map=ft,cor&operator=and",
    },
    { color: "#000AF9", link: "/product/blue" },
    { color: "#11D200", link: "/product/green" },
    { color: "#FFE500", link: "/product/37" },
    { color: "#800000", link: "/product/38" },
    { color: "#E9E9E9", link: "/product/white" },
    { color: "#727272", link: "/product/p" },
    { color: "#F2EDD2", link: "/product/wheat" },
    { color: "#FFC5DA", link: "/product/pink" },
    { color: "#4F73A2", link: "/product/deepskyblue" },
    { color: "#000", link: "/product/black" },
    { color: "#D69A3A", link: "/product/orange" },
  ];
  return (
    <div className={`${style.ContainerMenuMain} ${style.ContainerTenis}`}>
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
      <div
        style={{ maxWidth: 190, height: "fit-content" }}
        className={`${style.ContainerMegaMenu} ${style.ContainerTam}`}
      >
        <h1>Tamanhos</h1>
        <div style={{ height: "260px" }}>
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
