// https://school.programmers.co.kr/learn/courses/30/lessons/12924

function solution(n) {
  let answer = 0;
  const limit = Math.sqrt(2 * n + 0.25) - 0.5;

  for (let i = 1; i <= limit; i++) {
    if ((2 * n) % i === 0) {
      const j = (2 * n) / i;
      if ((j - i + 1) % 2 === 0) {
        answer++;
      }
    }
  }

  return answer;
}
