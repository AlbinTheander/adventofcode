(ns advent.day6-test
  (:require [clojure.test :refer :all]
            [advent.day6 :refer :all]))

(deftest create-grid-test
  (testing "it should contain the right number of cells"
    (is (= 10000 (count (create-grid 100 100 false)))))
  (testing "it should contain the correct default value"
    (is (= 15 (:value (first (create-grid 100 100 15)))))))

(deftest turn-on-and-off-lights-test
  (testing "turning on a few lights"
    (let [grid (->> (create-grid 100 100 false)
                (execute-action ["turn on"  0 0 19 19] on-off-action-mapper)
                (execute-action ["turn on"  0 0 49  9] on-off-action-mapper))]
      (is (= 700 (count-lit-cells grid)))))
  (testing "toggling lights"
    (let [grid (->> (create-grid 100 100 false)
                (execute-action ["toggle"   0 0 19 19] on-off-action-mapper)
                (execute-action ["toggle"   0 0 49  9] on-off-action-mapper))]
      (is (= 500 (count-lit-cells grid)))))
  (testing "several overlapping actions"
    (let [grid (->> (create-grid 100 100 false)
                    (execute-action ["turn on"  0 0 19 19] on-off-action-mapper)
                    (execute-action ["turn off" 5 5 14 14] on-off-action-mapper)
                    (execute-action ["toggle"   0 0 9  9 ] on-off-action-mapper))]
      (is (= 250 (count-lit-cells grid))))))