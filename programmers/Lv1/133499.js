//* 옹알이(2) https://school.programmers.co.kr/learn/courses/30/lessons/133499

function solution(babbling) {
    const words = ["aya", "ye", "woo", "ma"];
    let count = 0;

    for (let word of babbling) {
        let isValid = true;

        // 연속된 같은 단어 검사
        for (const w of words) {
            if (word.includes(w + w)) {
                isValid = false;
                break;
            }
        }

        if (!isValid) continue;

        // replace 체이닝을 사용하여 모든 단어 제거
        word = word.replace(/aya/g, " ")
                   .replace(/ye/g, " ")
                   .replace(/woo/g, " ")
                   .replace(/ma/g, " ")
                   .trim();

        if (word === "") count++;
    }

    return count;
}