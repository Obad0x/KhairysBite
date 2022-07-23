<?php 
function Products($productname, $productimage,$productprice){



    $productDiv = "<div id=\"card\">
    <img src=\"$productimage\" alt=\"Products1\" id=\"product1\">
    
    <span id=\"identity\">$productname</span>
 
    <br>
    
    <button id=\"tocrt\">Add to cart</button>
    <span id=\"identity\">$productprice</span>
    
 
 </div>" ;

 echo $productDiv;
}


?>