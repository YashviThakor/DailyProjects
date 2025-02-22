import { useSearchParams } from "react-router-dom";
import { SearchInput } from "../components/SearchInput";

export function Home() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");

  return (
    <div>
      <h1>Home Page</h1>
      <SearchInput />
      {query && <p>Search Query: {query}</p>}
    </div>
  );
}
