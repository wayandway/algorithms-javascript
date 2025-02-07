//* 구명보트 https://school.programmers.co.kr/learn/courses/30/lessons/42885

function solution(people, limit) {
    people.sort((a, b) => a - b);  // 오름차순 정렬
    let count = 0;
    let left = 0, right = people.length - 1;

    while (left <= right) {
        if (people[left] + people[right] <= limit) left++;  // 두 사람을 같이 태운다
        right--;  // 가장 무거운 사람은 무조건 태운다
        count++;
    }

    return count;
}

// sort의 시간 복잡도: O(n log n)
// while 루프의 시간 복잡도: O(n)
// 전체 시간 복잡도는 O(n log n) 