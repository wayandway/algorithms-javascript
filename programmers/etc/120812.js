//* 최빈값 구하기 https://school.programmers.co.kr/learn/courses/30/lessons/120812

function solution(arr) {
    const frequency = {};
    let maxCount = 0;
    let mode = null; // 최빈값
    let isMultipleModes = false;

    // 빈도 계산
    for (let num of arr) {
        frequency[num] = (frequency[num] || 0) + 1; // undefined 또는 Falsey 값이면 기본값으로 0
        if (frequency[num] > maxCount) {
            maxCount = frequency[num];
            mode = num;
            isMultipleModes = false;  // 새로운 최빈값 발견
        } else if (frequency[num] === maxCount) {
            isMultipleModes = true;  // 최빈값이 여러 개일 경우
        }
    }

    return isMultipleModes ? -1 : mode;
}