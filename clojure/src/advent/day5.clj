(ns advent.day5
	(:require [clojure.string :refer [split]]))


(defn nice? [s]
	(and 
		(re-find #"[aeiou].*[aeiou].*[aeiou]" s)
		(re-find #"(.)\1" s)
		(not (re-find #"ab|cd|pq|xy" s))))

(defn nicer? [s]
	(and
		(re-find #"(.).\1" s)
		(re-find #"(..).*\1" s)))

(defn count-nice [pred s]
	(count
		(filter pred
			(split s #"\n"))))


(defn day5 []
	(let [s (slurp "../data/day5.txt")]
		(do
			(println "****** Day 5 *******")
			(println "Santa has" (count-nice nice? s) "nice strings in his file.")
			(println "Santa has" (count-nice nicer? s) "nicer strings in his file.")
			(println ))))

