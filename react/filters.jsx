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
      const corFilterContainers = document.querySelectorAll(
        ".vtex-search-result-3-x-filter__container--cor"
      );

      const url = window.location.href;

      if (!url.includes("tenis") && !url.includes("calcados")) {
        const modeloFilter = document.querySelector(
          ".vtex-search-result-3-x-filter__container--modelo"
        );
        if (modeloFilter) {
          modeloFilter.remove();
        }
      }

      if(corFilterContainers == null) return

      corFilterContainers.forEach((corFilterContainer) => {
        const corFilterTitleSpan = corFilterContainer.querySelector(
          ".vtex-search-result-3-x-filterTitleSpan"
        );
        if (corFilterTitleSpan && corFilterTitleSpan.innerText === "COR") {
          corFilterContainer.remove();
        }
      });
    };

    // Chamar a função de verificação ao montar o componente
    checkAndRemoveFilter();
  }, []);
  return null;
};

export default removeFilters;
