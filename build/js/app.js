var gekkoData = [{
	id: 1,
	age: "",
	weight: {
		date: "weight"
	},
	dateAquired: "",
	type: {
		genus: "",
		species: "",
		commonName: "Crested Gecko"
	},
	sex: "",
	name: "Smiley",
	breedingCode: "",
	gekkoImage: "img/geckos/crested-gecko-image.jpg"
}, {
	id: 2,
	age: "",
	weight: {
		date: "weight"
	},
	dateAquired: "",
	type: {
		genus: "",
		species: "",
		commonName: "Crested Gecko"
	},
	sex: "",
	name: "Dopey",
	breedingCode: "",
	gekkoImage: "img/geckos/crested-gecko-image.jpg"
}, {
	id: 3,
	age: "",
	weight: {
		date: "weight"
	},
	dateAquired: "",
	type: {
		genus: "",
		species: "",
		commonName: "Crested Gecko"
	},
	sex: "",
	name: "Coolio",
	breedingCode: "",
	gekkoImage: "img/geckos/crested-gecko-image.jpg"
}];

var GeckoCard = React.createClass({
	displayName: "GeckoCard",

	render: function () {
		return React.createElement(
			"div",
			{ className: "medium-4 columns" },
			React.createElement(
				"div",
				{ className: "card" },
				React.createElement(
					"div",
					{ className: "image" },
					React.createElement("img", { src: this.props.gecko.gekkoImage }),
					React.createElement(
						"span",
						{ className: "title" },
						this.props.gecko.name
					)
				),
				React.createElement(
					"div",
					{ className: "content" },
					React.createElement(
						"span",
						null,
						this.props.gecko.type.commonName
					)
				),
				React.createElement(
					"div",
					{ className: "action" },
					React.createElement(
						"a",
						{ href: "#" },
						"View More"
					)
				)
			)
		);
	}
});

var GeckoCards = React.createClass({
	displayName: "GeckoCards",

	render: function () {
		var geckoCards = this.props.geckos.map(function (gecko) {
			return React.createElement(GeckoCard, { key: gecko.id, gecko: gecko });
		});
		return React.createElement(
			"div",
			{ className: "row" },
			geckoCards
		);
	}
});

// add a bug component
var GeckoAdd = React.createClass({
	displayName: "GeckoAdd",

	render: function () {
		return React.createElement(
			"div",
			{ className: "row" },
			React.createElement(
				"form",
				{ name: "geckoAdd" },
				React.createElement("input", { type: "text", name: "name", placeholder: "Name" }),
				React.createElement("input", { type: "text", name: "commonName", placeholder: "Common Name" }),
				React.createElement(
					"button",
					{ onClick: this.handleSubmit },
					"Add A Gecko"
				)
			)
		);
	},

	handleSubmit: function (e) {
		e.preventDefault();
		var form = document.forms.geckoAdd;
		this.props.addGecko({ name: form.name.value, commonName: form.commonName.value, gekkoImage: "img/geckos/crested-gecko-image.jpg" });
		// Clear the form values
		form.name.value = '';
		form.commonName.value = '';
	}
});

// Gecko container
var Geckos = React.createClass({
	displayName: "Geckos",

	getInitialState: function () {
		return { geckos: gekkoData };
	},

	render: function () {
		return React.createElement(
			"div",
			null,
			React.createElement(GeckoCards, { geckos: this.state.geckos }),
			React.createElement(GeckoAdd, { addGecko: this.addGecko })
		);
	},

	addGecko: function (addedGecko) {
		var geckosModified = this.state.geckos.slice(),
		    gecko = {};
		gecko.id = this.state.geckos.length + 1;
		gecko.name = addedGecko.name;
		gecko.type = {};
		gecko.type.commonName = addedGecko.commonName;
		gecko.gekkoImage = addedGecko.gekkoImage;
		geckosModified.push(gecko);
		this.setState({ geckos: geckosModified });
	}
});

ReactDOM.render(React.createElement(Geckos, null), document.getElementById('geckoContainer'));

//   function setGeckoSpecies(){
//     for (var genus in geckoTypeObj){
//       var speciesArray = geckoTypeObj[genus];
//       for (var i = 0; speciesArray.length > i; i++){
//         $('#speciesDropdown').append('<option value="' + genus + "' '" +  speciesArray[i] + '">' + genus + " " +  speciesArray[i] + '</option>');
//       }
//     }
//   }

//   setGeckoSpecies();

// }(window, window.document));