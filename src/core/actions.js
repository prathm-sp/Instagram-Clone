import axios from 'axios'

const baseUrl = 'http://localhost:3000' 
 
export function fetchFeed(params) {
    return (dispatch) => {
        dispatch({
            type: 'FETCH_FEED_START'
        })
        axios({
            method: 'get',
            url: `${baseUrl}/posts`
        }).then((response) => {
            dispatch({
                type: 'FETCH_FEED_SUCCESS',
                payload: response.data
            })
        }).catch((error) => {
            dispatch({
                type: 'FETCH_FEED_ERROR',
                payload: error
            })
        })
    }
} 

export function fetchStories(params) {
    return (dispatch) => {
        dispatch({
            type: 'FETCH_STORIES_START'
        })
        axios({
            method: 'get',
            url: `${baseUrl}/stories`
        }).then((response) => {
            dispatch({
                type: 'FETCH_STORIES_SUCCESS',
                payload: response.data
            })
        }).catch((error) => {
            dispatch({
                type: 'FETCH_STORIES_ERROR',
                payload: error
            })
        })
    }
} 


export function fetchDm(params) {
    return (dispatch) => {
        dispatch({
            type: 'FETCH_DM_START'
        })
        axios({
            method: 'get',
            url: `${baseUrl}/dm`
        }).then((response) => {
            dispatch({
                type: 'FETCH_DM_SUCCESS',
                payload: response.data
            })
        }).catch((error) => {
            dispatch({
                type: 'FETCH_DM_ERROR',
                payload: error
            })
        })
    }
} 


export function fetchUser(params) {
    return (dispatch) => {
        dispatch({
            type: 'FETCH_USER_START'
        })
        axios({
            method: 'get',
            url: `${baseUrl}/user`
        }).then((response) => {
            dispatch({
                type: 'FETCH_USER_SUCCESS',
                payload: response.data
            })
        }).catch((error) => {
            dispatch({
                type: 'FETCH_USER_ERROR',
                payload: error
            })
        })
    }
} 