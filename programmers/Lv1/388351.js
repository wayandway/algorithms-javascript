//* 유연근무제 https://school.programmers.co.kr/learn/courses/30/lessons/388351

function solution(schedules, timelogs, startday) {
    let answer = 0;
    const n = schedules.length;
  
    // 요일 인덱스 0~6이 어떤 요일인지 매핑
    // 월(1)~일(7)
    const isWeekday = (day) => {
      // day: 0~6
      const weekdayIndex = (startday - 1 + day) % 7 + 1;
      return weekdayIndex >= 1 && weekdayIndex <= 5; // 월~금
    };
  
    for (let i = 0; i < n; i++) {
      const hope = schedules[i];
      const maxAcceptable = addMinutes(hope, 10);
      let isLate = false;
  
      for (let j = 0; j < 7; j++) {
        if (!isWeekday(j)) continue;
        const log = timelogs[i][j];
        if (log > maxAcceptable) {
          isLate = true;
          break;
        }
      }
  
      if (!isLate) answer++;
    }
  
    return answer;
  }
  
  // 시각(예: 958)에 10분 더한 결과 반환
  function addMinutes(time, minutesToAdd) {
    let hour = Math.floor(time / 100);
    let minute = time % 100;
  
    minute += minutesToAdd;
    if (minute >= 60) {
      hour += Math.floor(minute / 60);
      minute %= 60;
    }
  
    return hour * 100 + minute;
  }
  
  // 시간복잡도 : O(n)