//* 크레인 인형뽑기 게임 https://school.programmers.co.kr/learn/courses/30/lessons/64061

function solution(board, moves) {
    let stack = [];
    let count = 0;
    
    for (let col of moves) {
        for (let i = 0; i < board.length; i++) {
            if (board[i][col - 1]) {
                // 해당 칸의 인형을 stack에 추가하고, 해당 칸을 비움
                stack.push(board[i][col - 1]);
                board[i][col - 1] = 0;
                
                // 스택에서 마지막 두 아이템을 비교
                if (stack[stack.length - 1] === stack[stack.length - 2]) {
                    stack.pop();
                    stack.pop();
                    count += 2;
                }
                break;
            }
        }
    }
    
    return count;
}

// 최종 시간 복잡도: O(M * N)
// M: moves 배열의 길이
// N: board 배열의 행 길이