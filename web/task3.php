<?php

    echo '<div class="container">';
    echo '<h2>Put your number</h2>';
    echo '<form method="post">
          <input type="number" name="numberSum">
          <input type="submit">
          </form>';

    function sumNumber() {
        $sum = 0;
        if (!empty($_POST['numberSum'])) {
            $number = $_POST['numberSum'];
            for ($i = 0; $i < $number; $i++) {
                $sum += $i;
            }
            echo "Your sum $sum";
        }
    }

    sumNumber();

    echo '<br>';
    echo '</div>';


    include dirname(__DIR__) . '/web/footer.tpl.php';
?>