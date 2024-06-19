// https://school.programmers.co.kr/learn/courses/30/lessons/12947

function solution(x) {
  const numStr = x.toString();
  let sum = 0;

  for (let i = 0; i < numStr.length; i++) {
    sum += parseInt(numStr[i]);
  }

  if (x % sum === 0) {
    return true;
  } else {
    return false;
  }
}
