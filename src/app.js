var gekkoData = [
	{
		id : 1,
		age : "",
		weight : {
			date : "weight"
		},
		dateAquired : "",
		type : {
			genus : "",
			species : "",
			commonName : "Crested Gecko"
		},
		sex : "",
		name : "Smiley",
		breedingCode : "",
		gekkoImage : "img/geckos/crested-gecko-image.jpg"
	},
	{
		id: 2,
		age : "",
		weight : {
			date : "weight"
		},
		dateAquired : "",
		type : {
			genus : "",
			species : "",
			commonName : "Crested Gecko"
		},
		sex : "",
		name : "Dopey",
		breedingCode : "",
		gekkoImage : "img/geckos/crested-gecko-image.jpg"
	},
	{
		id: 3,
		age : "",
		weight : {
			date : "weight"
		},
		dateAquired : "",
		type : {
			genus : "",
			species : "",
			commonName : "Crested Gecko"
		},
		sex : "",
		name : "Coolio",
		breedingCode : "",
		gekkoImage : "img/geckos/crested-gecko-image.jpg"
	}
];

var GeckoCard = React.createClass({
	render: function(){
		return (
			<div className="medium-4 columns">
	            <div className="card">
					<div className="image">
		                <img src={this.props.gecko.gekkoImage} />
		                <span className="title">{this.props.gecko.name}</span>
		            </div>
		            <div className="content">
		            	<span>{this.props.gecko.type.commonName}</span>
		            </div>
		            <div className="action">
		            	<a href='#'>View More</a>
		            </div>
	            </div>
            </div>
		)
	}
});

var GeckoCards = React.createClass({
	render: function(){
		var geckoCards = this.props.geckos.map(function(gecko){
			return <GeckoCard key={gecko.id} gecko={gecko} />
		});
		return (
			<div className="row">
				{ geckoCards }
			</div>
		)
	}
});

// add a bug component
var GeckoAdd = React.createClass({
	render: function(){
		return (
			<div className="row">
				<form name="geckoAdd">
					<input type="text" name="name" placeholder="Name" />
					<input type="text" name="commonName" placeholder="Common Name" />
					<button onClick={this.handleSubmit}>Add A Gecko</button>
				</form>
			</div>
		)
	},

	handleSubmit: function(e){
		e.preventDefault();
		var form = document.forms.geckoAdd;
		this.props.addGecko({ name: form.name.value, commonName: form.commonName.value, gekkoImage: "img/geckos/crested-gecko-image.jpg" });
		// Clear the form values
		form.name.value = '';
		form.commonName.value = '';
	}
});

// Gecko container
var Geckos  = React.createClass({
	getInitialState : function(){
		return (
			{ geckos: gekkoData }
		)
	},

	render: function(){
		return (
			<div>
				<GeckoCards geckos={ this.state.geckos } />
				<GeckoAdd addGecko={ this.addGecko } />
			</div>
		)
	},

	addGecko: function(addedGecko){
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

ReactDOM.render(
	<Geckos />,
	document.getElementById('geckoContainer')
);


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