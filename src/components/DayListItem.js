import React, { useState } from 'react';
import './DayListItem.scss';
import classNames from 'classnames';

export default function DayListItem(props) {
  // const { name, spots, setDay, selected } = props;
  const dayClass = classNames('day-list__item', {
    'day-list__item--selected': props.selected,
    'day-list__item--full': props.spots === 0,
  });

  const formatSpots = spots => {
    if (spots === 0) return <h3 className="text--light">no spots remaining</h3>;
    if (spots === 1) return <h3 className="text--light">1 spot remaining</h3>;
    if (spots >= 2)
      return <h3 className="text--light">{props.spots} spots remaining </h3>;
  };

  return (
    <li
      className={dayClass}
      onClick={() => props.setDay(props.name)}
      selected={props.selected}
    >
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{formatSpots()}</h3>
    </li>
  );
}
