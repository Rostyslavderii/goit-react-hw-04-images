import { React, Component } from 'react';
import PropTypes from 'prop-types';

class Section extends Component {
  render() {
    const { title, children } = this.props;
    console.log(this.props);
    return (
      <>
        <section title={title}>
          {title && <h2>{title}</h2>}
          {children}
        </section>
      </>
    );
  }
}
Section.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};
export { Section };

// import React from 'react';

// class Feedback extends Component {
//   // constructor(props) {
//   //   super(props);
//   //   console.log('props', props);
//   // } not needed !!!

// }

// export default Feedback;
