// MainPage.tsx

import React from 'react';
import useDogContext from '../context/useContext';
import DonutChart from '../components/donutChart';
import SearchBar from '../components/searchBar';

function MainPage() {
  const { dog } = useDogContext(); 

  const total = 5;
  const life_expectancy = 20;

  if (!dog) {
    return <div>Loading...</div>;
  }

  return (
    <div className="main-content">
      <div className="search-bar-container">
        <SearchBar />
      </div>
      <h1>Dog Information</h1>
      <h2><strong>Name:</strong> {dog.name || 'No Name Available'}</h2>
      <p><img src={`${dog.image_link}`} alt={`${dog.name}`} /></p>
      <div className="donut-chart-container">
        <div className = "donut-chart-wrapper">
          <DonutChart dataValue={dog.barking} totalValue={total} label={"Barking"} />
          <div className="chart-label">Barking</div>
        </div>
        
        <div className = "donut-chart-wrapper">
          <DonutChart dataValue={dog.energy} totalValue={total} label={"Energy"} />
          <div className="chart-label">Energy</div>
        </div>

        <div className = "donut-chart-wrapper">
          <DonutChart dataValue={dog.playfulness} totalValue={total} label={"Playfulness"} />
          <div className="chart-label">Playfulness</div>
        </div>

        <div className = "donut-chart-wrapper">
          <DonutChart dataValue={dog.shedding} totalValue={total} label={"shedding"} />
          <div className="chart-label">Shedding</div>
        </div>

        <div className = "donut-chart-wrapper">
          <DonutChart dataValue={dog.trainability} totalValue={total} label={"trainability"} />
          <div className="chart-label">Trainability</div>
        </div>

        <div className = "donut-chart-wrapper">
          <DonutChart dataValue={dog.drooling} totalValue={total} label={"drooling"} />
          <div className="chart-label">Drooling</div>
        </div>

        <div className = "donut-chart-wrapper">
          <DonutChart dataValue={dog.grooming} totalValue={total} label={"grooming"} />
          <div className="chart-label">Grooming</div>
        </div>

        <div className = "donut-chart-wrapper">
          <DonutChart dataValue={dog.coat_length} totalValue={total} label={"coat_length"} />
          <div className="chart-label">Coat_length</div>
        </div>

        <div className = "donut-chart-wrapper">
          <DonutChart dataValue={dog.good_with_children } totalValue={total} label={"good_with_children "} />
          <div className="chart-label">Good_with_children </div>
        </div>

        <div className = "donut-chart-wrapper">
          <DonutChart dataValue={dog.good_with_other_dogs} totalValue={total} label={"good_with_other_dogs"} />
          <div className="chart-label">Good_with_other_dogs</div>
        </div>

        <div className = "donut-chart-wrapper">
          <DonutChart dataValue={dog.good_with_strangers} totalValue={total} label={"good_with_strangers"} />
          <div className="chart-label">Good_with_strangers</div>
        </div>

        <div className = "donut-chart-wrapper">
          <DonutChart dataValue={dog.max_life_expectancy} totalValue={life_expectancy} label={"max_life_expectancy"} />
          <div className="chart-label">Max_life_expectancy</div>
        </div>

        <div className = "donut-chart-wrapper">
          <DonutChart dataValue={dog.min_life_expectancy} totalValue={life_expectancy} label={"min_life_expectancy"} />
          <div className="chart-label">Min_life_expectancy</div>
        </div>

      </div>
    </div>
  );
}

export default MainPage;
