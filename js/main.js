window.onload=initialize();

var colorIndex={
		"types":[
		{
		 "key":"Urban",
		 "value":"#FFAB48"		
		},{
		 "key":"Forest",
		 "value":"#32CD99"
		},{
		 "key":"Agriculture",
		 "value":"#CC6B32"
		},{
		 "key":"",
		 "value":"white"
		},
		{	
		 "key":"weather",
		 "value":"#79CDCD"
		}
		]  	
  	}

function initialize(){
	setMap();
}

function setMap(){
console.log("set map");

	var sitesData = [
	  {
	    "id":1,
	    "type":"Urban",
	    "name":"Oist",
	    "site":"Oist-Urban",
	    "region":"Central",
	    "lat":26.467061,
	    "lon":127.829757
	  },
	  {
	    "id":2,
	     "type":"Forest",
	    "name":"Hedo",
	    "site":"Hedo-Forest",
	    "region":"North",
	    "lat":26.872193,
	    "lon":128.264997
	  },
	  {
	    "id":3,
	    "type":"Urban",
	    "name":"Naha",
	    "site":"Naha-Urban",
	    "region":"South",
	    "lat":26.209622,
	    "lon":127.681323
	  },
	  {
	    "id":4,
	    "type":"Agriculture",
	    "name":"Heiwasozonomori",
	    "site":"Heiwasozonomori-Agriculture",
	    "region":"South",
	    "lat":26.084211,
	    "lon":127.687560
	  }
  ];


var dataset; //object with features (array of 81 sites)
d3.json("../data/okeon.geojson", function(data) {
    dataset = data.features;
    console.log(dataset);
    //any other functions that depend on data
});

var dataset2=[{"coordinates":[128.2649092,26.7233871],
				"lat":26.7233871,
				"lon":128.2649092,
				"name":"やんばる学びの森",
				"description":"",
				"type":"Forest",
				"placepageUri":"https://www.google.com/earth/rpc/entity?lat=26.7233871&lng=128.2649092&fid=0x34e4411b7da459a7:0xaa0051b7317f20b1&q=沖縄学びの森&hl=ja&gl=jp&client=earth-client&cv=7.1.5.1557&useragent=GoogleEarth/7.1.5.1557(Macintosh;Mac OS X (10.9.5);ja;kml:2.2;client:Free;type:default)"
				},
				{"coordinates":[127.806651,26.375395],
				"lat":26.375395,
				"lon":127.806651,
				"name":"東南植物楽園",
				"type":"Urban",
				"description":"",
				"placepageUri":"https://www.google.com/earth/rpc/entity?lat=26.375394999999997&lng=127.80665099999997&fid=0x34e511d8db9268d7:0x97aa9da99ec7390b&q=東南植物楽園&hl=ja&gl=jp&client=earth-client&cv=7.1.5.1557&useragent=GoogleEarth/7.1.5.1557(Macintosh;Mac OS X (10.9.5);ja;kml:2.2;client:Free;type:default)"
				},
				{"coordinates":[128.191423,26.7334337],
				"lat":26.7334337,
				"lon":128.191423,
				"name":"国頭村森林公園",
				"type":"Agriculture",
				"description":"",
				"placepageUri":"https://www.google.com/earth/rpc/entity?lat=26.733433700000003&lng=128.191423&fid=0x34e443a0ed71fc0d:0x17fd069f44efbf8d&q=国頭村森林公園&hl=ja&gl=jp&client=earth-client&cv=7.1.5.1557&useragent=GoogleEarth/7.1.5.1557(Macintosh;Mac OS X (10.9.5);ja;kml:2.2;client:Free;type:default)"
				},
				{"coordinates":[128.0491877,26.5985351],
				"lat":26.5985351,
				"lon":128.0491877,
				"name":"多野岳",
				"type":"Forest",
				"description":"",
				"placepageUri":""
				},
				{"coordinates":[127.9626731,26.6698946],
				"lat":26.6698946,
				"lon":127.9626731,
				"name":"乙羽岳森林公園展望台",
				"type":"Forest",
				"description":"",
				"placepageUri":"https://www.google.com/earth/rpc/entity?lat=26.669169399999998&lng=127.9626156&fid=0x34e4f865d5db7bc3:0x647efe0039b399db&q=乙羽岳森林公園&hl=ja&gl=jp&client=earth-client&cv=7.1.5.1557&useragent=GoogleEarth/7.1.5.1557(Macintosh;Mac OS X (10.9.5);ja;kml:2.2;client:Free;type:default)"
				},
				{"coordinates":[127.7135299,26.2259972],
				"lat":26.2259972,
				"lon":127.7135299,
				"name":"末吉公園",
				"type":"Urban",
				"description":"",
				"placepageUri":""
				},
				{"coordinates":[127.9167063,26.6518586],
				"lat":26.6518586,
				"lon":127.9167063,
				"name":"八重岳桜の森公園",
				"type":"Urban",
				"description":"",
				"placepageUri":"https://www.google.com/earth/rpc/entity?lat=26.651858599999997&lng=127.9167063&fid=0x34e4f93f31a9014f:0x8d4b500c6edc0948&q=八重岳森林公園&hl=ja&gl=jp&client=earth-client&cv=7.1.5.1557&useragent=GoogleEarth/7.1.5.1557(Macintosh;Mac OS X (10.9.5);ja;kml:2.2;client:Free;type:default)"
				},
				{"coordinates":[127.8260275,26.1734831],
				"lat":26.1734831,
				"lon":127.8260275,
				"name":"斎場御嶽",
				"type":"Agriculture",
				"description":"",
				"placepageUri":"https://www.google.com/earth/rpc/entity?lat=26.1734831&lng=127.8260275&fid=0x34e571f2701161df:0x3954cd280c2c5319&q=斎場御嶽&hl=ja&gl=jp&client=earth-client&cv=7.1.5.1557&useragent=GoogleEarth/7.1.5.1557(Macintosh;Mac OS X (10.9.5);ja;kml:2.2;client:Free;type:default)"
				},
				{"coordinates":[127.82851,26.46302],
				"lat":26.46402,
				"lon":127.82951,
				"name":"WeatherStation01",
				"type":"weather",
				"description":"",
				"placepageUri":""
				},
				{"coordinates":[127.82809,26.46351],
				"lat":26.46351,
				"lon":127.82809,
				"name":"S0006",
				"type":"",
				"description":"",
				"placepageUri":""
				},
				{"coordinates":[127.82893,26.46294],
				"lat":26.46294,
				"lon":127.82893,
				"name":"S0005",
				"type":"",
				"description":"",
				"placepageUri":""
				},
				{"coordinates":[127.82857,26.4631],
				"lat":26.4631,
				"lon":127.82857,
				"name":"S0004",
				"type":"",
				"description":"",
				"placepageUri":""
				},
				{"coordinates":[127.84184,26.46504],
				"lat":26.46604,
				"lon":127.84284,
				"name":"WeatherStation02",
				"type":"weather",
				"description":"",
				"placepageUri":""
				},
				{"coordinates":[127.8419,26.46509],
				"lat":26.46509,
				"lon":127.8419,
				"name":"S0008",
				"type":"",
				"description":"",
				"placepageUri":""
				}
				];

//okinawa_adm2.geojson  	




  	//console.log("width");
  	//console.log($(window).width());
	var width = getWidth($(window).width());/* $("#mapContainer").width(); */
	var height= 600;
	
	var map= d3.select("#map")
			.append("svg")
			.attr("width",width)
			.attr("height",height);

	

	var graticule = d3.geo.graticule()
	    
	    .step([0.5, 0.5]);
	    

	var projection = d3.geo.mercator()
		.center([127.95, 26])
	    .scale(180000)
	    .translate([width /2, height ])
	    .precision(.1);



	var path = d3.geo.path()
	    			.projection(projection);
	
	
	
	/* note add graticule to map after projection */
	map.append("path")
	    .datum(graticule)
	    .attr("class", "graticule")
	    .attr("d", path);
    
    var gratBackground=map.append("path")
    	.datum(graticule.outline)
    	.attr("class","gratBackground")
    	.attr("d",path);
    	
 
   var g = map.append("g");
   
   
   d3.json("data/okinawa_adm2_new.json", function(error,adm2){
	console.log(adm2);
	
	
	adm2.features.forEach(function(d){
		console.log(d.properties.ORIG_FID+d.properties.City_Name+d.properties.District+d.properties.名称);
	
	});
	
	
	  var okinawa = g.selectAll("path")
               .data(adm2.features)
               .enter()
               .append("path")
               .attr("d", path)
               .attr("fill","#888A63")
               .style("stroke","white")
               .style("stroke-width",0.5)
               .attr("id",function(d){
					var finalId= "id"+d.properties.ORIG_FID;
					return finalId;
		 
				 })
               .on('mouseover',function(d){
               		console.log(d);
               		//console.log(d.properties.ORIG_FID);
               		//console.log(d.properties.District);
               		
               		var finalId= "id"+d.properties.ORIG_FID;
               		d3.select(this)//select the current county in the dome	
					.style("opacity", 0.5);
					
					
               })
               .on('mouseover',drawInfolabel2)
               .on('mouseout',removeInfolabel2)
               .on("mouseout",function(d){
   		 
   		 			
               		var finalId= "id"+d.properties.ORIG_FID;
               		d3.select(this)//select the current county in the dome	
					.style("opacity", 1);
					
		
   				 });
               
                var sites = g.append("g");
	
	
		sites.selectAll("circle")
	        .data(dataset2)
	        .enter()
	        .append("circle")
	        .attr("r", 5)
			.attr("fill", function(d){
							for(var a=0;a<colorIndex.types.length;a++){
								if(colorIndex.types[a].key==d.type){
									return colorIndex.types[a].value;
								}
							}
				   
						})
	        .style("stroke", "black")
	        .classed("point", true)
	        .attr("transform", function(d) {
	        //console.log(d.geometry.coordinates[1]+","+d.geometry.coordinates[0]);
			    return "translate(" + projection([ d.lon, d.lat ]) + ")";
			  
			})
			.on("mouseover",drawInfolabel)
			.on("mouseout",removeInfolabel)
			.on("mouseover.border",function(){
				d3.select(this)
				.transition()
				.duration(1000)
				.style({
					'stroke-width':10,
					'stroke-opacity':0.3,
					'fill-opacity':1,
					'stroke':'#A7C9AE',
					'cursor':'pointer'
					});
			})
			.on("mouseout.border",function(){
				d3.select(this)
				.transition()
				.duration(2000)
				.style({
					'stroke-width':0.3,
					'stroke-opacity':1,
					'fill-opacity':1,
					'stroke':'black'
					});
			})
			.on("click",drawInfopabel)
			.each(function(){
				return this.parentNode.appendChild(this);
			});
	

});
   
// 	d3.json("data/okinawa.topojson", function(error,jp){
	
		
		//var okinawa = map.append("path")
		// var okinawa = g.append("path")
// 						.datum(topojson.object(jp,jp.objects.collection))
// 						.attr("class","okinawa")
// 						.attr("d",path);
// 						
	   //var sites = map.append("g");
// 	    var sites = g.append("g");
// 	
// 	
// 		sites.selectAll("circle")
// 	        .data(dataset2)
// 	        .enter()
// 	        .append("circle")
// 	        .attr("r", 5)
// 			.attr("fill", function(d){
// 							for(var a=0;a<colorIndex.types.length;a++){
// 								if(colorIndex.types[a].key==d.type){
// 									return colorIndex.types[a].value;
// 								}
// 							}
// 				   
// 						})
// 	        .style("stroke", "black")
// 	        .classed("point", true)
// 	        .attr("transform", function(d) {
	        //console.log(d.geometry.coordinates[1]+","+d.geometry.coordinates[0]);
// 			    return "translate(" + projection([ d.lon, d.lat ]) + ")";
// 			  
// 			})
// 			.on("mouseover",drawInfolabel)
// 			.on("mouseout",removeInfolabel)
// 			.on("mouseover.border",function(){
// 				d3.select(this)
// 				.transition()
// 				.duration(1000)
// 				.style({
// 					'stroke-width':10,
// 					'stroke-opacity':0.3,
// 					'fill-opacity':1,
// 					'stroke':'#A7C9AE',
// 					'cursor':'pointer'
// 					});
// 			})
// 			.on("mouseout.border",function(){
// 				d3.select(this)
// 				.transition()
// 				.duration(2000)
// 				.style({
// 					'stroke-width':1,
// 					'stroke-opacity':1,
// 					'fill-opacity':1,
// 					'stroke':'black'
// 					});
// 			})
// 			.on("click",drawInfopabel)
// 			.each(function(){
// 				return this.parentNode.appendChild(this);
// 			});
	
	
	   // sites.selectAll("circle")
// 	        .data(sitesData)
// 	        .enter()
// 	        .append("circle")
// 	        .attr("r", 6)
// 	        .attr("fill", function(d){
// 				for(var a=0;a<colorIndex.types.length;a++){
// 					if(colorIndex.types[a].key==d.type){
// 						return colorIndex.types[a].value;
// 					}
// 				}
// 				   
// 	        })
// 	        .style("stroke", "black")
// 	        .classed("point", true)
// 	        .attr("transform", function(d) {
// 			    return "translate(" + projection([ d.lon, d.lat ]) + ")";
// 			})
// 			.on("mouseover",drawInfolabel)
// 			.on("mouseout",removeInfolabel)
// 			.on("mouseover.border",function(){
// 				d3.select(this)
// 				.transition()
// 				.duration(1000)
// 				.style({
// 					'stroke-width':10,
// 					'stroke-opacity':0.3,
// 					'fill-opacity':1,
// 					'stroke':'#A7C9AE',
// 					'cursor':'pointer'
// 					});
// 			})
// 			.on("mouseout.border",function(){
// 				d3.select(this)
// 				.transition()
// 				.duration(2000)
// 				.style({
// 					'stroke-width':1,
// 					'stroke-opacity':1,
// 					'fill-opacity':1,
// 					'stroke':'black'
// 					});
// 			})
// 			.on("click",drawInfopabel)
// 			.each(function(){
// 				return this.parentNode.appendChild(this);
// 			});

		
	
// 	});



// zoom and pan
var zoom = d3.behavior.zoom()
    .on("zoom",function() {
        g.attr("transform","translate("+ 
            d3.event.translate.join(",")+")scale("+d3.event.scale+")");
        g.selectAll("path")  
            .attr("d", path.projection(projection)); 
        g.selectAll("circle")
	        .attr("r", 5/d3.event.scale);
        
  });



zoom.scaleExtent([0.8,10]);

map.call(zoom);




				  
	
}//end setMap

