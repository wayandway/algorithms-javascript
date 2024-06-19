// https://school.programmers.co.kr/learn/courses/30/lessons/12941

function solution(A, B) {
  var answer = 0;

  const upperArr = A.sort((a, b) => b - a);
  const lowerArr = B.sort((a, b) => a - b);

  for (let i = 0; i < A.length; i++) {
    answer += upperArr[i] * lowerArr[i];
  }

  return answer;
}
