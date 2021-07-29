/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react';
import cn from 'classnames';
const DropDownList = [
  'Private Session', 'Account', 'Settings', 'Log Out'
];
type mapProps = {
  list: Array<string | number>,
  className: string
}

const DropDownMenu: React.FunctionComponent <mapProps> = ({list, className}) => {
  return (
    <ul className={className}>
      {list.map((item, i) => (
        <li key={i}>
          <button
            onClick={() => {}}
          >
            {item}
          </button>
        </li>
      ))}
    </ul>
  );
}

export const UserInfo: React.FunctionComponent = () : JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className ="user">
      <span className="user__notification">
        <i className="fas fa-bell"></i>
      </span>
      <span className="user__download">
        <i className="fas fa-download"></i>
      </span>
      <div className="user__info">
        <span className="user__info__img">
        <img src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairTheCaesar&accessoriesType=Blank&hairColor=Brown&facialHairType=MoustacheFancy&facialHairColor=Brown&clotheType=Overall&clotheColor=Gray01&eyeType=Surprised&eyebrowType=RaisedExcitedNatural&mouthType=Disbelief&skinColor=Yellow"
          alt="random avatar"
        />
        </span>
        <span className="user__name">
          Alex Fedorchenko
        </span>
      </div>
      <div className="user__actions">
        <button
          onClick={() => setIsOpen(prev => (!prev))}
          className={cn("dropdown-toggle", {
            'is-open': isOpen,
          })}
          type="button"
        >
          <span className='page-flows__flow'>
            <i className='fas fa-chevron-down'></i>
          </span>
        </button>
        {isOpen &&
        <DropDownMenu list={DropDownList} className="dropdown-list" />
        }
        
      </div>
    </div>
  );
}