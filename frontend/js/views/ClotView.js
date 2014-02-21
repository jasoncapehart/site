// Clot View

var app = app || {};

(function($) {
    app.ClotView = Backbone.View.extend({
        el: $('#content'),
	
        initialize: function() {
            _.bindAll(this, 'render'); // maintains context of "this"
            this.render(); // renders the view
        },

        render: function() {
            var clot = _.template( $("#template_clot").html(), {} );
            $(this.el).html(clot);

        // Load Data
        $.getJSON("http://jasoncapehart.com/api/ClotHandler", function(dataset) { 

        //Width and height
        var w = 500;
        var h = 500;
        var padding = 30;
        var margin = 30;
        
        //Create scale functions
        var xScale = d3.scale.linear()
                             .domain([0, 100])
                             .range([padding + margin, w - padding -margin]);

        var yScale = d3.scale.linear()
                             .domain([0, 100])
                             .range([h - padding - margin, padding + margin]);

        //Define X axis
        var xAxis = d3.svg.axis()
                          .scale(xScale)
                          .orient("bottom")
                          .ticks(10);

        //Define Y axis
        var yAxis = d3.svg.axis()
                  .scale(yScale)
                  .orient("left")
                  .ticks(10);

        //Create SVG element
        var svg = d3.select("#clot_viz")
                    .append("svg")
                    .attr("width", w + margin)
                    .attr("height", h + margin);

        svg.selectAll("circle")
           .data(dataset)
           .enter()
           .append("circle")
           .transition()
           .each("start", function() { 
                d3.select(this)
                    .attr("r", 0)
            })
           .attr("cx", function(d) {
                return xScale(d["clot_score"]);
           })
           .attr("cy", function(d) {
                return yScale(d["klout_score"]);
           })
           // .attr("fill", "blue")
           .attr("opacity", 0.75)
           .each("end", function() { 
                d3.select(this)
                    .transition()
                    .duration(function(d) { 
                        return d["klout_score"]*50
                    })
                    .ease("bounce")
                    .attr("r", 7)
                    .attr("fill", "#41DB00")
            })

        svg.selectAll("circle")
           .on("mouseover", function(d) {
                // Bubble Expansion
                d3.select(this)
                    .transition()
                    .duration(250)
                    .ease("linear")
                    .attr("r", 14)
                    .attr("fill", "#006C51");

                // Tooltip
                var xPosition = parseFloat(d3.select(this).attr("cx"))
                     + document.getElementById("viz").offsetLeft - 100;
                var yPosition = parseFloat(d3.select(this).attr("cy")) 
                    + document.getElementById("viz").offsetTop - 50;

                d3.select("#tooltip")
                    .style("left", xPosition + "px")
                    .style("top", yPosition + "px")
                    .select("#tooltip_data")
                    .html(function(dataset) {
                        return "<p style='color:#006C51;'><strong>@" + d["screen_name"] + "</strong></p><p>Clot: " + Math.round(d["clot_score"]) + "</p><p>Klout: " + Math.round(d["klout_score"]) + "</p>"
                    });

                d3.select("#tooltip").classed("hidden", false);
            })
           .on("mouseout", function() {
                // Bubble Contraction
                d3.select(this)
                    .transition()
                    .duration(250)
                    .ease("linear")
                    .attr("fill", "#41DB00")
                    .attr("r", 7);

                // Remove Tooltip
                d3.select("#tooltip").classed("hidden", true);

            });

        // Add a line
        svg.append("line")
            .attr("x1", w-padding-margin)
            .attr("y1", padding+margin)
            .attr("x2", padding+margin)
            .attr("y2", h-padding-margin)
            .attr("stroke-width", 3)
            .attr("stroke", "#0E51A7")
            .attr("opacity", 0.5); 

        //Create X axis
        svg.append("g")
            .attr("class", "axis")
            .attr("transform", "translate(0," + (h - padding - margin) + ")")
            .call(xAxis);

        //Create Y axis
        svg.append("g")
            .attr("class", "axis")
            .attr("transform", "translate(" + (padding + margin) + ",0)")
            .call(yAxis);

        // Create X axis label
        svg.append("text")      // text label for the x axis
            .attr("x", w / 2)
            .attr("y", h)
            .style("text-anchor", "middle")
            .text("Clot Score");

        // Create Y axis label
        svg.append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", 0)
            .attr("x", 0 - (h / 2))
            .attr("dy", "1em")
            .style("text-anchor", "middle")
            .text("Klout Score");

       });

       }

	});

})(jQuery);
