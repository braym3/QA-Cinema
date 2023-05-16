import profanity from "./testprofanity.json";

const Moderation = (comment) => {
  //console.log("Censoring starting");
  //console.log(profanity.length);
  console.log();
  for (let i = 0; i < profanity.length; i++) {
    //console.log("FLi");
    let allMatches = profanity[i].match;
    let matches = [];
    let lastPipe = 0;
    for (let j = 0; j < allMatches.length; j++) {
      //console.log("FLj1");
      if ("|" === profanity[i].match.charAt(j)) {
        matches.push(allMatches.substring(lastPipe, j));
        lastPipe = j + 1;
      }
    }
    matches.push(allMatches.substring(lastPipe));
    matches.push(profanity[i].id);
    console.log(matches);
    for (let j = 0; j < matches.length; j++) {
      //console.log("FLj2");
      let asstc = comment.length - matches[j].length + 1;
      for (let k = 0; k < asstc; k++) {
        //console.log("FLk");
        let sstc = comment.substring(k, k + matches[j].length);
        if (sstc.toLowerCase() === matches[j].toLowerCase()) {
          let rude = true;
          if (profanity[i].exceptions) {
            profanity[i].exceptions.forEach((exception) => {
              //console.log("FLfe");
              const split = exception.split("*");
              const word = split[0] + sstc + split[1];
              const context = comment.substring(k - split[0].length, k + matches[j].length + split[1].length);
              if (context.toLowerCase() === word.toLowerCase()) {
                rude = false;
              }
            });
          }
          if (rude) {
            //console.log("Word was rude");
            return { inappropriate: true, flagged: sstc };
          }
        }
      }
    }
  }
  return false;
};

export default Moderation;
