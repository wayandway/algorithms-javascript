//* 배열의 길이를 2의 거듭제곱으로 만들기 https://school.programmers.co.kr/learn/courses/30/lessons/181857
function solution(arr) {
    const len = arr.length;
    const nextPowerOfTwo = 2 ** Math.ceil(Math.log2(len)); // 가장 가까운 2의 정수 거듭제곱 구하기
    
    // 배열의 길이가 이미 2의 정수 거듭제곱이면 그대로 반환
    if (len === nextPowerOfTwo) {
        return arr;
    }
    
    // 2의 정수 거듭제곱에 맞게 0을 추가
    return [...arr, ...Array(nextPowerOfTwo - len).fill(0)];
}

// Array(nextPowerOfTwo - len) : 배열 생성은 O(nextPowerOfTwo - len) 소요
// .fill(0) : 생성된 배열을 0으로 채우는 작업으로, 시간복잡도는 O(nextPowerOfTwo - len)
// [...] : 배열 확장 연산자는 두 배열을 합치는 작업으로, O(n)
// 총 시간복잡도 : O(nextPowerOfTwo)