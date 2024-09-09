import { useEffect, useState } from "react";
import { useRuntime } from "vtex.render-runtime";

const CORRECT_COLORS = [
  "Amarelo",
  "Azul",
  "Bege",
  "Bordô",
  "Branco",
  "Caramelo",
  "Checkerboard",
  "Cinza",
  "Dourado",
  "Jeans",
  "Laranja",
  "Marrom",
  "Off White",
  "Preto",
  "Rosa",
  "Roxo",
  "Verde",
  "Vermelho",
];

const removeFilters = () => {
  const hasUpper = (str) => /[A-Z]/.test(str);
  const { route } = useRuntime();
  const path = route.canonicalPath;
  const [mobileFilterBtn, setMobileFilterBtn] = useState(false);

  useEffect(() => {
    setInterval(() => {
      var tamanhoTextoOriginal = document.querySelector(
        ".vtex-search-result-3-x-filter__container--tamanho .vtex-search-result-3-x-filterTitleSpan"
      );

      if (tamanhoTextoOriginal == null) return;

      var texto = tamanhoTextoOriginal.innerHTML;

      texto = texto.toLowerCase().replace(/\b\w/g, function (match) {
        return match.toUpperCase();
      });

      tamanhoTextoOriginal.innerHTML = texto;
    }, 500);

    const checkAndRemoveFilter = () => {
      const allColorsInsideFilter = document.querySelectorAll(
        ".vtex-search-result-3-x-filter__container--cor .vtex-search-result-3-x-filterItem"
      );

      const corFilterContainers = document.querySelectorAll(
        ".vtex-search-result-3-x-filter__container--cor"
      );

      const modeloFilter = document.querySelector(
        ".vtex-search-result-3-x-filter__container--modelo"
      );

      const sueterFilter = document.querySelector(
        ".vtex-search-result-3-x-filterItem--sueter"
      );

      if (modeloFilter) {
        if (path.includes("tenis")) {
          modeloFilter.style.display = "block";
        } else {
          modeloFilter.style.display = "none";
        }
      }

      if (sueterFilter) {
        if (path.includes("tenis")) {
          sueterFilter.style.display = "none";
        } else {
          sueterFilter.style.display = "block";
        }
      }

      if (corFilterContainers == null) return;

      corFilterContainers.forEach((corFilterContainer) => {
        const corFilterTitleSpan = corFilterContainer.querySelector(
          ".vtex-search-result-3-x-filterTitleSpan"
        );
        if (corFilterTitleSpan && corFilterTitleSpan.innerText === "COR") {
          corFilterContainer.style.display = "none";
        }
      });

      allColorsInsideFilter.forEach((color) => {
        const corFilterTitleSpan = color.querySelector(
          ".vtex-checkbox__label"
        ).innerHTML;

        if (!CORRECT_COLORS.includes(corFilterTitleSpan)) {
          color.style.display = "none";
        }
      });

      // Mobile

      const modeloFilterMobile = document.querySelector(
        ".vtex-search-result-3-x-accordionFilterContainer--modelo"
      );

      const sueterFilterMobile = document.querySelector(
        ".vtex-search-result-3-x-filterAccordionItemBox--sueter"
      );

      console.log({modeloFilterMobile, sueterFilterMobile})

      if (modeloFilterMobile) {
        if (path.includes("tenis")) {
          modeloFilterMobile.style.display = "block";
        } else {
          modeloFilterMobile.style.display = "none";
        }
      }

      if (sueterFilterMobile) {
        if (path.includes("tenis")) {
          sueterFilterMobile.style.display = "none";
        } else {
          sueterFilterMobile.style.display = "block";
        }
      }

      const interval = setInterval(() => {
        const allColorsInsideFilterMobile = document.querySelectorAll(
          ".vtex-search-result-3-x-sidebar .vtex-search-result-3-x-accordionFilterOpen--cor .vtex-search-result-3-x-filterAccordionItemBox"
        );

        if (allColorsInsideFilterMobile.length > 0) {
          console.log({ allColorsInsideFilterMobile });
          allColorsInsideFilterMobile.forEach((color) => {
            const corFilterTitleSpan = color.querySelector(
              ".vtex-checkbox__label"
            ).innerText;

            if (
              corFilterTitleSpan &&
              !CORRECT_COLORS.includes(corFilterTitleSpan)
            ) {
              color.style.display = "none";
            }
          });

          clearInterval(interval);
        }
      }, 1000);
    };

    checkAndRemoveFilter();
  }, [path]);

  return null;
};

export default removeFilters;
