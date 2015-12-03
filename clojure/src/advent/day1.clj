(ns advent.day1)

(def UP_DOWN {\( 1, \) -1})

(defn final-floor [steps]
	(->> steps
		 (map UP_DOWN)
		 (reduce + 0)))

(defn index-of-basement-step [steps]
	(let [cnt (fn cnt [list sum depth]
  				(cond
          			(< sum 0) depth
          			(empty? list) -1
          			:else (recur (rest list) (+ sum (first list)) (inc depth))))]
		(cnt (map UP_DOWN steps) 0 0)))

(defn day1 []
	(let [steps (slurp "../data/day1.txt")]
		(do
			(println "Santa ends up at floor" (final-floor steps))
			(println "Santa enters the basement in step" (index-of-basement-step steps)))))


