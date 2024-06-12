import { useState, useEffect } from "react";

const MobileSearchBtn = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const searchContainer = document.querySelector(
      ".vtex-store-components-3-x-searchBarContainer"
    );

    if (open) {
      searchContainer.style.display = "block";
    } else {
      searchContainer.style.display = "none";
    }
  }, [open]);

  return (
    <div onClick={() => setOpen(!open)}>
      <img src="/arquivos/search-icon.svg" width={21} height={21} />
    </div>
  );
};

export default MobileSearchBtn;
