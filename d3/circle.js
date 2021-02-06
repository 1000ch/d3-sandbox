import * as d3 from 'https://cdn.skypack.dev/d3';

const width = 960;
const height = 160;
const dataset = [5, 10, 15, 20, 25];
const eqw = width / dataset.length;

const svg = d3
  .select('body')
  .append('svg');

svg
  .attr('width', width)
  .attr('height', height);

const circles = svg
  .selectAll('circle')
  .data(dataset)
  .enter()
  .append('circle');

circles
  .attr('cx', (data, i) => (i * eqw) + (eqw - data) / 2)
  .attr('cy', (data, i) => 100)
  .attr('r', (data, i) => data);

circles
  .attr('stroke-width', data => data / 1.5)
  .attr('fill', (data, i) => '#848484')
  .attr('stroke', (data, i) => '#e4e4e4');

circles
  .transition()
  .duration(500)
  .delay((data, i) => i * 10)
  .attr('fill', (data, i) => i % 2 ? '#ee66aa' : '#7166ee')
  .attr('stroke', (data, i) => i % 2 ? '#f49cc8' : '#a39cf4');
