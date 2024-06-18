import style from "./components/MegaMenu/index.css";

export default function InfantilMegaMenu() {
  const Acess = [
    { name: "Bonés", link: "/acessorios/bones" },
    { name: "Gorros/Toucas", link: "/acessorios/toucas" },
    { name: "Mochilas", link: "/mochilas?_q=mochilas&map=ft&order=OrderByReleaseDateDESC" },
    { name: "Ver todos", link: "/infantil?order=OrderByReleaseDateDESC", More: true },
  ];
  const Roupas = [
    { name: "Camisetas", link: "/camisetas/infantil?_q=camisetas&fuzzy=0&initialMap=ft&initialQuery=camisetas&map=ft,genero&operator=and&order=OrderByReleaseDateDESC" },
    { name: "Calças", link: "/infantil/calcas?order=OrderByReleaseDateDESC" },
    { name: "Shorts", link: "/bermuda/infantil?_q=bermuda&fuzzy=0&initialMap=ft&initialQuery=bermuda&map=ft,genero&operator=and" },
    { name: "Ver todos", link: "/infantil?order=OrderByReleaseDateDESC", More: true },
    { name: "Ofertas", link: "/infantil/ofertas?fuzzy=auto&initialMap=ft&initialQuery=ofertas&map=genero,ft&operator=and&order=OrderByReleaseDateDESC", Offer: true },
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
