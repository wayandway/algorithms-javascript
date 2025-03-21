//* 단어 변환 https://school.programmers.co.kr/learn/courses/30/lessons/43163

function solution(begin, target, words) {
    if (!words.includes(target)) return 0;  // target이 words에 없으면 변환 불가

    const queue = [[begin, 0]];  // [현재 단어, 변환 횟수]
    const visited = new Set();   // 방문한 단어 저장

    while (queue.length > 0) {
        const [current, steps] = queue.shift();

        if (current === target) return steps;  // 목표 단어 도달 시 반환

        for (const word of words) {
            if (!visited.has(word) && isConvertible(current, word)) {
                visited.add(word);  // 방문 처리
                queue.push([word, steps + 1]);  // 변환 횟수 증가
            }
        }
    }

    return 0;  // 변환할 수 없는 경우
}

// 한 개의 알파벳만 다른지 확인하는 함수
function isConvertible(word1, word2) {
    let count = 0;
    for (let i = 0; i < word1.length; i++) {
        if (word1[i] !== word2[i]) count++;
        if (count > 1) return false;  // 두 개 이상 다르면 변환 불가능
    }
    return count === 1;
}

// 시간복잡도 : BFS 탐색 + 모든 단어 비교 / O(N^2) (최대 50 * 50 = 2500으로 충분히 가능)