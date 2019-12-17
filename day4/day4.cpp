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
    return count == 6;
}

bool hasIncreasingDigits(int num) {
    std::string asString = std::to_string(num);
    //char current = asString[0];
    for (int i = 0; i < asString.size() - 1; i++) {
        if (asString[i + 1] < asString[i]) {
            return false;
        }
        //current = asString[i];
    }
    return true;
}

bool hasDouble(const int num) {
    std::string asString = std::to_string(num);
    for (int i = 0; i <= asString.size() - 2; i++) {
        if (asString[i] == asString[i + 1]) {
            return true;
        }
    }
    return false;
}

bool isInRange(int num) {
    return num >= 156218 && num <= 652527;
}

int main() {
    const int t1 = 111111;
    const int t2 = 223450;
    const int t3 = 123789;
    const int t4 = 12345;

    int num = 0;
    for (int i = 156218; i <= 652527; i++) {
        if (isInRange(i) && hasDouble(i) && hasIncreasingDigits(i) && isCorrectLength(i)) {
            std::cout << i << std::endl;
            num++;
        }
    }
    std::cout << "num: " << num << std::endl;

    std::cout << hasDouble(t1) << std::endl;
    std::cout << hasDouble(t2) << std::endl;
    std::cout << hasDouble(t3) << std::endl;

    std::cout << hasIncreasingDigits(t1) << std::endl;
    std::cout << hasIncreasingDigits(t2) << std::endl;
    std::cout << hasIncreasingDigits(t3) << std::endl;

    std::cout << isCorrectLength(t1) << std::endl;
    std::cout << isCorrectLength(t2) << std::endl;
    std::cout << isCorrectLength(t3) << std::endl;
    std::cout << isCorrectLength(t4) << std::endl;
}
