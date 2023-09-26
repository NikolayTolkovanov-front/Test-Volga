import MyButton from "../Button/ButtonOfVisible";
import JsonCode from "../JsonCode/JsonCode";
import Table from "../CommentsTable/CommentsTable";

import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getComments } from "../../api/comments";

import "./App.css";

export default function App() {
  const { comments, isLoading, error } = useSelector((state) => state.table);
  const dispatch = useDispatch();

  const [isVisibleJsonCode, setIsVisibleJsonCode] = useState(true);
  const [isVisibleTable, setIsVisibleTable] = useState(true);

  useEffect(() => {
    dispatch(getComments());
  }, []);

  function changeVisible(value, cb) {
    cb(!value)

    if (!value) {
      dispatch(getComments());
    }
  }

  const onChangeVisibleJsonCode = () => changeVisible(isVisibleJsonCode, setIsVisibleJsonCode)
  const onChangeVisibleTable = () => changeVisible(isVisibleTable, setIsVisibleTable)


  const container = (
    <>
      <MyButton onChangeVisible={onChangeVisibleJsonCode} value={"JSON"} />
      {isVisibleJsonCode && <JsonCode />}

      <MyButton onChangeVisible={onChangeVisibleTable} value={"TABLE"} />
      {isVisibleTable && <Table />}
    </>
  );

  return (
    <>
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
      {comments.length ? container : ""}
    </>
  );
}