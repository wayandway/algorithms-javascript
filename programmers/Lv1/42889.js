//* 실패율 https://school.programmers.co.kr/learn/courses/30/lessons/42889

function solution(N, stages) {
    // 스테이지 별 도전자 수
    const challenger = new Array(N+2).fill(0);
    for (const stage of stages)
        challenger[stage] += 1;
    
    
    // 스테이지 별 실패한 도전자 수
    const fails = {};
    let total = stages.length;
    
    // 각 스테이지를 순회하며 실패율 계산
    for (let i=1; i<=N; i++) {
        if(challenger[i]===0) {
            // 도전한 사람이 없는 경우 실패율은 0
            fails[i] = 0;
            continue;
        }
        
        // 실패율 계산
        fails[i] = challenger[i] / total;
        total -= challenger[i];
    }
    
    const result = Object.entries(fails).sort((a,b)=> b[1] - a[1]);
    
    return result.map((v) => Number(v[0]));
}