// Generated with util/create-component.js
import React from "react";
import MediaCard from "./MediaCard";

export default {
  title: "MediaCard",
};

export const Default = () => (
  <div style={{ backgroundColor: "black", padding: "16px" }}>
    <MediaCard
      image="/images/components/media-card/dominic_fournier.png"
      title="Dominic Fournier"
      subtitle="Co-Fondateur, Directeur des technologies &amp; designer"
    >
      Les compétences technologiques de Dominic et son raisonnement stratégique
      ont toujours été appréciés de ses collègues. Sa capacité à concrétiser des
      idées sur maquettes, puis en site web ainsi que son expérience en gestion
      de petites équipes de développement fait de lui un excellent collaborateur
      sur vos projets technologiques.
    </MediaCard>
  </div>
);

export const WithAction = () => (
  <div style={{ backgroundColor: "black", padding: "16px" }}>
    <MediaCard
      image="/images/components/media-card/dominic_fournier.png"
      title="Dominic Fournier"
      subtitle="Co-Fondateur, Directeur des technologies &amp; designer"
      actionLabel="En savoir plus"
      onClick={() => alert("En savoir plus")}
    >
      Les compétences technologiques de Dominic et son raisonnement stratégique
      ont toujours été appréciés de ses collègues. Sa capacité à concrétiser des
      idées sur maquettes, puis en site web ainsi que son expérience en gestion
      de petites équipes de développement fait de lui un excellent collaborateur
      sur vos projets technologiques.
    </MediaCard>
  </div>
);
