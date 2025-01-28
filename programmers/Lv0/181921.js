//* 배열 만들기2 https://school.programmers.co.kr/learn/courses/30/lessons/181921

function solution(l, r) {
    let result = [];
    
    for (let i = l; i <= r; i++) {
        // 숫자를 문자열로 변환한 후 정규식으로 확인
        if (/^[05]+$/.test(i.toString())) {
            result.push(i);
        }
    }
    
    return result.length > 0 ? result : [-1];
}

// 시간 복잡도 : O(n), n = r-l-1