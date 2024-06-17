import React, { useState, useEffect } from "react";

const TrustvoxContent = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return isLoaded && <div id="_trustvox_widget"></div>;
};

export default TrustvoxContent;
