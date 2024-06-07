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
    { name: "Ver todos", link: "/acessorios/underware?initialMap=c&initialQuery=acessorios&map=category-1,genero", More: true },
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
    { name: "Ver todos", link: "/underware", More: true },
  ];
  const underwear = [
    { name: "Meias", link: "/Meias" },
    { name: "Ver todos", link: "/underwear", More: true },
  ];

  const Cores = [
    {
      color: "#F00",
      link: "/underware/vermelho?initialMap=c&initialQuery=underwear&map=category-1,cor",
    },
    {
      color: "#000AF9",
      link: "/underware/azul?initialMap=c&initialQuery=underwear&map=category-1,cor",
    },
    {
      color: "#11D200",
      link: "/underware/verde?initialMap=c&initialQuery=underwear&map=category-1,cor",
    },
    {
      color: "#FFE500",
      link: "/underware/amarelo?initialMap=c&initialQuery=underwear&map=category-1,cor",
    },
    {
      color: "#800000",
      link: "/underware/bordo?initialMap=c&initialQuery=underwear&map=category-1,cor",
    },
    {
      color: "#E9E9E9",
      link: "/underware/off-white?initialMap=c&initialQuery=underwear&map=category-1,cor",
    },
    {
      color: "#727272",
      link: "/underware/cinza?initialMap=c&initialQuery=underwear&map=category-1,cor",
    },
    {
      color: "#F2EDD2",
      link: "/underware/bege?initialMap=c&initialQuery=underwear&map=category-1,cor",
    },
    {
      color: "#FFC5DA",
      link: "/underware/rosa?initialMap=c&initialQuery=underwear&map=category-1,cor",
    },
    {
      color: "#4F73A2",
      link: "/underware/jeans?initialMap=c&initialQuery=underwear&map=category-1,cor",
    },
    {
      color: "#000",
      link: "/underware/preto?initialMap=c&initialQuery=underwear&map=category-1,cor",
    },
    {
      color: "#D69A3A",
      link: "/underware/laranja?initialMap=c&initialQuery=underwear&map=category-1,cor",
    },
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
