import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Category from "./components/Category";
import ItemsList from "./components/ItemsList";
import { data } from "./data";
import { useState } from "react";
import { Container } from "react-bootstrap";


function App() {

  const allCategories = ["All", ...new Set(data.map(item => item.category))];

  const [dataList, setDataList] = useState(data);

  const filterByCategory = (cat) => {
    if (cat === "All") setDataList(data);
    else {
      let newArr = data.filter(item => item.category === cat);
      setDataList(newArr);
    }
  }
  const filterBySearch = (word) => {
    if (word !== "") {
      let newArr = data.filter(item => item.title === word);
      setDataList(newArr);
    }
  }

  return (
    <>

      <div >

        <NavBar searchFilter={filterBySearch} />

        <Header />

        <Container>

          <Category filteration={filterByCategory} categories={allCategories} />
          <ItemsList theItems={dataList} />

        </Container>

      </div>

    </>
  );
}

export default App;
