//* 영어가 싫어요 https://school.programmers.co.kr/learn/courses/30/lessons/120894

function solution(numbers) {
    // 영어 숫자 단어와 숫자 매핑
    const numMap = {
        zero: "0",
        one: "1",
        two: "2",
        three: "3",
        four: "4",
        five: "5",
        six: "6",
        seven: "7",
        eight: "8",
        nine: "9",
    };

    // 모든 영어 숫자 단어를 치환
    for (let [word, digit] of Object.entries(numMap)) {
        numbers = numbers.split(word).join(digit);
    }

    // 숫자로 변환하여 반환
    return parseInt(numbers, 10);
}
