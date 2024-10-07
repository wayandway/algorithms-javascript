//* 중앙값 구하기 https://school.programmers.co.kr/learn/courses/30/lessons/120811

function solution(arr) {
    arr.sort((a, b) => a - b);  // 배열을 오름차순으로 정렬
    let middleIndex = Math.floor(arr.length / 2);  // 가운데 인덱스 계산
    return arr[middleIndex];  // 중앙값 반환
}