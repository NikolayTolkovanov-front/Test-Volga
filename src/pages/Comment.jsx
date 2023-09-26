import { useSelector } from "react-redux";
import { useLoaderData } from "react-router-dom";

export default function Comment() {
  const id = useLoaderData();

  const currentComment = useSelector((state) =>
    state.table.paginatedComments.find((comment) => comment.id === Number(id))
  );

  return <>{currentComment && JSON.stringify(currentComment, null, 2)}</>;
}
