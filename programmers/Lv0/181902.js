//* 문자 개수 세기 https://school.programmers.co.kr/learn/courses/30/lessons/181902

function solution(my_string) {
    const ALPHABETS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"; // O(1)
    const count = new Array(52).fill(0); // O(1)

    for (const char of my_string) { // O(N)
        let index = ALPHABETS.indexOf(char); // O(52) → O(1)
        if (index !== -1) count[index]++; // O(1)
    }

    return count; // O(1)
}

// 최종 시간 복잡도 : O(N) (문자열 길이에 비례) 
