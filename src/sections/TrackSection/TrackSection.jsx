import React from "react";
import "./TrackSection.css";
import {educationTracks} from "../../data/educationTracks.js";
import TrackCard from "../../components/TrackCard/TrackCard.jsx";

export default function TrackSection() {
  return (
    <section className="track-section">
      <div className="track-section__header">
        <h1>Сфери навчання</h1>
      </div>
      <div
        className="track-section__grid"
        style={{ display: "grid", gridAutoFlow: "column", gap: "1rem", alignItems: "start" }}
      >
        {educationTracks.map((track) => (
          <TrackCard key={track.id} {...track} />
        ))}
      </div>
    </section>
  );
}
