var quotes = [
    {
        content: 'The best way to predict the future is to create it.',
        author: 'Peter Drucker'
    },
    {
        content: 'Dream big and dare to fail.',
        author: 'Norman Vaughan'
    },
    {
        content: 'Success is not how high you have climbed, but how you make a positive difference to the world.',
        author: 'Roy T. Bennett'
    },
    {
        content: "Believe you can and you're halfway there.",
        author: 'Theodore Roosevelt'
    },
    {
        content: 'It does not matter how slowly you go as long as you do not stop.',
        author: 'Confucius'
    },
    {
        content: 'In the middle of every difficulty lies opportunity.',
        author: 'Albert Einstein'
    },
    {
        content: 'Do what you can, with what you have, where you are.',
        author: 'Theodore Roosevelt'
    },
    {
        content: 'Happiness depends upon ourselves.',
        author: 'Aristotle'
    },
    {
        content: 'Act as if what you do makes a difference. It does.',
        author: 'William James'
    },
    {
        content: 'It always seems impossible until it’s done.',
        author: 'Nelson Mandela'
    },
    {
        content: 'Life isn’t about finding yourself. It’s about creating yourself.',
        author: 'George Bernard Shaw'
    },
    {
        content: 'With the new day comes new strength and new thoughts.',
        author: 'Eleanor Roosevelt'
    }
];
var previousIndex = null;
function showQuote(){
    var newIndex = Math.floor(Math.random() * quotes.length);
    if(newIndex === previousIndex){
        newIndex = (newIndex + 1) % quotes.length;
    }

    previousIndex = newIndex;
    document.getElementById('displayQuote').innerHTML = 
    `<p>"${quotes[newIndex].content}"</p>
    <p>--${quotes[newIndex].author}</p>`;

}


