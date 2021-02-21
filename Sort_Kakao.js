// https://programmers.co.kr/learn/courses/30/lessons/17686

function solution(files) {
  const headPattern = /(\D|\s|\.|-)+/i;
  const numberPattern = /(\d)+/;

  return files.sort((a, b) => {
    if (
      headPattern.exec(a)[0].toLowerCase() !==
      headPattern.exec(b)[0].toLowerCase()
    ) {
      if (
        headPattern.exec(a)[0].toLowerCase() >
        headPattern.exec(b)[0].toLowerCase()
      ) {
        return 1;
      } else {
        return -1;
      }
    }
    if (
      parseInt(numberPattern.exec(a)[0]) !== parseInt(numberPattern.exec(b)[0])
    ) {
      return (
        parseInt(numberPattern.exec(a)[0]) - parseInt(numberPattern.exec(b)[0])
      );
    }
    return files.indexOf(a) - files.indexOf(b);
  });
}

const test1 = [
  "img12.png",
  "img10.png",
  "img02.png",
  "img1.png",
  "IMG01.GIF",
  "img2.JPG",
];
const result1 = [
  "img1.png",
  "IMG01.GIF",
  "img02.png",
  "img2.JPG",
  "img10.png",
  "img12.png",
];
const test2 = [
  "F-5 Freedom Fighter",
  "B-50 Superfortress",
  "A-10 Thunderbolt II",
  "F-14 Tomcat",
];
const result2 = [
  "A-10 Thunderbolt II",
  "B-50 Superfortress",
  "F-5 Freedom Fighter",
  "F-14 Tomcat",
];
