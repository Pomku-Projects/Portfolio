<?php
$targetDir = "uploads/";
$targetFile = $targetDir . basename($_FILES["file"]["name"]);

if (move_uploaded_file($_FILES["file"]["tmp_name"], $targetFile)) {
    echo "Fichier uploadé : " . htmlspecialchars(basename($_FILES["file"]["name"]));
} else {
    echo "Erreur lors de l'upload.";
}
?>