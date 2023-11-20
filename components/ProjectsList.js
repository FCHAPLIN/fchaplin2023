"use client";
import { MenuItem, Select } from "@material-ui/core";
import "./ProjectsList.scss";
import { useTranslations } from "next-intl";
import { useCallback, useState } from "react";
import Particles from "react-particles";
import "./ProjectsList.scss";
import { loadFull } from "tsparticles"; 

const ProjectsList = (props) => {
  const t = useTranslations("projects");
  const { projects } = props;
  const projectsList = projects.map((project) => (
    <li key={project.title}>{project.title}</li>
  ));
  const initialProject = projects[projects.length - 1];
  const [selectedProject, setSelectedProject] = useState(initialProject);

  const handleChange = (event) => {
    console.log(event.target.value);
    const projectSelected = projects.find(
      (project) => project.id === event.target.value
    );
    setSelectedProject(projectSelected);
  };

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    
    <section className="projects">
      <Particles className="particles"
        init={particlesInit} 
        loaded={particlesLoaded}
        options={{
              "autoPlay": true,
              "defaultThemes": {},
              "delay": 0,
              
              "detectRetina": true,
              "duration": 0,
              "fpsLimit": 120,
              "interactivity": {
                "detectsOn": "window",
                "events": {
                  "resize": {
                    "delay": 0.5,
                    "enable": true
                  }
                },
                "modes": {
                  "trail": {
                    "delay": 1,
                    "pauseOnStop": false,
                    "quantity": 1
                  },
                  "attract": {
                    "distance": 200,
                    "duration": 0.4,
                    "easing": "ease-out-quad",
                    "factor": 1,
                    "maxSpeed": 50,
                    "speed": 1
                  },
                  
                  "bubble": {
                    "distance": 200,
                    "duration": 0.4,
                    "mix": false,
                    "divs": {
                      "distance": 200,
                      "duration": 0.4,
                      "mix": false,
                      "selectors": []
                    }
                  },
                  "connect": {
                    "distance": 130,
                    "links": {
                      "opacity": 1
                    },
                    "radius": 60
                  },
                  "grab": {
                    "distance": 100,
                    "links": {
                      "blink": false,
                      "consent": false,
                      "opacity": 1
                    }
                  },
                  "push": {
                    "default": true,
                    "groups": [],
                    "quantity": 4
                  },
                  "remove": {
                    "quantity": 2
                  },
                  
                  "slow": {
                    "factor": 3,
                    "radius": 200
                  },
                  "light": {
                    "area": {
                      "gradient": {
                        "start": {
                          "value": "#ffffff"
                        },
                        "stop": {
                          "value": "#000000"
                        }
                      },
                      "radius": 1000
                    },
                    "shadow": {
                      "color": {
                        "value": "#000000"
                      },
                      "length": 2000
                    }
                  }
                }
              },
              "manualParticles": [],
              "particles": {
                "bounce": {
                  "horizontal": {
                    "random": {
                      "enable": false,
                      "minimumValue": 0.1
                    },
                    "value": 1
                  },
                  "vertical": {
                    "random": {
                      "enable": false,
                      "minimumValue": 0.1
                    },
                    "value": 1
                  }
                },
                "color": {
                  "value": "#CCCCCC",
                },
                "groups": {},
                "move": {
                  "angle": {
                    "offset": 0,
                    "value": 90
                  },
                  "attract": {
                    "distance": 200,
                    "enable": false,
                    "rotate": {
                      "x": 3000,
                      "y": 3000
                    }
                  },
                  "center": {
                    "x": 50,
                    "y": 50,
                    "mode": "percent",
                    "radius": 0
                  },
                  "decay": 0,
                  "distance": {},
                  "direction": "none",
                  "drift": 0,
                  "enable": true,
                  "gravity": {
                    "acceleration": 9.81,
                    "enable": false,
                    "inverse": false,
                    "maxSpeed": 50
                  },
                  "path": {
                    "clamp": true,
                    "delay": {
                      "random": {
                        "enable": false,
                        "minimumValue": 0
                      },
                      "value": 0
                    },
                    "enable": false,
                    "options": {}
                  },
                  "outModes": {
                    "default": "out",
                    "bottom": "out",
                    "left": "out",
                    "right": "out",
                    "top": "out"
                  },
                  "speed": 2,
                  "spin": {
                    "acceleration": 0,
                    "enable": false
                  },
                },
                "number": {
                  "density": {
                    "enable": true,
                    "width": 1920,
                    "height": 1080
                  },
                  "limit": 0,
                  "value": 100

                },
                
                "reduceDuplicates": false,
                "shadow": {
                  "blur": 0,
                  "color": {
                    "value": "#000"
                  },
                  "enable": false,
                  "offset": {
                    "x": 0,
                    "y": 0
                  }
                },
                "shape": {
                  "close": true,
                  "fill": true,
                  "options": {},
                  "type": "circle"
                },
                "size": {
                  "value": {
                    "min": 0.1,
                    "max": 3
                  },
                  "animation": {
                    "count": 0,
                    "enable": false,
                    "speed": 5,
                    "decay": 0,
                    "delay": 0,
                    "sync": false,
                    "mode": "auto",
                    "startValue": "random",
                    "destroy": "none"
                  }
                },
                "stroke": {
                  "width": 1
                },
                
                
                
                "tilt": {
                  "random": {
                    "enable": false,
                    "minimumValue": 0
                  },
                  "value": 0,
                  "animation": {
                    "enable": false,
                    "speed": 0,
                    "decay": 0,
                    "sync": false
                  },
                  "direction": "clockwise",
                  "enable": false
                },
                "twinkle": {
                  "particles": {
                    "enable": true,
                    "frequency": 0.05,
                    "opacity": 1
                  }
                },
                "wobble": {
                  "distance": 5,
                  "enable": false,
                  "speed": {
                    "angle": 50,
                    "move": 10
                  }
                },
                "life": {
                  "count": 0,
                  "delay": {
                    "random": {
                      "enable": false,
                      "minimumValue": 0
                    },
                    "value": 0,
                    "sync": false
                  },
                  "duration": {
                    "random": {
                      "enable": false,
                      "minimumValue": 0.0001
                    },
                    "value": 0,
                    "sync": false
                  }
                },
                "links": {
                  "blink": false,
                  "color": {
                    "value": "#ffffff"
                  },
                  "consent": false,
                  "distance": 150,
                  "enable": true,
                  "frequency": 1,
                  "opacity": 0.4,
                  "shadow": {
                    "blur": 5,
                    "color": {
                      "value": "#000"
                    },
                    "enable": false
                  },
                  "triangles": {
                    "enable": false,
                    "frequency": 1
                  },
                  "width": 1,
                  "warp": false
                },
                
              },
              
              "responsive": [],
              "smooth": false,
              "style": {},
              "themes": [],
              "zLayers": 100,
              "motion": {
                "disable": false,
                "reduce": {
                  "factor": 4,
                  "value": true
                }
              }
            }} />
          
      <h1 className="projects_title">
        Projects <span className="projects_subtitle">Explorer</span>
      </h1>
      <div>{selectedProject.date}</div>
      <Select
        className="project-select"
        value={selectedProject.id}
        onChange={(e) => handleChange(e)}
        disableUnderline
      >
        {projects.map((project, i) => {
          return (
            <MenuItem value={project.id} key={project.id}>
              {project.title}
            </MenuItem>
          );
        })}
      </Select>
      <div>{selectedProject.title}</div>
      
    </section>
    
  );
};

export default ProjectsList;
