import React from 'react';

function Project({ project }) {
  return (
    <div className="col-md-6 col-lg-4 col-sm-12 pb-3 mt-5">
      <img
        className="float-left pb-1 workart"
        src={project.projectImg}
        alt={project.altImgText}
        data-project={project.name}
      />
      <div className="row imgBanner ml-0">
        <div className="col mx-0 px-0 my-auto">
          <p className="text-center">{project.banner}</p>
          <a
            className="mb-2 mt-5 redText"
            href={project.repoLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Github Repo
          </a>
          <a
            className="mb-2 redText"
            href={project.liveSiteLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            | Live Site
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
