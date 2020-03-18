function openCollapse() {
  document.getElementsByClassName("collapsible-content")[0].style.maxHeight = "600px";
  document.getElementsByClassName("collapsible-content")[0].style.opacity = 1;
  document.getElementsByClassName("collapsible-close")[0].style.display = "block";
  document.getElementsByClassName("collapsible-open")[0].style.display = "none";
  document.getElementsByClassName("icon-right-chevron")[0].style.display = "block";
  document.getElementsByClassName("icon-down-chevron")[0].style.display = "none";
}

function closeCollapse() {
  document.getElementsByClassName("collapsible-content")[0].style.maxHeight = 0;
  document.getElementsByClassName("collapsible-content")[0].style.opacity = 0;
  document.getElementsByClassName("collapsible-close")[0].style.display = "none";
  document.getElementsByClassName("collapsible-open")[0].style.display = "block";
  document.getElementsByClassName("icon-right-chevron")[0].style.display = "none";
  document.getElementsByClassName("icon-down-chevron")[0].style.display = "block";
}