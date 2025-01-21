//* 특이한 정렬 https://school.programmers.co.kr/learn/courses/30/lessons/120880

function solution(numlist, n) {
    return numlist.sort((a, b) => {
        const distanceA = Math.abs(a - n);
        const distanceB = Math.abs(b - n);

        // 거리 기준으로 정렬
        if (distanceA === distanceB) {
            return b - a; // 거리가 같으면 더 큰 수를 앞에
        }
        return distanceA - distanceB; // 거리가 가까운 순으로
    });
}

/* 
- 1 <= N <= 100 : numlist 배열의 크기
- sort 메서드의 시간복잡도는 평균적으로 O(NlogN)
- 최종 시간 복잡도 : O(NlogN), 통과 가능
*/

