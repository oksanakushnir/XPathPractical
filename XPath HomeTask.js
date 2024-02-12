//Easy level
// 1.Find the first h1 element on the main page.
$x('//h1')[0]

// 2.Find all images that have an 'alt' attribute.
$x('//img[@alt]')

// 3.Find the button with the text "Start forming a habit!".
$x('//button[text()="Start forming a habit!"]')[0]

// 4.Check for the presence of a search icon on the webpage.
$x('//li[contains(@class, "search-icon")]/img')[0]

// 5.Check for the presence of checkboxes.
$x('//input[@type="checkbox"]')


//Medium level
//Task 1. To find the first h1 element on the main page.
function FindFirstHeaderElement() {
    const xpathSelector = '//h1';

    let xpathResult = document.evaluate(
        xpathSelector,
        document,
        null,
        XPathResult.FIRST_ORDERED_NODE_TYPE,
        null
    ).singleNodeValue;

    console.log(xpathResult);
}

FindFirstHeaderElement();


//Task 2. Find all images that have the 'alt' attribute. Output the message in the console "Found (number) images with the alt attribute."
function FindAllImagesWithAltAttr() {
    const xpathSelector = '//img[@alt]';

    let xpathResult = document.evaluate(
        xpathSelector,
        document,
        null,
        XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
        null
    );

    console.log('Found ' + xpathResult.snapshotLength + ' images with the alt attribute.');
}

FindAllImagesWithAltAttr();


//Task 3. Find the button element with the text "Start forming a habit!". If an element with such text is not found, display a corresponding message. Output the message with numbers of buttons in the console.
function FindHabitButton(buttonText) {
    const xpathSelector = '//button[text()="' + buttonText + '"]';

    let xpathResult = document.evaluate(
        xpathSelector,
        document,
        null,
        XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
        null
    );

    for (let i = 0; i < xpathResult.snapshotLength; i++) {
        console.log (xpathResult.snapshotItem(i));
    }

    if (xpathResult.snapshotLength === 0) {
        console.log ('Habit buttons not found.');
    }
}

FindHabitButton("Start forming a habit!");


//Task 4. Validate the presence and visibility of the site search icon on the webpage, and ensure the image associated with the search icon has the appropriate alt text and a source (src) path.
function FindSearchIcon() {
    const xpathSelector = '//li[contains(@class, "search-icon")]/img';

    let xpathResult = document.evaluate(
        xpathSelector,
        document,
        null,
        XPathResult.FIRST_ORDERED_NODE_TYPE,
        null
    ).singleNodeValue;

    if (xpathResult) {
        console.log(xpathResult);
        console.log(`Alt text: ${xpathResult.alt}\nSource path: ${xpathResult.src}`);
    }
    else {
        console.log('Search icon not found');
    } 
}

FindSearchIcon();

//Task 5. Log into your profile at https://www.greencity.social/#/profile. At the bottom of the page, there are checkboxes. Find them, check their state (checked or not), and display a message about the number of checked and unchecked checkboxes.
function FindCheckbox() {
    const xpathSelector = '//input[@type="checkbox"]';
    let checkedCount = 0;
    let unCheckedCount = 0;

    let xpathResult = document.evaluate(
        xpathSelector,
        document,
        null,
        XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
        null
    );

    for (let i = 0; i < xpathResult.snapshotLength; i++) {
        let currentItem = xpathResult.snapshotItem(i);
        console.log (currentItem);

        if (currentItem.checked) {
            checkedCount++;
        }
        else {
            unCheckedCount++;
        }
    }
    
    if (xpathResult.snapshotLength === 0) {
        console.log ('Checkbox not found.');
    }
    else {
        console.log(`Checked checkbox count: ${checkedCount}\nUnchecked chexbox count: ${unCheckedCount}`);
    }
}

FindCheckbox();