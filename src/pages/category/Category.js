import React, { useState, useEffect } from "react";
import Header from "../../layouts/Header/Header";
import Footer from "../../layouts/Footer/Footer";
import CategoryItems from "../../components/CategoryItems/CategoryItems";
import Pagination from "../../layouts/Pagination/Pagination";
import axios from "axios";
import Loading from "../../components/Loading/Loading";



export default (props) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(props.page || 1);
  const [pagesCount, setPagesCount] = useState(1);
  const [input, setInput] = useState("");



  useEffect(() => {
      window.scroll(0, 0)
    // fetch data
    const endpoint =
      "https://flerbo.herokuapp.com/api" +
      props.location.pathname +
      "/?page=" +
      page +
      `&limit=16`;
    axios.get(endpoint).then((result) => {
      if (result.status == 200) {
        setData(result.data.products);
        setPagesCount(result.data.pagesNumber);
      }
    });
    setInput(page);
  }, [page, props.location.pathname]);

  const increasePage = () => {
    setData([]);
    setPage(page + 1);
  };
  const decreasePage = () => {
    setData([]);
    setPage(page - 1);
  };

  const onInputChange = (event) => {
    const value = event.target.value;
    if (isNumber(value) && value <= pagesCount) {
      setInput(value);
    }
  };
  return (
    <div>
      <Header />
      <div
        style={{
          textAlign: "center",
          margin: "0 auto",
          justifyContent: "center",
        }}
      >
        {data.length ? (
          <CategoryItems data={data} />
        ) : (
          <Loading height={"700px"} />
        )}
        {data.length && (
          <Pagination
            onNextClick={increasePage}
            onPrevClick={decreasePage}
            onInputChange={onInputChange}
            pagesCount={pagesCount}
            value={input}
          />
        )}
      </div>
      <Footer />
    </div>
  );
};

const isNumber = (x) => {
  if (Number(x)) return true;
  return false;
};
