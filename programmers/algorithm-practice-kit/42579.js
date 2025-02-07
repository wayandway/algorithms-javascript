//* 베스트 앨범 https://school.programmers.co.kr/learn/courses/30/lessons/42579

function solution(genres, plays) {
    const songs = {};
    const totalPlays = {};
    let result = []
    
    // 장르별 [노래 번호, 재생 횟수] & 총 재생수 저장
    for (let i = 0; i < genres.length; i++) {
        if (!songs[genres[i]]) {
            songs[genres[i]] = [];
        }
        songs[genres[i]].push([i, plays[i]]);
        totalPlays[genres[i]] = (totalPlays[genres[i]] || 0) + plays[i];
    }
    
    // 총 재생수가 높은 장르 순으로 정렬 & 2개 선택
    const sortedTotalPlays = Object.keys(totalPlays).sort((a, b) => totalPlays[b] - totalPlays[a]);
    
    // 각 장르별 재생 횟수가 높은 순으로 정렬해 2개 선택
    for (const genre of sortedTotalPlays) {
        // 재생 횟수가 같으면 번호가 낮은 순으로 정렬
        let sortedSongs = songs[genre].sort((a, b) => a[1] === b[1] ? a[0] - b[0] : b[1] - a[1]);
        result.push(sortedSongs.slice(0, 2).map(song => song[0]));
    }
    
    return result.flat();
}

/**
 * 장르 및 곡 데이터 저장 → O(N)
 * 장르별 총 재생수 정렬 → O(G log G)
 * 각 장르별 곡 정렬 및 선택 → O(G * K log K)
 * 
 * 최종 복잡도
 * G(장르 수), K(각 장르당 평균 곡 수), N(전체 곡 수)
 * N = G * K라고 가정하면,
 * O(N + G log G + G * K log K) = O(N + G log G + N log K)
 */