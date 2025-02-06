//* 성격 유형 검사하기 https://school.programmers.co.kr/learn/courses/30/lessons/118666

function solution(survey, choices) {
    // 성격 유형을 저장할 객체
    const personality = {
      'R': 0, 'T': 0, 'C': 0, 'F': 0, 'J': 0, 'M': 0, 'A': 0, 'N': 0
    };
    
    // 선택지에 따른 점수를 성격 유형에 반영
    for (let i = 0; i < survey.length; i++) {
      const [type1, type2] = survey[i];
      const score = choices[i];
      
      if (score < 4) {  // '매우 비동의' ~ '약간 비동의'
        personality[type1] += 4 - score;
      } else if (score > 4) {  // '약간 동의' ~ '매우 동의'
        personality[type2] += score - 4;
      }
      // score === 4일 경우는 아무 점수도 추가되지 않음
    }
  
    // 결과 문자열을 구성
    let result = '';
    result += personality['R'] >= personality['T'] ? 'R' : 'T';
    result += personality['C'] >= personality['F'] ? 'C' : 'F';
    result += personality['J'] >= personality['M'] ? 'J' : 'M';
    result += personality['A'] >= personality['N'] ? 'A' : 'N';
  
    return result;
  }
  
  // 총 시간복잡도 O(n) : n은 survey 배열의 길이