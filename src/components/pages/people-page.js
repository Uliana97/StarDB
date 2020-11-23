import React, { useState } from "react";

import ErrorBounary from "../error-boundary";
import { Row } from "../row";
import { PeopleList, PeopleDetails } from "../SW-components/";

export const PeoplePage = () => {
  const [selectedItem, setSelectedItem] = useState(2);

  const onItemSelected = (id) => {
    setSelectedItem(id);
  };

  return (
    <>
      <Row
        left={
          <ErrorBounary>
            <PeopleList onItemSelected={onItemSelected} />
          </ErrorBounary>
        }
        right={
          <ErrorBounary>
            <PeopleDetails id={selectedItem} />
          </ErrorBounary>
        }
      />
    </>
  );
};
