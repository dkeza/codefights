<?php

function shapeArea($n) {
    $result = 1;
    if ($n > 1) {
        $result = ($n * $n) + (($n - 1) * ($n - 1));
    }
    return $result;
}

echo shapeArea(2);