const messages = [
    "You’re doing an amazing job, even on tough days.",
    "You are so loved, more than you’ll ever know! 💖",
    "Take it slow, everything will fall into place.",
    "Even when it's hard, you're still shining brightly! ✨",
    "You are enough, just as you are! (◕‿◕✿)",
    "Sending you all the warm hugs. You’re never alone! (っ˘̩╮˘̩)っ",
    "Everything is going to be okay. I believe in you!",
    "You’ve got this, I’m rooting for you!",
    "You are braver than you think. Keep going.",
    "You are a shining star, never forget that! (｡♥‿♥｡)",
    "Even small steps forward are big wins.",
    "You are doing your best, and that’s all that matters.",
    "Take a deep breath, everything will be alright.",
    "You are worthy of love, just as you are.",
    "No one else is like you, and that’s the best thing about you! (ღ✪v✪)ღ",
    "You are stronger than you know! Keep going!",
    "It’s okay to take things slow. You’re doing wonderfully.",
    "You are loved, always and forever!",
    "Even when it’s hard, you’re making progress. (◕‿◕)",
    "Be kind to yourself, you’re doing your best! (｡•̀ᴗ•́｡)",
    "The world is brighter with you in it.",
    "You’re stronger than your struggles. Keep pushing forward!",
    "It’s okay to have bad days. You’re still amazing.",
    "Your heart is so kind, and the world needs your light!",
    "You’re doing great, one day at a time. Keep going, okay?",
    "You are a beautiful soul, don’t forget that! (◡‿◡✿)",
    "Even on hard days, you’re making a difference.",
    "You are loved more than words can say!",
    "Don’t forget, you are more than enough just as you are.",
    "You are making progress, even if it doesn’t feel like it.",
    "You are doing so much better than you realize. Keep going!",
    "You are allowed to take things at your own pace. Take your time!",
    "Sending you a little reminder: You are important and loved.",
    "Even when it feels tough, you are tougher! (๑•̀ㅂ•́)و✧",
    "You deserve all the love in the world! Keep being you!",
    "You are doing the best you can, and that’s amazing!",
    "You are such a strong person! I’m so proud of you!",
    "No need to rush, just take it one step at a time. You’re doing great!",
    "You are one of a kind, and that’s the best thing about you!",
    "Every step you take, no matter how small, is worth celebrating!",
    "You’re such a fighter, and I admire your strength.",
    "Don’t be too hard on yourself, you’re doing more than enough.",
    "You bring joy just by being you. Keep shining!",
    "You’ve made it through everything before. You can do it again!",
    "You are doing more than you realize. Keep it up!",
    "You are capable of so many beautiful things. Believe in yourself.",
    "You are more than enough. You are perfect just the way you are! (≧◡≦)",
    "The world is better with you in it. Don’t ever forget that!",
    "You are stronger than you think. Take it day by day!",
    "You’re doing great, even if it doesn’t feel like it!",
    "You are loved more than you could ever imagine! (灬º‿º灬)♡",
    "Don’t be afraid to rest. You’ve been doing great.",
    "You are loved beyond words, and I’m here for you always!",
    "Even on the hardest days, you are still amazing! (｡•̀ᴗ•́)",
    "You are doing great, even if you don’t see it yet.",
    "Your efforts matter, and you are stronger than you know!",
    "You’ve already come so far, and you can go even further!",
    "You are doing an incredible job. Keep going, you’ve got this!",
    "You are worth more than you’ll ever know. Keep being amazing!",
    "You are unique, and that’s what makes you so special.",
    "Don’t rush your journey. Take your time. You are doing just fine!",
    "You are beautiful, inside and out. Never forget that.",
    "You have so much strength inside you. I’m so proud of you!",
    "It’s okay to take a break. You’ve been doing great.",
    "You are capable of so much, and I believe in you!",
    "You’re doing your best, and that’s something to be proud of.",
    "You are loved. Always, and forever.",
    "Every day you get stronger, even if it doesn’t feel that way!",
    "You are not alone in this. We’re all here for you.",
    "You are loved for who you are, not for what you do.",
    "You have a beautiful soul. Never forget that!",
    "You're doing better than you think. Keep going!",
    "You are a gem, shining bright in this world. Keep sparkling!"
]
    ;


