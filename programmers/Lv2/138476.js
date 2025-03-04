//* 귤 고르기 https://school.programmers.co.kr/learn/courses/30/lessons/138476

function solution(k, tangerine) {
    let countMap = new Map();
    
    // 1. 귤의 크기별 개수 세기
    for (let size of tangerine) {
        countMap.set(size, (countMap.get(size) || 0) + 1);
    }

    // 2. 개수가 많은 순으로 정렬
    let sortedCounts = [...countMap.values()].sort((a, b) => b - a);
    
    // 3. 개수가 많은 종류부터 선택
    let sum = 0;
    let kindCount = 0;
    
    for (let count of sortedCounts) {
        sum += count;
        kindCount++;
        if (sum >= k) break;
    }
    
    return kindCount;
}

/*
귤 크기 개수 세기 → O(n)
정렬 → O(m log m) (m은 고유한 귤의 종류 수)
최소 종류 선택 (반복) → O(m)
전체 시간 복잡도 → O(n + m log m)
(최악의 경우 귤의 종류가 많아도 100,000개를 넘지 않으므로 충분히 빠름)
*/