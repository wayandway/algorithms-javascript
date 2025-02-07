//* 폰켓몬 https://school.programmers.co.kr/learn/courses/30/lessons/1845

function solution(nums) {
    const uniqueCount = new Set(nums).size;
    return Math.min(nums.length / 2, uniqueCount);
}