var organizations = { 0: {"organization": "Immigration", 
                          "description": "More people are migrating to the United States, and it is important to make sure they have the necessary resources to make it through the process.",
                          "link": "https://www.iom.int/" 
                        },
                      1: {"organization": "Native Americans", 
                          "description": "Native Americans are one of the people of color suffering from discrimination unfortunately, but the Native American Rights Fund helps to protect their rights.",
                          "link": "https://www.narf.org/" 
                        },
                      2: {"organization": "Homelessness", 
                          "description": "Homelessness has been on the rise due to lay-offs, poverty, etc. The National Alliance to End Homelessness works to help those in homeless situations.",
                          "link": "https://endhomelessness.org/" 
                        },
                      3: {"organization": "Environmental Protection", 
                          "description": "The increase in reliance on carbon dioxide and other gases has had an increasing negative effect on the environment. The Sierra Club Foundations works to decrease these effects.",
                          "link": "https://www.sierraclubfoundation.org/" 
                        },
                      4: {"organization": "Family Situations", 
                          "description": "Each family has a different situation, with issues often revolving around financial and housing issues. Habitat for Humanity works to help families.",
                          "link": "https://www.habitat.org/" 
                        },
                      5: {"organization": "Animals", 
                          "description": "Animals often suffer from being in the shelter too long, abuse, neglect, etc. American Humane works to help domesticated and wild animals stuck in awful situations.",
                          "link": "https://www.americanhumane.org/" 
                        },
                      6: {"organization": "Racial Injustice", 
                          "description": "Racial injustice, also known as racial profiling, has always been an unfortunate problem in society. However, more recently, racial tensions have increased at an alarming rate. The main causes of increasing racial injustice include more awareness of police brutality towards African Americans as well as anti-Asian sentiment that has grown due to the origin place of COVID-19.",
                          "link": "https://www.racialequitytools.org/resources"
                        }
                    }

const keys = Object.keys(organizations)
const randomIndex = Math.floor(Math.random() * keys.length);

document.getElementById("issue").innerHTML = organizations[randomIndex]["organization"]
document.getElementById("issue-description").innerHTML = organizations[randomIndex]["description"]

document.getElementById("issue-link").innerHTML = organizations[randomIndex]["link"]
document.getElementById("issue-link").href = organizations[randomIndex]["link"]