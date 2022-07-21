import PropTypes from 'prop-types';
import React from 'react';
import s from "./Section.module.css"

const Section = ({ title, children }) => {
  return (
    <section className={s.section}>
        {title &&
      <h2>{title}</h2>}
      {children}
    </section>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any.isRequired
};
