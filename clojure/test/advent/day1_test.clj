(ns advent.day1-test
  (:require [clojure.test :refer :all]
  	        [advent.day1 :refer :all]))

(deftest final-floor-test
  (testing "Not moving stays on floor 0"
    (is (= 0 (final-floor ""))))
  (testing "One step us if floor 1"
  	(is (= 1 (final-floor "("))))
  (testing "One step down is floor -1"
  	(is (= -1 (final-floor ")"))))
  (testing "Can follow the elevator a few steps"
  	(is (= 3 (final-floor "(()(()(")))))

(deftest index-of-basement-step-test
	(testing "going down in the basement directly"
		(= 1 (index-of-basement-step ")")))
	(testing "going up a bit before plunging down"
		(= 5 (index-of-basement-step "(()))")))
	(testing "a bit of yo-yo action before basement"
		(= 13 (index-of-basement-step "(()())((())))((()((()()"))))
