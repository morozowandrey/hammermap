import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
// import ScrollToTop from './components/layout/ScrollToTop'
import Layout from "./components/layout/Layout";

import Home from "./pages/home/Home";

function App() {
  const routes = [
    {
      path: "/",
      exact: true,
      main: () => <Home />,
    },
  ];

  return (
    <Fragment>
      <Layout>
        {/* <ScrollToTop> */}
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={<route.main />} />
          ))}
        </Routes>
        {/* </ScrollToTop> */}
      </Layout>
    </Fragment>
  );
}

export default App;
