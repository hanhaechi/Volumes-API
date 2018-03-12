
var volumes = (function() {
  function getSphere(radius) {
      var r_power_three = Math.pow(radius,3);
      var vol_sphere = 4/3 * Math.PI * r_power_three;
      return vol_sphere;
  }
  function getCone(radius, height) {
      var r_power_two = Math.pow(radius,2);
      var vol_cone = Math.PI * r_power_two * (height / 3);
      return vol_cone;
  }
  function getCylinder(radius, height) {
      var r_power_two = Math.pow(radius,2);
      var vol_cylinder = Math.PI * r_power_two * height;
      return vol_cylinder;
  }
  function getRect_prism(length, width, height) {
      var vol_prism = length * width * height;
      return vol_prism;
  }
  
  var module = {
		"getSphere": getSphere,
    "getCone": getCone,
    "getCylinder": getCylinder,
    "getRect_prism": getRect_prism
	}
	return module;
})();

exports.data = volumes;