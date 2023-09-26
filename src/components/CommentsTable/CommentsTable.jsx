import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import FilterTable from "./FilterTable";
import PaginateTable from "./PaginateTable";

export default function JsonTable() {
  const { paginatedComments, fieldsOfTable } = useSelector(
    (state) => state.table
  );

  function TableHead() {
    if (paginatedComments.length) {
      let colsNames = fieldsOfTable.map((name) => (
        <li className="border border-black" key={name}>
          {name}
        </li>
      ));

      return (
        <>
          <ul className="grid grid-cols-6">{colsNames}</ul>
        </>
      );
    }
  }

  function TableContent() {
    const commentsRows = paginatedComments.map((comment) => {
      const commentItems = Object.entries(comment).map((item) => {
        if (item[0] === "link") {
          return (
            <li className="break-all border border-black" key={item[1]}>
              <Link to={`${item[1]}`}>{item[1]}</Link>
            </li>
          );
        }

        return (
          <li className="break-all border border-black" key={item[1]}>
            {item[1]}
          </li>
        );
      });
      return (
        <ul className="grid grid-cols-6">{commentItems}</ul>
      );
    });
    return commentsRows;
  }

  return (
    <>
      <h1>Table</h1>
      <FilterTable />
      <TableHead />
      <TableContent />
      <PaginateTable itemsPerPage={4} />
    </>
  );
}
