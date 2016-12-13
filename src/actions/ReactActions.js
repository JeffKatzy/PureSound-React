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
    if (stateNahArtists === undefined || stateNahArtists.length > 20){
      var nahArtists = []
      dispatch({type: 'CLEAR_NAH', payload: nahArtists})
    }else{
       var nahArtists = stateNahArtists
    }
    let artists = likedState
    var randArtist = artists[Math.floor(Math.random() * artists.length)];
    // var randArtist = artists[Math.floor(Math.random()*likedState.liked_artists.length)];
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


export function playSong(songs, clickedSong){
  // let updatedSong = songs[i]
  // songs[i].playStatus = true
  // let updatedSongs = songs
  //   songs[i] = updatedSong
  let uniqueId = clickedSong.id
  let src = clickedSong.preview
  debugger
  return function(dispatch){
    dispatch(audioPlay(uniqueId));
    dispatch(audioSrc(src));
    dispatch({type: 'PLAY', payload: songs})
  }
}

export function pauseSong(songs){
  return function(dispatch){
    let updatedSongs = songs.map(function(song){
      song.playStatus = false
    })
    debugger
    dispatch({type: 'PAUSE', payload: updatedSongs})

    songs.map(function(song) {
        dispatch(audioPause(song.id));
        dispatch(audioSrc(song.preview));
    })
  }
}

export function logoutUser(){
  return function (dispatch) {
    dispatch({type: 'LOGOUT_USER'})
  }
}
