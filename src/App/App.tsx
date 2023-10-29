import { useState } from "react";

import Table from "@/components/Table/Table";
import classes from "./App.module.css";
import ChoiceApiButton from "@/components/ChoiceApiButton/ChoiceApiButton";

export const App = () => {
  const arrApi = [
    "https://rickandmortyapi.com/api/location",
    "https://rickandmortyapi.com/api/character",
  ];

  const [api, setApi] = useState("https://rickandmortyapi.com/api/location");
  return (
    <div className={classes.main}>
      <ChoiceApiButton arrApi={arrApi} setApi={setApi} />
      <Table api={api} />
    </div>
  );
};

export default App;
