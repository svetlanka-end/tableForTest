import classes from "./Table.module.css";
import { getApiData } from "../../api";

import { useEffect, useState } from "react";

import FilterList from "../FilterList/FilterList";

type Props = {
  api: string;
};

function Table({ api }: Props) {
  const [dataTable, setDataTable] = useState([]);
  const [isPreloader, setIsPreloader] = useState(false);

  const handleGetApiData = () => {
    setIsPreloader(true);
    getApiData(api)
      .then((res) => res.data)
      .then((res) => {
        setDataTable(res.results);
        setIsPreloader(false);
      })
      .catch((err) => {
        console.error(err);
        setIsPreloader(false);
      });
  };

  useEffect(() => {
    handleGetApiData();
  }, [api]);

  return (
    <div className={classes.table}>
      <FilterList initialData={dataTable} isPreloader={isPreloader} />
    </div>
  );
}

export default Table;
