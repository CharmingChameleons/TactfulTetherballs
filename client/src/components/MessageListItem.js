import React from 'react';

/*
  TODOS:
    style username below message
    onClick DM button, should allow DM to poster
      optimally, prepopulate DM with "re: [message text]"
    username instead of userId
*/

const MessageListItem = ({ message, user }) => {
  const el = message.username === user.username // change to userId
    ? <span className="own-message">
        <span className="meta">{message.timestamp}</span>
        <br/>
        {message.text}
      </span>
    : <span className="other-user-message">
        <span className="meta own">{message.username} - {message.timestamp}</span>
        <br />
        {message.text}
      </span>;
  return (
    <div className="message-list-item">
      {el}
    </div>
  );
};

export default MessageListItem;
