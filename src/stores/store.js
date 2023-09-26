import { configureStore } from '@reduxjs/toolkit'
import tableReducer from './reducers/table/TableSlice'

export default configureStore({
  reducer: {
    table: tableReducer
  },
})