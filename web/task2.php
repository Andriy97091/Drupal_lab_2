<?php

    echo '<div class="container">';
    echo '<br>';
    echo '<form method="post">
        <input type="number" name="katet1">
        <input type="number" name="katet2">
        <input type="number" name="gipotenuza">
        <input type="submit">
        </form>';

    function pifagorT() {
        if (!empty($_POST['katet1'] && $_POST['katet2'] && $_POST['gipotenuza']))
        {
            $k1 = $_POST['katet1'];
            $k2 = $_POST['katet2'];
            $g = $_POST['gipotenuza'];
            $res = $k1*$k1+$k2*$k2 ." = ". $g*$g;
            echo $res;
        }
    }

    pifagorT();

    echo '<br>';
    echo '</div>';

    include dirname(__DIR__) . '/web/footer.tpl.php';
?>