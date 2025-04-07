//* 택배 상자 꺼내기 https://school.programmers.co.kr/learn/courses/30/lessons/389478

function solution(n, w, num) {
    // num의 위치 구하기
    const row = Math.floor((num - 1) / w); // 층 (행)
    const col = row % 2 === 0 ? (num - 1) % w : w - 1 - (num - 1) % w; // 열 (짝수층이면 왼->오, 홀수층이면 오->왼)
  
    let count = 0;
  
    // num의 열에 해당하는 위층들을 살피며 상자 번호 세기
    for (let l = row + 1; ; l++) {
      const idxInRow = l % 2 === 0 ? col : w - 1 - col;
      const boxNum = l * w + idxInRow + 1;
  
      if (boxNum > n) break;
      count++;
    }
  
    return count + 1; // 위 상자들 + 꺼내야되는 목표 상자(1)
  }
  
  // 시간복잡도 : 위층을 하나씩 검사 → 최악의 경우 n/w층까지 → O(n/w) = O(n)
  