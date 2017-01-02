import React from 'react';

const Navbar = function NavbarKappa(props) {
  return (
    <div>
      <form onSubmit={props.handleNavSubmit} className="navbar-form" role="search">
        <div>
          <input onChange={() => console.log('TEST')} type="text" className="form-control" placeholder="Search" style={{ width: '100%' }} />
        </div>
      </form>
    </div>
  );
};
Navbar.propTypes = {
  handleNavSubmit: React.PropTypes.func,
};
// <input type="submit" value="submit" className="btn btn-success" style={{ width: '0px' }} />
// <button type="submit" className="btn btn-default">Submit</button>

export default Navbar;
