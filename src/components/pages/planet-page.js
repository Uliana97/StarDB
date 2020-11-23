import React, { useState } from "react";

import ErrorBounary from "../error-boundary";
import { Row } from "../row";
import { PlanetList, PlanetDetails } from "../SW-components/";

export const PlanetPage = () => {
  const [selectedItem, setSelectedItem] = useState(4);

  const onItemSelected = (id) => {
    setSelectedItem(id);
  };

  return (
    <>
      <Row
        left={
          <ErrorBounary>
            <PlanetList onItemSelected={onItemSelected} />
          </ErrorBounary>
        }
        right={
          <ErrorBounary>
            <PlanetDetails id={selectedItem} />
          </ErrorBounary>
        }
      />
    </>
  );
};
