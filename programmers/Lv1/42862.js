//* 체육복 https://school.programmers.co.kr/learn/courses/30/lessons/42862

function solution(n, lost, reserve) {
    // 본인이 여벌 체육복을 가지고 있는 경우를 우선 제외
    let filteredLost = lost.filter(num => !reserve.includes(num)).sort((a, b) => a - b);
    let filteredReserve = new Set(reserve.filter(num => !lost.includes(num)));

    let lostCount = 0;

    for (let student of filteredLost) {
        if (filteredReserve.has(student - 1)) {
            filteredReserve.delete(student - 1);
        } else if (filteredReserve.has(student + 1)) {
            filteredReserve.delete(student + 1);
        } else {
            lostCount++; // 체육복을 빌리지 못한 경우
        }
    }

    return n - lostCount;
}

// 최종 시간복잡도 : O(m log m) (정렬) + O(m) = O(m log m)