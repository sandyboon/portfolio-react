import React from 'react';
import Project from '../Project';

function Work() {
  return (
    <main id="content" className="container-fluid">
      {getProjectRows()}
    </main>
  );
}

function getProjectColumn() {
  if (projects.length > 0) {
    let project = projects.shift();

    return <Project project={project} />;
  }
}

function getProjectRow() {
  return (
    <div class="row mt-5 clearfix justify-content-around">
      {getProjectColumn()}
      {getProjectColumn()}
    </div>
  );
}

function getProjectRows() {
  let projectRows = [];
  while (projects.length > 0) {
    projectRows.push(getProjectRow());
  }
  return projectRows;
}

const projects = [];
projects.push({
  name: 'crimeApi',
  projectImg: './assets/crimeApi_art.JPG',
  altImgText: 'crimeapi-art',
  banner: 'Crime data Explorer',
  repoLink: 'https://github.com/Maxsem4/CrimeAPI',
  liveSiteLink: 'https://maxsem4.github.io/CrimeAPI/',
});

projects.push({
  name: 'gamatachi',
  projectImg: './assets/gamatachi_art.JPG',
  altImgText: 'gamatachi-art',
  banner: 'Gomatachi Game',
  repoLink: 'https://github.com/sandyboon/GotchiTama',
  liveSiteLink: 'https://sleepy-badlands-73130.herokuapp.com/',
});

projects.push({
  name: 'burgers',
  projectImg: './assets/burger_art.jpg',
  altImgText: 'burgers-art',
  banner: 'Burgers App',
  repoLink: 'https://github.com/sandyboon/burgers',
  liveSiteLink: 'https://immense-shore-38130.herokuapp.com/index',
});

projects.push({
  name: 'simplecalendar',
  projectImg: './assets/calendar_art.jpg',
  altImgText: 'simplecalendar-art',
  banner: 'Simple Calendar',
  repoLink: 'https://github.com/sandyboon/simpleDailyCalendar',
  liveSiteLink: 'https://sandyboon.github.io/simpleDailyCalendar/',
});

projects.push({
  name: 'weather',
  projectImg: './assets/weather_art.jpg',
  altImgText: 'weather-dashboard-art',
  banner: 'Weather Dashboard',
  repoLink: 'https://github.com/sandyboon/weatherDashboard',
  liveSiteLink: 'https://sandyboon.github.io/weatherDashboard/',
});

projects.push({
  name: 'quiz',
  projectImg: './assets/quiz_art.jpg',
  altImgText: 'quiz-art',
  banner: 'Timed Quiz',
  repoLink: 'https://github.com/sandyboon/timedquiz',
  liveSiteLink: 'https://sandyboon.github.io/timedquiz/',
});

export default Work;
