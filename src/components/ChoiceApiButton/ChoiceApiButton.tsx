import { useState } from "react";
import classes from "./ChoiceApiButton.module.css";

type Props = {
  arrApi: Array<string>;
  setApi: (api: string) => void;
};

function ChoiceApiButton({ arrApi, setApi }: Props) {
  const [showChoce, setShowChoce] = useState(false);

  const handleClickApiButton = () => {
    setShowChoce(!showChoce);
  };

  const handleClickApiLink = (nameApi: string) => {
    setShowChoce(false);
    setApi(nameApi);
  };

  const classs = classes.dropdownContent + " " + (showChoce && classes.show);

  return (
    <div className={classes.dropdown}>
      <button
        onClick={() => handleClickApiButton()}
        className={classes.dropbtn}
      >
        Выбор Api
      </button>
      <div className={classs}>
        {arrApi.map((nameApi: any) => (
          <p onClick={() => handleClickApiLink(nameApi)}>{nameApi}</p>
        ))}
      </div>
    </div>
  );
}

export default ChoiceApiButton;
