function checkMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

if (checkMobile()) {
    location.replace('https://www.youtube.com/channel/UCzh4yY8rl38knH33XpNqXbQ');
}