import { combineReducers } from 'redux'
import { audioReducer } from 'redux-audio'

function reducerUser(state = {}, action){
  switch (action.type){
    case "NEW_USER":
    // debugger
    case "LOGIN_USER":
      return Object.assign({}, action.payload)
    //maybe save user id and current user t or false
    case "UPDATE_USER":
    debugger
      return Object.assign({}, action.payload)
    default:
      return state
  }
}

function reducerLikedArtists(state= [], action){
  switch (action.type){
    case "SAVE_LIKED_ARTISTS":
      return {...state, ...action.payload}
    default:
      return state
  }
}

function reducerSwipeArtist(state= {}, action){
  switch (action.type){
    case "SET_SWIPE_ARTIST":
      // debugger
      return state = action.payload
    default:
      return state
  }
}

function reducerSongs(state={}, action){
  switch (action.type){
    case "SAVE_SONGS":
      return {...state, songs: action.payload}
    case "PLAY":
      return {...state, songs:{playStatus: action.payload}}
    case "PAUSE":
      return {...state, songs:{playStatus: action.payload}}
    default:
      return state

  }
}

function reducerYesArtists(state={yesArtists: []}, action) {
  switch (action.type) {
    case 'YES_ARTISTS':
      return {...state, yesArtists: [...state.yesArtists, action.payload]}
    default:
      return state
  }
}

function reducerInitialArtist(state=[], action) {
  switch (action.type) {
    case 'INITIAL_ARTIST':
      return state = action.payload
    default:
      return state
  }
}


function reducerNahArtists(state=[], action) {
  switch (action.type) {
    case 'ADD_TO_NAH':
      return [...state, action.payload]
    case 'CLEAR_NAH':
      return state = action.payload
    default:
      return state
  }
}

// function reducerAudioCommand(state="", action){
//   switch(action.type) {
//     case 'PLAY':
//       return {...state, command: action.payload}
//     case 'PAUSE':
//       return {...state, command: action.payload}
//     default:
//       return state
//   }
// }
//
// function reducerAudioSrc(state="", action){
//   switch(action.type){
//     case 'CHANGE_SRC':
//       return {...state, src: action.payload}
//     default:
//       return state
//   }
// }


const rootReducer = combineReducers({user: reducerUser, likedArtists: reducerLikedArtists, swipeArtist: reducerSwipeArtist, songs: reducerSongs, initialArtist: reducerInitialArtist, yesArtists: reducerYesArtists, nahArtists: reducerNahArtists, audio: audioReducer})
// {user:{} artist{artist_spotifyId}}
// include later songs: reducerSongs, and artist: reducerArtist

export default rootReducer
