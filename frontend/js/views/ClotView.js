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

            var w = 500;
            var h = 500;
            var padding = 30;
            
            var dataset = [
                            [5, 20], [480, 90], [250, 50], [100, 33], [330, 95],
                            [410, 12], [475, 44], [25, 67], [85, 21], [220, 88]
                          ];

            //Create scale functions
            var xScale = d3.scale.linear()
                                 .domain([0, d3.max(dataset, function(d) { return d[0]; })])
                                 .range([padding, w - padding]);

            var yScale = d3.scale.linear()
                                 .domain([0, d3.max(dataset, function(d) { return d[1]; })])
                                 .range([h - padding, padding]);

            //Define X axis
            var xAxis = d3.svg.axis()
                              .scale(xScale)
                              .orient("bottom")
                              .ticks(5);

            //Define Y axis
            var yAxis = d3.svg.axis()
                      .scale(yScale)
                      .orient("left")
                      .ticks(5);

            //Create SVG element
            var svg = d3.select("#clot_viz")
                        .append("svg")
                        .attr("width", w)
                        .attr("height", h);

            svg.selectAll("circle")
               .data(dataset)
               .enter()
               .append("circle")
               .attr("cx", function(d) {
                    return xScale(d[0]);
               })
               .attr("cy", function(d) {
                    return yScale(d[1]);
               })
               .attr("r", 7)
               .on("mouseover", function() {
                    d3.select(this)
                        .transition()
                        .duration(250)
                        .ease("linear")
                        .attr("r", 15)
                        .attr("fill", "blue");
                })
               .on("mouseout", function() {
                    d3.select(this)
                        .transition()
                        .duration(1000)
                        .ease("bounce")
                        .attr("r", 7)
                        .attr("fill", "black");
                });

            svg.selectAll("text")
                .data(dataset)
                .enter()
                .append("text")
                .text(function(d) {
                     return d[0];
                })
                .attr("x", function(d) {
                    return xScale(d[0]);
                })
                .attr("y", function(d) {
                    return yScale(d[1]);
                })
                .attr("font-family", "sans-serif")
                .attr("font-size", "11px")
                .attr("fill", "red");

            //Create X axis
            svg.append("g")
                .attr("class", "axis")
                .attr("transform", "translate(0," + (h - padding) + ")")
                .call(xAxis);

            //Create Y axis
            svg.append("g")
                .attr("class", "axis")
                .attr("transform", "translate(" + padding + ",0)")
                .call(yAxis);

            // Add data
            dataset.push([50, 50]);

            svg.selectAll("circle")
                .data(dataset)
                .enter()
                .append("circle")
                .attr("cx", 500) 
                .attr("cy", function(d) {
                     return yScale(d[1]);
                })
                .attr("r", 7)
                .attr("fill", "blue")
                .transition()
                .delay(1000)
                .duration(1000)
                .attr("cx", function(d) {
                     return xScale(d[0]);
                })
                .attr("cy", function(d) {
                     return yScale(d[1]);
                })
                .attr("fill", "black");
        }

	});

})(jQuery);
