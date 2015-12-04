import Data.List
import Data.Maybe

finalFloor:: String -> Int
finalFloor steps = sum $ map stepToInt $ steps

firstTimeInBasement:: String -> Int
firstTimeInBasement steps =
	fromJust $ findIndex (< 0) $ scanl1 (+) $ map stepToInt steps


stepToInt:: Char -> Int
stepToInt '(' = 1
stepToInt ')' = (-1)
stepToInt _ = 0


main = do e <- readFile "../data/day1.txt";
		  putStrLn "****** Day 1 ******"
          putStrLn $ "Santa ends up at floor " ++ (show $ finalFloor e)
          putStrLn $ "Santa first enters the basement at step " ++ (show $ firstTimeInBasement e)