//* 소수 만들기 https://school.programmers.co.kr/learn/courses/30/lessons/12977

function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) { // O(√m) : m은 서로 다른 세 수의 합
        if (n % i === 0) return false;
    }
    
    return true;
}

function solution(nums) {
    let count = 0;
    
    // 3개씩 조합을 구하여 합을 구하고, 그 합이 소수인지 확인
    // 3개의 숫자를 선택하는 경우의 수는 총 nC3 = n * (n - 1) * (n - 2) / 6 가지
    // 시간 복잡도는 O(n^3)
    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                const sum = nums[i] + nums[j] + nums[k];
                if (isPrime(sum)) {
                    count++;
                }
            }
        }
    }

    return count; 
}