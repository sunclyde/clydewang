var express = require('express');
var router = express.Router();
var Page = require('../app/core/Page');

/* GET card library. */
router.get('/card', function (req, res, next) {
	page = new Page();
	page.ns = 'library';
	page.categories = [
		{
			name: "Attack"
		},
		{
			name: "Heal"
		},
		{
			name: "Buff"
		},
		{
			name: "Debuff"
		},
		{
			name: "Summon"
		},
	];
	page.cards = [
		{
			name: "Card1",
			rare: "N",
			description: "This is a card",
		},
		{
			name: "Card2",
			rare: "N",
			description: "This is a card",
		},
		{
			name: "Card3",
			rare: "N",
			description: "This is a card",
		},
		{
			name: "Card4",
			rare: "R",
			description: "This is a card",
		},
		{
			name: "Card5",
			rare: "R",
			description: "This is a card",
		},
		{
			name: "Card6",
			rare: "R",
			description: "This is a card",
		},
		{
			name: "Card7",
			rare: "SR",
			description: "This is a card",
		},
		{
			name: "Card8",
			rare: "SR",
			description: "This is a card",
		},
		{
			name: "Card9",
			rare: "SR",
			description: "This is a card",
		},
		{
			name: "Card10",
			rare: "SSR",
			description: "This is a card",
		},
		{
			name: "Card11",
			rare: "SSR",
			description: "This is a card",
		},
		{
			name: "Card12",
			rare: "SSR",
			description: "This is a card",
		}
	]
	res.render('library/card', { page: page });
});

module.exports = router;
