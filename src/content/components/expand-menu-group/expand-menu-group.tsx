import React, { useState } from 'react'
import cn from 'classnames';

interface ExpandMenuGroupProps {
  title: string,
  children: React.ReactNode
}

export const ExpandMenuGroup : React.FunctionComponent<ExpandMenuGroupProps> = ({title, children}) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <button
        onClick={() => setIsOpen(prev => !prev)}
        className="dropdown-toggle"
        type="button"
      >
        <span className="navigation__list__title">{title}</span>
        <span className="navigation__list__icon">
          <i className={cn("fas", {
            'fa-chevron-down': !isOpen,
            'fa-chevron-up': isOpen
          })}></i>
        </span>
      </button>
      {isOpen && children}
    </>
  )
}