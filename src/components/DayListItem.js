import React, { useState } from 'react';
import './DayListItem.scss';
import classNames from 'classnames';

export default function DayListItem(props) {
  // const { name, spots, setDay, selected } = props;
  const dayListClass = classNames('day-list__item', {
    'day-list__item--selected': props.selected,
    'day-list__item--full': props.spots === 0,
  });

  const setDay = name => {
    console.log(name);
  };

  const renderSpots = spots => {
    if (spots === 0) return <h3 className="text--light">no spots remaining</h3>;
    if (spots === 1) return <h3 className="text--light">1 spot remaining</h3>;
    if (spots >= 2)
      return <h3 className="text--light">{props.spots} spots remaining </h3>;
  };

  return (
    <li className={dayListClass} onClick={() => setDay(props.name)}>
      <h2 className="text--regular">{props.name}</h2>
      {renderSpots(props.spots)}
    </li>
  );
}
