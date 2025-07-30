// Funções para alternar entre as tabelas e os dias das respectivas programações dos eventos
function showMainTab(event) {
  const clickedButton = event.currentTarget;
  const tabName = clickedButton.id.replace("-main-btn", "");

  document
    .querySelectorAll(".main-content")
    .forEach((content) => content.classList.remove("active"));
  document
    .querySelectorAll(".main-tabs button")
    .forEach((button) => button.classList.remove("active"));

  document.getElementById(tabName + "-content").classList.add("active");
  clickedButton.classList.add("active");
}

function showSecondaryTab(event, containerId) {
  const clickedButton = event.currentTarget;
  const container = document.getElementById(containerId);

  container
    .querySelectorAll(".secondary-content")
    .forEach((content) => content.classList.remove("active"));
  container
    .querySelectorAll(".secondary-tabs button")
    .forEach((button) => button.classList.remove("active"));

  const eventName = containerId.split("-")[0];
  let targetTabId;

  if (eventName === "geopublica") {
    targetTabId = clickedButton.textContent.includes("16/09")
      ? "geopublica-dia16"
      : "geopublica-dia17";
  } else {
    targetTabId = clickedButton.textContent.includes("18/09")
      ? "sotm-dia18"
      : "sotm-dia19";
  }

  document.getElementById(targetTabId).classList.add("active");
  clickedButton.classList.add("active");
}

/**
 * Função para alternar entre os eventos principais (GeoPublica vs. SotM) da GRADE PRELIMINAR.
 * @param {Event} event - O evento do clique do mouse.
 */
function showPrelimMainTab(event) {
  const clickedButton = event.currentTarget;
  const targetId = clickedButton.dataset.target;

  // Esconde todos os blocos de conteúdo principais
  document.querySelectorAll(".prelim-main-content").forEach((content) => {
    content.classList.remove("active");
  });
  // Desativa todos os botões principais
  document.querySelectorAll(".prelim-main-tabs button").forEach((button) => {
    button.classList.remove("active");
  });

  // Mostra o conteúdo e ativa o botão clicado
  document.getElementById(targetId).classList.add("active");
  clickedButton.classList.add("active");
}

/**
 * Função para alternar entre os dias dentro de um evento da GRADE PRELIMINAR.
 * @param {Event} event - O evento do clique do mouse.
 */
function showPrelimSecondaryTab(event) {
  const clickedButton = event.currentTarget;
  const targetId = clickedButton.dataset.target;

  // Encontra o container pai mais próximo para limitar o escopo da busca
  const container = clickedButton.closest(".prelim-main-content");

  // Esconde todos os conteúdos de dias DENTRO deste container
  container.querySelectorAll(".prelim-secondary-content").forEach((content) => {
    content.classList.remove("active");
  });
  // Desativa todos os botões de dias DENTRO deste container
  container
    .querySelectorAll(".prelim-secondary-tabs button")
    .forEach((button) => {
      button.classList.remove("active");
    });

  // Mostra o conteúdo do dia e ativa o botão clicado
  document.getElementById(targetId).classList.add("active");
  clickedButton.classList.add("active");
}
