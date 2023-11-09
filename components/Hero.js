import Particles from "react-particles";
import "./Hero.scss"
import { useCallback } from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Link from "next/link";
import {useTranslations} from 'next-intl';
import { faSquareWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { loadFull } from "tsparticles"; 
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
    const t = useTranslations('hero');
    const particlesInit = useCallback(async engine => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    const onClick= () => {
        console.log('call to action cliqued');
    }

    return (
      <>
        <section id="top" className="hero">
            <div className="hero_container">
                <div className="hero_image-container">
                    <img className="hero_image" src="/img/logo.png" alt="logo"/>
                </div>
                <div className="hero_text-container">
                    <h1><span className="hero_title">Frederic CHAPLIN </span>
                        <span className="hero_job">{t('developer')}</span></h1>
                </div>
                <div className="hero_call-to-action">
                    <div className="hero_call-button">
                        <a title="whatsapp" target="_blank" rel="noopener noreferrer" href="https://web.whatsapp.com/send/?phone=33663771374"
                           role="button"
                           onKeyDown={onClick}
                           onClick={onClick}>
                            <FontAwesomeIcon className="fas fa-lg" icon={faSquareWhatsapp}/>
                        </a>
                    </div>
                    <div className="hero_call-text">{t('callText')}</div>
                </div>
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
            </div>
            <a className="hero_arrow-down" href="#services">
                <FontAwesomeIcon className="fas fa-lg" icon={faChevronDown}/>
            </a>
            <div className="anchor" id="services"></div>
        </section>
        
        </>
    )
}

export default Hero
