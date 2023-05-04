import PropTypes from 'prop-types';
export const Section = ({ children }) => {
  return (
    <section>
      <h1>Please leave feedback</h1>
      {children}
    </section>
  );
};
Section.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};
