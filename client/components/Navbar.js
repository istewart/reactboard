import React from 'react';

class Navbar extends React.Component {
  constructor() {
    super();
    this.input = null;
  }

  render() {
    return (
      <form
        onSubmit={event => this.props.handleNavSubmit(event, this.input.value)}
        className="navbar-form"
        role="search"
      >
        <input
          ref={(input) => { this.input = input; }}
          type="text"
          className="form-control"
          placeholder="Search"
          style={{ width: '100%' }}
        />
      </form>
    );
  }
}

Navbar.propTypes = {
  handleNavSubmit: React.PropTypes.func,
};

export default Navbar;
