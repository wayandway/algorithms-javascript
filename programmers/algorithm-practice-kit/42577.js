//* 전화번호 목록 https://school.programmers.co.kr/learn/courses/30/lessons/42577

function solution(phone_book) {
    const phoneMap = new Set(phone_book); // 전화번호들을 Set(해시맵)으로 저장

    for (const number of phone_book) {
        let prefix = "";
        for (const digit of number) {
            prefix += digit;
            if (prefix !== number && phoneMap.has(prefix)) {
                return false;
            }
        }
    }
    return true;
}

// phone_book을 한 번 순회하며 Set에 저장 → O(N)
// phone_book을 다시 순회하며 각 번호의 모든 접두사를 검사 → O(M) (M은 평균 길이) → 최악의 경우 O(20N) ≈ O(N)
// 총 시간 복잡도: O(N)