import * as d3 from 'https://cdn.skypack.dev/d3';

const width = 960;
const height = 160;
const w = 50;
const dataset = [70, 35, 55, 20, 85];
const eqw = width / dataset.length;

const svg = d3
  .select('body')
  .append('svg');

svg
  .attr('width', width)
  .attr('height', height);

svg
  .selectAll('rect')
  .data(dataset)
  .enter()
  .append('rect')
  .attr('x', (data, i) => (i * eqw) + (eqw - w) / 2)
  .attr('y', (data, i) => height - data)
  .attr('width', (data, i) => w)
  .attr('height', (data, i) => 0)
  .attr('fill', '#66d7ee')
  .attr('opacity', (data, i) => data / 100);

svg
  .selectAll('rect')
  .transition()
  .duration(500)
  .delay((data, i) => i * 10)
  .attr('height', (data, i) => data);

svg
  .selectAll('text')
  .data(dataset)
  .enter()
  .append('text')
  .attr('x', (data, i) => 15 + (i * eqw) + (eqw - w) / 2)
  .attr('y', (data, i) => height - data - 10)
  .attr('fill', '#0a4e5c')
  .attr('font-family', 'sans-serif')
  .text(data => data);
