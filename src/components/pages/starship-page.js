import React, { useState } from "react";

import ErrorBounary from "../error-boundary";
import { Row } from "../row";
import { StarshipList, StarshipDetails } from "../SW-components/";

export const StarshipPage = () => {
  const [selectedItem, setSelectedItem] = useState(5);

  const onItemSelected = (id) => {
    setSelectedItem(id);
  };

  return (
    <>
      <Row
        left={
          <ErrorBounary>
            <StarshipList onItemSelected={onItemSelected} />
          </ErrorBounary>
        }
        right={
          <ErrorBounary>
            <StarshipDetails id={selectedItem} />
          </ErrorBounary>
        }
      />
    </>
  );
};
