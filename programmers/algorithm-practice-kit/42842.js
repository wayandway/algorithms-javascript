//* 카펫 https://school.programmers.co.kr/learn/courses/30/lessons/42842

function solution(brown, yellow) {
    const total = brown + yellow;

    for (let height = 3; height <= Math.sqrt(total); height++) {
        if (total % height === 0) {
            let width = total / height; // 가로 길이 계산
            if (2 * (width + height - 2) === brown) {
                return [width, height];
            }
        }
    }
}