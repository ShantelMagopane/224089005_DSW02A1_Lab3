document.getElementById('Execute').addEventListener('click', function() {
const sentencing = document.getElementById('sentence').value;
const words_Container = document.getElementById('words');
const CountInput = document.getElementById('sent-count');

        /* the for loop and if statement basically mean that the whether the user inputs
        capital letters or small letters, it is still going to count anyways but it won't count characters like:
         * , $, % and etc*/

    let words = '';
    for (let i = 0; i < sentencing.length; i++) {
    const char = sentencing[i];
    if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || char === ' ') {
        words += char;
  }

}
    // This part counts the number of words in the sentence and displaying each word underlined.

const wordsArray = words.split(' ').filter(word => word);
    CountInput.value = `Word Count: ${wordsArray.length}`;

    setTimeout(() => {
        wordsContainer.innerHTML = `Words: ${wordsArray.map(word => `<u>${word}</u>`).join(' ')}`;
    }, 1000); 
});