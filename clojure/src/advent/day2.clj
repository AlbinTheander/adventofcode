(ns advent.day2
	(:require [clojure.string :refer [split]]))


(defn- parse-box [box]
	(->>
		box
		(re-seq #"\d+")
		(map read-string)
		sort))

(defn- paper-for-box [box]
	(let [[w l h] (parse-box box)]
		(+ (* 2 w l) (* 2 w h) (* 2 l h) (* w l))))

(defn- ribbon-for-box [box]
	(let [[w l h] (parse-box box)]
		(+ (* 2 w) (* 2 l) (* w l h) )))

(defn paper [boxes]
	(apply + (map paper-for-box (split boxes #"\n" ))))

(defn ribbon [boxes]
	(apply + (map ribbon-for-box (split boxes #"\n" ))))

(defn day2 []
	(let [boxes (slurp "../data/day2.txt")]
		(do
			(println "****** Day 2 *******")
			(println "The elves need" (paper boxes) "square feet of paper.")
			(println "They also need" (ribbon boxes) "feet of ribbon.")
			(println ))))




