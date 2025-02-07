//* 의상 https://school.programmers.co.kr/learn/courses/30/lessons/42578

function solution(clothes) {
    const clothesMap = {};
    
    // 1. 의상의 종류별 개수 카운트
    for (const [name, category] of clothes) {
        clothesMap[category] = (clothesMap[category] || 0) + 1;
    }
    
    // 2. 의상 조합 수 (입는 경우 + 안 입는 경우(1))를 곱하기
    let result = 1;
    for (const category in clothesMap) {
        result *= (clothesMap[category] + 1);
    }
    
    return result - 1; // 모두 안 입는 경우(1) 제외
}