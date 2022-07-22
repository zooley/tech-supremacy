export const colorLegend = (selection, props) => {
  const {                      
    colorScale,                
    circleRadius,
    spacing,                   
    textOffset,
    backgroundRectWidth        
  } = props;                   
  
  const bgRect = selection.selectAll('rect')
    .data([null]);             
  const n = colorScale.domain().length; 
  bgRect.enter().append('rect')
    .merge(bgRect)
      .attr('x', -circleRadius * 3)   
      .attr('y', -circleRadius * 2.5)   
      .attr('rx', circleRadius)   
      .attr('width', backgroundRectWidth)
      .attr('height', spacing * n + circleRadius * 2) 
      .attr('fill', '#2f3b52');
  

  const groups = selection.selectAll('.tick')
    .data(colorScale.domain());
  const legend = groups
    .enter().append('g')
      .attr('class', 'tick');
  legend
    .merge(groups)
      .attr('transform', (d, i) =>    
        `translate(0, ${i * spacing})`  
      );
  groups.exit().remove();
  
  legend.append('circle')
    .merge(groups.select('circle')) 
      .attr('r', circleRadius)
      .attr('fill', colorScale);      
  
  legend.append('text')
    .merge(groups.select('text'))   
      .text(d => d)
      .attr('dy', '0.32em')
    .attr('x', textOffset)
    .attr('fill', 'white')
    .attr('opacity', 0.5);  
}
