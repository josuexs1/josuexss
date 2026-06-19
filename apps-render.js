const appsData = [
    {
        id: "generador-sensibilidades",
        title: "Generador de Sensibilidades",
        description: "Encuentra la configuración ideal para tu dispositivo en Free Fire. Valores probados por jugadores experimentados.",
        thumbnail: "img/thumb-generador.png",
        btnText: "IR AL GENERADOR",
        slug: "generador.html"
    },
    {
        id: "calibrador-sensibilidad",
        title: "Calibrador de Sensibilidad",
        description: "Optimiza tu sensibilidad basándose en tu dispositivo. Análisis personalizado para cada tipo de mira.",
        thumbnail: "img/thumb-calibrador.png",
        btnText: "IR AL CALIBRADOR",
        slug: "calibrador.html"
    }
];

function renderAppsGrid(containerId, data) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = data.map(app => `
        <div class="app-media-card" data-id="${app.id}" style="transition: opacity 0.2s ease, display 0.2s ease;">
            <div class="card-image-wrapper">
                <img src="${app.thumbnail}" alt="${app.title}" loading="lazy">
            </div>
            <div class="card-info-footer">
                <h2 class="card-meta-title">${app.title}</h2>
                <p class="card-meta-description">${app.description}</p>
                <a href="${app.slug}" class="card-action-btn">${app.btnText}</a>
            </div>
        </div>
    `).join('');
}

document.addEventListener("DOMContentLoaded", () => {
    renderAppsGrid("appsContainer", appsData);
});