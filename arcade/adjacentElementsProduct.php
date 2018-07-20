<?php

function adjacentElementsProduct($inputArray) {
    $result = -1000;
    for ($i = 0; $i < count($inputArray) - 1; $i = $i + 1) {
        $first = $inputArray[$i];
        $sec = $inputArray[$i+1];
        $product = $first * $sec;
        if ($product > $result) {
            $result = $product;
        }
    }
    return $result;
}

// print "($i) $first $sec $product |";


//echo adjacentElementsProduct(array(3, 6, -2, -5, 7, 3)); // 21
//echo adjacentElementsProduct([1, 2, 3, 0]);              // 6
echo adjacentElementsProduct([-23, 4, -3, 8, -12]);        // -12


/* Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

Example

For inputArray = [3, 6, -2, -5, 7, 3], the output should be
adjacentElementsProduct(inputArray) = 21.

7 and 3 produce the largest product.

Input/Output

[execution time limit] 4 seconds (php)

[input] array.integer inputArray

An array of integers containing at least two elements.

Guaranteed constraints:
2 ≤ inputArray.length ≤ 10,
-1000 ≤ inputArray[i] ≤ 1000.

[output] integer

The largest product of adjacent elements. */