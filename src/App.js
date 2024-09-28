import { PRODUCTS } from "./data/products";
import { FilterableProductTable } from "./components/FilterableProductTable";

export function App() {
  return <FilterableProductTable products={PRODUCTS} />;
}
