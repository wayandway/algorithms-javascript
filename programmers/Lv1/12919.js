// https://school.programmers.co.kr/learn/courses/30/lessons/12919

function solution(seoul) {
  let index = 0;

  for (word of seoul) {
    if (word === "Kim") {
      index = seoul.indexOf(word);
    }
  }

  var answer = `김서방은 ${index}에 있다`;
  return answer;
}
