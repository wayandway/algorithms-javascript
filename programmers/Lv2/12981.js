//* 영어 끝말잇기 https://school.programmers.co.kr/learn/courses/30/lessons/12981

function solution(n, words) {
    let usedWords = new Set();
    usedWords.add(words[0]); // 첫 번째 단어는 자동 등록

    for (let i = 1; i < words.length; i++) {
        let prevWord = words[i - 1];
        let currWord = words[i];

        // 끝말잇기 규칙 위반 확인
        if (prevWord[prevWord.length - 1] !== currWord[0] || usedWords.has(currWord)) {
            let player = (i % n) + 1;  // 몇 번째 사람인지
            let turn = Math.floor(i / n) + 1; // 몇 번째 차례인지
            return [player, turn];
        }
        usedWords.add(currWord);
    }

    return [0, 0]; // 탈락자가 없을 경우
}

/*
단어를 Set에 저장 및 검색 → O(1) (평균적으로)
words 배열을 한 번 순회 → O(W) (W는 words 길이, 최대 100)
최종 시간 복잡도 → O(W) (최대 100번 순회로 충분히 빠름)
*/