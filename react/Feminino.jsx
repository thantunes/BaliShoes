import style from "./components/MegaMenu/index.css";

export default function FemininoMegaMenu() {
  const Acess = [
    { name: "Bolsas", link: "/bolsa/feminino?_q=bolsa&fuzzy=0&initialMap=ft&initialQuery=bolsa&map=ft,genero&operator=and&order=OrderByReleaseDateDESC" },
    { name: "Bonés", link: "/bones/feminino?_q=bones&fuzzy=0&initialMap=ft&initialQuery=bones&map=ft,genero&operator=and&order=OrderByReleaseDateDESC" },
    { name: "Bucket/Cata Ovo", link: "/bucket/feminino?_q=bucket&fuzzy=0&initialMap=ft&initialQuery=bucket&map=ft,genero&operator=and&order=OrderByReleaseDateDESC" },
    { name: "Carteiras", link: "/carteiras/feminino?_q=carteiras&fuzzy=0&initialMap=ft&initialQuery=carteiras&map=ft,genero&operator=and&order=OrderByReleaseDateDESC" },
    { name: "Chinelos", link: "/chinelos/feminino?_q=chinelos&fuzzy=0&initialMap=ft&initialQuery=chinelos&map=ft,genero&operator=and&order=OrderByReleaseDateDESC" },
    { name: "Gorros/Toucas", link: "/touca/feminino?_q=touca&fuzzy=0&initialMap=ft&initialQuery=touca&map=ft,genero&operator=and&order=OrderByReleaseDateDESC" },
    { name: "Meias", link: "/meias/feminino?fuzzy=0&initialMap=ft&initialQuery=Meias&map=ft,genero&operator=and&order=OrderByReleaseDateDESC" },
    { name: "Mochilas", link: "/mochilas/feminino?_q=mochilas&fuzzy=0&initialMap=ft&initialQuery=mochilas&map=ft,genero&operator=and&order=OrderByReleaseDateDESC" },
    { name: "Pochetes", link: "/pochetes/feminino?_q=pochetes&fuzzy=0&initialMap=ft&initialQuery=pochetes&map=ft,genero&operator=and&order=OrderByReleaseDateDESC" },
    { name: "Óculos", link: "/oculos/feminino?_q=oculos&fuzzy=0&initialMap=ft&initialQuery=oculos&map=ft,genero&operator=and&order=OrderByReleaseDateDESC" },
    { name: "Shoulder Bag", link: "/shoulder-bag/feminino?_q=shoulder-bag&fuzzy=0&initialMap=ft&initialQuery=shoulder-bag&map=ft,genero&operator=and&order=OrderByReleaseDateDESC" },
    { name: "Ver todos", link: "/acessorios/feminino?initialMap=c&initialQuery=acessorios&map=category-1,genero", More: true },
  ];
  const Roupas = [
    { name: "body", link: "/body/feminino?_q=body&fuzzy=0&initialMap=ft&initialQuery=body&map=ft,genero&operator=and&order=OrderByReleaseDateDESC" },
    { name: "Blusas", link: "/blusas/feminino?_q=blusas&fuzzy=0&initialMap=ft&initialQuery=blusas&map=ft,genero&operator=and&order=OrderByReleaseDateDESC" },
    { name: "Camisetas", link: "/camisetas/feminino?_q=camisetas&fuzzy=0&initialMap=ft&initialQuery=camisetas&map=ft,genero&operator=and&order=OrderByReleaseDateDESC" },
    { name: "coletes", link: "/coletes/feminino?_q=coletes&fuzzy=0&initialMap=ft&initialQuery=coletes&map=ft,genero&operator=and&order=OrderByReleaseDateDESC" },
    { name: "Jaqueta", link: "/jaqueta/feminino?_q=jaqueta&fuzzy=0&initialMap=ft&initialQuery=jaqueta&map=ft,genero&operator=and&order=OrderByReleaseDateDESC" },
    { name: "regatas", link: "/regatas/feminino?_q=regatas&fuzzy=0&initialMap=ft&initialQuery=regatas&map=ft,genero&operator=and&order=OrderByReleaseDateDESC" },
    { name: "Ver todos", link: "/feminino", More: true },
    { name: "Conjuntos", link: "/conjuntos/feminino?_q=conjuntos&fuzzy=0&initialMap=ft&initialQuery=conjuntos&map=ft,genero&operator=and&order=OrderByReleaseDateDESC" },
    { name: "Calças", link: "/calcas/feminino?_q=calcas&fuzzy=0&initialMap=ft&initialQuery=calcas&map=ft,genero&operator=and&order=OrderByReleaseDateDESC" },
    { name: "Macacões", link: "/feminino/macacoes?_q=macacoes&fuzzy=auto&initialMap=ft&initialQuery=macacoes&map=genero,ft&operator=and&order=OrderByReleaseDateDESC" },
    { name: "Shorts", link: "/shorts/feminino?_q=shorts&fuzzy=0&initialMap=ft&initialQuery=shorts&map=ft,genero&operator=and&order=OrderByReleaseDateDESC" },
    { name: "Saias", link: "/saias/feminino?_q=saias&fuzzy=0&initialMap=ft&initialQuery=saias&map=ft,genero&operator=and&order=OrderByReleaseDateDESC" },
    { name: "Vestidos", link: "/vestidos/feminino?_q=vestidos&fuzzy=0&initialMap=ft&initialQuery=vestidos&map=ft,genero&operator=and&order=OrderByReleaseDateDESC" },
    { name: "Ofertas", link: "/feminino/ofertas?fuzzy=auto&initialMap=ft&initialQuery=ofertas&map=genero,ft&operator=and&order=OrderByReleaseDateDESC", Offer: true },
  ];
  const underwear = [
    { name: "Top", link: "/top/feminino?_q=top&fuzzy=0&initialMap=ft&initialQuery=top&map=ft,genero&operator=and&order=OrderByReleaseDateDESC" },
    { name: "Meias", link: "/meias/feminino?_q=meias&fuzzy=0&initialMap=ft&initialQuery=meias&map=ft,genero&operator=and&order=OrderByReleaseDateDESC" },
    { name: "Ver todos", link: "/underwear/feminino?O=OrderByReleaseDateDESC&PS=48&initialMap=c&initialQuery=underwear&map=category-1,genero&order=OrderByReleaseDateDESC", More: true },
  ];
  const Tamanhos = [
    {
      name: "33",
      link: "/feminino/33?initialMap=c&initialQuery=feminino&map=category-1,tamanho&order=OrderByReleaseDateDESC",
    },
    {
      name: "34",
      link: "/feminino/34?initialMap=c&initialQuery=feminino&map=category-1,tamanho&order=OrderByReleaseDateDESC",
    },
    {
      name: "35",
      link: "/feminino/35?initialMap=c&initialQuery=feminino&map=category-1,tamanho&order=OrderByReleaseDateDESC",
    },
    {
      name: "36",
      link: "/feminino/36?initialMap=c&initialQuery=feminino&map=category-1,tamanho&order=OrderByReleaseDateDESC",
    },
    {
      name: "37",
      link: "/feminino/37?initialMap=c&initialQuery=feminino&map=category-1,tamanho&order=OrderByReleaseDateDESC",
    },
    {
      name: "38",
      link: "/feminino/38?initialMap=c&initialQuery=feminino&map=category-1,tamanho&order=OrderByReleaseDateDESC",
    },
    {
      name: "39",
      link: "/feminino/39?initialMap=c&initialQuery=feminino&map=category-1,tamanho&order=OrderByReleaseDateDESC",
    },
    {
      name: "40",
      link: "/feminino/40?initialMap=c&initialQuery=feminino&map=category-1,tamanho&order=OrderByReleaseDateDESC",
    },
    {
      name: "41",
      link: "/feminino/41?initialMap=c&initialQuery=feminino&map=category-1,tamanho&order=OrderByReleaseDateDESC",
    },
    {
      name: "42",
      link: "/feminino/42?initialMap=c&initialQuery=feminino&map=category-1,tamanho&order=OrderByReleaseDateDESC",
    },
    {
      name: "43",
      link: "/feminino/43?initialMap=c&initialQuery=feminino&map=category-1,tamanho&order=OrderByReleaseDateDESC",
    },
    {
      name: "44",
      link: "/feminino/44?initialMap=c&initialQuery=feminino&map=category-1,tamanho&order=OrderByReleaseDateDESC",
    },
  ];

  const Tamanhos2 = [
    {
      name: "P",
      link: "/feminino/p?initialMap=c&initialQuery=feminino&map=category-1,tamanho&order=OrderByReleaseDateDESC",
    },
    {
      name: "M",
      link: "/feminino/m?initialMap=c&initialQuery=feminino&map=category-1,tamanho&order=OrderByReleaseDateDESC",
    },
    {
      name: "G",
      link: "/feminino/g?initialMap=c&initialQuery=feminino&map=category-1,tamanho&order=OrderByReleaseDateDESC",
    },
    {
      name: "GG",
      link: "/feminino/gg?initialMap=c&initialQuery=feminino&map=category-1,tamanho&order=OrderByReleaseDateDESC",
    },
  ];
  const Cores = [
    {
      color: "#F00",
      link: "/feminino/vermelho?fuzzy=0&initialMap=ft&initialQuery=Feminino&map=ft,cor&operator=and&order=OrderByReleaseDateDESC",
    },
    {
      color: "#000AF9",
      link: "/feminino/azul?fuzzy=0&initialMap=ft&initialQuery=Feminino&map=ft,cor&operator=and&order=OrderByReleaseDateDESC",
    },
    {
      color: "#11D200",
      link: "/feminino/verde?fuzzy=0&initialMap=ft&initialQuery=Feminino&map=ft,cor&operator=and&order=OrderByReleaseDateDESC",
    },
    {
      color: "#FFE500",
      link: "/feminino/amarelo?fuzzy=0&initialMap=ft&initialQuery=Feminino&map=ft,cor&operator=and&order=OrderByReleaseDateDESC",
    },
    {
      color: "#800000",
      link: "/feminino/bordo?fuzzy=0&initialMap=ft&initialQuery=Feminino&map=ft,cor&operator=and&order=OrderByReleaseDateDESC",
    },
    {
      color: "#E9E9E9",
      link: "/feminino/off-white?fuzzy=0&initialMap=ft&initialQuery=Feminino&map=ft,cor&operator=and&order=OrderByReleaseDateDESC",
    },
    {
      color: "#727272",
      link: "/feminino/cinza?fuzzy=0&initialMap=ft&initialQuery=Feminino&map=ft,cor&operator=and&order=OrderByReleaseDateDESC",
    },
    {
      color: "#F2EDD2",
      link: "/feminino/bege?fuzzy=0&initialMap=ft&initialQuery=Feminino&map=ft,cor&operator=and&order=OrderByReleaseDateDESC",
    },
    {
      color: "#FFC5DA",
      link: "/feminino/rosa?fuzzy=0&initialMap=ft&initialQuery=Feminino&map=ft,cor&operator=and&order=OrderByReleaseDateDESC",
    },
    {
      color: "#4F73A2",
      link: "/feminino/jeans?fuzzy=0&initialMap=ft&initialQuery=Feminino&map=ft,cor&operator=and&order=OrderByReleaseDateDESC",
    },
    {
      color: "#000",
      link: "/feminino/preto?fuzzy=0&initialMap=ft&initialQuery=Feminino&map=ft,cor&operator=and&order=OrderByReleaseDateDESC",
    },
    {
      color: "#D69A3A",
      link: "/feminino/laranja?fuzzy=0&initialMap=ft&initialQuery=Feminino&map=ft,cor&operator=and&order=OrderByReleaseDateDESC",
    },
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
