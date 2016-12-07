import {findRelatedArtist} from './SpotifyActions'
import { audioPlay } from 'redux-audio/actions'
import { audioPause } from 'redux-audio/actions'
import { audioSrc } from 'redux-audio/actions'
// artistInfo comes from SpotifyActions, findArtist function
export function storeArtist(artistInfo){
  return function(dispatch){
    dispatch({type: 'SAVE_ARTIST_INFO', payload: artistInfo})
  }
}

export function storeSongs(songs){
  return function(dispatch){
    dispatch({type: 'SAVE_SONGS', payload:songs})
  }
}

export function storeNoArtist() {
  return function(dispatch) {
    dispatch({type: 'INITIAL_ARTIST', payload: ''})
  }
}

export function storeYesArtists(artist) {
  return function(dispatch) {
    dispatch({type: 'YES_ARTISTS', payload: artist})
  }
}

// this is used on the Nah button
// make sure nahArtists is coming in as an array from state
export function getNewSwipeFromLikedAction(likedState, nahArtist, stateNahArtists){
  return function(dispatch){
debugger
      if (stateNahArtists === undefined || stateNahArtists.length > 20){
        var nahArtists = []
        dispatch({type: 'CLEAR_NAH', payload: nahArtists})
      }else{
debugger
       var nahArtists = stateNahArtists
      }

      let artists = likedState.liked_artists
      var randArtist = artists[Math.floor(Math.random()*artists.length)];
      // then finds the related artist based on random artist
      // and sets the state
      dispatch(findRelatedArtist(randArtist.artist_spotify_id, nahArtists))
      dispatch({type: 'ADD_TO_NAH', payload: nahArtist.spotify_id})
  }
}

export function removeSongsState(){
  return function(dispatch){
    dispatch({type: 'SAVE_SONGS', payload:[]})
  }
}


export function playSong(uniqueId, src){

  return function(dispatch){
    dispatch(audioPlay(uniqueId));
    dispatch(audioSrc(src));
  }
}

export function pauseSong(uniqueId, src){

  return function(dispatch){
    dispatch(audioPause(uniqueId));
    dispatch(audioSrc(src));
  }
}
