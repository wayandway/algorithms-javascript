//* 옹알이 (1) https://school.programmers.co.kr/learn/courses/30/lessons/120956
function solution(babbling) {
    let count = 0;
    const patterns = ["aya", "ye", "woo", "ma"];

    for (let i = 0; i < babbling.length; i++) {
        let word = babbling[i];

        // 발음 패턴 순회
        for (let j = 0; j < patterns.length; j++) {
            // 'pattern'이 있을 경우 ","로 대체
            word = word.replace(patterns[j], ",");
        }

        // ","로 대체된 패턴을 제거한 후 빈 문자열이면 발음 성공
        if (word.replace(/,/g, "") === "") {
            count++;
        }
    }
    
    return count;
}

/*
안쪽 반복문에서 각 단어마다 patterns 배열의 길이(4)만큼 replace()가 실행되고, 각 replace() 호출은 O(n)의 시간이 걸린다.
그러므로 하나의 단어에 대해 소요되는 시간은 O(4 * m) -> O(m), 여기서 m은 단어의 길이이다.

바깥쪽 반복문은 babbling.length만큼 실행되므로, 전체 시간 복잡도는 O(b * m) (여기서 b는 babbling.length의 크기, m은 각 단어의 평균 길이)

따라서 전체 시간 복잡도는 O(b * m)
(b는 babbling 배열의 길이 : 최대 100)
(m은 각 단어의 평균 길이 : 최대 15)
*/