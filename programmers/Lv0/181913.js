//* 문자열 여러 번 뒤집기 https://school.programmers.co.kr/learn/courses/30/lessons/181913

function solution(my_string, queries) {
    let arr = [...my_string];

    for (let [s, e] of queries) {
        // 해당 부분을 뒤집기
        while (s < e) {
            [arr[s], arr[e]] = [arr[e], arr[s]];
            s++;
            e--;
        }
    }

    return arr.join('');
}

// 투 포인터 방식
/**
 * queries의 길이를 q, 문자열 길이를 n이라 할 때,
 * 각 쿼리에서 뒤집는 연산: O(k) (k는 뒤집는 부분의 길이)
 * 최악의 경우: O(n) (문자열 전체를 한 번 뒤집는 경우)
 * 전체 시간 복잡도: O(qn)
 */