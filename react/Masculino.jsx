import style from "./components/MegaMenu/index.css";

export default function MasculinoMegaMenu() {
  const Acess = [
    { name: "Bolsas", link: "/bolsa/masculino?_q=bolsa&fuzzy=0&initialMap=ft&initialQuery=bolsa&map=ft,genero&operator=and" },
    { name: "Bonés", link: "/bones/masculino?_q=bones&fuzzy=0&initialMap=ft&initialQuery=bones&map=ft,genero&operator=and" },
    { name: "Bucket/Cata Ovo", link: "/bucket/masculino?_q=bucket&fuzzy=0&initialMap=ft&initialQuery=bucket&map=ft,genero&operator=and" },
    { name: "Carteiras", link: "/carteiras/masculino?_q=carteiras&fuzzy=0&initialMap=ft&initialQuery=carteiras&map=ft,genero&operator=and" },
    { name: "Chinelos", link: "/chinelos/masculino?_q=chinelos&fuzzy=0&initialMap=ft&initialQuery=chinelos&map=ft,genero&operator=and" },
    { name: "Gorros/Toucas", link: "/touca/masculino?_q=touca&fuzzy=0&initialMap=ft&initialQuery=touca&map=ft,genero&operator=and" },
    { name: "Meias", link: "/meias/masculino?fuzzy=0&initialMap=ft&initialQuery=Meias&map=ft,genero&operator=and" },
    { name: "Mochilas", link: "/mochilas/masculino?_q=mochilas&fuzzy=0&initialMap=ft&initialQuery=mochilas&map=ft,genero&operator=and" },
    { name: "Pochetes", link: "/pochetes/masculino?_q=pochetes&fuzzy=0&initialMap=ft&initialQuery=pochetes&map=ft,genero&operator=and" },
    { name: "Óculos", link: "/oculos/masculino?_q=oculos&fuzzy=0&initialMap=ft&initialQuery=oculos&map=ft,genero&operator=and" },
    { name: "Shoulder Bag", link: "/shoulder-bag/masculino?_q=shoulder-bag&fuzzy=0&initialMap=ft&initialQuery=shoulder-bag&map=ft,genero&operator=and" },
    { name: "Ver todos", link: "/acessorios/masculino?initialMap=c&initialQuery=acessorios&map=category-1,genero", More: true },
  ];
  const Roupas = [
    { name: "Bolsas", link: "/bolsa/masculino?_q=bolsa&fuzzy=0&initialMap=ft&initialQuery=bolsa&map=ft,genero&operator=and" },
    { name: "Camisetas", link: "/camisetas/masculino?fuzzy=0&initialMap=ft&initialQuery=Camisetas&map=ft,genero&operator=and" },
    { name: "Blusas", link: "/blusas/masculino?fuzzy=0&initialMap=ft&initialQuery=Blusas&map=ft,genero&operator=and" },
    { name: "Jaqueta", link: "/jaqueta/masculino?fuzzy=0&initialMap=ft&initialQuery=Jaqueta&map=ft,genero&operator=and" },
    { name: "Ver todos", link: "/masculino", More: true },
    { name: "Bermudas", link: "/bermudas/masculino?fuzzy=0&initialMap=ft&initialQuery=Bermudas&map=ft,genero&operator=and" },
    { name: "Calças", link: "/calcas/masculino?fuzzy=0&initialMap=ft&initialQuery=Calcas&map=ft,genero&operator=and" },
    { name: "Conjuntos", link: "/conjuntos/masculino?fuzzy=0&initialMap=ft&initialQuery=Conjuntos&map=ft,genero&operator=and" },
    { name: "Regatas", link: "/regatas/masculino?fuzzy=0&initialMap=ft&initialQuery=Regatas&map=ft,genero&operator=and" },
    { name: "Ofertas", link: "/masculino/ofertas?fuzzy=auto&initialMap=ft&initialQuery=ofertas&map=genero,ft&operator=and", Offer: true },
  ];
  const underwear = [
    { name: "Cuecas", link: "/cuecas/masculino?fuzzy=0&initialMap=ft&initialQuery=Cuecas&map=ft,genero&operator=and" },
    { name: "Meias", link: "/meias/masculino?fuzzy=0&initialMap=ft&initialQuery=Meias&map=ft,genero&operator=and" },
    { name: "Ver todos", link: "/underwear/masculino?O=OrderByReleaseDateDESC&PS=48&initialMap=c&initialQuery=underwear&map=category-1,genero", More: true },
  ];
  const Tamanhos = [
    {
      name: "33",
      link: "/masculino/33?initialMap=c&initialQuery=masculino&map=category-1,tamanho",
    },
    {
      name: "34",
      link: "/masculino/34?initialMap=c&initialQuery=masculino&map=category-1,tamanho",
    },
    {
      name: "35",
      link: "/masculino/35?initialMap=c&initialQuery=masculino&map=category-1,tamanho",
    },
    {
      name: "36",
      link: "/masculino/36?initialMap=c&initialQuery=masculino&map=category-1,tamanho",
    },
    {
      name: "37",
      link: "/masculino/37?initialMap=c&initialQuery=masculino&map=category-1,tamanho",
    },
    {
      name: "38",
      link: "/masculino/38?initialMap=c&initialQuery=masculino&map=category-1,tamanho",
    },
    {
      name: "39",
      link: "/masculino/39?initialMap=c&initialQuery=masculino&map=category-1,tamanho",
    },
    {
      name: "40",
      link: "/masculino/40?initialMap=c&initialQuery=masculino&map=category-1,tamanho",
    },
    {
      name: "41",
      link: "/masculino/41?initialMap=c&initialQuery=masculino&map=category-1,tamanho",
    },
    {
      name: "42",
      link: "/masculino/42?initialMap=c&initialQuery=masculino&map=category-1,tamanho",
    },
    {
      name: "43",
      link: "/masculino/43?initialMap=c&initialQuery=masculino&map=category-1,tamanho",
    },
    {
      name: "44",
      link: "/masculino/44?initialMap=c&initialQuery=masculino&map=category-1,tamanho",
    },
  ];

  const Tamanhos2 = [
    {
      name: "P",
      link: "/masculino/p?initialMap=c&initialQuery=masculino&map=category-1,tamanho",
    },
    {
      name: "M",
      link: "/masculino/m?initialMap=c&initialQuery=masculino&map=category-1,tamanho",
    },
    {
      name: "G",
      link: "/masculino/g?initialMap=c&initialQuery=masculino&map=category-1,tamanho",
    },
    {
      name: "GG",
      link: "/masculino/gg?initialMap=c&initialQuery=masculino&map=category-1,tamanho",
    },
    {
      name: "36",
      link: "/masculino/36?initialMap=c&initialQuery=masculino&map=category-1,tamanho",
    },
    {
      name: "38",
      link: "/masculino/38?initialMap=c&initialQuery=masculino&map=category-1,tamanho",
    },
    {
      name: "G1",
      link: "/masculino/g1?initialMap=c&initialQuery=masculino&map=category-1,tamanho",
    },
  ];
  const Cores = [
    {
      color: "#F00",
      link: "/masculino/vermelho?fuzzy=0&initialMap=ft&initialQuery=Masculino&map=ft,cor&operator=and",
    },
    {
      color: "#000AF9",
      link: "/masculino/azul?fuzzy=0&initialMap=ft&initialQuery=Masculino&map=ft,cor&operator=and",
    },
    {
      color: "#11D200",
      link: "/masculino/verde?fuzzy=0&initialMap=ft&initialQuery=Masculino&map=ft,cor&operator=and",
    },
    {
      color: "#FFE500",
      link: "/masculino/amarelo?fuzzy=0&initialMap=ft&initialQuery=Masculino&map=ft,cor&operator=and",
    },
    {
      color: "#800000",
      link: "/masculino/bordo?fuzzy=0&initialMap=ft&initialQuery=Masculino&map=ft,cor&operator=and",
    },
    {
      color: "#E9E9E9",
      link: "/masculino/off-white?fuzzy=0&initialMap=ft&initialQuery=Masculino&map=ft,cor&operator=and",
    },
    {
      color: "#727272",
      link: "/masculino/cinza?fuzzy=0&initialMap=ft&initialQuery=Masculino&map=ft,cor&operator=and",
    },
    {
      color: "#F2EDD2",
      link: "/masculino/bege?fuzzy=0&initialMap=ft&initialQuery=Masculino&map=ft,cor&operator=and",
    },
    {
      color: "#FFC5DA",
      link: "/masculino/rosa?fuzzy=0&initialMap=ft&initialQuery=Masculino&map=ft,cor&operator=and",
    },
    {
      color: "#4F73A2",
      link: "/masculino/jeans?fuzzy=0&initialMap=ft&initialQuery=Masculino&map=ft,cor&operator=and",
    },
    {
      color: "#000",
      link: "/masculino/preto?fuzzy=0&initialMap=ft&initialQuery=Masculino&map=ft,cor&operator=and",
    },
    {
      color: "#D69A3A",
      link: "/masculino/laranja?fuzzy=0&initialMap=ft&initialQuery=Masculino&map=ft,cor&operator=and",
    },
  ];
  return (
    <div className={style.ContainerMenuMain}>
      <div className={`${style.ContainerMegaMenu} ${style.ContainerRoupaInf}`}>
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
