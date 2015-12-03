(ns advent.day1)

(def UP_DOWN {\( 1, \) -1})

(defn final-floor [steps]
	(->> steps
		 (map {\( 1, \) -1})
		 (reduce +)))

(defn day1 []
	(let [steps (slurp "../data/day1.txt")]
		(println "Santa ends up at floor " (final-floor steps))))

