//* 같은 숫자는 싫어 https://school.programmers.co.kr/learn/courses/30/lessons/12906

function solution(arr) {
    const result = []; // 결과를 저장할 스택 역할의 배열

    for (let i = 0; i < arr.length; i++) {
        // 스택의 마지막 요소와 현재 요소가 다를 때만 추가
        if (result[result.length - 1] !== arr[i]) {
            result.push(arr[i]);
        }
    }

    return result;
}
