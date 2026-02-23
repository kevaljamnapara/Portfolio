// Project data for the portfolio
const projects = [
    {
        id: 1,
        name: "Bank Management System",
        description: "Console-based banking system simulator with account management, deposits, withdrawals, and balance checking.",
        technologies: ["Python", "OOP", "CLI", "File Handling"],
        githubUrl: "https://github.com/Keval1306/Bank-management-in-python",
        liveUrl: null,
        image: "🏦"
    },
    {
        id: 2,
        name: "Weather App",
        description: "Real-time weather application with 5-day forecast, favorite cities, and detailed air conditions panel.",
        technologies: ["HTML5", "CSS3", "JavaScript", "WeatherAPI"],
        githubUrl: "https://github.com/Keval1306/weather-app",
        liveUrl: "https://keval1306.github.io/weather-app/",
        image: "🌤️"
    },
    {
        id: 3,
        name: "AI Chatbot (Gemini LLM)",
        description: "Conversational AI chatbot powered by Google's Gemini API with natural language understanding and dynamic responses.",
        technologies: ["Python", "Google Gemini API", "REST API", "NLP"],
        githubUrl: "https://github.com/Keval1306/Chatbot-using-LLM-like-Gemini",
        liveUrl: null,
        image: "🤖"
    },
    {
        id: 4,
        name: "Disease Prediction ML",
        description: "Machine learning model for symptom-based disease prediction using multiple classification algorithms.",
        technologies: ["Python", "scikit-learn", "Pandas", "NumPy", "Jupyter"],
        githubUrl: "https://github.com/Keval1306/disease-prediction-ml",
        liveUrl: null,
        image: "🏥"
    },
    {
        id: 5,
        name: "Streamlit Bank Management",
        description: "Full-featured digital banking system with loans, overdraft functionality, and interactive admin panel.",
        technologies: ["Python", "Streamlit", "Data Visualization"],
        githubUrl: "https://github.com/Keval1306/streamlit-bank-management-system",
        liveUrl: null,
        image: "💰"
    }
];

// Export for use in main.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { projects };
}
