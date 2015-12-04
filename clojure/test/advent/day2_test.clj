(ns advent.day2-test
  (:require [clojure.test :refer :all]
  	        [advent.day2 :refer :all]))

(deftest paper-test
  (testing "A single 2x3x4 box"
    (is (= 58 (paper "2x3x4"))))
  (testing "A single 4x3x2 box"
    (is (= 58 (paper "4x3x2"))))
  (testing "two boxes"
    (is (= 101 (paper "3x2x4\n1x10x1")))))

(deftest ribbon-test
  (testing "A single 2x3x4 box"
    (is (= 34 (ribbon "2x3x4")))))