import React from 'react';
import './InterviewerList.scss';
import InterviewerListItem from './InterviewerListItem.js';
import PropTypes from 'prop-types';

export default function InterviewerList(props) {
  // Dynamically render interviewers data
  const interviewersData = props.interviewers.map(interviewer => (
    <InterviewerListItem
      key={interviewer.id}
      name={interviewer.name}
      avatar={interviewer.avatar}
      selected={props.value === interviewer.id}
      setInterviewer={() => props.onClick(interviewer.id)}
    />
  ));
  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{interviewersData}</ul>
    </section>
  );
}

// Type check for array
InterviewerList.propTypes = {
  interviewers: PropTypes.array.isRequired,
};
