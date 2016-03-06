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
						"Where this leads"
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

// Gecko container
var Geckos = React.createClass({
	displayName: "Geckos",

	render: function () {
		return React.createElement(GeckoCards, { geckos: gekkoData });
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