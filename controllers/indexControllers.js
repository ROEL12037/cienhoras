const getIndexPage = (req, res) => {
	const isAuthenticated = req.isAuthenticated();
	res.render("index", {
		title: "EventVault",
		isAuthenticated: isAuthenticated,
	});
};

module.exports = {
	getIndexPage,
};
