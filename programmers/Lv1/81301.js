 //* 숫자 문자열과 영단어 https://school.programmers.co.kr/learn/courses/30/lessons/81301

const dict = {
    'zero': 0, 'one': 1, 'two': 2, 'three': 3, 'four': 4,
    'five': 5, 'six': 6, 'seven': 7, 'eight': 8, 'nine': 9
};

function solution(s) {
    Object.keys(dict).forEach(word => { // 10번 고정 반복
        s = s.replaceAll(word, dict[word]); // s의 길이를 N이라고 하면, replaceAll()은 O(N)
    });

    return parseInt(s);
}

// 총 시간복잡도 O(N)
