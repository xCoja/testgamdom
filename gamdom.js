function countdown() {
    // Set the start time to yesterday at 4:00 PM CET, converted to UTC
    var startTimeUTC = Date.UTC(2024, 11, 26, 0, 0, 0); // Adjusted to UTC: 2024-08-17 14:00:00 UTC

    // Calculate the end time: 14 days after the start time
    var countDownDate = startTimeUTC + (14 * 24 * 60 * 60 * 1000); // 14 days in milliseconds

    var x = setInterval(function() {
        // Get the current time in UTC
        var now = new Date().getTime();

        // Calculate the remaining time
        var distance = countDownDate - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Update the countdown display
        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;

        // If the countdown is over, stop the timer
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("days").innerHTML = "0";
            document.getElementById("hours").innerHTML = "0";
            document.getElementById("minutes").innerHTML = "0";
            document.getElementById("seconds").innerHTML = "0";
        }
    }, 1000);
}

countdown();

function createBubbles() {
    const bubblesContainer = document.querySelector('.bubbles-container');
    const bubbleCount = 100;

    for (let i = 0; i < bubbleCount; i++) {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        const size = Math.random() * 3 + 3;
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        bubble.style.left = `${Math.random() * 100}%`;
        bubble.style.animationDelay = `${Math.random() * 15}s`;
        bubble.style.background = `rgba(0, 255, 134, ${Math.random() * 0.5 + 0.2})`;

        bubblesContainer.appendChild(bubble);
    }
}

// Show Winners Popup
const showWinnersButton = document.querySelector('.show-winners');
const popupOverlayWinners = document.getElementById('popup-overlay-winners');
const popupCloseWinners = document.getElementById('popup-close-winners');
const set1 = document.getElementById('set1');
const set2 = document.getElementById('set2');
const set3 = document.getElementById('set3');
const set4 = document.getElementById('set4');
const set5 = document.getElementById('set5');
const nav1 = document.getElementById('nav1');
const nav2 = document.getElementById('nav2');
const nav3 = document.getElementById('nav3');
const nav4 = document.getElementById('nav4');
const nav5 = document.getElementById('nav5');
const popupDate = document.getElementById('popup-date');  // Get the popup date element

showWinnersButton.addEventListener('click', (event) => {
    event.stopPropagation();
    popupOverlayWinners.style.display = 'flex';
    set1.style.display = 'none'; // Show Set 1 by default
    set2.style.display = 'none';  // Hide Set 2 by default
    set3.style.display = 'none';  // Hide Set 3 by default
    set4.style.display = 'none';  // Hide Set 3 by default
    set5.style.display = 'block';
    nav1.classList.add('active');  // Set nav1 as active
    nav2.classList.remove('active');
    nav3.classList.remove('active');
    nav4.classList.remove('active');
    nav5.classList.remove('active')
});

popupCloseWinners.addEventListener('click', (event) => {
    event.stopPropagation();
    popupOverlayWinners.style.display = 'none';
});

popupOverlayWinners.addEventListener('click', (event) => {
    if (event.target === popupOverlayWinners) {
        popupOverlayWinners.style.display = 'none';
    }
});




// How to Claim Prize Popup
const howToClaimButton = document.querySelector('.how-to-claim-prize');
const popupOverlayClaimPrize = document.getElementById('popup-overlay-claim');
const popupCloseClaimPrize = document.getElementById('popup-close-claim');

howToClaimButton.addEventListener('click', (event) => {
    event.stopPropagation();
    popupOverlayClaimPrize.style.display = 'flex';
});

popupCloseClaimPrize.addEventListener('click', (event) => {
    event.stopPropagation();
    popupOverlayClaimPrize.style.display = 'none';
});

popupOverlayClaimPrize.addEventListener('click', (event) => {
    if (event.target === popupOverlayClaimPrize) {
        popupOverlayClaimPrize.style.display = 'none';
    }
});

// Contact Popup
const contactButton = document.getElementById('contact-button');
const popupOverlayContact = document.getElementById('popup-overlay-contact');
const popupCloseContact = document.getElementById('popup-close-contact');

contactButton.addEventListener('click', (event) => {
    event.stopPropagation();
    popupOverlayContact.style.display = 'flex';
});

