// https://school.programmers.co.kr/learn/courses/30/lessons/12939

function solution(s) {
  const numbers = s.split(" ").map((number) => Number(number));

  const min = Math.min(...numbers);
  const max = Math.max(...numbers);

  return `${min} ${max}`;
}
