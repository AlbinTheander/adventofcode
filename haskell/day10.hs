import Data.List


lookAndSaySeq:: String -> [String]
lookAndSaySeq seed = theSeq
  where
    theSeq = seed : next theSeq
    next::[String] -> [String]
    next (a : t) = (concat $ map (\s -> (show $ length s) ++ [head s]) $ group a) : next t


main = 
  let
    after40 = show $ length $ last $ take 41 $ lookAndSaySeq "3113322113"
    after50 = show $ length $ last $ take 51 $ lookAndSaySeq "3113322113"
  in
    do
      putStrLn "******* Day 10 *******"
      putStrLn ("After 40 iterations the sequence is " ++ after40 ++ " digits long")
      putStrLn ("After 50 iterations the sequence is " ++ after50 ++ " digits long")