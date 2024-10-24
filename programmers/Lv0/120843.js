//* 공 던지기 https://school.programmers.co.kr/learn/courses/30/lessons/120843

function solution(numbers, k) {
    // (k-1)번 던진 후의 인덱스: (2 * (k - 1)) % numbers.length
    const index = (2 * (k - 1)) % numbers.length;
    return numbers[index];
}

// (k-1) : 던지기 횟수를 0부터 시작하도록 인덱스 조정
// 2 * (k-1) : 한 번 던질 때마다 두 명씩 건너뛰고 공을 던짐
// % numbers.length : 순환 배열 처리