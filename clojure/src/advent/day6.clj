(ns advent.day6
  (:require [clojure.string :refer [split]]))

(defn create-grid [width height value]
  (for [x (range width)
        y (range height)]
    {:x x :y y :value value}))

(defn bounds-checker [x1 y1 x2 y2]
  (fn [cell] (and (<= x1 (:x cell) x2) (<= y1 (:y cell) y2))))

(defn on-off-action-mapper [action]
  (cond 
    (= action "turn on")  (fn [cell] (assoc cell :value true))
    (= action "turn off") (fn [cell] (assoc cell :value false))
    :else                 (fn [cell] (update-in cell [:value] not))))

(defn count-lit-cells [grid]
  (count (filter #(:value %) grid)))

(defn execute-action [[action x1 y1 x2 y2] action-mapper grid]
  (let [matches? (bounds-checker x1 y1 x2 y2)
        change-cell (action-mapper action)]
    (map #(if (matches? %) (change-cell %) %) grid)))

(defn parse-action [s]
  (let [[_ action x1 y1 x2 y2] 
           (re-matches #"(turn on|turn off|toggle) (\d+),(\d+) through (\d+),(\d+)" s)]
    [action (read-string x1) (read-string y1) (read-string x2) (read-string y2)]))


(defn day6 []
  (let [action-list (slurp "../data/day6.txt")
        actions     (map parse-action (split action-list #"\n"))
        grid        (create-grid 1000 1000 false)
        grid        (reduce #(execute-action %2 on-off-action-mapper %1) grid actions)]
    (do
      (println "****** Day 6 *******")
      (println "After the instructions," (count-lit-cells grid) "lights are shining.")
      (println ))))
