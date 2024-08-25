function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function sing() {
    // Define an array of lyrics with their corresponding wait times
    const lyrics = [
        { text: "I know that we are upside down", delay: 3000 },
        { text: "So hold your tongue and hear me out", delay: 3000 },
        { text: "I know that we were made to break", delay: 2300 },
        { text: "So what? I don't mind", delay: 3650 },
        { text: "You kill the lights, I'll draw the blinds", delay: 2800},
        { text: "Don't dull the sparkle in your eyes", delay: 2750 },
        { text: "I know that we were made to break", delay: 2200 },
        { text: "So what? I don't mind", delay: 3450 },
        { text: "Are you gonna stay the night?", delay: 2800 },
        { text: "Are you gonna stay the night?", delay: 2800 },
        { text: "Oh-oh, oh-oh, oh-oh, oh-oh", delay: 2250 },
        { text: "Are you gonna stay the night?", delay: 3750 },
        { text: "Are you gonna stay the night?", delay: 2900 },
        { text: "Doesn't mean we're bound for life", delay: 2600 },
        { text: "So-o, oh-oh, oh-oh, oh-oh", delay: 2400 },
        { text: "Are you gonna stay the night?", delay: 3700 },
        { text: "I am a fire, you're gasoline", delay: 2700 },
        { text: "Come pour yourself all over me", delay: 2700 },
        { text: "We'll let this place go down in flames, only one more time", delay: 6000 },
        { text: "You kill the lights, I'll draw the blinds", delay: 2800 },
        { text: "Don't dull the sparkle in your eyes", delay: 2750 },
        { text: "I know that we were made to break", delay: 2300 },
        { text: "So what? I don't mind", delay: 3400 },
        { text: "Are you gonna stay the night?", delay: 2800 },
        { text: "Are you gonna stay the night?", delay: 2800 },
        { text: "Oh-oh, oh-oh, oh-oh, oh-oh", delay: 500 },
        { text: "Are you gonna stay the night?", delay: 500 },
        { text: "Are you gonna stay the night? (When we get burned)", delay: 500 },
        { text: "Doesn't mean we're bound for life (We never learn)", delay: 500 },
        { text: "So-o, oh-oh, oh-oh, oh-oh", delay: 500 },
        { text: "Are you gonna stay the night?", delay: 500 },
        { text: "Are you gonna stay the night?", delay: 500 },
        { text: "Doesn't mean we're bound for life", delay: 500 },
        { text: "So-o, oh-oh, oh-oh, oh-oh", delay: 500 },
        { text: "Are you gonna stay the night?", delay: 500 },
        { text: "(Are you gonna stay the night?)", delay: 500 },
        { text: "(Are you gonna stay the night?)", delay: 500 },
        { text: "(Oh-oh, oh-oh, oh-oh, oh-oh)", delay: 500 },
        { text: "(Are you gonna stay the night?)", delay: 500 }
    ];

    // Iterate over the lyrics array and print each line with a delay
    for (const line of lyrics) {
        console.log(line.text);
        await wait(line.delay);
    }
}
