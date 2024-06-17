import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Recipe from "./page/Recipe";
import About from "./page/About";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Container from "./components/container/Container";
import NotFound from "./components/error/NotFound";
import RecipeDetail from "./page/RecipeDetail";
import Category from "./page/Category";
import Favorite from "./page/Favorite";
import NetworkStatus from "./page/NetworkStatus";

const App = () => {
  return (
    <Container>
      <NetworkStatus />
      <Header />

      <section className="my-4 flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorite" element={<Favorite />} />

          <Route path="/category" element={<Category />}></Route>
          <Route path="/category/recipe" element={<Recipe />} />

          <Route path="/about" element={<About />} />

          <Route path="/details/:id" element={<RecipeDetail />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </section>

      <Footer />
    </Container>
  );
};

export default App;
