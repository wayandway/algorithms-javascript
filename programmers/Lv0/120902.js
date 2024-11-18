//* 문자열 계산하기 https://school.programmers.co.kr/learn/courses/30/lessons/120902

function solution(my_string) {
    const tokens = my_string.split(" "); // 공백으로 나누어 연산자와 숫자 분리
    const stack = []; // 숫자와 연산자를 처리할 스택

    // 스택에 숫자와 연산자를 순서대로 처리
    stack.push(parseInt(tokens[0])); // 첫 번째 숫자 스택에 추가

    for (let i = 1; i < tokens.length; i += 2) {
        const operator = tokens[i];        // 연산자
        const number = parseInt(tokens[i + 1]); // 숫자

        // 연산자에 따라 스택에 처리
        if (operator === '+') 
            stack.push(number); // '+' 연산이면 숫자를 그대로 추가
        if (operator === '-') 
            stack.push(-number); // '-' 연산이면 음수로 변환해 추가
    }

    // 스택의 모든 숫자를 합산
    return stack.reduce((acc, cur) => acc + cur, 0);
}

// 시간복잡도 : O(n)
