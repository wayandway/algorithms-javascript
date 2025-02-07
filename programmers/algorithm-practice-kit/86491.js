//* 최소 직사각형 https://school.programmers.co.kr/learn/courses/30/lessons/86491

function solution(sizes) {
    let maxWidth = 0;  // 가장 큰 가로 크기
    let maxHeight = 0; // 가장 큰 세로 크기
    
    for (let i = 0; i < sizes.length; i++) {
        const [width, height] = sizes[i].sort((a, b) => a - b);  // 가로와 세로 정렬
        maxWidth = Math.max(maxWidth, width);  // 가장 큰 가로 크기 갱신
        maxHeight = Math.max(maxHeight, height);  // 가장 큰 세로 크기 갱신
    }
    
    return maxWidth * maxHeight;  // 최소 크기 지갑을 만들 수 있는 크기
}