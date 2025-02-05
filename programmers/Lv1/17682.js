//* 2018 KAKAO BLIND RECRUITMENT [1차] 다트 게임 https://school.programmers.co.kr/learn/courses/30/lessons/17682

function solution(dartResult) {
    const results = dartResult.match(/\d+[SDT][*#]?/g);
    let answer = [];
    
    for (let i = 0; i < results.length; i++) {
        const match = results[i].match(/(\d+)([SDT])([*#]?)/);
        let score = Number(match[1]); // 숫자 점수
        const bonus = match[2];       // S, D, T 중 하나
        const option = match[3];      // *, # 중 하나 (없을 수도 있음)
        
        // 점수 계산
        if (bonus === 'D') score **= 2;
        else if (bonus === 'T') score **= 3;
        
        // 옵션 적용
        if (option === '*') {
            score *= 2;
            if (i > 0) answer[i - 1] *= 2; // 이전 점수도 2배
        } else if (option === '#') {
            score *= -1;
        }
        
        answer.push(score);
    }
    
    return answer.reduce((sum, score) => sum + score, 0);
}

// 최종 시간복잡도 : 모든 연산이 최대 3번(S, D, T) 실행되므로 상수 시간 O(1)