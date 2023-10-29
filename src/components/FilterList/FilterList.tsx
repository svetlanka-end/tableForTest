import { useEffect, useState } from "react";
import classes from "./FilterList.module.css";

import ItemTableList from "../ItemTableList/ItemTableList";
import Preloader from "../Preloader/Prelodaer";

import { compare } from "../../utils";

type Props = {
  initialData: Array<Record<string, string>>;
  isPreloader: boolean;
};

function FilterList({ initialData, isPreloader }: Props) {
  const [data, setData] = useState(initialData);
  const [names, setNames] = useState<string[]>([]);
  const [isDataReverse, setDataReverse] = useState(false);
  const [pageToShow, setPageToShow] = useState(15);

  useEffect(() => {
    setData(initialData);

    if (initialData) {
      const nameArray: string[] = [];

      for (const property in initialData[1]) {
        nameArray.push(property);
      }
      setNames(nameArray);

      setPageToShow(15);
    }
  }, [initialData]);

  const filterOnClickTitle = (name: string) => {
    const newArr = JSON.parse(JSON.stringify(initialData));

    const sortedArray = newArr.sort((a: unknown, b: unknown) =>
      compare(name, a, b)
    );

    setData(isDataReverse ? sortedArray.reverse() : sortedArray);

    setDataReverse(!isDataReverse);
  };

  const handleNextPage = () => {
    setPageToShow(pageToShow + 15);
  };

  const handleReturnPage = () => {
    setPageToShow(pageToShow - 15);
  };

  return (
    <div className={classes.listContainer}>
      {isPreloader ? (
        <Preloader />
      ) : (
        <>
          <div className={classes.titles}>
            {names?.map((name: string, index: number) => (
              <h3
                className={classes.title}
                key={index}
                onClick={() => filterOnClickTitle(name)}
              >
                {name}
              </h3>
            ))}
          </div>
          {data
            ?.map((item) => <ItemTableList key={item.id} row={item} />)
            .slice(pageToShow - 15, pageToShow)}
        </>
      )}

      {/* Пагинация вперёд и назад показывающая 15 строк на странице */}
      <div className={classes.buttonContainer}>
        {pageToShow > 15 && (
          <button className={classes.nextButton} onClick={handleReturnPage}>
            Назад
          </button>
        )}
        {pageToShow < data.length && (
          <button className={classes.returnButton} onClick={handleNextPage}>
            Дальше
          </button>
        )}
      </div>

      {/* Отображение номера текущей страницы */}
      <p className={classes.pageNumber}>
        {Math.floor(pageToShow / 15)} page of {Math.ceil(data.length / 15)}
      </p>
    </div>
  );
}

export default FilterList;
