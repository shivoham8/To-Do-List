module.exports.getDate = function () {
  let today = new Date();

  let options = {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  };

  return today.toLocaleDateString("en-US", options);
};

module.exports.getDay = function () {
  let today = new Date();

  let options = {
    weekday: "long",
  };

  return today.toLocaleDateString("en-US", options);
};
