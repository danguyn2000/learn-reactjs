import React, { useState, useEffect } from "react";
import ColorBox from "./features/ColorBox";
import TodoFeature from "./features/Todo/pages";
import "./App.css";
import Pagination from "./features/Pagination";
import queryString from "query-string";
import PostList from "./features/PostList";

function App() {
  const [postList, setPostList] = useState([]);
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 1,
  });
  const [filters, setFilters] = useState({
    _limit: 10,
    _page: 1,
  });

  useEffect(() => {
    async function fetchPostList() {
      //...
      try {
        // _limit=10&_page=1
        const paramString = queryString.stringify(filters);
        const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramString}`;
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        console.log({ responseJSON });

        const { data, pagination } = responseJSON;
        setPostList(data);
        setPagination(pagination);
      } catch (error) {
        console.log("Failed to fetch post list", error.message);
      }
    }
    fetchPostList();
  }, [filters]);

  function handlePageChange(newPage) {
    console.log("New Page: ", newPage);
    setFilters({
      ...filters,
      _page: newPage,
    });
  }
  return (
    <div className="App">
      <h1>WELCOME TO REACT HOOK</h1>
      {/* <TodoFeature /> */}
      <PostList posts={postList} />
      <Pagination pagination={pagination} onPageChange={handlePageChange} />
      {/* <ColorBox /> */}
    </div>
  );
}

export default App;
