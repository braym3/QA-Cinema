const ModerationII = (comment) => {
  const Filter = require("badwords-filter");
  const config = {
    list: ["crap", "arse", "vaffanculo"],
    cleanWith: "$",
    useRegex: false,
  };
  const filter = new Filter(config);

  return filter.isUnclean(comment);
};

export default ModerationII;
