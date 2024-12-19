import React, { useEffect, useState } from "react";
import "./index.global.css";

const SKUSelector = (props) => {
  const [loading, setLoading] = useState("none");

  // Função para remover itens duplicados com base na variação após o "--"
  const removeDuplicateVariations = () => {
    // Seleciona todas as listas de opções
    const optionsLists = document.querySelectorAll(".vtex-store-components-3-x-skuSelectorOptionsList");

    if (!optionsLists.length) {
      console.warn("Nenhuma optionsList encontrada.");
      return;
    }

    optionsLists.forEach((optionsList) => {
      const skuItems = optionsList.querySelectorAll(".vtex-store-components-3-x-skuSelectorItem");
      const seenVariations = new Set();

      skuItems.forEach((item) => {
        const classes = Array.from(item.classList);
        const variation = classes.find((className) => className.includes("--"))?.split("--")[1];

        if (variation) {
          if (seenVariations.has(variation)) {
            // Remove o item duplicado
            console.log(`Removendo item com variação duplicada: ${variation}`);
            item.remove();
          } else {
            // Adiciona a variação ao Set
            seenVariations.add(variation);
            console.log(`Mantendo item com variação: ${variation}`);
          }
        } else {
          console.warn("Variação não encontrada em um item:", item);
        }
      });
    });
  };

  useEffect(() => {
    const skuSelectorItems = document.querySelectorAll(
      ".vtex-store-components-3-x-skuSelectorSubcontainer--cor .vtex-store-components-3-x-skuSelectorItem"
    );
    const seenClasses = new Set();

    // console.log({ skuSelectorItems, seenClasses });

    skuSelectorItems.forEach((item) => {
      const classes = Array.from(item.classList);

    //   console.log({ item });

      const newClasses = classes.filter(
        (className) =>
          className.includes("--") && !className.includes("selected")
      );
      let keepItem = false;

    //   console.log({ classes, newClasses });
      newClasses.forEach((className) => {
        if (!seenClasses.has(className) && !keepItem) {
        //   console.log({ seenClasses, className });

          seenClasses.add(className);
          keepItem = true;
        }
      });
    });

    removeDuplicateVariations();
    setLoading("block");
  }, []);

  return <div style={{ display: loading }}>{props.children}</div>;
};

export { SKUSelector };
