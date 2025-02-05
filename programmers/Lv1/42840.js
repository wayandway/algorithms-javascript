//* 모의고사 https://school.programmers.co.kr/learn/courses/30/lessons/42840

function solution(answers) {
    const mathHater1 = [1, 2, 3, 4, 5];
    const mathHater2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const mathHater3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    const scores = [0, 0, 0];

    for (let i = 0; i < answers.length; i++) { // O(N) : N은 answers 배열의 길이
        if (answers[i] === mathHater1[i % mathHater1.length]) scores[0]++;
        if (answers[i] === mathHater2[i % mathHater2.length]) scores[1]++;
        if (answers[i] === mathHater3[i % mathHater3.length]) scores[2]++;
    }

    const maxScore = Math.max(...scores);
    return scores 
        .map((score, idx) => (score === maxScore ? idx + 1 : null)) // 길이가 3인 scores 배열 순회 : O(3)
        .filter(num => num !== null); // 길이가 3인 scores 배열 순회 : O(3)
}

// 최종 시간복잡도 O(N)