function getRandomUniqueMessages(count) {
    const uniqueMessages = [];
    const usedIndices = new Set(); // Track used indices to ensure uniqueness

    while (uniqueMessages.length < count && uniqueMessages.length < messages.length) {
        const randomIndex = Math.floor(Math.random() * messages.length);

        if (!usedIndices.has(randomIndex)) {
            usedIndices.add(randomIndex);
            uniqueMessages.push(messages[randomIndex]);
        }
    }

    return uniqueMessages;
}
function typewriterReplaceText(element, newValue, deleteSpeed = 100, typeSpeed = 100, callback) {
    // Ensure newValue is a string
    newValue = String(newValue);

    const currentText = element.textContent; // Get the current text
    let deleteIndex = currentText.length;   // Start deleting from the end
    let typeIndex = 0;                      // Start typing the new text from the beginning

    // Function to delete text letter by letter
    function deleteText() {
        if (deleteIndex > 0) {
            element.textContent = currentText.slice(0, --deleteIndex);
            setTimeout(deleteText, deleteSpeed); // Use custom delete speed
        } else {
            typeText(); // Start typing once deletion is done
        }
    }

    // Function to type the new text letter by letter
    function typeText() {
        if (typeIndex < newValue.length) {
            element.textContent += newValue.charAt(typeIndex++);
            setTimeout(typeText, typeSpeed); // Use custom type speed
        } else if (callback) {
            callback(); // Call the callback function when done
        }
    }

    deleteText(); // Start with deleting the current text
}

document.getElementById("next").onclick = () => {
    const button = document.getElementById("next");
    const quoteElement = document.getElementById("qoute");

    // Disable the button during the animation
    button.disabled = true;

    // Replace text with typewriter effect and re-enable the button after completion
    typewriterReplaceText(quoteElement, getRandomUniqueMessages(1), 10, 40, () => {
        button.disabled = false; // Re-enable the button after animation
    });
};


function createMovingText(text, speed = 3, bounciness = 10, maxLength = 25) {
    const textElement = document.createElement('div');
    textElement.classList.add('bouncing-text');

    // Check if the text is longer than the specified maxLength
    if (text.length > maxLength) {
        // Find the last space within the maxLength limit
        const breakPoint = text.lastIndexOf(' ', maxLength);
        if (breakPoint === -1) {
            // If no space is found (i.e., the text has no spaces), break at maxLength
            text = text.slice(0, maxLength) + '<br>' + text.slice(maxLength);
        } else {
            // Otherwise, break at the last space within maxLength
            text = text.slice(0, breakPoint) + '<br>' + text.slice(breakPoint + 1);
        }
    }

    textElement.innerHTML = text; // Use innerHTML to allow the <br> tag

    // Append the text to the body
    document.body.appendChild(textElement);

    // Initialize movement variables
    let x = Math.random() * (window.innerWidth - textElement.offsetWidth);
    let y = Math.random() * (window.innerHeight - textElement.offsetHeight);
    let dx = (Math.random() * 2 - 1) * speed; // Random X direction
    let dy = (Math.random() * 2 - 1) * speed; // Random Y direction

    // Set the initial position
    textElement.style.position = 'absolute'; // Ensure absolute positioning
    textElement.style.left = `${x}px`;
    textElement.style.top = `${y}px`;

    // Function to update the position and move the text
    function moveText() {
        // Update position
        x += dx;
        y += dy;

        // Prevent the text from sticking to the edges
        if (x <= 0 || x >= window.innerWidth - textElement.offsetWidth) {
            dx = -dx; // Reverse X direction
            // Ensure it doesn't move too far outside the viewable area
            x = Math.max(0, Math.min(window.innerWidth - textElement.offsetWidth, x));
        }

        if (y <= 0 || y >= window.innerHeight - textElement.offsetHeight) {
            dy = -dy; // Reverse Y direction
            // Ensure it doesn't move too far outside the viewable area
            y = Math.max(0, Math.min(window.innerHeight - textElement.offsetHeight, y));
        }

        // Update the text position
        textElement.style.left = `${x}px`;
        textElement.style.top = `${y}px`;

        // Call moveText again on the next frame
        requestAnimationFrame(moveText);
    }

    // Start the movement
    moveText();
    adjustFontSizeForAll();
}




function adjustFontSizeForAll() {
    const elements = document.querySelectorAll(".bouncing-text");

    elements.forEach(element => {
        const textLength = element.textContent.length;

        // Set the font size dynamically based on the length of the text
        const newFontSize = Math.max(30 - textLength / 3, 18); // Minimum font size is 10px
        element.style.fontSize = newFontSize + "px";
    });
}


function getGreeting() {
    const now = new Date(); // Get the current date and time
    const hour = now.getHours(); // Extract the hour (0-23)

    if (hour >= 5 && hour < 12) {
        return "good morning";
    } else if (hour >= 12 && hour < 18) {
        return "good afternoon";
    } else if (hour >= 18 && hour < 22) {
        return "good evening";
    } else {
        return "good night";
    }
}

console.log(getGreeting());

function getCurrentTime() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const isPM = hours >= 12;

    // Convert to 12-hour format
    hours = hours % 12 || 12;
    const formattedMinutes = minutes.toString().padStart(2, "0");

    return `${hours}:${formattedMinutes} ${isPM ? "PM" : "AM"}`;
}

function updateData() {
    document.getElementById("time").textContent = getCurrentTime();
    document.getElementById("greet").textContent = getGreeting();
}


updateData();
setInterval(updateData, 1000);



