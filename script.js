
breadTypeHamburger=`hamburger`;
breadTypeCheeseburger=`cheeseburger`;
hamburgerPrice=10;
cheeseburgerPrice=15;
totalPrice=0;
cheeseburgerAddition=`double cheese`;
doubleCheesePrice=10;
potatoSizeSmall=`small`;
potatoSizeMid=`middle`;
potatoSizeBig=`big`;
potatoSmallPrice=10;
potatoMidPrice=15;
potatoBigPrice=20;
sauceKetchup=`ketchup`;
sauceMayonnaise=`mayonnaise`;
ketchupPrice=2;
mayonnaisePrice=3;
writeSauce=false;
writePotato=false;



breadType= prompt(`Would you like ${breadTypeHamburger} or ${breadTypeCheeseburger}?`);


if (breadType!==null) {
    breadType = breadType.replaceAll(" ", "").toLowerCase();
};
    if (breadType === breadTypeCheeseburger) {
        totalPrice += cheeseburgerPrice;
    } else {
        breadType=breadTypeHamburger;
        totalPrice += hamburgerPrice;
        totalPrice=totalPrice;
    };



if (breadTypeCheeseburger) {
    cheeseburgerAddition= confirm(`Would you like ${cheeseburgerAddition} ?`);
    if (cheeseburgerAddition===true) {
        totalPrice+=doubleCheesePrice;
        totalPrice=totalPrice;
    };
};


potatoRequest=confirm(`Would you like potato`);

if(potatoRequest) {
    potatoSize=prompt( `Choose potato size: ${potatoSizeSmall}/${potatoSizeMid}/${potatoSizeBig}`);

if (potatoSize!==null) {
    potatoSize=potatoSize.replaceAll("", "").toLowerCase();
};
    if (potatoSize===potatoSizeBig) {
        totalPrice += potatoBigPrice;
    } else if (potatoSize === potatoSizeMid) {
        totalPrice += potatoMidPrice;
    } else {
        potatoSize = potatoSizeSmall;
        totalPrice+=potatoSmallPrice;
    };
         };


sauceRequest=confirm(`Would yo like sauce?`);

if (sauceRequest) {
    sauceType=prompt(`Choose type of sauce: ${sauceKetchup}/ ${sauceMayonnaise} `);

    if (sauceType!==null) {
        sauceType=sauceType.replaceAll("", "") .toLowerCase();
    };
if (sauceType===sauceMayonnaise) {
    totalPrice+=mayonnaisePrice;
} else {
    sauceType=sauceKetchup;
    totalPrice+=ketchupPrice;
  };

    };

console.log(totalPrice);

if(potatoRequest){
    writePotato = `<li>Potato 🍟: ${potatoSize} </li>`
}
    else {writePotato=""
    };

if(sauceRequest){
    writeSauce = `<li>Sauce 🧂: ${sauceType} </li>`
}
else {writeSauce=""
};

document.write(`<h2>Your order:</h2>
	<ul>
		<li>Bread 🍔: ${breadType} </li>
		 ${writePotato}
		 ${writeSauce} 
	</ul>

	<p>Price: $${totalPrice} </p>
`);


