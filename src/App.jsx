import { useState } from "react";
import { Header } from "./components/Header";
import { Outlet } from "react-router-dom"
// import { Breadcrumbs } from "./components/Breadcrumbs";
import { Footer } from "./components/Footer";

function App() {
  const [query, setQuery] = useState('');
  const [search, setSearch] = useState('');

  const handleSearch = () => {
    setSearch(query);
    setTimeout(() => {
      setQuery('');
    }, 1000)
  }

  return (
    <div className="App">
      <Header
        query={query}
        setQuery={setQuery}
        onSearch={handleSearch}
      />
      <main className="max-w-[1200px] mx-auto">
        {/* <Breadcrumbs /> */}
        <Outlet context={{ search }} />
      </main>

      <Footer />
    </div>
  )
}

export default App
