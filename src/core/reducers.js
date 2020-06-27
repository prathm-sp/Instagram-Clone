export function feed(
  state = {
    data: null,
    fetching: false,
    fetched: false,
    errored: false,
    error: null,
  },
  action
) {
  switch (action.type) {
    case "FETCH_FEED_START":
      return {
        ...state,
        fetching: true,
        fetched: false,
        errored: false,
      };
    case "FETCH_FEED_SUCCESS":
      return {
        ...state,
        fetching: false,
        fetched: true,
        errored: false,
        data: action.payload,
      };
    case "FETCH_FEED_ERROR":
      return {
        ...state,
        fetching: false,
        fetched: false,
        errored: true,
        error: action.payload,
      };
    default:
      return state;
  }
}
 

export function stories(
  state = {
    data: null,
    fetching: false,
    fetched: false,
    errored: false,
    error: null,
  },
  action
) {
  switch (action.type) {
    case "FETCH_STORIES_START":
      return {
        ...state,
        fetching: true,
        fetched: false,
        errored: false,
      };
    case "FETCH_STORIES_SUCCESS":
      return {
        ...state,
        fetching: false,
        fetched: true,
        errored: false,
        data: action.payload,
      };
    case "FETCH_STORIES_ERROR":
      return {
        ...state,
        fetching: false,
        fetched: false,
        errored: true,
        error: action.payload,
      };
    default:
      return state;
  }
}
 


export function dm(
  state = {
    data: null,
    fetching: false,
    fetched: false,
    errored: false,
    error: null,
  },
  action
) {
  switch (action.type) {
    case "FETCH_DM_START":
      return {
        ...state,
        fetching: true,
        fetched: false,
        errored: false,
      };
    case "FETCH_DM_SUCCESS":
      return {
        ...state,
        fetching: false,
        fetched: true,
        errored: false,
        data: action.payload,
      };
    case "FETCH_DM_ERROR":
      return {
        ...state,
        fetching: false,
        fetched: false,
        errored: true,
        error: action.payload,
      };
    default:
      return state;
  }
}
 
export function user(
  state = {
    data: null,
    fetching: false,
    fetched: false,
    errored: false,
    error: null,
  },
  action
) {
  switch (action.type) {
    case "FETCH_USER_START":
      return {
        ...state,
        fetching: true,
        fetched: false,
        errored: false,
      };
    case "FETCH_USER_SUCCESS":
      return {
        ...state,
        fetching: false,
        fetched: true,
        errored: false,
        data: action.payload,
      };
    case "FETCH_USER_ERROR":
      return {
        ...state,
        fetching: false,
        fetched: false,
        errored: true,
        error: action.payload,
      };
    default:
      return state;
  }
}
 