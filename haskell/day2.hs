import Data.List


materialForPackages:: ((Int,Int,Int)->Int) -> String -> Int
materialForPackages material packages =
	sum $ map (material . parsePackage) $ lines packages

ribbon::(Int,Int,Int) -> Int
ribbon (x,y,z) = 2*x + 2*y + x*y*z


paper::(Int,Int,Int) -> Int
paper (x,y,z) = 2*x*y + 2*x*z + 2*y*z + x*y

parsePackage::String -> (Int, Int, Int)
parsePackage s = 
	let
		[x,y,z] = sort $ map read $ words $ map (\c -> if c == 'x' then ' ' else c) s
	in
		(x,y,z)


main = do packages <- readFile "../data/day2.txt";
		  putStrLn "****** Day 2 ******"
          putStrLn $ "The elves need " ++ (show $ materialForPackages paper packages) ++ " square feet of paper"
          putStrLn $ "They also need " ++ (show $ materialForPackages ribbon packages) ++ " feet of ribbon"
