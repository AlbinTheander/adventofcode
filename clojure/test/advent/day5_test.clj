(ns advent.day5-test
	(:require [clojure.test :refer :all]
			  [advent.day5 :refer :all]))



(deftest nice?-test
	(testing "ugknbfddgicrmopn is nice"
		(is (nice? "ugknbfddgicrmopn")))
	(testing "aaa is nice"
		(is (nice? "aaa")))
	(testing "aaabbccdd does not contain three vowels"
		(is (not (nice? "aabbccdd"))))
	(testing "aeiou does not contain a doubled letter"
		(is (not (nice? "aeiou"))))
	(testing "aabaa contains ab"
		(is (not (nice? "aabaa"))))
	(testing "aacdaa contains cd"
		(is (not (nice? "aacdaa"))))
	(testing "jchzalrnumimnmhp is naughty"
		(is (not (nice? "jchzalrnumimnmhp"))))
	(testing "haegwjzuvuyypxyu is naughty"
		(is (not (nice? "haegwjzuvuyypxyu"))))
	(testing "dvszwmarrgswjxmb is naughty"
		(is (not (nice? "dvszwmarrgswjxmb")))))

(deftest count-nice-test
	(testing "one nice string"
		(is (= 1 (count-nice nice? "aaa"))))
	(testing "two nice string"
		(is (= 2 (count-nice nice? "aaa\nugknbfddgicrmopn"))))
	(testing "two nice and a naughty string"
		(is (= 2 (count-nice nice? "aaa\nugknbfddgicrmopn\naabaa"))))
	(testing "two naughty strings"
		(is (= 0 (count-nice nice? "aabaa\naabbccdd")))))

(deftest nicer?-test
	(testing "qjhvhtzxzqqjkmpb is nice"
		(is (nicer? "qjhvhtzxzqqjkmpb")))
	(testing "uurcxstgmygtbstg is naughty, no repeating letter"
		(is (not (nicer? "uurcxstgmygtbstg"))))
	(testing "ieodomkazucvgmuy is naughty, no repeating pair"
		(is (not (nicer? "ieodomkazucvgmuy")))))

