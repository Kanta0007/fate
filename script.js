function showAllServants() {
  var servantElements = document.getElementsByClassName("servant");
  for (var i = 0; i < servantElements.length; i++) {
    servantElements[i].style.display = ""; 
  }
}

function showClass(servantClass) {
  var servantElements = document.getElementsByClassName("servant");
  for (var i = 0; i < servantElements.length; i++) {
    var servant = servantElements[i];
    if (servant.classList.contains(servantClass)) {
      servant.style.display = "table-row"; 
    } else { 
      servant.style.display = "none";
    }
  }
}

function toggleSection(sectionNumber) {
  var content = document.getElementById('content' + sectionNumber);
  if (content.classList.contains('active')) {
    content.classList.remove('active');
  } else {
    content.classList.add('active');
  }
}


