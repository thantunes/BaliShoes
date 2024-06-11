import style from "./components/MegaMenu/index.css";

export default function UnderWareMegaMenu() {
  const Acess = [
    { name: "Bolsas", link: "/bolsas?_q=bolsas&map=ft" },
    { name: "Bonés", link: "/bones?_q=bones&map=ft" },
    { name: "Bucket/Cata Ovo", link: "/bucket?_q=bucket&map=ft" },
    { name: "Carteiras", link: "/carteiras?_q=carteiras&map=ft" },
    { name: "Chinelos", link: "/chinelo?_q=chinelo&map=ft" },
    { name: "Gorros/Toucas", link: "/touca?_q=touca&map=ft" },
    { name: "Meias", link: "/meias?_q=meias&map=ft" },
    { name: "Mochilas", link: "/mochilas?_q=mochilas&map=ft" },
    { name: "Pochetes", link: "/pochetes?_q=pochetes&map=ft" },
    { name: "Óculos", link: "/oculos?_q=oculos&map=ft" },
    { name: "Shoulder Bag", link: "/shoulder-bag?_q=shoulder-bag&map=ft" },
    { name: "Ver todos", link: "/acessorios/underware?initialMap=c&initialQuery=acessorios&map=category-1,genero", More: true },
  ];
  const Roupas = [
    { name: "Blusa", link: "/blusa?_q=blusa&map=ft" },
    { name: "Camisa", link: "/camisa?_q=camisa&map=ft" },
    { name: "Regata", link: "/regata?_q=regata&map=ft" },
    { name: "Colete", link: "/colete?_q=colete&map=ft" },
    { name: "Conjunto", link: "/conjunto?_q=conjunto&map=ft" },
    { name: "Jaqueta", link: "/jaqueta?_q=jaqueta&map=ft" },
    { name: "Bermuda", link: "/bermuda?_q=bermuda&map=ft" },
    { name: "Calça", link: "/calça?_q=calça&map=ft" },
    { name: "Jogger", link: "/jogger?_q=jogger&map=ft" },
    { name: "Moletom", link: "/moletom?_q=moletom&map=ft" },
    { name: "Short", link: "/short?_q=short&map=ft" },
    { name: "Ver todos", link: "/underware", More: true },
  ];
  const underwear = [
    { name: "Meias", link: "/meias?_q=meias&map=ft" },
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
