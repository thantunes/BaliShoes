import style from "./components/MegaMenu/index.css";

export default function AcessMegaMenu() {
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
    {
      name: "Ver todos",
      link: "/acessorios/underware?initialMap=c&initialQuery=acessorios&map=category-1,genero",
      More: true,
    },
  ];
  const Tamanhos = [
    {
      name: "33",
      link: "/acessorios/33?initialMap=c&initialQuery=acessorios&map=category-1,tamanho",
    },
    {
      name: "34",
      link: "/acessorios/34?initialMap=c&initialQuery=acessorios&map=category-1,tamanho",
    },
    {
      name: "35",
      link: "/acessorios/35?initialMap=c&initialQuery=acessorios&map=category-1,tamanho",
    },
    {
      name: "36",
      link: "/acessorios/36?initialMap=c&initialQuery=acessorios&map=category-1,tamanho",
    },
    {
      name: "37",
      link: "/acessorios/37?initialMap=c&initialQuery=acessorios&map=category-1,tamanho",
    },
    {
      name: "38",
      link: "/acessorios/38?initialMap=c&initialQuery=acessorios&map=category-1,tamanho",
    },
    {
      name: "39",
      link: "/acessorios/39?initialMap=c&initialQuery=acessorios&map=category-1,tamanho",
    },
    {
      name: "40",
      link: "/acessorios/40?initialMap=c&initialQuery=acessorios&map=category-1,tamanho",
    },
    {
      name: "41",
      link: "/acessorios/41?initialMap=c&initialQuery=acessorios&map=category-1,tamanho",
    },
    {
      name: "42",
      link: "/acessorios/42?initialMap=c&initialQuery=acessorios&map=category-1,tamanho",
    },
    {
      name: "43",
      link: "/acessorios/43?initialMap=c&initialQuery=acessorios&map=category-1,tamanho",
    },
    {
      name: "44",
      link: "/acessorios/44?initialMap=c&initialQuery=acessorios&map=category-1,tamanho",
    },
  ];

  const Tamanhos2 = [
    {
      name: "G1",
      link: "/acessorios/g1?initialMap=c&initialQuery=acessorios&map=category-1,tamanho",
    },
    {
      name: "G2",
      link: "/acessorios/g2?initialMap=c&initialQuery=acessorios&map=category-1,tamanho",
    },
    {
      name: "G3",
      link: "/acessorios/g3?initialMap=c&initialQuery=acessorios&map=category-1,tamanho",
    },
  ];
  const Cores = [
    {
      color: "#F00",
      link: "/acessorios/vermelho?initialMap=c&initialQuery=acessorios&map=category-1,cor",
    },
    {
      color: "#000AF9",
      link: "/acessorios/azul?initialMap=c&initialQuery=acessorios&map=category-1,cor",
    },
    {
      color: "#11D200",
      link: "/acessorios/verde?initialMap=c&initialQuery=acessorios&map=category-1,cor",
    },
    {
      color: "#FFE500",
      link: "/acessorios/amarelo?initialMap=c&initialQuery=acessorios&map=category-1,cor",
    },
    {
      color: "#800000",
      link: "/acessorios/bordo?initialMap=c&initialQuery=acessorios&map=category-1,cor",
    },
    {
      color: "#E9E9E9",
      link: "/acessorios/off-white?initialMap=c&initialQuery=acessorios&map=category-1,cor",
    },
    {
      color: "#727272",
      link: "/acessorios/cinza?initialMap=c&initialQuery=acessorios&map=category-1,cor",
    },
    {
      color: "#F2EDD2",
      link: "/acessorios/bege?initialMap=c&initialQuery=acessorios&map=category-1,cor",
    },
    {
      color: "#FFC5DA",
      link: "/acessorios/rosa?initialMap=c&initialQuery=acessorios&map=category-1,cor",
    },
    {
      color: "#4F73A2",
      link: "/acessorios/jeans?initialMap=c&initialQuery=acessorios&map=category-1,cor",
    },
    {
      color: "#000",
      link: "/acessorios/preto?initialMap=c&initialQuery=acessorios&map=category-1,cor",
    },
    {
      color: "#D69A3A",
      link: "/acessorios/laranja?initialMap=c&initialQuery=acessorios&map=category-1,cor",
    },
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
