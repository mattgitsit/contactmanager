import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const header = props => {
  const { branding } = props;

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
      <div className="container">
        <a href="/" className="navbar-brand">
          {branding}
        </a>

        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink exact to="/" className="nav-link">
                <i className="fas fa-home" />
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact to="/contact/add" className="nav-link">
                <i className="fas fa-plus" />
                Add
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact to="/about" className="nav-link">
                <i className="fas fa-question" />
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

header.defaultProps = {
  branding: 'My App'
};

header.propTypes = {
  branding: PropTypes.string.isRequired
};

export default header;
