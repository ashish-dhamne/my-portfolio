// Description of Known technologies

const changeDescription = (techName, text) => {
    let Skill_info = document.querySelector('#info-skills');
    let cardName = document.querySelector('.card-name');

    document.querySelector(techName).addEventListener('mouseover', () => {
        Skill_info.innerHTML = text;
        if(techName === '.html') {
            cardName.innerHTML = ' Html ';
        } 
        else if(techName === '.css') {
            cardName.innerHTML = ' Css ';
        }
        else if(techName === '.js') {
            cardName.innerHTML = ' JavaScript ';
        }
        else if(techName === '.git') {
            cardName.innerHTML = ' Git ';
        } 
        else if(techName === '.python') {
            cardName.innerHTML = ' Python Programming ';
        } 
        else if(techName === '.Django') {
            cardName.innerHTML = ' Django Framework ';
        }
    });

    document.querySelector(techName).addEventListener('mouseout', () => {
        Skill_info.innerHTML = '* Hover over icons to learn more *';
        cardName.innerHTML = "";
    });
};



changeDescription(
    '.html',
    'Structure of layouts, main tags, Semantic HTML, creation of tables and forms.'
);

changeDescription(
    '.css',
    'Layout styling, class reuse, box model, CSS Grid, FlexBox and pseudo-classes.'
);

changeDescription(
    '.js',
    'DOM manipulation, API consumption, data types, methods, functions and events.'
);

changeDescription(
    '.git',
    'Code versioning and main commands.'
);

changeDescription(
    '.python',
    'Python is a versatile, high-level programming language known for its simplicity and readability, making it a popular choice for a wide range of applications.'   
);

changeDescription(
    '.Django',
    'Django is a high-level Python web framework known for its simplicity and robustness in building web applications.'   
);









