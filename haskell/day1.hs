
finalFloor:: String -> Int
finalFloor steps = sum $ map (\c -> if c == '(' then  1 else -1) $ steps


main = do e <- readFile("../data/day1.txt")
          putStrLn $ "Santa ends up at floor " ++ (show $ finalFloor e)