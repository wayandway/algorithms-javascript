//* H-Index https://school.programmers.co.kr/learn/courses/30/lessons/42747

function solution(citations) {
    citations.sort((a, b) => b - a);
    let hIdx = 0;
    
    while (hIdx + 1 <= citations[hIdx]) {
        hIdx++;
    }
    
    return hIdx;
}