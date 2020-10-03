import React, { useState, useEffect } from 'react';
import { Box } from '@chakra-ui/core';
import { connect } from 'react-redux';
import { getCurrentGameThunk } from '../store/thunks';
import socket from '../utils/socket';

//  Displays all the players in a given room
const TheCompetition = ({ getCurrentGame, game }) => {
  const [roomPlayers, setRoomPlayers] = useState([]);

  useEffect(() => {
    getCurrentGame();
  }, []);

  //  Update the players from redux store
  useEffect(() => {
    setRoomPlayers(game.players);
  }, [game.players.length]);

  return (
    <div>
      <Box>
        <div>The Competition</div>
        <div>
          {
            roomPlayers.length
              ? roomPlayers.map((player) => <p key={player.id}>n: {player.name} id: {player.id}</p>)
              : ''
          }
        </div>
      </Box>
    </div>
  );
};

const mapStateToProps = ({ game }) => ({
  game,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrentGame: () => dispatch(getCurrentGameThunk()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TheCompetition);
