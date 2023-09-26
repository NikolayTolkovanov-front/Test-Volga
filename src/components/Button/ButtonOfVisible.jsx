export default function ButtonOfVisible({ onChangeVisible, value }) {

  return (
    <>
      <div>
        <button className="m-5" onClick={onChangeVisible}>{value}</button>
      </div>
    </>
  )
}