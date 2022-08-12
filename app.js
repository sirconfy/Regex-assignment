//This function changes email address where ever it sees in in a sentence

function emailReplace(str) {
  let res = str.replace(/(\w+[?=\@]\w+\.\w+)/gim, "********");
  return res;
}

console.log(
  emailReplace(
    "I dont want my email sirconfy@gmail.com to be seen. we have another email; confidence124@yahoo.com"
  )
);
