const favoriteListTmpl = (fav) => { `

    <div class="activity-card">
      <div class="activity-title">
        <h2>${activity.title}</h2>
      </div>
      <img class="activity-image" src="${activity.image}" alt="${activity.title}">
      <div class="activity-info-box">
        <p>${activity.date}<br>kl. ${activity.time}</p>
        <div class="heart-icon">❤️</div>
      </div>
      <button class="btn-read-more">
        <a href="#">Læs mere ▼</a>
      </button>
    </div>
    `
}