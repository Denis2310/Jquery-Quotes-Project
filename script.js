var RandomColor;
var jsonQuotes = "";
var QuotesJS;
QuoteNumber = 0;

function getRandomColor() 
	{
    	var letters = '0123456789ABCDEF'.split('');
    	var color = '#';
    	for (var i = 0; i < 6; i++ ) 
    		{
       	 		color += letters[Math.floor(Math.random() * 16)];
    		}
    	return color;
	};

function length(obj) {
    return Object.keys(obj).length;
}

function createTweetButton(){
	$("#tweet").empty();
	$("#tweet").append("<a></a>");
	$("a").addClass("twitter-share-button");
	$("a").attr({href: "https://twitter.com/share?ref_src=twsrc%5Etfw"});
	$("a").attr("data-text", $(".quote").text() + " by: " + $(".quote-autor").text());
	twttr.widgets.load();
}

function nextQuote(){
		$(".quote").html(QuotesJS.quotes.quote[QuoteNumber].name);
		$(".quote-autor").html(QuotesJS.quotes.quote[QuoteNumber].by);
		RandomColor = getRandomColor();
		$("body").css("background-color", RandomColor);
		$("#header").css("color", RandomColor);
		$("#next").css("background-color", RandomColor);
}

function previousQuote(){
		$(".quote").html(QuotesJS.quotes.quote[QuoteNumber].name);
		$(".quote-autor").html(QuotesJS.quotes.quote[QuoteNumber].by);
		RandomColor = getRandomColor();
		$("body").css("background-color", RandomColor);
		$("#header").css("color", RandomColor);
		$("#next").css("background-color", RandomColor);
}

$(window).on("load", function(){
	RandomColor = getRandomColor();
	$("body").css("background-color", RandomColor);
	$("#header").css("color", RandomColor);
	$("#next").css("background-color", RandomColor);

	$.getJSON('json/quotes.json', function (data) {
		// begin accessing JSON data here
		jsonQuotes += JSON.stringify(data);
		QuotesJS = JSON.parse(jsonQuotes);
		$(".quote").html(QuotesJS.quotes.quote[0].name);
		$(".quote-autor").html(QuotesJS.quotes.quote[0].by);
		createTweetButton();
	});	
});


$("#next").click(function(){
		if(QuoteNumber < length(QuotesJS.quotes.quote) - 1)
			{
				QuoteNumber++;
				nextQuote();
				createTweetButton();
			}
			else{
				QuoteNumber = 0;
				nextQuote();
				createTweetButton();
			}		
	}
);

$("#previous").click(function(){
		if(QuoteNumber > 0)
		{
			QuoteNumber--;
			previousQuote();
			createTweetButton();
		}
		else{
			QuoteNumber = length(QuotesJS.quotes.quote) - 1;
			previousQuote();
			createTweetButton();
		}
	}
);


