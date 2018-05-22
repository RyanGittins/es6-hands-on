const fancyTalk = (word, callbacks = []) => {
    console.log(word);
    callbacks.forEach((callback) => callback(word));
};

const lower = (word) => console.log(word.toLowerCase());
const upper = (word) => console.log(word.toUpperCase());

fancyTalk("Chicken Lips", [lower, upper]);
