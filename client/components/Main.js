// @flow
import React from 'react';

const Main = function MainKappa() {
  return (
    <div className="text-center col-sm-8 well">
      <p>Enter a City and State</p>
      <form className="form" role="search">
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Search" />
        </div>
        <button type="submit" className="btn btn-success">Submit</button>
      </form>
    </div>
  );
};

export default Main;
