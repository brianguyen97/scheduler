import React from 'react';
import './InterviewerListItem.scss';
import classNames from 'classnames';

export default function InterviewerListItem(props) {
  const { id, avatar, name, selected, setInterviewer } = props;

  const listItemClasses = classNames('interviewers__item', {
    'interviewers__item--selected': selected,
  });

  return (
    <li key={id} className={listItemClasses} onClick={setInterviewer}>
      <img className="interviewers__item-image" src={avatar} alt={name} />
      {selected && name}
    </li>
  );
}
