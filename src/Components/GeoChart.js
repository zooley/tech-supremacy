import React, { useEffect, useRef, useState } from "react";
import { select, geoPath, geoMercator } from "d3";
import useResizeObserver from "./UseResizeObserver";

function GeoChart({ map, property }) {
  const svgRef = useRef();
  const wrapperRef = useRef();
  const dimensions = useResizeObserver(wrapperRef);
  const [country, setCountry] = useState(null);

  useEffect(() => {
    const svg = select(svgRef.current);
    const { width, height } = dimensions || wrapperRef.current.getBoundingClientRect();
    console.log(country);
    const projection = geoMercator().fitSize(
      [width, height], country || map
    ).precision(100);
    const pathGenerator = geoPath().projection(projection);
    
    svg
      .selectAll(".country")
      .data(map.features)
      .join("path")
      .on("click", (e, feature) => {
        setCountry(country === feature ? null : feature);
      })
      .on("mouseover", (e, feature) => {
        select(e.currentTarget).attr("fill", "#2066ff");

        svg
          .selectAll(".label")
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
      })
      .on("mouseout", (e, feature) => {
        select(e.currentTarget).attr("fill", "#344c68");
        svg
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
      })
      .attr("class", "country")
      .attr("fill", "#344c68")
      .attr("stroke", "#adb5c7")
      .attr("opacity", .5)
      .attr("transform", "scale(1.2, 1) translate(-65, 0)")
      .transition()
      .attr("d", feature => pathGenerator(feature));
    
    svg
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

  }, [map, dimensions, property, country]);

  return (
    <div ref={wrapperRef} style={{ height: "100%" }}>
      <svg ref={svgRef} style={{width: "100%", height: "100%"}}></svg>
    </div>
  );
}

export default GeoChart;
