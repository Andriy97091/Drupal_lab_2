<?php

    echo '<br>';
    echo '<h1 style="text-align: center">Simple Tasks</h1>';

    echo '<br>';
    $file = !empty($_GET['file']) ? $_GET['file'] : NULL;

    // Check proper file...
    $files = ['task1.php', 'task2.php' /* and so on... */];
    if (in_array($file, $files)) {
        require_once($file);
    }
    else {
        echo 'Choose task to review...</br>';

    }
    include dirname(__DIR__) . '/web/footer.tpl.php';
?>