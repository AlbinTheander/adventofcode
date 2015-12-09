
import Data.List
import Data.Function

cities = ["Faerun", "Norrath", "Tristram", "AlphaCentauri", "Arbre", "Snowdin", "Tambi", "Straylight"]

distance:: (String, String) -> Int
distance (c1,c2) = minimum [dist (c1,c2), dist (c2, c1)]

dist:: (String, String) -> Int
dist ("Faerun", "Norrath") = 129
dist ("Faerun", "Tristram") = 58
dist ("Faerun", "AlphaCentauri") = 13
dist ("Faerun", "Arbre") = 24
dist ("Faerun", "Snowdin") = 60
dist ("Faerun", "Tambi") = 71
dist ("Faerun", "Straylight") = 67
dist ("Norrath", "Tristram") = 142
dist ("Norrath", "AlphaCentauri") = 15
dist ("Norrath", "Arbre") = 135
dist ("Norrath", "Snowdin") = 75
dist ("Norrath", "Tambi") = 82
dist ("Norrath", "Straylight") = 54
dist ("Tristram", "AlphaCentauri") = 118
dist ("Tristram", "Arbre") = 122
dist ("Tristram", "Snowdin") = 103
dist ("Tristram", "Tambi") = 49
dist ("Tristram", "Straylight") = 97
dist ("AlphaCentauri", "Arbre") = 116
dist ("AlphaCentauri", "Snowdin") = 12
dist ("AlphaCentauri", "Tambi") = 18
dist ("AlphaCentauri", "Straylight") = 91
dist ("Arbre", "Snowdin") = 129
dist ("Arbre", "Tambi") = 53
dist ("Arbre", "Straylight") = 40
dist ("Snowdin", "Tambi") = 15
dist ("Snowdin", "Straylight") = 99
dist ("Tambi", "Straylight") = 70
dist (_, _) = 10000000

pathDist:: [String] -> Int
pathDist cities = sum $ map distance $ zip cities (tail cities)

bestPath:: [[String]] -> [([String], Int)]
bestPath paths =
  let
    pathsAndDist = map (\path -> (path, pathDist path)) paths
    sortedPaths = sortBy (compare `on` snd) pathsAndDist
  in
    sortedPaths

main = do putStrLn "****** Day 9 ******"
          putStrLn "Shortest path: "
          print $ head $ bestPath $ permutations cities
          putStrLn "Longest path: "
          print $ last $ bestPath $ permutations cities



