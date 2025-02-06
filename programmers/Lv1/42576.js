//* 완주하지 못한 선수 https://school.programmers.co.kr/learn/courses/30/lessons/42576

function solution(participant, completion) {
    const hashMap = {};

    // participant 배열에서 각 참가자 이름의 등장 횟수를 기록
    for (let i = 0; i < participant.length; i++) {
        hashMap[participant[i]] = (hashMap[participant[i]] || 0) + 1;
    }

    // completion 배열에서 참가자를 제거
    for (let i = 0; i < completion.length; i++) {
        hashMap[completion[i]]--;
    }

    // 해시맵에서 값이 1인 참가자가 완주하지 못한 사람
    for (let key in hashMap) {
        if (hashMap[key] === 1) {
            return key;
        }
    }
}

// 전체 시간복잡도 O(N)