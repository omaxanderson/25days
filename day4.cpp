#import <iostream>
#import <string>
#import <vector>
#import <boost/algorithm/string.hpp>

bool isCorrectLength(int num) {
    int count = 0;
    while (num != 0) {
        num = num / 10;
        count++;
    }
    return count;
}

bool hasIncreasingDigits(int num) {
    int previous = num % 10;
    num = num / 10;
    while (num != 0) {
        if (num % 10 > previous) {
            return false;
        }
        num = num / 10;
        previous = num % 10;
    }
    return true;
}

bool hasDouble(const int num) {
    std::string asString = std::itos(num);
    for (int i = 0; i < asString.length - 2; i++) {
        if (asString[i] === asString[i + 1]) {
            return true;
        }
    }
    return false;
}

int main() {
    const int t1 = 111111;
    const int t1 = 111111;
    const int t1 = 111111;
}
