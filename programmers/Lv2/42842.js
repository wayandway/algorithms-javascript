//* 카펫 https://school.programmers.co.kr/learn/courses/30/lessons/42842

function solution(brown, yellow) {
    const totalTiles = brown + yellow;

    // 가능한 가로 길이(width)를 찾는다.
    for (let width = 3; width <= totalTiles; width++) {
        if (totalTiles % width === 0) {
            const height = totalTiles / width;
            
            // 조건: 가로 길이는 세로 길이와 같거나, 세로 길이보다 길다.
            if (width >= height) {
                // 조건: 노란색 격자 수가 일치하는지 확인
                if ((width - 2) * (height - 2) === yellow) {
                    return [width, height];
                }
            }
        }
    }
    return [];
}