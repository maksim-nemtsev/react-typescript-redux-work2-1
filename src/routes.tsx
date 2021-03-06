import { BrowserRouter, Route, Switch } from "react-router-dom";
import mainPage from "./pages/mainPage/mainPage";
import mapPage from "./pages/mapPage/mapPage";
import labPage from "./pages/labPage/labPage";
import homePage from "./pages/homePage/homePage";
import portfolioPage from "./pages/portfolioPage/portfolioPage";
import { CardPage } from "./pages/cardPage/cardPage";
import BlogPage from "./pages/blogPage/blogPage";

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={mapPage} />
        <Route path="/map" exact component={mapPage} />
        <Route path="/lab" exact component={labPage} />
        <Route path="/main" exact component={mainPage} />
        <Route path="/home" exact component={homePage} />
        <Route path="/portfolio" exact component={portfolioPage} />
        <Route path="/portfolio/:id" exact component={CardPage} />
        <Route path="/portfolio/:id/blog/:idBlog" exact component={BlogPage} />
      </Switch>
    </BrowserRouter>
  );
}
