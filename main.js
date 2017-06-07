quoteBank = [
	{
	quote: "Walk beside me and be my friend.",
	source: "Albert Camus"
	},

	{
	quote: "A man is what he thinks about all day long.",
	source:"Ralph Waldo Emerson"
	},

	{
	quote: "Life in abundance comes only through great love.",
	source:"Albert Hubbard"
	},

	{
	quote: "To dwell is to garden.",
	source:"Martin Heidegger"
	},

	{
	quote: "Everyone talks about the weather, but nobody does anything about it.",
	source:"Charles Dudley Warner"
	},

	{
	quote: "The creation of a thousand forests is in one acorn.",
	source:"Ralph Waldo Emerson"
	},

	{
	quote: "Space is the breath of art.",
	source:"Frank Lloyd Wright"
	},

	{
	quote: "Life is a long lesson in humility.",
	source:"James M. Barrie"
	},

	{
	quote: "Freedom of the press is guaranteed only to those who own one.",
	source:"A. J. Liebling"
	},

	{
	quote: "The truth is more important than the facts.",
	source:"Frank Lloyd Wright"
	},

	{
	quote: "The foot feels the foot when it feels the ground.",
	source:"Buddha"
	}
];

randomNum = 0; //initial quote will be the very first one
//function that rerolls a num and assign it to randomNum
randomizer = function() {
	randomNum = Math.floor(Math.random()*(quoteBank.length));
}

text = document.getElementsByClassName("quote")[0];
person = document.getElementsByClassName("source")[0];
refresh = document.getElementsByClassName("refresh")[0];

//function that adds text into the quotebox. call it once for the very first quote
changeQuote = function() {
	text.innerHTML = "\"" + quoteBank[randomNum].quote +"\"";
	person.innerHTML = "- " + quoteBank[randomNum].source;
}
changeQuote();

//when the next button is pressed, reroll and change the quotebox
refresh.addEventListener("click", function() {
	randomizer();
	changeQuote();
});