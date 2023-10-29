import { useMemo } from "react";
import classes from "./ItemTableList.module.css";

type Props = {
  row: Record<string, unknown>;
};

function ItemTableList({ row }: Props) {
  const properties = useMemo(
    () =>
      Object.values(row).map((value) =>
        typeof value == "string" ? value : JSON.stringify(value)
      ),
    [row]
  );

  return (
    <div className={classes.card}>
      {properties.map((item) => (
        <p key={String(row.id)} className={classes.subtitle}>
          {item}
        </p>
      ))}
    </div>
  );
}

export default ItemTableList;
