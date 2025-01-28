//* 배열의 원소만큼 추가하기 https://school.programmers.co.kr/learn/courses/30/lessons/181861

function solution(arr) {
    return arr.flatMap(value => Array(value).fill(value));
}

// flatMap 메소드 시간복잡도 : O(Σarr[i])