"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var root = document.querySelector("#root"); // class infoClass{
//     sayHi(){
//         return "Hello React";
//     }
// }
// class schoolItem extends infoClass{
//     saySchool(){
//         return "Hello School";
//     }
// }
// var infoData = new schoolItem();
// console.log(infoData.sayHi());
// console.log(infoData.saySchool());

var infoData = /*#__PURE__*/function () {
  function infoData(name, year) {
    _classCallCheck(this, infoData);

    this.nameNd = name;
    this.yearNd = year;
  }

  _createClass(infoData, [{
    key: "calculateAge",
    value: function calculateAge() {
      var namest = this.nameNd;
      var age = new Date().getFullYear() - this.yearNd;
      return namest + age;
    }
  }, {
    key: "sayHi",
    value: function sayHi(item) {
      return "Hello ".concat(item);
    }
  }]);

  return infoData;
}();

var myData = new infoData('Pasha ', 2000);
console.log(myData.calculateAge());
console.log(myData.sayHi('Qaya'));
ReactDOM.render(temp, root);
