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
		            	<a href='#'>Where this leads</a>
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

// Gecko container
var Geckos  = React.createClass({
	render: function(){
		return (
			<GeckoCards geckos={ gekkoData } />
		)
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