import React from 'react';

const list = ['Sam Smith','Tarah Forsyth', 'Ricahrd Tomkins', 'Tony Russo', 'Alyssa Marist', 'Ron Samson']

export const ContentRight: React.FunctionComponent = () : JSX.Element => {
  return (
    <section className="content__right">
      <div className="social">
        <div className="friends">
          {list.map(friend => (
            <div className="friend" key={friend}>
              <i className="fas fa-user"></i>
              <span>{friend}</span>
            </div>
          ))}
        </div>
        <button className="btn-rounded find-friends">
          Find friends
        </button>
      </div>
    </section>
  )
}