popupCloseContact.addEventListener('click', (event) => {
    event.stopPropagation();
    popupOverlayContact.style.display = 'none';
});

popupOverlayContact.addEventListener('click', (event) => {
    if (event.target === popupOverlayContact) {
        popupOverlayContact.style.display = 'none';
    }
});

// Disclaimer Popup
const disclaimerButton = document.getElementById('disclaimer-button');
const popupOverlayDisclaimer = document.getElementById('popup-overlay-disclaimer');
const popupCloseDisclaimer = document.getElementById('popup-close-disclaimer');

disclaimerButton.addEventListener('click', (event) => {
    event.stopPropagation();
    popupOverlayDisclaimer.style.display = 'flex';
});

popupCloseDisclaimer.addEventListener('click', (event) => {
    event.stopPropagation();
    popupOverlayDisclaimer.style.display = 'none';
});

popupOverlayDisclaimer.addEventListener('click', (event) => {
    if (event.target === popupOverlayDisclaimer) {
        popupOverlayDisclaimer.style.display = 'none';
    }
});

window.onload = function() {
    countdown();
    createBubbles();
};


const YOUTUBE_RSS_FEED = 'https://www.youtube.com/feeds/videos.xml?channel_id=UCxElbn4HsMP9hYoM_dYjX2g'; 
const RSS2JSON_API_URL = 'https://api.rss2json.com/v1/api.json?rss_url=';

async function fetchYouTubeVideos() {
    const response = await fetch(`${RSS2JSON_API_URL}${encodeURIComponent(YOUTUBE_RSS_FEED)}`);
    const data = await response.json();
    displayYouTubeVideos(data.items.slice(0, 5));
}

function displayYouTubeVideos(videos) {
    const youtubeVideosContainer = document.getElementById('youtube-videos');
    youtubeVideosContainer.innerHTML = '';

    videos.forEach(video => {
        const videoCard = document.createElement('div');
        videoCard.className = 'youtube-video-card';
        videoCard.innerHTML = `
            <a href="${video.link}" target="_blank">
                <img src="${video.thumbnail}" alt="${video.title}" class="youtube-video-thumbnail">
                <div class="youtube-video-title">${video.title}</div>
            </a>
        `;
        youtubeVideosContainer.appendChild(videoCard);
    });
}


window.onload = function() {
    countdown();
    fetchYouTubeVideos();
    createBubbles();

      // Participate Popup
const participateButton = document.querySelector('.how-to-participate');
const viewPrize = document.querySelector('.view-prizes');
const popupOverlay = document.getElementById('popup-overlay');
const popupOverlay2 = document.getElementById('popup-overlay-2');
const popupClose = document.getElementById('popup-close');

// Event listener for the "How to Participate" button
participateButton.addEventListener('click', (event) => {
    event.stopPropagation();
    popupOverlay.style.display = 'flex'; // Opens the "How to Participate" popup
});

// Event listener for the "View Prizes" button
viewPrize.addEventListener('click', (event) => {
    event.stopPropagation();
    popupOverlay2.style.display = 'flex'; // Opens the "View Prizes" popup
});

// Close popup when the close button is clicked
popupClose.addEventListener('click', (event) => {
    event.stopPropagation();
    popupOverlay.style.display = 'none'; // Close "How to Participate" popup
    popupOverlay2.style.display = 'none'; // Close "View Prizes" popup
});

// Close popup when clicking outside the popup content
popupOverlay.addEventListener('click', (event) => {
    if (event.target === popupOverlay) {
        popupOverlay.style.display = 'none';
    }
});

popupOverlay2.addEventListener('click', (event) => {
    if (event.target === popupOverlay2) {
        popupOverlay2.style.display = 'none';
    }
});


// Close the popup when the close button is clicked
popupCloseWinners.addEventListener('click', (event) => {
    event.stopPropagation();
    popupOverlayWinners.style.display = 'none';
});

// Close the popup when clicking outside the content area
popupOverlayWinners.addEventListener('click', (event) => {
    if (event.target === popupOverlayWinners) {
        popupOverlayWinners.style.display = 'none';
    }
});}
