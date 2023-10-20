const getLoginPage = (req, res) => {
	res.render("login", { title: "EventVault - login" });
};

module.exports = {
	getLoginPage,
};
