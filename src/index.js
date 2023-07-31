module.exports = function toReadable (number) {
    let dozen;
    let word = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: "four",
        5: 'five',
        6: 'six',
        7: "seven",
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        19: 'nineteen',
        18: 'eighteen',
    };
    if (20 <= number) {
        dozen = {
            20: 'twenty',
            30: 'thirty',
            40: 'forty',
            50: 'fifty',
            60: 'sixty',
            70: 'seventy',
            80: 'eighty',
            90: 'ninety',
        };
        const num = String(number).split('');
        if (num.length === 2)
            if (number % 10 == 0) {
                return dozen[number];
            } else {
                if (num[0] == 2) {
                    return 'twenty' + ' ' + word[num[1]];
                }
                if (num[0] == 3) {
                    return 'thirty' + ' ' + word[num[1]];
                }
                if (num[0] == 4) {
                    return 'forty' + ' ' + word[num[1]];
                }
                if (num[0] == 5) {
                    return 'fifty' + ' ' + word[num[1]];
                }
                if (num[0] == 6) {
                    return 'sixty' + ' ' + word[num[1]];
                }
                if (num[0] == 7) {
                    return 'seventy' + ' ' + word[num[1]];
                }
                if (num[0] == 8) {
                    return 'eighty' + ' ' + word[num[1]];
                }
                if (num[0] == 9) {
                    return 'ninety' + ' ' + word[num[1]];
                }
            }
        if (num.length === 3)
            if (number % 100 != 0) {
                if (number % 10 === 0)
                    if (num[1] != 2) {
                        if (num[1] != 3) {
                            if (num[1] == 4) {
                                return word[parseInt(num[0])] + ' hundred ' + dozen[40];
                            }
                            if (num[1] == 5) {
                                return word[parseInt(num[0])] + ' hundred ' + dozen[50];
                            }
                            if (num[1] == 6) {
                                return word[parseInt(num[0])] + ' hundred ' + dozen[60];
                            }
                            if (num[1] == 7) {
                                return word[parseInt(num[0])] + ' hundred ' + dozen[70];
                            }
                            if (num[1] == 8) {
                                return word[parseInt(num[0])] + ' hundred ' + dozen[80];
                            }
                            if (num[1] == 9) {
                                return word[parseInt(num[0])] + ' hundred ' + dozen[90];
                            }
                        } else {
                            return word[parseInt(num[0])] + ' hundred ' + dozen[30];
                        }
                    } else {
                        return word[parseInt(num[0])] + ' hundred ' + dozen[20];
                    }
                if (num[1] == 0) {
                    return word[parseInt(num[0])] + ' hundred ' + word[num[2]];
                }
                if (num[1] == 1) {
                    if (num[2] == 0) {
                        return word[parseInt(num[0])] + ' hundred ' + word[10];
                    }
                    if (num[2] == 1) {
                        return word[parseInt(num[0])] + ' hundred ' + word[11];
                    }
                    if (num[2] == 2) {
                        return word[parseInt(num[0])] + ' hundred ' + word[12];
                    }
                    if (num[2] == 3) {
                        return word[parseInt(num[0])] + ' hundred ' + word[13];
                    }
                    if (num[2] == 4) {
                        return word[parseInt(num[0])] + ' hundred ' + word[14];
                    }
                    if (num[2] == 5) {
                        return word[parseInt(num[0])] + ' hundred ' + word[15];
                    }
                    if (num[2] == 6) {
                        return word[parseInt(num[0])] + ' hundred ' + word[16];
                    }
                    if (num[2] == 7) {
                        return word[parseInt(num[0])] + ' hundred ' + word[17];
                    }
                    if (num[2] == 8) {
                        return word[parseInt(num[0])] + ' hundred ' + word[18];
                    }
                    if (num[2] == 9) {
                        return word[parseInt(num[0])] + ' hundred ' + word[19];
                    }
                }
                if (num[1] == 2) {
                    return word[parseInt(num[0])] + ' hundred ' + dozen[20] + ' ' + word[num[2]];
                }
                if (num[1] == 3) {
                    return word[parseInt(num[0])] + ' hundred ' + dozen[30] + ' ' + word[num[2]];
                }
                if (num[1] == 4) {
                    return word[parseInt(num[0])] + ' hundred ' + dozen[40] + ' ' + word[num[2]];
                }
                if (num[1] == 5) {
                    return word[parseInt(num[0])] + ' hundred ' + dozen[50] + ' ' + word[num[2]];
                }
                if (num[1] == 6) {
                    return word[parseInt(num[0])] + ' hundred ' + dozen[60] + ' ' + word[num[2]];
                }
                if (num[1] == 7) {
                    return word[parseInt(num[0])] + ' hundred ' + dozen[70] + ' ' + word[num[2]];
                }
                if (num[1] == 8) {
                    return word[parseInt(num[0])] + ' hundred ' + dozen[80] + ' ' + word[num[2]];
                }
                if (num[1] == 9) {
                    return word[parseInt(num[0])] + ' hundred ' + dozen[90] + ' ' + word[num[2]];
                }
            } else {
                return word[parseInt(num[0])] + ' hundred';
            }
    } else {
        return word[number];
    }
}


