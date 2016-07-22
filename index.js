function hello(name) {
  if (Array.isArray(name)) {
    name.forEach(function(name) {
      sayHello(name);
    });
  } else {
    var name = name || "World";
      sayHello(name);
  }

  function sayHello(name) {
    console.log("Hello " + name + "!");
  }
};

module.exports = hello;
