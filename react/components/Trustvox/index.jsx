import { useEffect } from "react";

const Trustvox = () => {
  useEffect(() => {
    const script1 = document.createElement("script");
    script1.type = "text/javascript";
    script1.innerHTML = `
      var _trustvox_shelf_rate = _trustvox_shelf_rate || [];
      _trustvox_shelf_rate.push(['_storeId', '111523']);
      _trustvox_shelf_rate.push(['_productContainer', 'body']);
      _trustvox_shelf_rate.push(['_watchSubtree', true]);
    `;
    document.head.appendChild(script1);

    const script2 = document.createElement("script");
    script2.type = "text/javascript";
    script2.async = true;
    script2.src = "//rate.trustvox.com.br/widget.js";
    document.head.appendChild(script2);

    const script3 = document.createElement("script");
    script3.type = "text/javascript";
    script3.async = true;
    script3.src = "//static.trustvox.com.br/sincero/sincero.js";
    document.head.appendChild(script3);
  }, []);

  return null;
};

export default Trustvox;
