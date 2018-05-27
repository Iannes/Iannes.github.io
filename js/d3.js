// margin
const margin = { top: 20, right: 20, bottom: 20, left: 20 },
  width = 500 - margin.right - margin.left,
  height = 500 - margin.top - margin.bottom,
  radius = width / 2;

// color range

const color = d3.scaleOrdinal()
.range(["#BBDEFB", "#90CAF9", "#64B5F6", "#42A5F5", "#2196F3", "#1E88E5", "#1976D2"]);

// pie chart arc. Need to create arcs before generating pie
const arc = d3.arc()
  .outerRadius(radius - 10)
  .innerRadius(0);

// donut chart arc
const doughnut = d3.arc()
  .outerRadius(radius - 10)
  .innerRadius(radius - 70);

// arc for the labels position
const labelArc = d3.arc()
  .outerRadius(radius - 40)
  .innerRadius(radius - 40);

// generate pie chart and donut chart
const pie = d3.pie()
  .sort(null)
  .value(d => d.percent);

// define the svg for pie chart
const svg = d3.select("body").append("svg")
  .attr("width", width)
  .attr("height", height)
  .append("g")
  .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

// define the svg donut chart
var svg2 = d3.select("body").append("svg")
  .attr("width", width)
  .attr("height", height)
  .append("g")
  .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

// import data
d3.csv("data.csv").then(data => {
  // parse data
  console.log(data)
  // Check the headings of our CSV
  // Code assumes that numbers come second and we only get two pieces of data
  const headers = data.columns
  let key
  let num

  data.map( d => {
      console.log(d)
      headers.map( (h,i) => {
        // console.log( i ,d[h])
        i === 0 ? key = d[h] : num = +d[h]
        console.log(key, num)
      })
    // d.percent = +d.percent;
    // d.tech = d.tech;
  })

  // "g element is a container used to group other SVG elements"
  const g = svg.selectAll(".arc")
    .data(pie(data))
    .enter().append("g")
    .attr("class", "arc");

  // append path
  g.append("path")
    .attr("d", arc)
    .style("fill", d => color(d.data.tech))
    // transition
    .transition()
    .ease(d3.easeLinear)
    .duration(2000)
    .attrTween("d", tweenPie);

  // append text
  g.append("text")
    .transition()
    .ease(d3.easeLinear)
    .duration(2000)
    .attr("transform", d => "translate(" + labelArc.centroid(d) + ")")
    .attr("dy", ".35em")
    .text(d => d.data.tech);


  // "g element is a container used to group other SVG elements"
  let g2 = svg2.selectAll(".arc-doughnut")
    .data(pie(data))
    .enter().append("g")
    .attr("class", "arc-doughnut");

  // append path
  g2.append("path")
    .attr("d", doughnut)
    .style("fill", d => color(d.data.tech))
    .transition()
    .ease(d3.easeLinear)
    .duration(2000)
    .attrTween("d", tweenDonut);

  // append text
  g2.append("text")
    .transition()
    .ease(d3.easeLinear)
    .duration(2000)
    .attr("transform", d => "translate(" + labelArc.centroid(d) + ")")
    .attr("dy", ".35em")
    .text(d => d.data.tech);

});

// Helper function for animation of pie chart and donut chart
const tweenPie = b => {
  b.innerRadius = 0;
  let i = d3.interpolate({ startAngle: 0, endAngle: 0 }, b);
  return t => arc(i(t));
}

const tweenDonut = b => {
  b.innerRadius = 0;
  var i = d3.interpolate({ startAngle: 0, endAngle: 0 }, b);
  return function (t) { return doughnut(i(t)); };
}
