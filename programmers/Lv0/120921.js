//* 문자열 밀기 https://school.programmers.co.kr/learn/courses/30/lessons/120921

function solution(A, B) {
    const concatenated = B + B; // B를 두 번 이어 붙여 모든 회전 상태 포함
    return concatenated.indexOf(A); // A가 포함된 위치 반환, 없으면 -1
}

/**
 * 문자열 이어붙이기: B + B는 단순히 두 문자열을 연결하므로 시간복잡도는 O(n)
 * indexOf: 문자열 검색 알고리즘은 평균적으로 O(n) (최악의 경우에도 O(n) 수준)
 * 전체 시간복잡도는 O(n)
 */