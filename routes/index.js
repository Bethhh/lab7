
var models = require('../models');

/*
 * GET home page.
 */

exports.view = function(req, res){

	models.Project
		.find()
		
		.exec(renderProjects);

	function renderProjects(err, projects) {
		res.render('index', { 'projects': projects });
	}

};