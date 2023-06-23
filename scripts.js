// create collapsible menu
const coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", () => {
    let content = coll[i].nextElementSibling;
    // show text
    if (content.style.display === "flex") {
      content.style.display = "none";
    } else {
      content.style.display = "flex";
    }

    // set grid column for larger screen
    if (i % 2 === 0) {
      content.classList.toggle('col-1');
    } else {
      content.classList.toggle('col-2');
    }

    coll[i].classList.toggle('active');

    let closeBtn = content.lastChild;
    closeBtn.setAttribute("tabIndex", "0");
  });
}

// Disable hover styling on touch devices 
const watchForHover = () => {
  let lastTouchTime = 0;

  const enableHover = () => {
    if (new Date() - lastTouchTime < 500) return 
    document.body.classList.add('hasHover');
  };

  const disableHover = () => {
    document.body.classList.remove('hasHover');
  };

  const updateLastTouchTime = () => {
    lastTouchTime = new Date();
  };

  document.addEventListener('touchstart', updateLastTouchTime, true);
  document.addEventListener('touchstart', disableHover, true);
  document.addEventListener('mousemove', enableHover, true);

  enableHover();
};

watchForHover();

// create Close-Buttons
const addCloseButtons = () => {
  const archetypes = document.querySelectorAll('.archetype');

  archetypes.forEach(function (archetype) {
    const btn = document.createElement('button');

    btn.className = 'close-button';
    btn.setAttribute("type", "button")
    btn.innerHTML = `Close  (X)`;

    archetype.appendChild(btn);
  });

  const buttonList = document.querySelectorAll('.close-button');

  for (let i = 0; i < buttonList.length; i++) {
    buttonList[i].addEventListener("click", () => {
      let archetypeDiv = buttonList[i].parentElement;

      if (archetypeDiv.style.display === "flex") {
        archetypeDiv.style.display = "none";
      } else {
        archetypeDiv.style.display = "flex";
      }

      let collapsible = archetypeDiv.previousElementSibling;
      collapsible.classList.toggle('active');

      if (i % 2 === 0) {
        archetypeDiv.classList.toggle('col-1');
      } else {
        archetypeDiv.classList.toggle('col-2');
      }

      let closeBtn = archetypeDiv.lastChild;
      closeBtn.removeAttribute("tabIndex");
    });
  };

};

addCloseButtons();

