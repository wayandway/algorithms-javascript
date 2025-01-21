//* 등수 매기기 https://school.programmers.co.kr/learn/courses/30/lessons/120882

function solution(score) {
    // 각 학생의 평균 점수 계산
    const averages = score.map(([eng, math]) => (eng + math) / 2);

    // 평균 점수를 기준으로 내림차순 정렬된 배열 생성
    const sortedAverages = [...averages].sort((a, b) => b - a);

    // 각 평균 점수의 등수를 매긴 배열 생성
    const ranks = averages.map(avg => sortedAverages.indexOf(avg) + 1);

    return ranks;
}

/*
입력값 N : score 배열의 길이

- 평균 점수 계산 : score의 길이가 n일 때, map 메서드는 각 학생의 평균을 계산하므로 시간복잡도는 O(n)
- 평균 점수 정렬 : sort() 메서드의 시간 복잡도는 O(nlogn).
- 등수 계산 : averages.map에서 indexOf는 최악의 경우 평균 배열에서 n번 검색하므로 O(n²)
*/