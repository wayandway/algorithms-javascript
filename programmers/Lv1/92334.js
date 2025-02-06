//* 신고 결과 받기 https://school.programmers.co.kr/learn/courses/30/lessons/92334

function solution(id_list, report, k) {
    const reportedUser = {}; // (신고당한 유저 - 신고 유저) 집합을 저장할 객체
    const count = {}; // (처리 결과 메일을 받은 유저 - 받은 횟수)를 저장할 객체
    
    // 1. 신고 기록 순회
    for (const r of report) {
        const [userId, reportedId] = r.split(' ');
        if (reportedUser[reportedId] === undefined) { // 신고 당한 기록이 없다면
            reportedUser[reportedId] = new Set();
        }
        reportedUser[reportedId].add(userId);
    }
    
    // 2. 신고당한 유저별로 신고당한 횟수를 확인
    for (const reportedId of Object.keys(reportedUser)) {
        if (reportedUser[reportedId].size >= k) { // 계정 정지 기준에 만족하는지 확인
            for (const uid of reportedUser[reportedId]) {
                count[uid] = (count[uid] || 0) + 1; // count 객체에 (처리 결과 메일을 받은 유저 - 받은 횟수)를 저장
            }
        }
    }
    
    const result = [];
    // 3. 각 아이디별 메일을 받은 횟수를 순서대로 정리
    for (let i = 0; i < id_list.length; i++) {
        result.push(count[id_list[i]] || 0);
    }
    
    return result;
}