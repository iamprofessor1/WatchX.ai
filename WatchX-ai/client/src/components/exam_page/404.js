import React from 'react'
const PageNotFound = () => {

  //Disable Right click
  if (document.addEventListener) {
    document.addEventListener('contextmenu', function (e) {
      e.preventDefault();
    }, false);
  }

  return (<div>
    <center>
      <h2>
        Page Not Found
        </h2>
      <small>
        <br></br>
        This action is saved .
        <br></br>
        </small>
    </center>
  </div>
  )
}

export default PageNotFound;