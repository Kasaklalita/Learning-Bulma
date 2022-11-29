import "./App.css";
import MainNavbar from "./components/layout/MainNavbar";
import BreadCrumb from "./components/layout/BreadCrumb";
import GreetingsSection from "./components/layout/GreetingsSection";
import ProductSection from "./components/layout/ProductSection";
import RelatedProducts from "./components/layout/RelatedProducts";
import MainFooter from "./components/layout/MainFooter";

function App() {
  return (
    <div className="App">
      <MainNavbar />
      <BreadCrumb />
      <GreetingsSection />
      <ProductSection />
      <RelatedProducts />
      <MainFooter />
    </div>
  );
}

export default App;
