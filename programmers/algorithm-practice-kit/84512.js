//* 모음 사전 https://school.programmers.co.kr/learn/courses/30/lessons/84512

function solution(word) {
    const vowels = ['A', 'E', 'I', 'O', 'U'];
    let words = []; // 모든 단어를 저장할 배열

    function dfs(current) {
        if (current.length > 5) return; // 최대 길이 5 초과하면 종료
        words.push(current); // 단어 리스트에 추가

        for (let v of vowels) {
            dfs(current + v); // 다음 문자 추가하여 탐색
        }
    }

    dfs(""); // 빈 문자열부터 시작하여 탐색

    return words.indexOf(word); // 생성된 단어 리스트에서 word의 위치 반환
}

/*
가능한 단어의 개수는 최대 5^5 = 3125개
O(3125) ≈ O(1)
*/