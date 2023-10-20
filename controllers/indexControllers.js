const getIndexPage = (req, res) => {
	res.render("index", { title: "EventVault" });
};

module.exports = {
	getIndexPage,
};
