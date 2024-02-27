<?php
$con = new mysqli('localhost', 'root', '', 'angularTestdb');
if ($con) {
    echo "connection successful.";
} else {
    die(mysqli_error($con));
}
?>