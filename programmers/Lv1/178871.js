//* 달리기 경주 https://school.programmers.co.kr/learn/courses/30/lessons/178871

function solution(players, callings) {
    const playerRank = {};
    
    for (let i = 0; i < players.length; i++) {
        playerRank[players[i]] = i;
    }
    
    for (const name of callings) {
        let rank = playerRank[name];
        if (rank > 0) {
            let prevPlayer = players[rank - 1];
            
            // 배열 업데이트
            players[rank - 1] = name;
            players[rank] = prevPlayer;
            
            // 해시맵 업데이트
            playerRank[name] = rank - 1;
            playerRank[prevPlayer] = rank;
        }
    }
    
    return players;
}

// 초기 순위 저장 (players -> Map) : O(N)
// callings 순회 (M번 반복, 순위 조회 및 업데이트 O(1)) : O(M)
// 총 시간 복잡도: O(N + M)