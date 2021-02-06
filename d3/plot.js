import * as d3 from 'https://cdn.skypack.dev/d3';
import {scaleLinear} from 'https://cdn.skypack.dev/d3-scale';

const width = 960;
const height = 480;
const dataset = [
  [5,   20],
  [480, 90],
  [250, 50],
  [100, 33],
  [330, 95],
  [410, 12],
  [475, 44],
  [25,  67],
  [85,  21],
  [220, 88]
];

const svg = d3
  .select('body')
  .append('svg');

svg
  .attr('width', width)
  .attr('height', height);

const padX = 80;
const padY = 40;

const scaleX = scaleLinear()
  .domain([
    d3.min(dataset, d => d[0]),
    d3.max(dataset, d => d[0])
  ])
  .range([
    0 + padX,
    width - padX
  ]);

const scaleY = scaleLinear()
  .domain([
    d3.min(dataset, d => d[1]),
    d3.max(dataset, d => d[1])
  ])
  .range([
    height - padY,
    0 + padY
  ]);

const plots = svg
  .selectAll('circle')
  .data(dataset)
  .enter()
  .append('circle')
  .attr('cx', d => scaleX(d[0]))
  .attr('cy', d => scaleY(d[1]))
  .attr('r', d => Math.sqrt(height - d[1]))
  .attr('fill', '#66ee78');

const texts = svg
  .selectAll('text')
  .data(dataset)
  .enter()
  .append('text')
  .attr('x', d => scaleX(d[0]))
  .attr('y', d => scaleY(d[1]))
  .text(d => `${d[0]}, ${d[1]}`)
  .attr('fill', '#0a5c15')
  .attr('font-family', 'sans-serif');
