import React, { useEffect, useRef, useState } from "react";
import { select, geoPath, geoEqualEarth, zoom, scaleOrdinal } from "d3";
import useResizeObserver from "./UseResizeObserver";
import { colorLegend } from './ColorLegend';

function GeoChart({ map, property }) {
  const svgRef = useRef();
  const wrapperRef = useRef();
  const dimensions = useResizeObserver(wrapperRef);
  const [country, setCountry] = useState(null);

  useEffect(() => {
    const svg = select(svgRef.current);
    const { width, height } = dimensions || wrapperRef.current.getBoundingClientRect();
    console.log(country);
    const projection = geoEqualEarth().fitSize(
      [width, height], country || map
    ).precision(100);
    const pathGenerator = geoPath().projection(projection);

    //map
    svg.selectAll('.mapping').remove();
    const mapSvg = svg.append('g').attr('class', 'mapping');
    svg
      .selectAll(".country")
      .data(map.features)
      .join("path")
      .on("click", (e, feature) => {
        setCountry(country === feature ? null : feature);
      })
      .on("mouseover", (e, feature) => {
        select(e.currentTarget).attr("fill", "#2066ff");
        mapSvg.selectAll('.clicked-cty').remove();

        mapSvg
          .selectAll('.label')
          .data([feature])
          .join("text")
          .attr("class", "label")
          .attr("fill", "white")
          .text(
            feature =>
              feature &&
              feature.properties.name
          )
          .attr("x", 10)
          .attr("y", 25);
        
        mapSvg
          .insert('rect', 'text')
          .attr('class', 'clicked-cty')
          .attr('fill', '#2066ff')
          .attr('rx', 5)
          .attr('width', mapSvg.selectAll('.label').node().getBoundingClientRect().width + 10)
          .attr('stroke', 'transparent')
          .attr('height', 30)
          .attr("x", 5)
          .attr("y", 5);
      })
      .on("mouseout", (e, feature) => {
        country !== e ? select(e.currentTarget).attr("fill", "#344c68") : select(e.currentTarget).attr("fill", "#2066ff");
        mapSvg
          .selectAll('.label')
          .data([country])
          .join("text")
          .attr("class", "label")
          .attr("fill", "white")
          .text(
            feature =>
              feature &&
              feature.properties.name
          )
          .attr("x", 10)
          .attr("y", 25);
        
        if (country !== null) {
          mapSvg.selectAll('.clicked-cty').remove();
          mapSvg
            .insert('rect', 'text')
            .attr('class', 'clicked-cty')
            .attr('fill', '#2066ff')
            .attr('rx', 5)
            .attr('width', mapSvg.selectAll('.label').node().getBoundingClientRect().width + 10)
            .attr('stroke', 'transparent')
            .attr('height', 30)
            .attr("x", 5)
            .attr("y", 5);
        }
        else {
          mapSvg.selectAll('.clicked-cty').remove();
        }
      })
      .attr("class", "country")
      .attr("fill", "#344c68")
      .attr("stroke", "#adb5c7")
      .attr("opacity", .3)
      .attr("transform", "scale(1.2, 1) translate(-100, 0)")
      .transition()
      .attr("d", feature => pathGenerator(feature));
    
    //legend
    const colorScale = scaleOrdinal()
      .domain(['Counter', 'Won', 'Lost', 'Drafted'])
      .range(['#fc5e66', '#325f50', '#344c68', 'grey']);
    
    svg.selectAll('.legend-box').remove();
    const legend = svg.append('g')
      .attr('class', 'legend-box')
      .attr('transform', `translate(25, ${height - 100})`);
    legend.call(colorLegend, {
      colorScale,
      circleRadius: 8,
      spacing: 25,
      textOffset: 15,
      backgroundRectWidth: 120
    });
    
    //country name
    mapSvg
      .selectAll(".label")
      .data([country])
      .join("text")
      .attr("class", "label")
      .attr("fill", "white")
      .text(
        feature =>
          feature &&
          feature.properties.name
      )
      .attr("x", 10)
      .attr("y", 25);
    
    if (country !== null) {
      mapSvg.selectAll('.clicked-cty').remove();

      mapSvg
        .insert('rect', 'text')
        .attr('class', 'clicked-cty')
        .attr('fill', '#2066ff')
        .attr('rx', 5)
        .attr('width', svg.selectAll('.label').node().getBoundingClientRect().width + 10)
        .attr('stroke', 'transparent')
        .attr('height', 30)
        .attr("x", 5)
        .attr("y", 5);
    }
    else {
      mapSvg.selectAll('.clicked-cty').remove();
    }

  }, [map, dimensions, property, country]);

  return (
    <div ref={wrapperRef} style={{ height: "100%" }}>
      <svg ref={svgRef} style={{width: "100%", height: "100%"}}></svg>
    </div>
  );
}

export default GeoChart;
