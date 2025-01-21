//* 로그인 성공? https://school.programmers.co.kr/learn/courses/30/lessons/120883

function solution(id_pw, db) {
    const user = db.find(([id]) => id === id_pw[0]); // id가 일치하는 사용자를 찾음

    if (!user) {
        return "fail"; // id가 없으면 "fail" 반환
    }

    return user[1] === id_pw[1] ? "login" : "wrong pw"; // 비밀번호 확인 후 결과 반환
}

/*
find 메서드는 최악의 경우 배열 전체를 탐색하므로 시간 복잡도는 O(n)
 */
