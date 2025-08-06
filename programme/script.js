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

// Nova lógica para novos botões inseridos de ambos os eventos
function switchToMainTab(eventName, targetDayId) {
  // --- ATIVAR A ABA DO EVENTO PRINCIPAL ---

  // Identifica os IDs do conteúdo e do botão do evento alvo
  const mainContentId = `${eventName}-content`;
  const mainButtonId = `${eventName}-main-btn`;

  // Encontra o container geral da programação
  const component = document.querySelector(".main-tabs").closest(".container");

  // Primeiro, desativa TODAS as abas e conteúdos principais para limpar o estado
  component
    .querySelectorAll(".main-tabs button")
    .forEach((btn) => btn.classList.remove("active"));
  component
    .querySelectorAll(".main-content")
    .forEach((content) => content.classList.remove("active"));

  // Agora, ativa APENAS o conteúdo e o botão do evento que queremos ver
  document.getElementById(mainContentId).classList.add("active");
  document.getElementById(mainButtonId).classList.add("active");

  // --- ATIVAR A ABA DO DIA ESPECÍFICO ---

  // Agora que o container do evento está visível, trabalhamos dentro dele
  const mainContentToShow = document.getElementById(mainContentId);

  // Desativa TODAS as abas e conteúdos de dias dentro deste container
  mainContentToShow
    .querySelectorAll(".secondary-tabs button")
    .forEach((btn) => btn.classList.remove("active"));
  mainContentToShow
    .querySelectorAll(".secondary-content")
    .forEach((content) => content.classList.remove("active"));

  // Ativa APENAS o conteúdo do dia que queremos ver
  mainContentToShow.querySelector("#" + targetDayId).classList.add("active");

  // Encontra o botão que corresponde a esse dia e o ativa.
  // Ele é o único botão dentro das abas secundárias que tem o targetDayId no seu onclick.
  const dayButton = mainContentToShow.querySelector(
    `button[onclick*="'${targetDayId}'"]`
  );
  if (dayButton) {
    dayButton.classList.add("active");
  }
}

/**
 * Alterna para o evento principal e para o dia específico na GRADE PRELIMINAR.
 * @param {string} eventName - O nome do evento para o qual alternar
 * @param {string} targetDayId - O ID do painel de conteúdo do dia a ser exibido
 */
function switchToPrelimMainTab(eventName, targetDayId) {
  // Encontra o botão do evento principal
  const mainButtonId = `prelim-${eventName}-btn`;
  const mainButton = document.getElementById(mainButtonId);

  // Simula um clique nesse botão. Isso dispara a sua função 'showPrelimMainTab'
  //    e torna o container do evento (GeoPublica ou SotM) visível.
  if (mainButton) {
    mainButton.click();
  }

  // Agora que o container correto está visível, encontra o botão do DIA específico.
  //    Ele é identificado pelo seu atributo 'data-target', que deve ser igual ao 'targetDayId'.
  const dayButtonSelector = `.prelim-secondary-tabs button[data-target='${targetDayId}']`;
  const dayButton = document.querySelector(dayButtonSelector);

  // Simula um clique no botão do dia. Isso dispara a sua função 'showPrelimSecondaryTab'
  //    e exibe o conteúdo do dia correto.
  if (dayButton) {
    dayButton.click();
  }
}
