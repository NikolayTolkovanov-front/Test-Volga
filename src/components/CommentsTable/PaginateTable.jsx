import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import {
  paginateComments,
  plusPage,
  minusPage,
} from "../../stores/reducers/table/TableSlice";

export default function PaginateTable({ itemsPerPage }) {
  const dispatch = useDispatch();
  const { filteredComments, currentPage } = useSelector((state) => state.table);

  const [startIndex, setStartIndex] = useState(
    (currentPage - 1) * itemsPerPage
  );
  const [endIndex, setEndIndex] = useState(currentPage * itemsPerPage);

  useEffect(() => {
    setStartIndex((currentPage - 1) * itemsPerPage);
    setEndIndex(currentPage * itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = currentPage * itemsPerPage;

    dispatch(paginateComments({ startIndex, endIndex }));
  }, [currentPage, filteredComments]);

  function prevPage() {
    dispatch(minusPage());
  }

  function nextPage() {
    dispatch(plusPage());
  }

  return (
    <>
      <div className="my-5">
        <button disabled={!(currentPage > 1)} onClick={prevPage}>
          prev
        </button>
        <span className="mx-5">{currentPage}</span>
        <button
          disabled={!(filteredComments.length > endIndex)}
          onClick={nextPage}
        >
          next
        </button>
      </div>
    </>
  );
}
