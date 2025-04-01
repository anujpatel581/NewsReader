// Simulated news data
const mockNewsData = {
    breaking: [
        "Sunita Williams on spending 286 days in space: 'I was a little excited",
        "Breaking News: New government policy announced today.",
        "Breaking News: Stock markets see a significant dip."
    ],
    latest: [
        "Latest News: The weather is getting warmer this week.",
        "Latest News: New movie release breaking box office records.",
        "Latest News: Major tech company launches new smartphone."
    ],
    sports: [
        "Sports: Football team wins championship game!",
        "Sports: Tennis player wins Grand Slam title.",
        "Sports: Basketball season playoffs announced."
    ],
    technology: [
        "Technology: New AI tool reshapes the tech industry.",
        "Technology: Virtual reality headset becomes more affordable.",
        "Technology: Quantum computing breakthrough announced."
    ]
};

function showTab(tabName) {
    // Hide all tabs
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.remove('active'));
    
    // Show the selected tab
    const activeTab = document.getElementById(tabName);
    activeTab.classList.add('active');

    // Load the corresponding news
    loadNews(tabName);
}

function loadNews(tabName) {
    const newsContainer = document.getElementById(`${tabName}-news`);
    newsContainer.innerHTML = ''; // Clear existing news

    // Add mock data news items
    mockNewsData[tabName].forEach(newsItem => {
        const article = document.createElement('div');
        article.classList.add('news-article');
        article.innerText = newsItem;
        newsContainer.appendChild(article);
    });
}

// Load Breaking News by default
document.addEventListener('DOMContentLoaded', () => {
    showTab('breaking');
});
