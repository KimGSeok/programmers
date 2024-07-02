const transformMode = (mode) => mode === 0 ? 1 : 0;

function solution(code) {
    var answer = '';
    let mode = 0;

    [...code].map((item, index) => {
        if(item === '1') mode = transformMode(mode);
        else {
            if(!mode && index%2 === 0) answer += item;
            else if(mode && index%2 !== 0) answer += item;
        }
    });
    
    return answer === '' ? "EMPTY" : answer;
}