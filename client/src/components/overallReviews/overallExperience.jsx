import React, { useState, useEffect } from 'react';

function OverallExperience({ currentProduct }) {
  const experienceTypes = ['Play Experience', 'Level of Difficulty', 'Value for Money'];
  const experienceRatings = [currentProduct.play_experience_avg,
    currentProduct.difficulty_level_avg, currentProduct.money_value_avg];

  return (
    <div>
      {experienceRatings.map((experienceRating, i) => {
        if (experienceRating !== null) {
          return (
            <div key={experienceTypes[i]}>
              <div>{experienceTypes[i]}</div>
              <div>{`===INSERT STATUS BAR HERE=== ${experienceRating}`}</div>
            </div>
          );
        }
      })}
    </div>
  );
}

export default OverallExperience;
