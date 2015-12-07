# This works, but is too slow to be used.
# It would be easy to add some memoization to fix it.
# But this script is enough awk for one day. :-)
{
  if ($2 == "->") 
    # assignment
    print "f_" $3 "= () => " format($1) ";"
  else if ($3 == "->") 
    # NOT (only unary operator)
    print "f_" $4 "= () => ~" format($2) " & 0xffff;"
  else 
    # Binary operator
    print "f_" $5 "= () => (" format($1) " " jsOp($2) " "format($3) ") & 0xffff;";
}
END {
  print "console.log(f_a());";
}

function format(symbol) {
  if (symbol ~ /[0-9]+/)
    return symbol
  else
    return "f_" symbol "()"
}

function jsOp(op) {
  if (op == "AND") return "&";
  else if (op == "OR") return "|";
  else if (op == "LSHIFT") return "<<";
  else if (op == "RSHIFT") return ">>";
}
