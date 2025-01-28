//* 문자열 정수의 합 https://school.programmers.co.kr/learn/courses/30/lessons/181849

function solution(num_str) {
    return [...num_str].reduce((sum, num) => sum + Number(num), 0);
}

// 스프레드 연산자 [...num_str]은 문자열을 배열로 변환하며, 문자열의 길이만큼 순회해야 하므로 O(n) -> n = num_str
// reduce 메소드는 배열의 각 요소를 순회하면서 합산 작업을 수행하므로 O(n) -> n = num_str
// 따라서 총 시간 복잡도는 O(n) + O(n) = O(n)