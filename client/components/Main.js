// @flow
import React from 'react';

const Main = function MainKappa() {
  return (
    <div className="jumbotron text-center col-sm-8 col-sm-offset-2">
      <div className="container">
        <p>Enter a City and State</p>
        <form className="form row col-sm-4 col-sm-offset-4" role="search">
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Search" />
          </div>
          <button type="submit" className="btn btn-success">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Main;
