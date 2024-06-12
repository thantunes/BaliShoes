import style from "./components/MegaMenu/index.css";

export default function InfantilMegaMenu() {
  const Acess = [
    { name: "Bolsas", link: "/bolsa/infantil?_q=bolsa&fuzzy=0&initialMap=ft&initialQuery=bolsa&map=ft,genero&operator=and&order=OrderByReleaseDateDESC" },
    { name: "Bonés", link: "/bones/infantil?_q=bones&fuzzy=0&initialMap=ft&initialQuery=bones&map=ft,genero&operator=and&order=OrderByReleaseDateDESC" },
    { name: "Bucket/Cata Ovo", link: "/bucket/infantil?_q=bucket&fuzzy=0&initialMap=ft&initialQuery=bucket&map=ft,genero&operator=and&order=OrderByReleaseDateDESC" },
    { name: "Chinelos", link: "/chinelos/infantil?_q=chinelos&fuzzy=0&initialMap=ft&initialQuery=chinelos&map=ft,genero&operator=and&order=OrderByReleaseDateDESC" },
    { name: "Gorros/Toucas", link: "/touca/infantil?_q=touca&fuzzy=0&initialMap=ft&initialQuery=touca&map=ft,genero&operator=and&order=OrderByReleaseDateDESC" },
    { name: "Meias", link: "/meias/infantil?fuzzy=0&initialMap=ft&initialQuery=Meias&map=ft,genero&operator=and&order=OrderByReleaseDateDESC" },
    { name: "Mochilas", link: "/mochilas/infantil?_q=mochilas&fuzzy=0&initialMap=ft&initialQuery=mochilas&map=ft,genero&operator=and&order=OrderByReleaseDateDESC" },
    { name: "Pochetes", link: "/pochetes/infantil?_q=pochetes&fuzzy=0&initialMap=ft&initialQuery=pochetes&map=ft,genero&operator=and&order=OrderByReleaseDateDESC" },
    { name: "Óculos", link: "/oculos/infantil?_q=oculos&fuzzy=0&initialMap=ft&initialQuery=oculos&map=ft,genero&operator=and&order=OrderByReleaseDateDESC" },
    { name: "Shoulder Bag", link: "/shoulder-bag/infantil?_q=shoulder-bag&fuzzy=0&initialMap=ft&initialQuery=shoulder-bag&map=ft,genero&operator=and&order=OrderByReleaseDateDESC" },
    { name: "Ver todos", link: "/acessorios/infantil?initialMap=c&initialQuery=acessorios&map=category-1,genero", More: true },
  ];
  const Roupas = [
    { name: "Camisetas", link: "/camisetas/infantil?_q=camisetas&fuzzy=0&initialMap=ft&initialQuery=camisetas&map=ft,genero&operator=and&order=OrderByReleaseDateDESC" },
    { name: "Moletons", link: "/moletons/infantil?_q=moletons&fuzzy=0&initialMap=ft&initialQuery=moletons&map=ft,genero&operator=and&order=OrderByReleaseDateDESC" },
    { name: "Conjuntos", link: "/conjuntos/infantil?_q=conjuntos&fuzzy=0&initialMap=ft&initialQuery=conjuntos&map=ft,genero&operator=and&order=OrderByReleaseDateDESC" },
    { name: "Ver todos", link: "/infantil", More: true },
    { name: "Bermudas", link: "/bermudas/infantil?_q=bermudas&fuzzy=0&initialMap=ft&initialQuery=bermudas&map=ft,genero&operator=and&order=OrderByReleaseDateDESC" },
    { name: "Saias", link: "/saias/infantil?_q=saias&fuzzy=0&initialMap=ft&initialQuery=saias&map=ft,genero&operator=and&order=OrderByReleaseDateDESC" },
    { name: "Ofertas", link: "/infantil/ofertas?fuzzy=auto&initialMap=ft&initialQuery=ofertas&map=genero,ft&operator=and&order=OrderByReleaseDateDESC", Offer: true },
  ];
  const underwear = [
    { name: "Top", link: "/top/infantil?_q=top&fuzzy=0&initialMap=ft&initialQuery=top&map=ft,genero&operator=and&order=OrderByReleaseDateDESC" },
    { name: "Cuecas", link: "/cuecas/infantil?_q=cuecas&fuzzy=0&initialMap=ft&initialQuery=cuecas&map=ft,genero&operator=and&order=OrderByReleaseDateDESC" },
    { name: "Meias", link: "/meias/infantil?_q=meias&fuzzy=0&initialMap=ft&initialQuery=meias&map=ft,genero&operator=and&order=OrderByReleaseDateDESC" },
    { name: "Ver todos", link: "/underwear/infantil?O=OrderByReleaseDateDESC&PS=48&initialMap=c&initialQuery=underwear&map=category-1,genero", More: true },
  ];
  const Tamanhos = [
    {
      name: "28",
      link: "/infantil/28?initialMap=c&initialQuery=infantil&map=category-1,tamanho&order=OrderByReleaseDateDESC",
    },
    {
      name: "29",
      link: "/infantil/29?initialMap=c&initialQuery=infantil&map=category-1,tamanho&order=OrderByReleaseDateDESC",
    },
    {
      name: "30",
      link: "/infantil/30?initialMap=c&initialQuery=infantil&map=category-1,tamanho&order=OrderByReleaseDateDESC",
    },
    {
      name: "31",
      link: "/infantil/31?initialMap=c&initialQuery=infantil&map=category-1,tamanho&order=OrderByReleaseDateDESC",
    },
    {
      name: "33",
      link: "/infantil/33?initialMap=c&initialQuery=infantil&map=category-1,tamanho&order=OrderByReleaseDateDESC",
    },
    {
      name: "34",
      link: "/infantil/34?initialMap=c&initialQuery=infantil&map=category-1,tamanho&order=OrderByReleaseDateDESC",
    },
    {
      name: "35",
      link: "/infantil/35?initialMap=c&initialQuery=infantil&map=category-1,tamanho&order=OrderByReleaseDateDESC",
    },
    {
      name: "36",
      link: "/infantil/36?initialMap=c&initialQuery=infantil&map=category-1,tamanho&order=OrderByReleaseDateDESC",
    },
    {
      name: "37",
      link: "/infantil/37?initialMap=c&initialQuery=infantil&map=category-1,tamanho&order=OrderByReleaseDateDESC",
    },
    {
      name: "38",
      link: "/infantil/38?initialMap=c&initialQuery=infantil&map=category-1,tamanho&order=OrderByReleaseDateDESC",
    },
    {
      name: "39",
      link: "/infantil/39?initialMap=c&initialQuery=infantil&map=category-1,tamanho&order=OrderByReleaseDateDESC",
    },
  ];
  const Tamanhos2 = [
    {
      name: "02",
      link: "/infantil/02?initialMap=c&initialQuery=infantil&map=category-1,tamanho&order=OrderByReleaseDateDESC",
    },
    {
      name: "04",
      link: "/infantil/04?initialMap=c&initialQuery=infantil&map=category-1,tamanho&order=OrderByReleaseDateDESC",
    },
    {
      name: "06",
      link: "/infantil/06?initialMap=c&initialQuery=infantil&map=category-1,tamanho&order=OrderByReleaseDateDESC",
    },
    {
      name: "08",
      link: "/infantil/08?initialMap=c&initialQuery=infantil&map=category-1,tamanho&order=OrderByReleaseDateDESC",
    },
    {
      name: "10",
      link: "/infantil/10?initialMap=c&initialQuery=infantil&map=category-1,tamanho&order=OrderByReleaseDateDESC",
    },
    {
      name: "12",
      link: "/infantil/12?initialMap=c&initialQuery=infantil&map=category-1,tamanho&order=OrderByReleaseDateDESC",
    },
    {
      name: "14",
      link: "/infantil/14?initialMap=c&initialQuery=infantil&map=category-1,tamanho&order=OrderByReleaseDateDESC",
    },
  ];
  const Cores = [
    {
      color: "#F00",
      link: "/infantil/vermelho?fuzzy=0&initialMap=ft&initialQuery=Infantil&map=ft,cor&operator=and&order=OrderByReleaseDateDESC",
    },
    {
      color: "#000AF9",
      link: "/infantil/azul?fuzzy=0&initialMap=ft&initialQuery=Infantil&map=ft,cor&operator=and&order=OrderByReleaseDateDESC",
    },
    {
      color: "#11D200",
      link: "/infantil/verde?fuzzy=0&initialMap=ft&initialQuery=Infantil&map=ft,cor&operator=and&order=OrderByReleaseDateDESC",
    },
    {
      color: "#FFE500",
      link: "/infantil/amarelo?fuzzy=0&initialMap=ft&initialQuery=Infantil&map=ft,cor&operator=and&order=OrderByReleaseDateDESC",
    },
    {
      color: "#800000",
      link: "/infantil/bordo?fuzzy=0&initialMap=ft&initialQuery=Infantil&map=ft,cor&operator=and&order=OrderByReleaseDateDESC",
    },
    {
      color: "#E9E9E9",
      link: "/infantil/off-white?fuzzy=0&initialMap=ft&initialQuery=Infantil&map=ft,cor&operator=and&order=OrderByReleaseDateDESC",
    },
    {
      color: "#727272",
      link: "/infantil/cinza?fuzzy=0&initialMap=ft&initialQuery=Infantil&map=ft,cor&operator=and&order=OrderByReleaseDateDESC",
    },
    {
      color: "#F2EDD2",
      link: "/infantil/bege?fuzzy=0&initialMap=ft&initialQuery=Infantil&map=ft,cor&operator=and&order=OrderByReleaseDateDESC",
    },
    {
      color: "#FFC5DA",
      link: "/infantil/rosa?fuzzy=0&initialMap=ft&initialQuery=Infantil&map=ft,cor&operator=and&order=OrderByReleaseDateDESC",
    },
    {
      color: "#4F73A2",
      link: "/infantil/jeans?fuzzy=0&initialMap=ft&initialQuery=Infantil&map=ft,cor&operator=and&order=OrderByReleaseDateDESC",
    },
    {
      color: "#000",
      link: "/infantil/preto?fuzzy=0&initialMap=ft&initialQuery=Infantil&map=ft,cor&operator=and&order=OrderByReleaseDateDESC",
    },
    {
      color: "#D69A3A",
      link: "/infantil/laranja?fuzzy=0&initialMap=ft&initialQuery=Infantil&map=ft,cor&operator=and&order=OrderByReleaseDateDESC",
    },
  ];
  return (
    <div className={style.ContainerMenuMain}>
      <div className={`${style.ContainerMegaMenu} ${style.ContainerRoupaInf} ${style.ContainerRoupaInfantil}`}>
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
