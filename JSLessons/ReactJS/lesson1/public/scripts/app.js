"use strict";

var root = document.querySelector('#root');
var temp = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
  style: {
    'color': 'red',
    'background-color': 'green'
  }
}, "Hello react"), /*#__PURE__*/React.createElement("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat enim quasi tenetur quod at recusandae corrupti tempora ipsam. Asperiores assumenda repellendus ab vitae facilis numquam? Ullam error vero quas deleniti!"));
ReactDOM.render(temp, root);
