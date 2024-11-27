//* 삼각형의 완성 조건 (2) https://school.programmers.co.kr/learn/courses/30/lessons/120868

function solution(sides) {
    // 주어진 두 변 정렬
    const [short, long] = sides.sort((a, b) => a - b);
    
    // 가능한 세 번째 변의 범위
    const min = long - short + 1; // 가장 긴 변이 주어진 변 중 하나일 경우
    const max = long + short - 1; // 세 번째 변이 가장 긴 변일 경우

    // 가능한 정수의 개수
    return max - min + 1;
}

// 시간 복잡도 O(1)