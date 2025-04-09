function solution(name) {
    let answer = 0;
    const n = name.length;

    // 1. 알파벳 변경 비용 계산
    for (let i = 0; i < n; i++) {
        const char = name[i];
        answer += Math.min(
            char.charCodeAt() - 'A'.charCodeAt(),
            'Z'.charCodeAt() - char.charCodeAt() + 1
        );
    }

    // 2. 커서 이동 최소화 계산
    let move = n - 1;

    for (let i = 0; i < n; i++) {
        let next = i + 1;
        // A가 연속되는 구간을 찾는다
        while (next < n && name[next] === 'A') {
            next++;
        }
        // 우회해서 돌아가는 경우 고려
        move = Math.min(move, i + i + (n - next));
        move = Math.min(move, i + 2 * (n - next));
    }

    return answer + move;
}

// 시간복잡도 O(n)