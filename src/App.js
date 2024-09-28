import { PRODUCTS } from "./data/products";
import { FilterableProductTable } from "./components/FilterableProductTable";

export default function App() {
  return <FilterableProductTable products={PRODUCTS} />;
}
