//* 햄버거 만들기 https://school.programmers.co.kr/learn/courses/30/lessons/133502

function solution(ingredient) {
    let stack = [];
    let count = 0;
    
    for (const num of ingredient) {
        stack.push(num);
        if (stack.length >= 4 && stack.slice(-4).join('') === '1231') {
            stack.splice(-4);
            count++;
        }
    }
    
    return count;
}

// 최종 시간복잡도 : O(N). N은 ingredient 배열의 길이