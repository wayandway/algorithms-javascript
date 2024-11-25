//* 직사각형 넓이 구하기 https://school.programmers.co.kr/learn/courses/30/lessons/120860

function solution(dots) {
    // x 좌표와 y 좌표를 각각 분리
    const xCoords = dots.map(dot => dot[0]);
    const yCoords = dots.map(dot => dot[1]);

    // 가장 큰 값과 작은 값의 차이를 구함
    const width = Math.max(...xCoords) - Math.min(...xCoords);
    const height = Math.max(...yCoords) - Math.min(...yCoords);

    // 넓이 계산
    return width * height;
}
