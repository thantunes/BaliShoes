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
      {/* <img src="/arquivos/search-icon.svg" width={21} height={21} -- BLACK FRIDAY -- /> */}
      <img src="https://balishoes.vtexassets.com/assets/vtex.file-manager-graphql/images/2b4daf54-2cdc-46b8-9132-787c60bd2acc___4320369dc235a5afe41b95176b570214.png" width={21} height={21} />
    </div>
  );
};

export default MobileSearchBtn;
