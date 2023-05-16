const ModerationII = (comment) => {
  const Filter = require("badwords-filter");
  const config = {
    list: ["test", "hello", "arse"],
    cleanWith: "$",
    useRegex: false,
  };
  const filter = new Filter(config);

  return filter.isUnclean(comment);
};

export default ModerationII;
