(ns advent.core
  (:gen-class)
  (:require [advent.day1 :refer :all]
            [advent.day2 :refer :all]
            [advent.day5 :refer :all]))

(defn -main []
	(day1)
	(day2)
	(day5))
