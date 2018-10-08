// This variable counts all the actions taken, starting 
// at 1. Every time #moreActions is clicked, it will go up.
let actionsCounter = 1;

// These numbers will track the L's and R's.
let lCounter = 0;
let rCounter = 0;

// Clicking on Add More Actions! button will create
// a new dropdown menu and number input.
$("#moreActions").on("click", () => {
    // Prevent browser from refreshing.
    event.preventDefault();

    // Add to actionsCounter to update divs.
    actionsCounter++;

    // Create a new div.
    const newDiv = document.createElement(`div`);
    newDiv.id = `actionsDiv${actionsCounter}`;

    // Add text so it is easier to read.
    const newText = `Action(s) Taken:`;

    // Create a new dropdown menu.
    const newSelect = document.createElement(`select`);

    // Add a new id.
    newSelect.id = `lOrR${actionsCounter}`;

    // Create new options.
    const defaultOption = document.createElement(`option`);
    const newL = document.createElement(`option`);
    const newR = document.createElement(`option`);

    // Add text, values, and ids.
    newL.innerHTML = `L`;
    newL.value = `L`;
    newL.id = `L${actionsCounter}`;
    newR.innerHTML = `R`;
    newR.value = `R`;
    newR.id = `R${actionsCounter}`;

    // Add the options to the dropdown.
    newSelect.append(defaultOption, newL, newR);

    // Create new number input.
    const newNumberInput = document.createElement(`input`);
    newNumberInput.type = "number";
    newNumberInput.id = `actions${actionsCounter}`;

    // Add the text, dropdown menu and number input to div.
    newDiv.append(newText, newSelect, newNumberInput);

    // Add the new div to old div.
    $(`#actionsDiv`).append(newDiv);
});

// After clicking the submit button, the route will be displayed:
$("#submit").on("click", () => {
    event.preventDefault();

    // This checks to make sure all actions have values.

    // If actionsCounter > 1, then moreActions button has been clicked.
    if (actionsCounter > 1) {
        // If the 'L' option in the first dropdown is selected, then the
        // number that goes with this 'L' is added to lCounter.
        if (`${$("#lOrR").val()}` === `L`) {
            lCounter += parseInt(`${$("#actions").val()}`);
        } else if (`${$(`#lOrR${i}`).val()}` === "R") {
            rCounter += parseInt(`${$("#actions").val()}`);
        };

        for (let i = 2; i < actionsCounter + 1; i++) {
            // If either the dropdown menu or number input has been left blank,
            // then an alert will be displayed.
            if (`${$(`#lOrR${i}`).val()}` === "" || `${$(`#actions${i}`).val()}` === "") {
                alert(`There is an error. Make sure all inputs have a value!`)
            };

            // This will count every additional dropdown.
            if (`${$(`#lOrR${i}`).val()}` === "L") {
                lCounter += parseInt(`${$("#actions").val()}`);
            };
            
            if (`${$(`#lOrR${i}`).val()}` === "R") {
                rCounter += parseInt(`${$("#actions").val()}`);
            };
        };
    };

    // Let the user know if "Name of Destination" is left blank.
    if ($(`#destination`).val() === "") {
        alert(`You did not create a destination!`);
    // Let the user know if the option to select L or R is left blank.
    } else if ($(`#lOrR`).val() === "") {
        alert(`You did not select L or R!`);
    // Let the user know if they did not select a number.
    } else if ($(`#actions`).val() === "") {
        alert(`You did not select a distance to go!`);
    // If there is only 1 action taken:
    } else if (actionsCounter === 1) {
        // Display the date, destination, and actions(s) taken if all tests are passed.
        console.log(`${$("#date").val()}; ${$("#destination").val()}; ${$("#lOrR").val()}${$("#actions").val()}`);
    // If there is more than 1 action:
    } else if (actionsCounter > 1) {
        console.log(`${$("#date").val()}; ${$("#destination").val()}; L${lCounter}; R${rCounter}`);
    };

    // Run reset function that resets all inputs.
    reset();
});

// Function that will reset all inputs.
const reset = () => {
    $(`#date`).val("2018-01-01");
    $(`#destination`).val("");
    $(`#lOrR`).val("");
    $(`#actions`).val("");

    // Reset every additional Action(s) Taken.
    if (actionsCounter > 1) {
        for (let i = 2; i < actionsCounter + 1; i++) {
            $(`#lOrR${i}`).val("");
            $(`#actions${i}`).val("");
        };
    };
};