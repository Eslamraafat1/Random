const arrayNote = [
    {'author': 'Albert Einstein', 
     'quote': 'Two things are infinite: the universe and human stupidity; and i"m not sure about the universe..'
    },
    {'author': 'Frank Zappa', 
     'quote': 'So many books, so little time.'
    },
    {'author': 'Roald Dahl', 
     'quote': 'Those who don"t believe in magic will never find it.'
    },
    {'author': 'Isaac Asimov', 
     'quote': '“The saddest aspect of life right now is that science gathers knowledge faster than society gathers wisdom.'
    },
    {'author': 'Helen Keller', 
     'quote': ' “I would rather walk with a friend in the dark, than alone in the light.'
    },
    {'author': 'John Lennon', 
     'quote': '“Count your age by friends, not years. Count your life by smiles, not tears.'
    },
];

function changeButton(){
    const random = Number.parseInt(Math.random()*arrayNote.length + 1);
    document.querySelector('#quoteOutput').textContent = `\"${arrayNote[random].quote}"`;
    document.querySelector('#authorOutput').textContent = `--${arrayNote[random].author}`;
    
}

// “Count your age by friends, not years. Count your life by smiles, not tears.”
// ― John Lennon
