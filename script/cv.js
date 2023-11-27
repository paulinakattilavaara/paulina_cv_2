// skapa funktion för att ta in json-filen o lagra den i variabeln json
async function getResponse() {
  const response = await fetch("./data/cv.json");

  if (response.ok) {
    const json = await response.json();
    console.log(json);

    // få kontakt med p-taggar i cv:t
    const education = document.getElementById("education");
    const work = document.getElementById("work");
    const internship = document.getElementById("internship");

    // få ut education ur json i domen
    education.appendChild(
      createParagraph(
        json.Education[0].Year + " " + json.Education[0].Programme
      )
    );
    education.appendChild(
      createParagraph(
        json.Education[1].Year + " " + json.Education[1].Programme
      )
    );

    //få ut work ur json i domen
    work.appendChild(
      createParagraph(json.Work[0].Year + " " + json.Work[0].Work)
    );

    // få ut internships/summerjobs ur json i domen
    internship.appendChild(
      createParagraph(json.Internships[0].Year + " " + json.Internships[0].Work)
    );
    internship.appendChild(
      createParagraph(json.Internships[1].Year + " " + json.Internships[1].Work)
    );
    internship.appendChild(
      createParagraph(json.Internships[2].Year + " " + json.Internships[2].Work)
    );
    internship.appendChild(
      createParagraph(json.Internships[3].Year + " " + json.Internships[3].Work)
    );

    function createParagraph(text) {
      let p = document.createElement("p");
      p.textContent = text;
      return p;
    }
  } else {
    //vid fel visa status
    console.log(response.status);
  }
}
// kalla på funktionen
getResponse();
