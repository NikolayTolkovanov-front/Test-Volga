import {
  commentsFetching,
  commentsFetchingSuccess,
  commentsFetchingFailed,
} from "../stores/reducers/table/TableSlice";

function setCredentials(login, password) {
  const base64Credentials = btoa(`${login}:${password}`);
  const authHeaderValue = `Basic ${base64Credentials}`;

  return authHeaderValue
}

export const getComments = () => async (dispatch) => {
  try {
    dispatch(commentsFetching());

    const url = "https://localhost:9200/comments/_search?pretty=true";
    let comments = [];
    let auth = {
      login: "admin",
      password: "admin",
    };
    const authHeaderValue = setCredentials(auth.login, auth.password);

    const query = {
      query: {
        match_all: {},
      },
    };

    let res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Authorization": authHeaderValue,
      },
      body: JSON.stringify(query),
    });

    res = await res.json();
    comments = res.hits.hits.map((el) => el["_source"]);
    for (let comment of comments) {
      comment["link"] = `/comment/${comment["id"]}`;
    }

    dispatch(commentsFetchingSuccess(comments));
  } catch (error) {
    dispatch(commentsFetchingFailed(error.message));
  }
};
