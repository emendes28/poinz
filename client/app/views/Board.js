import React from 'react';

import Backlog from '../components/Backlog';
import Users from '../components/Users';
import Estimation from '../components/Estimation';

const Board = ({ room, actions }) => {

  const selectedStory = room.getIn(['stories', room.get('selectedStory')]);

  return (
    <div className='board' id={room.get('roomId')}>
      <Users
        ownId={room.get('userId')}
        users={room.get('users')}
        moderatorId={room.get('moderatorId')}
        selectedStory={selectedStory}
      />
      <a href='#menu' className='menu-link'>
        <span></span>
      </a>

      <Backlog
        actions={actions}
        stories={room.get('stories')}
        selectedStory={room.get('selectedStory')}
      />

      {
        selectedStory &&
        <Estimation
          moderatorId={room.get('moderatorId')}
          ownId={room.get('userId')}
          actions={actions}
          selectedStory={selectedStory}
        />
      }
    </div>
  );
};

export default Board;
