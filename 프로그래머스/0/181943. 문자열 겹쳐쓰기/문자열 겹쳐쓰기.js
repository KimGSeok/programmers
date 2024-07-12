function solution(my_string, overwrite_string, s) {
    const overwriteLength = overwrite_string.length;
    const preString = my_string.slice(0,s);
    const nextString = my_string.slice(s + overwriteLength, my_string.length);
    return [...preString, ...overwrite_string, ...nextString].join('')
}