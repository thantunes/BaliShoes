import style from "./components/MegaMenu/index.css";

export default function AcessMegaMenu() {
  const Acess = [
    { name: "Bolsas", link: "/bolsas?_q=bolsas&map=ft&order=OrderByReleaseDateDESC" },
    { name: "Bonés", link: "/bones?_q=bones&map=ft&order=OrderByReleaseDateDESC" },
    { name: "Bucket", link: "/bucket?_q=bucket&map=ft&order=OrderByReleaseDateDESC" },
    { name: "Carteiras", link: "/carteiras?_q=carteiras&map=ft&order=OrderByReleaseDateDESC" },
    { name: "Gorros", link: "/acessorios/toucas" },
    { name: "Mochilas", link: "/acessorios/mochilas?order=OrderByReleaseDateDESC" },
    { name: "Pochetes", link: "/pochetes?order=OrderByReleaseDateDESC" },
    { name: "Óculos", link: "/acessorios/oculos?order=OrderByReleaseDateDESC" },
    { name: "Shoulder Bags", link: "/acessorios/Shoulder-bags" },
    { name: "Relógios", link: "/acessorios/relogios" },
    {
      name: "Ver todos",
      link: "/acessorios?&order=OrderByReleaseDateDESC",
      More: true,
    },
  ];
  const Cores = [
    {
      color: "#F00",
      link: "/acessorios/vermelho?initialMap=c&initialQuery=acessorios&map=category-1,cor&order=OrderByReleaseDateDESC",
    },
    {
      color: "#000AF9",
      link: "/acessorios/azul?initialMap=c&initialQuery=acessorios&map=category-1,cor&order=OrderByReleaseDateDESC",
    },
    {
      color: "#11D200",
      link: "/acessorios/verde?initialMap=c&initialQuery=acessorios&map=category-1,cor&order=OrderByReleaseDateDESC",
    },
    {
      color: "#FFE500",
      link: "/acessorios/amarelo?initialMap=c&initialQuery=acessorios&map=category-1,cor&order=OrderByReleaseDateDESC",
    },
    {
      color: "#800000",
      link: "/acessorios/bordo?initialMap=c&initialQuery=acessorios&map=category-1,cor&order=OrderByReleaseDateDESC",
    },
    {
      color: "#E9E9E9",
      link: "/acessorios/off-white?initialMap=c&initialQuery=acessorios&map=category-1,cor&order=OrderByReleaseDateDESC",
    },
    {
      color: "#727272",
      link: "/acessorios/cinza?initialMap=c&initialQuery=acessorios&map=category-1,cor&order=OrderByReleaseDateDESC",
    },
    {
      color: "#F2EDD2",
      link: "/acessorios/bege?initialMap=c&initialQuery=acessorios&map=category-1,cor&order=OrderByReleaseDateDESC",
    },
    {
      color: "#FFC5DA",
      link: "/acessorios/rosa?initialMap=c&initialQuery=acessorios&map=category-1,cor&order=OrderByReleaseDateDESC",
    },
    {
      color: "#4F73A2",
      link: "/acessorios/jeans?initialMap=c&initialQuery=acessorios&map=category-1,cor&order=OrderByReleaseDateDESC",
    },
    {
      color: "#000",
      link: "/acessorios/preto?initialMap=c&initialQuery=acessorios&map=category-1,cor&order=OrderByReleaseDateDESC",
    },
    {
      color: "#D69A3A",
      link: "/acessorios/laranja?initialMap=c&initialQuery=acessorios&map=category-1,cor&order=OrderByReleaseDateDESC",
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