// for points
function drawInfolabel(d,i,j){
	//console.log("d");
	//console.log(d);
	
	var labelHTML = "<p>Site: "+d.name+"<br>Type: "+d.type+"</p>";
	var infolabel=d3.select("#mapContainer").append("div")
		.attr("class","infolabel")
		.style("background-color", function(){
				for(var a=0;a<colorIndex.types.length;a++){
					if(colorIndex.types[a].key==d.type){
						return colorIndex.types[a].value;
					}
				}
				   
	     })
		.attr("id", "infolabel-"+i)
		.style("color",function(){
				if(d.type==""){
						return 'black';
				  }else{
				  		return 'white';
				  }
							
		})
		.html(labelHTML);
}

function removeInfolabel(d,i){
	//d3.select(".infolabel").remove();
	d3.select("#infolabel-"+i).remove();
}

//side panel
function drawInfopabel(d,i,j){
	d3.selectAll(".infopanel").remove();
	var labelHTML = "<h2 class='page-header'>"+d.name+"</h2><br><p class='thick'>Type: </p><p>"+d.type
					+"</p><br> <p class='thick'>Description: </p><p>"+d.description
					+"</p><br> <p class='thick'>Coordinates: </p><p>["+d.lat+" , "+d.lon+"]"
					+"</p><br> <p class='thick'>Region: <p>"+d.region
					+"</p>";
	var infolabel=d3.select("#metadata").append("div")
		.attr("class","infopanel")
		.attr("id", "infopanel-"+i)
		.html(labelHTML);
}


//for admin2
function drawInfolabel2(d,i,j){
	//console.log("d");
	console.log(d);
	
	d3.select(this)//select the current county in the dome	
					.style("opacity", 0.5);
	
	var labelHTML = "<p>City: "+d.properties.City_Name+"<br>District: "+d.properties.District+"</p>";
	var infolabel=d3.select("#mapContainer").append("div")
		.attr("class","infolabel")
		.style("background-color", "black")
		.attr("id", "infolabel-two-"+i)
		.style("color","white")
		.html(labelHTML);
}

function removeInfolabel2(d,i){

	d3.select(this)//select the current county in the dome	
					.style("opacity", 1);
	//d3.selectAll(".infolabel").remove();
	d3.select("#infolabel-two-"+i).remove();
}



function getWidth(width){
	
	if (width > 550) {
		return 700;
	}else{
		return 450;
	}
}

	
