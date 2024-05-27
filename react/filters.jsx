import { useEffect } from "react";
const removeFilters = () => {
  const hasUpper = (str) => /[A-Z]/.test(str);

  useEffect(() => {
    setInterval(() => {
      var tamanhoTextoOriginal = document.querySelector(
        ".vtex-search-result-3-x-filter__container--tamanho .vtex-search-result-3-x-filterTitleSpan"
      );

      var texto = tamanhoTextoOriginal.innerHTML;

      texto = texto.toLowerCase().replace(/\b\w/g, function (match) {
        return match.toUpperCase();
      });

      tamanhoTextoOriginal.innerHTML = texto;
    }, 500);

    const checkAndRemoveFilter = () => {
      // Obter a URL da página
      const url = window.location.href;

      // Verificar se a URL não contém "tenis" nem "calcados"
      if (!url.includes("tenis") && !url.includes("calcados")) {
        // Remover a div com a classe "vtex-search-result-3-x-filter__container--modelo"
        const modeloFilter = document.querySelector(
          ".vtex-search-result-3-x-filter__container--modelo"
        );
        if (modeloFilter) {
          modeloFilter.remove();
        }
      }
    };

    // Chamar a função de verificação ao montar o componente
    checkAndRemoveFilter();
  }, []);
  return null;
};

export default removeFilters;
