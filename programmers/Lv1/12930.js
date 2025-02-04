//* 이상한 문자 만들기 https://school.programmers.co.kr/learn/courses/30/lessons/12930

function solution(s) {
    return s
        .split(' ')  // 단어별로 분리 O(N : 입력 문자열 s의 길이) 
        .map(word =>
            [...word] // 문자 배열로 변환 O(M)
                .map((char, index) => 
                    index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
                )
                .join('') // 변환된 문자들을 다시 문자열로 합침 O(M : 각 단어의 평균 길이)
        )
        .join(' '); // 변환된 단어들을 공백으로 합침 O(N)
}

// 최종 시간 복잡도 O(N) (문자열의 길이에 비례하여 실행 시간 증가)
