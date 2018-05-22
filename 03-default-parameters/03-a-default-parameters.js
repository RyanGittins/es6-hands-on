function WidgetVerber(selector, options) {
    var selector = selector || ".widget";
    var options = options || {};

    if (options.verb) {
        console.log(`Gonna ${options.verb}!`);
    } else {
        console.log("No verb to do!");
    }
}

const verber = new WidgetVerber("#selector");
