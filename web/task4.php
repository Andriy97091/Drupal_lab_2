<?php

    echo '<div class="container">';
    echo '<br>';
    $firstCub = mt_rand(1, 6);
    $secondCub = mt_rand(1, 6);
    $slogan = ["0", "My dear!", "You are not the worst!", "God loves you!",
        "Nice try ;)", "Great job :)", "Lucky bastard! :D"];
    $arrlength = count($slogan) + 2;
    if ($firstCub == $secondCub) {
        echo '<h1 style="text-align: center; color: green">Jackpot!</h1>';
    } else {
        for ($i = 1; $i < $arrlength; $i++) {
            if ($i == $firstCub || $i == $secondCub) {
                echo "$i $slogan[$i] <br>";
            }
        }
    }
    echo '<br>';
    echo '</div>';
    include dirname(__DIR__) . '/web/footer.tpl.php';

?>