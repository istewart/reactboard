import React from 'react';

const Navbar = function NavbarKappa() {
  return (
    <div>
      <form className="navbar-form" role="search">
        <div>
          <input type="text" className="form-control" placeholder="Search" style={{width: '100%'}} />
        </div>
      </form>
    </div>
  );
};

export default Navbar;

// <button type="submit" className="btn btn-default">Submit</button>
