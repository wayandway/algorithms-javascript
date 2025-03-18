//* 소수 찾기 https://school.programmers.co.kr/learn/courses/30/lessons/42839

function solution(numbers) {
    const numSet = new Set();
    
    // 소수 판별 함수
    function isPrime(num) {
        if (num < 2) return false;
        for (let i = 2; i * i <= num; i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

    // 가능한 모든 숫자 조합 생성
    function getPermutations(arr, fixed) {
        if (arr.length) {
            for (let i = 0; i < arr.length; i++) {
                const newNum = fixed + arr[i];
                numSet.add(Number(newNum)); // Set에 추가
                const copyArr = [...arr];
                copyArr.splice(i, 1); // 선택한 숫자를 제거하고 새로운 배열 생성
                getPermutations(copyArr, newNum);
            }
        }
    }

    getPermutations([...numbers], "");

    // 소수 개수 세기
    return [...numSet].filter(isPrime).length;
}

/**
 * 숫자의 길이가 최대 7이므로, 최대 7! = 5,040개의 조합이 나올 수 있음
 * 소수 판별은 O(√n)이며, 최대 7자리 숫자는 1,000,000 이하이므로 최악의 경우에도 충분히 실행 가능
 */