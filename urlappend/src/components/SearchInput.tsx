import { useState } from "react";
import { useSearchParams } from "react-router-dom";

export function SearchInput() {
  const [input, setInput] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const updateSearchParams = () => {
    if (input.trim() !== "") {
      setSearchParams({ query: input });
      setInput("");
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      updateSearchParams();
    }
  };

  return (
    <div className="container">
      <div className="search-box">
        <h2>Search</h2>
        <div className="input-group">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Enter a search term..."
          />
          <button onClick={updateSearchParams}>Search</button>
        </div>
        <p>Type and press <strong>Enter</strong> or click <strong>Search</strong> to update the URL.</p>
      </div>
    </div>
  );
}
