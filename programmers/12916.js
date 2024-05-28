// https://school.programmers.co.kr/learn/courses/30/lessons/12916

function solution(s) {
  return (
    s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length
  );
}
