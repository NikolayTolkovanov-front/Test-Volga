import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { filterComments, setFirstPage } from '../../stores/reducers/table/TableSlice'

export default function FilterTable() {
  const filter = useSelector((state) => state.table.filter)
  const dispatch = useDispatch()

  function filterTable(event) {
    dispatch(filterComments(event.target.value))
  }

  useEffect(() => {
    dispatch(filterComments(filter))
    dispatch(setFirstPage())
  }, [filter])

  return (
    <>
      <div className='flex align-center my-5'>
        <p className='text-2xl'>filter</p>
        <input className='mx-5' type="text" value={filter} onInput={filterTable} />
      </div>
    </>
  )
}