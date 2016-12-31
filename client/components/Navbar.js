import React from 'react';

const Navbar = function NavbarKappa() {
  return (
    <form className="navbar-form navbar-right" role="search">
      <div className="form-group">
        <input type="text" className="form-control" placeholder="Search" />
      </div>
      <button type="submit" className="btn btn-default">Submit</button>
    </form>
  );
};

export default Navbar;