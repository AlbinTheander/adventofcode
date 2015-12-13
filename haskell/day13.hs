import Data.List

people1 = ["Alice", "Bob", "Carol", "David", "Eric", "Frank", "George", "Mallory"]
people2 = "Albin" : people1


joy :: (String, String) -> Int
joy ("Alice", "Bob") = 2
joy ("Alice", "Carol") = 26 
joy ("Alice", "David") = (-82)
joy ("Alice", "Eric") = (-75)
joy ("Alice", "Frank") = 42 
joy ("Alice", "George") = 38 
joy ("Alice", "Mallory") = 39 
joy ("Bob", "Alice") = 40 
joy ("Bob", "Carol") = (-61)
joy ("Bob", "David") = (-15)
joy ("Bob", "Eric") = 63 
joy ("Bob", "Frank") = 41
joy ("Bob", "George") = 30 
joy ("Bob", "Mallory") = 87 
joy ("Carol", "Alice") = (-35)
joy ("Carol", "Bob") = (-99)
joy ("Carol", "David") = (-51)
joy ("Carol", "Eric") = 95 
joy ("Carol", "Frank") = 90 
joy ("Carol", "George") = (-16)
joy ("Carol", "Mallory") = 94 
joy ("David", "Alice") = 36 
joy ("David", "Bob") = (-18)
joy ("David", "Carol") = (-65)
joy ("David", "Eric") = (-18)
joy ("David", "Frank") = (-22)
joy ("David", "George") = 2 
joy ("David", "Mallory") = 42 
joy ("Eric", "Alice") = (-65)
joy ("Eric", "Bob") = 24 
joy ("Eric", "Carol") = 100 
joy ("Eric", "David") = 51 
joy ("Eric", "Frank") = 21 
joy ("Eric", "George") = 55 
joy ("Eric", "Mallory") = (-44)
joy ("Frank", "Alice") = (-48)
joy ("Frank", "Bob") = 91 
joy ("Frank", "Carol") = 8 
joy ("Frank", "David") = (-66)
joy ("Frank", "Eric") = 97 
joy ("Frank", "George") = (-9)
joy ("Frank", "Mallory") = (-92)
joy ("George", "Alice") = (-44)
joy ("George", "Bob") = (-25)
joy ("George", "Carol") = 17 
joy ("George", "David") = 92 
joy ("George", "Eric") = (-92)
joy ("George", "Frank") = 18 
joy ("George", "Mallory") = 97 
joy ("Mallory", "Alice") = 92 
joy ("Mallory", "Bob") = (-96)
joy ("Mallory", "Carol") = (-51)
joy ("Mallory", "David") = (-81)
joy ("Mallory", "Eric") = 31 
joy ("Mallory", "Frank") = (-73)
joy ("Mallory", "George") = (-89)
joy ("Albin", _) = 0
joy (_, "Albin") = 0

pairs::[String] -> [(String, String)]
pairs ps = concat 
            [zip ps (concat [(tail ps), [head ps]]),
             zip (concat [tail ps, [head ps]]) ps]

happiness::[String] -> Int
happiness ps = sum $ map joy $ pairs ps

bestSeating::[String] -> Int
bestSeating ps = last $ sort $ map happiness $ permutations ps


main = do 
  putStrLn $ "******* Day 13 *******"
  putStrLn $ "The ultimate seating brings " ++ (show $ bestSeating people1) ++ " happiness."
  putStrLn $ "If I join, the ultimate happiness is " ++ (show $ bestSeating people2) ++ "."
