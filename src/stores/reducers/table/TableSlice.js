import { createSlice } from "@reduxjs/toolkit";

export const tableSlice = createSlice({
  name: "table",
  initialState: {
    comments: [],
    filteredComments: [],
    paginatedComments: [],
    fieldsOfTable: ["postId", "id", "name", "email", "body", "link"],
    currentPage: 1,
    filter: "",
    error: "",
    isLoading: false,
  },
  reducers: {
    commentsFetching(state) {
      state.isLoading = true;
    },

    commentsFetchingSuccess(state, action) {
      state.isLoading = false;
      state.error = "";
      state.comments = action.payload;
    },

    commentsFetchingFailed(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    filterComments(state, action) {
      state.filter = action.payload;
      state.filteredComments = state.comments.filter((comment) =>
        comment.name.slice(0, state.filter.length).toLowerCase() === state.filter.toLowerCase()
      );
    },

    paginateComments(state, action) {
      const startIndex = action.payload["startIndex"];
      const endIndex = action.payload["endIndex"];
      state.paginatedComments = state.filteredComments.slice(
        startIndex,
        endIndex
      );
    },

    minusPage(state) {
      state.currentPage -= 1
    },

    plusPage(state) {
      state.currentPage += 1
    },

    setFirstPage(state) {
      state.currentPage = 1
    }
  },
});

export const {
  commentsFetching,
  commentsFetchingSuccess,
  commentsFetchingFailed,
  filterComments,
  paginateComments,
  minusPage,
  plusPage,
  setFirstPage,
} = tableSlice.actions;

export default tableSlice.reducer;
