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
		 "value":"#ffffff"
		},
		{	
		 "key":"weather",
		 "value":"#79CDCD"
		},
		{"key":"all",
		"value":"#fb6a4a",
		"id":"color6"
		}
		]  	
  	}
var sites;

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

var dataset2=[{"coordinates":[128.2649092,26.7233871],
				"lat":26.7233871,
				"lon":128.2649092,
				"name":"やんばる学びの森",
				"name_english":"Yambaru manabi no mori",
				"description":"",
				"type":"Forest",
				"adm2":"Kunigami",
				"region":"North",
				"placepageUri":"https://www.google.com/earth/rpc/entity?lat=26.7233871&lng=128.2649092&fid=0x34e4411b7da459a7:0xaa0051b7317f20b1&q=沖縄学びの森&hl=ja&gl=jp&client=earth-client&cv=7.1.5.1557&useragent=GoogleEarth/7.1.5.1557(Macintosh;Mac OS X (10.9.5);ja;kml:2.2;client:Free;type:default)"
				},
				{"coordinates":[127.806651,26.375395],
				"lat":26.375395,
				"lon":127.806651,
				"name":"東南植物楽園",
				"name_english":"Southeast Botanical Gardens",
				"type":"Urban",
				"description":"",
				"adm2":"Okinawa",
				"region":"Middle",
				"placepageUri":"https://www.google.com/earth/rpc/entity?lat=26.375394999999997&lng=127.80665099999997&fid=0x34e511d8db9268d7:0x97aa9da99ec7390b&q=東南植物楽園&hl=ja&gl=jp&client=earth-client&cv=7.1.5.1557&useragent=GoogleEarth/7.1.5.1557(Macintosh;Mac OS X (10.9.5);ja;kml:2.2;client:Free;type:default)"
				},
				{"coordinates":[128.191423,26.7334337],
				"lat":26.7334337,
				"lon":128.191423,
				"name":"国頭村森林公園",
				"type":"Agriculture",
				"description":"",
				"adm2":"Kunigami",
				"region":"North",
				"placepageUri":"https://www.google.com/earth/rpc/entity?lat=26.733433700000003&lng=128.191423&fid=0x34e443a0ed71fc0d:0x17fd069f44efbf8d&q=国頭村森林公園&hl=ja&gl=jp&client=earth-client&cv=7.1.5.1557&useragent=GoogleEarth/7.1.5.1557(Macintosh;Mac OS X (10.9.5);ja;kml:2.2;client:Free;type:default)"
				},
				{"coordinates":[128.0491877,26.5985351],
				"lat":26.5985351,
				"lon":128.0491877,
				"name":"多野岳",
				"type":"Forest",
				"description":"",
				"adm2":"Nago",
				"region":"North",
				"placepageUri":""
				},
				{"coordinates":[127.9626731,26.6698946],
				"lat":26.6698946,
				"lon":127.9626731,
				"name":"乙羽岳森林公園展望台",
				"name_english":"Otoha Dake",
				"type":"Forest",
				"description":"",
				"adm2":"Nakijin",
				"region":"North",
				"placepageUri":"https://www.google.com/earth/rpc/entity?lat=26.669169399999998&lng=127.9626156&fid=0x34e4f865d5db7bc3:0x647efe0039b399db&q=乙羽岳森林公園&hl=ja&gl=jp&client=earth-client&cv=7.1.5.1557&useragent=GoogleEarth/7.1.5.1557(Macintosh;Mac OS X (10.9.5);ja;kml:2.2;client:Free;type:default)"
				},
				{"coordinates":[127.7135299,26.2259972],
				"lat":26.2259972,
				"lon":127.7135299,
				"name":"末吉公園",
				"name_english":"Sueyoshi Park",
				"type":"Urban",
				"description":"",
				"adm2":"Naha",
				"region":"South",
				"placepageUri":""
				},
				{"coordinates":[127.9167063,26.6518586],
				"lat":26.6518586,
				"lon":127.9167063,
				"name":"八重岳桜の森公園",
				"name_english":"Yae Dake",
				"type":"Urban",
				"description":"",
				"adm2":"Motobu",
				"region":"North",
				"placepageUri":"https://www.google.com/earth/rpc/entity?lat=26.651858599999997&lng=127.9167063&fid=0x34e4f93f31a9014f:0x8d4b500c6edc0948&q=八重岳森林公園&hl=ja&gl=jp&client=earth-client&cv=7.1.5.1557&useragent=GoogleEarth/7.1.5.1557(Macintosh;Mac OS X (10.9.5);ja;kml:2.2;client:Free;type:default)"
				},
				{"coordinates":[127.8260275,26.1734831],
				"lat":26.1734831,
				"lon":127.8260275,
				"name":"斎場御嶽",
				"name_english":"Seifa-Utaki",
				"type":"Agriculture",
				"description":"",
				"adm2":"Nanjo",
				"region":"South",
				"placepageUri":"https://www.google.com/earth/rpc/entity?lat=26.1734831&lng=127.8260275&fid=0x34e571f2701161df:0x3954cd280c2c5319&q=斎場御嶽&hl=ja&gl=jp&client=earth-client&cv=7.1.5.1557&useragent=GoogleEarth/7.1.5.1557(Macintosh;Mac OS X (10.9.5);ja;kml:2.2;client:Free;type:default)"
				},
				{"coordinates":[127.82851,26.46302],
				"lat":26.46402,
				"lon":127.82951,
				"name":"WeatherStation01",
				"type":"weather",
				"description":"",
				"adm2":"Onna",
				"region":"Middle",
				"placepageUri":""
				},
				{"coordinates":[127.82809,26.46351],
				"lat":26.46351,
				"lon":127.82809,
				"name":"S0006",
				"type":"",
				"description":"",
				"adm2":"Onna",
				"region":"Middle",
				"placepageUri":""
				},
				{"coordinates":[127.82893,26.46294],
				"lat":26.46294,
				"lon":127.82893,
				"name":"S0005",
				"type":"",
				"description":"",
				"adm2":"Onna",
				"region":"Middle",
				"placepageUri":""
				},
				{"coordinates":[127.82857,26.4631],
				"lat":26.4631,
				"lon":127.82857,
				"name":"S0004",
				"type":"",
				"description":"",
				"adm2":"Onna",
				"region":"Middle",
				"placepageUri":""
				},
				{"coordinates":[127.84184,26.46504],
				"lat":26.46604,
				"lon":127.84284,
				"name":"WeatherStation02",
				"type":"weather",
				"description":"",
				"adm2":"Onna",
				"region":"Middle",
				"placepageUri":""
				},
				{"coordinates":[127.8419,26.46509],
				"lat":26.46509,
				"lon":127.8419,
				"name":"S0008",
				"type":"",
				"description":"",
				"adm2":"Onna",
				"region":"Middle",
				"placepageUri":""
				},
				{"coordinates":[],
				"lat":"",
				"lon":"",
				"name":"奥の山荘",
				"name_english":"Okuno Sanso",
				"type":"",
				"description":"",
				"adm2":"Kunigami",
				"placepageUri":"",
				"region":"North"
				},
				{"coordinates":[],
				"lat":"",
				"lon":"",
				"name":"与那フィールド",
				"name_english":"Yona Field",
				"type":"",
				"description":"",
				"adm2":"Kunigami",
				"placepageUri":"",
				"region":"North"
				},
				{"coordinates":[],
				"lat":"",
				"lon":"",
				"name":"辺土名高校",
				"name_english":"Hentona High School",
				"type":"",
				"description":"",
				"adm2":"Ogimi",
				"placepageUri":"",
				"region":"North"
				},
				{"coordinates":[],
				"lat":"",
				"lon":"",
				"name":"源河小学校跡地",
				"name_english":"Genka Elementary School",
				"type":"",
				"description":"",
				"adm2":"Nago",
				"placepageUri":"",
				"region":"North"
				},
				{"coordinates":[],
				"lat":"",
				"lon":"",
				"name":"名護青少年の家",
				"name_english":"Nago Youth & Children's Center",
				"type":"",
				"description":"",
				"adm2":"Nago",
				"placepageUri":"",
				"region":"North"
				},
				{"coordinates":[],
				"lat":"",
				"lon":"",
				"name":"ヒルギの森",
				"name_english":"Mangrove Forest at Gesashi Bay",
				"type":"",
				"description":"",
				"adm2":"Higashi",
				"placepageUri":"",
				"region":"North"
				},
				{"coordinates":[],
				"lat":"",
				"lon":"",
				"name":"県民の森",
				"name_english":"Okinawaken Kenminnomori Camping Ground",
				"type":"",
				"description":"",
				"adm2":"Onna",
				"placepageUri":"",
				"region":"Middle"
				},
				{"coordinates":[],
				"lat":"",
				"lon":"",
				"name":"OIST Open site",
				"name_english":"OIST Open site",
				"type":"",
				"description":"",
				"adm2":"Onna",
				"placepageUri":"",
				"region":"Middle"
				},
				{"coordinates":[],
				"lat":"",
				"lon":"",
				"name":"OIST Forest site",
				"name_english":"OIST Forest site",
				"type":"",
				"description":"",
				"adm2":"Onna",
				"placepageUri":"",
				"region":"Middle"
				},
				{"coordinates":[],
				"lat":"",
				"lon":"",
				"name":"嶽ヤンバル",
				"name_english":"Takeyambaru",
				"type":"",
				"description":"",
				"adm2":"Okinawa",
				"placepageUri":"",
				"region":"Middle"
				},
				{"coordinates":[],
				"lat":"",
				"lon":"",
				"name":"倉敷ダム",
				"name_english":"Kurashiki Dam",
				"type":"",
				"description":"",
				"adm2":"Uruma",
				"placepageUri":"",
				"region":"Middle"
				},
				{"coordinates":[],
				"lat":"",
				"lon":"",
				"name":"野鳥の森自然公園",
				"name_english":"Yachonomori Natural Park",
				"type":"",
				"description":"",
				"adm2":"Uruma",
				"placepageUri":"",
				"region":"Middle"
				},
				{"coordinates":[],
				"lat":"",
				"lon":"",
				"name":"琉大 Open Site",
				"name_english":"University of Ryukyus (Open site)",
				"type":"",
				"description":"",
				"adm2":"Nishihara",
				"placepageUri":"",
				"region":"Middle"
				},
				{"coordinates":[],
				"lat":"",
				"lon":"",
				"name":"琉大 Forest Site",
				"name_english":"University of Ryukyus (Forest site)",
				"type":"",
				"description":"",
				"adm2":"Nishihara",
				"placepageUri":"",
				"region":"Middle"
				},
				{"coordinates":[],
				"lat":"",
				"lon":"",
				"name":"中城公園",
				"name_english":"Nakagusuku Park",
				"type":"",
				"description":"",
				"adm2":"Kitanakagusuku",
				"placepageUri":"",
				"region":"Middle"
				},
				{"coordinates":[],
				"lat":"",
				"lon":"",
				"name":"大山の田芋",
				"name_english":"Potato farm",
				"type":"",
				"description":"",
				"adm2":"Ginowan",
				"placepageUri":"",
				"region":"Middle"
				},
				{"coordinates":[],
				"lat":"",
				"lon":"",
				"name":"北谷町伊礼原",
				"name_english":"Ireibaru in Chatan village",
				"type":"",
				"description":"",
				"adm2":"Chatan",
				"placepageUri":"",
				"region":"Middle"
				},
				{"coordinates":[],
				"lat":"",
				"lon":"",
				"name":"那覇公園",
				"name_english":"Naha Park",
				"type":"",
				"description":"",
				"adm2":"Naha",
				"placepageUri":"",
				"region":"South"
				},
				{"coordinates":[],
				"lat":"",
				"lon":"",
				"name":"玉城少年自然の家",
				"name_english":"Tamagusuku Youth & Children's Center",
				"type":"",
				"description":"",
				"adm2":"Nanjo",
				"placepageUri":"",
				"region":"South"
				},
				{"coordinates":[],
				"lat":"",
				"lon":"",
				"name":"平和創造の森公園",
				"name_english":"Heiwasozonomori Park",
				"type":"",
				"description":"",
				"adm2":"Itoman",
				"placepageUri":"",
				"region":"South"
				}

				];
				
				

				
