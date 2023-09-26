import { useSelector } from 'react-redux'


export default function JsonCode() {
  const { comments } = useSelector((state) => state.table)
  return (
    <>
      <div>
        {JSON.stringify(comments, null, 2)}
      </div>
    </>
  );
}
