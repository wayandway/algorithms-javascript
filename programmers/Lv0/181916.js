//* 주사위 게임3 https://school.programmers.co.kr/learn/courses/30/lessons/181916 
// 해시맵 + 조건문

function solution(a, b, c, d) {
    const nums = [a, b, c, d];
    const countMap = new Map();

    // 각 숫자의 등장 횟수를 Map에 저장
    for (const num of nums) {
        countMap.set(num, (countMap.get(num) || 0) + 1);
    }

    const uniqueNums = [...countMap.keys()]; // 서로 다른 숫자 목록
    const sortedNums = nums.slice().sort((x, y) => x - y); // 최소값 구하기 위해 정렬

    // 1. 네 개의 숫자가 모두 같을 때 (p, p, p, p)
    if (uniqueNums.length === 1) {
        return 1111 * uniqueNums[0];
    }

    if (uniqueNums.length === 2) {
        const [p, q] = uniqueNums;
        const pCount = countMap.get(p);

        if (pCount === 3 || pCount === 1) {
            // 2. 세 개가 같은 숫자 + 나머지 하나
            const main = pCount === 3 ? p : q;
            const single = pCount === 3 ? q : p;
            return (10 * main + single) ** 2;
        } else {
            // 3. 두 개씩 같은 숫자
            return (p + q) * Math.abs(p - q);
        }
    }

    if (uniqueNums.length === 3) {
        // 4. 두 개가 같은 숫자 + 나머지 서로 다른 두 개
        for (const num of uniqueNums) {
            if (countMap.get(num) === 2) {
                const [q, r] = uniqueNums.filter((x) => x !== num);
                return q * r;
            }
        }
    }

    // 5. 네 개의 숫자가 모두 다를 때
    return sortedNums[0];
}

// 입력 크기 고정 (주사위) -> 총 시간복잡도 O(1)