function initialize(){
	setMap();
}

function setMap(){
//console.log("set map");


	


var dataset; //object with features (array of 81 sites)
d3.json("../data/okeon.geojson", function(data) {
    dataset = data.features;
    console.log(dataset);
    //any other functions that depend on data
});



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
   
   
   d3.json("data/okinawa_best.geojson", function(error,adm2){
	console.log(adm2);
	
	
	adm2.features.forEach(function(d){
		d.properties['number']=0;
		//console.log(d.properties.number);
		console.log(d.properties.NAME_2);
		
		dataset2.forEach(function(d2){
			if(d2.adm2==d.properties.NAME_2){
				d.properties['number']=d.properties['number']+1;
			}
			console.log(d2);
		});
		
	
	});
	
	
// 	console.log("dataset2");
// 	dataset2.forEach(function(d2){
// 		
// 		console.log(d2);
// 	});
	
	console.log("new geojson with number property");
	adm2.features.forEach(function(d){
		
		console.log(d);
	});
	
	
	
	var recolorMap = colorScale(adm2);
	console.log("recolorMap");
	console.log(recolorMap);

	
	  var okinawa = g.selectAll("path")
               .data(adm2.features)
               .enter()
               .append("path")
               .attr("d", path)
              //  .attr("fill","#888A63")
                .attr("fill", function(d) { //color enumeration units
					return choropleth(d, recolorMap);
				})
               .style("stroke","black")
               .style("stroke-width",0.5)
               .attr("id",function(d){
					var finalId= "id"+d.properties.NAME_2;
					return finalId;
		 
				 })
               .on('mouseover',function(d){
               		console.log(d);
               		//console.log(d.properties.ORIG_FID);
               		//console.log(d.properties.District);
               		
               		var finalId= "id"+d.properties.NAME_2;
               		d3.select(this)//select the current county in the dome	
					.style("opacity", 0.5);
					
					
               })
               .on('mouseover',drawInfolabel2)
               .on('mouseout',removeInfolabel2)
               .on("mouseout",function(d){
   		 
   		 			
               		var finalId= "id"+d.properties.NAME_2;
               		d3.select(this)//select the current county in the dome	
					.style("opacity", 1);
					
		
   				 })
   				 .on('click',function(d){
   				 	var localDataset=[];
					
					var selected_adm=d.properties.NAME_2;
					
					//console.log(d);
					//console.log(selected_adm);
					dataset2.forEach(function(a){
						if(a.adm2==selected_adm){
							localDataset.push(a);
						}
						
						
			
					});
					
					drawSiteList(localDataset);
   			 });
               
       //make global
        sites = g.append("g");
	
	
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
	        //.attr('opacity',0.7)
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
   
   
   
   
   	console.log("generateTypeFilter");
	
	var filter = d3.select("#filter-by-type");
	
	var colorsArray = ["#FFAB48","#32CD99","#CC6B32","#ffffff","#79CDCD"];
	
	var colorIndexLocal=[
		{
		 "key":"Urban",
		 "value":"#FFAB48",
		 "legend":"urban",
		 "id":"color1"		
		},{
		 "key":"Forest",
		 "value":"#32CD99",
		 "legend":"forest",
		 "id":"color2"	
		},{
		 "key":"Agriculture",
		 "value":"#CC6B32",
		 "legend":"agriculture",
		 "id":"color3"	
		},{
		 "key":"",
		 "value":"#ffffff",
		 "legend":"other",
		 "id":"color4"	
		},
		{	
		 "key":"weather",
		 "value":"#79CDCD",
		 "legend":"weather",
		 "id":"color5"	
		},
		{"key":"all",
		"value":"#fb6a4a",
		"legend":"all",
		"id":"color6"
		}
		];
  	

							
	var colorbox = filter.selectAll(".colorbox")
		.data(colorIndexLocal) //highest value on top
		.enter()
		.append("div")
		.attr("class","colorbox")
		.attr("id",function(d){
				return d.id;
		})
		.classed("inline",true)
		.style("background-color", function(d){
			console.log("color box");
			console.log(d);
			return d.value;
		})
		.text(function(d){
			return d.legend;
		})
		.style("padding-left","2px")
		.style("text-anchor", "middle")
		.on("mouseover",function(){
			console.log("mouseover");
			d3.select(this)
				.transition()
				.duration(500)
				.style({
					'opacity':0.7,
					'cursor':'pointer'
					});
		})
		.on("mouseout",function(){
				d3.select(this)
				.transition()
				.duration(500)
				.style({
					'opacity':1,
					});
			})
		.on("click",function(d){
			sites.selectAll("circle").remove();
			console.log(d.id);
			var key = d.key;
			console.log(key);
			//draw circles 
			
			var localDataset=[];
			
			dataset2.forEach(function(a){
				if(a.type==key){
					localDataset.push(a);
				}
				
			});
			
			console.log(localDataset);
			
			if(key=="all"){
				
					drawCircles2(projection);
			}else{
			
					drawCircles(localDataset, d.value, projection);
			
			}

		});
	
	
	var filterRegion = d3.select("#filter-by-region");
	
		
	var textArray = ["South","Middle","North"];
						
	var textbox = filterRegion.selectAll(".textbox")
		.data(textArray)
		.enter()
		.append("div")
		.attr("class","textbox")
		.classed("inline",true)
		.style("padding-left","10px")
		.style("text-anchor", "middle")
		.text(function(d){
			return d;
		})
		.attr("text-anchor", "middle");
		




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

				  
	
//generateTypeFilter();

}//end setMap




//draw all circles
function drawCircles2(projection){
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
// 	        .attr('opacity',0.7)
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
	
}



// draw circles of certain type or region
function drawCircles(localDataset,value,projection){


		sites.selectAll("circle")
	        .data(localDataset)
	        .enter()
	        .append("circle")
	        .attr("r", 5)
			.attr("fill", value)
	        .style("stroke", "black")
	       // .attr('opacity',0.7)
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

}




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
	var labelHTML = "<h2 class='page-header'>"+d.name+"<span class='font-down'> ("+d.name_english+") </span></h2><br><p class='thick'>Type: </p><p>"+d.type
					+"</p><br> <p class='thick'>Description: </p><p>"+d.description
					+"</p><br> <p class='thick'>Coordinates: </p><p>["+d.lat+" , "+d.lon+"]"
					+"</p><br> <p class='thick'>City: <p>"+d.adm2
					+"</p><br> <p class='thick'>Region: <p>"+d.region
					+"</p>";
	var infolabel=d3.select("#metadata").append("div")
		.attr("class","infopanel")
		.attr("id", "infopanel-"+i)
		.html(labelHTML);
}

function drawSiteList(d){
		d3.selectAll(".site-list").remove();
		
		console.log("drawSiteList");
		console.log(d);
	var labelHTML="<h3>List of Sites in "+d[0].adm2+"</h3>";
	
	d.forEach(function(a){
		labelHTML=labelHTML+"<li>"+a.name+"</li>";
	
	});
	
	
	var infolabel=d3.select("#site-list").append("div")
		.attr("class","site-list")
		.html(labelHTML);

}


//for admin2
function drawInfolabel2(d,i,j){
	//console.log("d");
	console.log(d);
	
	d3.select(this)//select the current county in the dome	
					.style("opacity", 0.5)
					.style("cursor","pointer");
	
	var labelHTML = "<p>City: "+d.properties.NAME_2+"<br> Number Sites: "+d.properties.number;
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


function colorClass(){
	//<-colorScale
	//<-drawLegend
	
return [
			"#fdcc8a",
			"#fc8d59",
			"#e34a33",
			"#b30000"
	];
	
	// return [
// 			"#cccccc",
// 			"#969696",
// 			"#636363",
// 			"#252525"
// 	];
};

function colorScale(jsonData){

	//create quantile classes with color scale
	var colors = colorClass();
	var color = d3.scale.linear() //designate quantile scale generator
		.range(colors);
		
		//set min and max data values as domain
	color.domain([0,6]);//currently hard-coded
	
	
	//return the color scale generator
	return color;	

};

function choropleth(d, recolorMap){
	//<-setMap d3.json provinces.style
	
	//Get data value
	var value = d.properties.number;
	//If value exists, assign it a color; otherwise assign gray
	if (value) {
		return recolorMap(value);
	} else {
		return "#fef0d9";
	};
};





function getWidth(width){
	
	if (width > 550) {
		return 700;
	}else{
		return 450;
	}
}

	
