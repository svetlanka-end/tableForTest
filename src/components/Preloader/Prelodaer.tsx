import classes from "./Preloader.module.css";

const Preloader = () => {
  return (
    <div className={classes.preloader}>
      <div className={classes.preloaderContainer}>
        <span className={classes.preloaderRound} />
      </div>
    </div>
  );
};

export default Preloader;
