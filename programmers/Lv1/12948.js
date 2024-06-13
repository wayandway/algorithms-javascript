// https://school.programmers.co.kr/learn/courses/30/lessons/12948

function solution(phone_number) {
  const backNumber = phone_number.slice(-4); // 끝에서 4자리
  const starLength = phone_number.length - 4; // 전체 길이에서 4를 뺀 값이 별의 길이
  const stars = "*".repeat(starLength); // 별을 반복해서 생성

  return `${stars}${backNumber}`; // 별과 뒷번호 결합
}
