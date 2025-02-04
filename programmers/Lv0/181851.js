//* 전국 대회 선발 고사. https://school.programmers.co.kr/learn/courses/30/lessons/181851

function solution(rank, attendance) {
    // 참가 가능한 학생들의 (순위, 인덱스) 배열 생성
    const eligible = rank
        .map((r, i) => ({ rank: r, index: i })) // 객체 배열 생성
        .filter(({ index }) => attendance[index]) // 참가 가능한 학생만 필터링
        .sort((a, b) => a.rank - b.rank); // 순위 기준 오름차순 정렬

    // 상위 3명의 인덱스 추출
    const [a, b, c] = eligible.slice(0, 3);

    return 10000 * a.index + 100 * b.index + c.index;
}

/**
 * map: O(n)
 * filter: O(n)
 * sort: O(n log n)
 * slice: O(1)
 * 최종 시간 복잡도 : O(n log n)
 */