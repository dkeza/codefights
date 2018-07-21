<?php

function makeArrayConsecutive2($statues) {
    $result = 0;
    $counter = 0;
    $min = 0;
    $max = 0;

    if (count($statues)===1) {
        return $result;
    }

    $min = min($statues);
    $max = max($statues);
    sort($statues);

    $counter = $min;
    do {
        $counter++;
        if (!in_array($counter, $statues)) {
            $result++;
        }
        
    } while ($counter < $max);

    return $result;
}

print makeArrayConsecutive2([1]);