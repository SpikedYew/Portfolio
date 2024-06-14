<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<!--htmlspecialchars - sprawdza, eby nie było kodu w formularzu (zeby nie dalo sie hackowac)-->
<!--$_SERVER to superglobal zbierajacy infomracje o stronie (jest arrayem) a php_self to ścieka do formularza na którym jesteśmy czyli index.php-->
    <form action="<?php echo htmlsecialchars($_SERVER["PHP_SELF"]); ?>" method="post">
    <input type="number" name="num01" placeholder="number one">
    <select name="operator"></select>
    </form>
    
</body>
</html>