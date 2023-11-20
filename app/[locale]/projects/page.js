import ProjectsList from "@components/ProjectsList";
import React from "react";

const ProjectsPage = ({ data }) => {
  const projects = [
    {
      id: 1,
      title: "Capsules",
      company: "Radio Couleur 3",
      companyURL: "https://www.rts.ch/couleur3",
      techs: "FLASH, PHP, HMTL",
      images: ["/url1", "/url1", "/url3"],
      links: [],
      description: "test",
      date: 2009,
    },
    {
      id: 2,
      title: "Catom",
      company: "Callimedia",
      companyURL: "https://www.callimedia.fr",
      techs: "HTML5, JS Vanilla, CSS3, CreateJS",
      images: ["/url1", "/url1", "/url3"],
      links: [],
      description: "test",
      date: 2012,
    },
    {
      id: 3,
      title: "Sites pour hôtels",
      company: "Diadao",
      companyURL: "https://www.diadao.fr/fr/agence-digitale-communication-montpellier",
      techs: "HTML5, JQUERY, CSS3, PHP, SQL",
      images: ["/url1", "/url1", "/url3"],
      links: [{
        url: "https://www.lecastellas.com/fr/chambre-hotel-pont-du-gard",
        label: "Le Castellas",
      },{
        url: "https://www.lecastellas.com/fr/chambre-hotel-pont-du-gard",
        label: "Exemple: le Castellas",
      },{
        url: "https://www.lecastellas.com/fr/chambre-hotel-pont-du-gard",
        label: "Exemple: le Castellas",
      }],
      description: "test",
      date: 2014,
    },
    {
      id: 4,
      title: "Rogue Redux",
      company: "Perso",
      companyURL: "",
      techs: "REACT",
      images: ["/url1", "/url1", "/url3"],
      links: [{
        url: "https://www.lecastellas.com/fr/chambre-hotel-pont-du-gard",
        label: "Jouer à Rogue Redux",
      }],
      description: "test",
      date: 2016,
    },
    {
      id: 5,
      title: "Cloud Authoring, Cloud Connect, Cloud Reader",
      company: "Rakuten Aquafadas",
      companyURL: "https://global.rakuten.com/corp",
      techs: "HTML5, ANGULAR, CSS3, PHP, ELECTRON, IONIC, GOOGLE CLOUD, SQL",
      images: ["/url1", "/url1", "/url3"],
      links: [],
      description: "test",
      date: 2018,
    },
    {
      id: 6,
      title: "Hoppy Forms",
      company: "Hoppy",
      companyURL: "https://en.hoppy-happy.com/",
      techs: "REACT, NODEJS, AWS, MONGODB",
      images: ["/url1", "/url1", "/url3"],
      link: [],
      description: "test",
      date: 2019,
    },
    {
      id: 7,
      title: "Kenpath",
      company: "Kenpath",
      companyURL: "https://kenpath.com/",
      techs: "ANGULAR, NODEJS, EXPRESS, MONGODB",
      images: ["/url1", "/url1", "/url3"],
      link: [
        {
          url: "https://app.kenpath.com/login",
          label: "Kenpath web application",
        }
      ],
      description: "test",
      date: 2021,
    },
    {
      id: 8,
      title: "Aladin.farm",
      company: "Invivo Digital Factory",
      companyURL: "https://www.invivo-group.com/fr/innovation-digital/solutions-digitales",
      techs: "VUE, NODEJS, HAPI, SQL",
      images: ["/url1", "/url1", "/url3"],
      link: [
        {
          url: "https://www.aladin.farm/",
          label: "Aladin.farm",
        }
      ],
      description: "test",
      date: 2022,
    },
    {
      id: 9,
      title: "EForce",
      company: "Eminence",
      companyURL: "https://www.eminence.fr",
      techs: "ANGULAR, PHP, NWjs",
      images: ["/url1", "/url1", "/url3"],
      link: [],
      description: "test",
      date: 2023,
    }
  ];
  return (
    <>
      <ProjectsList projects={projects} />
    </>
  );
};

export default ProjectsPage;
