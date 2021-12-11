import classes from "./Home.module.scss";

const Home = () => {
  return (
    <main className={`${classes["home"]} flex`}>
      <div className={`${classes["map"]} ${classes["home-block"]} flex`}>
        MAP
      </div>
      <div
        className={`${classes["workspace"]} ${classes["home-block"]} flex flex-column`}
      >
        WORKSPACE
      </div>
    </main>
  );
};

export default Home;
