function solution(str_list) {
    for (let index = 0; index < str_list.length; index++) {
        if (str_list[index] === 'l') {
            return str_list.slice(0, index);
        } else if (str_list[index] === 'r') {
            return str_list.slice(index + 1);
        }
    }
    return [];
}