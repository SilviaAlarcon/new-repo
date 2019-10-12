import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import NotFound from '../containers/NotFound';
import { getVideoSource } from '../actions';
import '../assets/styles/components/Player.scss';

const Player = props => {
  const { id } = props.match.params; //hace un match con los parametros que crea router
  const hasPlaying = Object.keys(props.playing).length > 0; //validación para saber si hay o no un elememto que se pueda mostrar

  useEffect(() => {
    props.getVideoSource(id)
  }, []) //si no pasamos un segundo valor, podría crearse un loop infinito de información

  return hasPlaying ? (    //condición que se ejecuta solo si hay un id 
    <div className="Player">
      <video controls autoPlay>
        <source src={props.playing.source} type='video/mp4' />
      </video>
      <div className='Player-back'>
        <button type='button' onClick={() => props.history.goBack()}>
          Regresar
        </button>

      </div>
    </div>
  ) : <NotFound />
}

const mapStateToProps = state => {
  return {
    playing: state.playing,
  }
}

const mapDispatchToProps = {
  getVideoSource,
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);