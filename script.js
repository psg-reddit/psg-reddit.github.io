var sources = [
    // Good tier source
    { name: 'Julien Maynard', type: 'journalist', tier: 1, workplace: 'PSG Media' },
    { name: 'Ambre Godillon', type: 'journalist', tier: 1, workplace: 'PSG Media' },
    { name: 'David Butler', type: 'journalist', tier: 1, workplace: 'PSG Media' },
    { name: 'Michel Kollar', type: 'journalist', tier: 1, workplace: 'PSG Media' },
    { name: 'Fabrice Porzyc', type: 'journalist', tier: 1, workplace: 'PSG Media' },        
    { name: 'Yann Guerin', type: 'journalist', tier: 1, workplace: 'PSG Media' },    
    { name: 'Bruno Salomon', type: 'journalist', tier: 1, workplace: 'France Bleu Paris' },
    { name: 'Philippe Goguet', type: 'journalist', tier: 1, workplace: 'CulturePSG' },    
    { name: 'Benjamin Quarez', type: 'journalist', tier: 1, workplace: 'Le Parisien' },
    { name: 'Adrien Chantegrelet', type: 'journalist', tier: 1, workplace: 'Le Parisien' },
    { name: 'Marc Mechenoua', type: 'journalist', tier: 1, workplace: 'Goal.com' },    
    { name: 'Omar da Fonseca', type: 'journalist', tier: 1, workplace: 'Bein Sports' },
    { name: 'Rubén Uría', type: 'journalist', tier: 1, workplace: 'Bein Sports' },
    { name: 'Saber Desfarges', type: 'journalist', tier: 1, workplace: 'ex-RMC' },
    { name: 'TitisduPSG', type: 'media', tier: 1, workplace: null },
    { name: 'CulturePSG', type: 'media', tier: 1, workplace: null },
    { name: 'Bein Sports', type: 'media', tier: 1, workplace: null },    
    // Medium tier source
    { name: 'Guillaume Maillard-Pacini', type: 'journalist', tier: 2, workplace: 'Eurosport' },
    { name: 'Mathieu Faure', type: 'journalist', tier: 2, workplace: 'Nice Matin' },
    { name: 'Fabrice Hawkins', type: 'journalist', tier: 2, workplace: 'France Info' },
    { name: 'Hugo Guillement', type: 'journalist', tier: 2, workplace: 'L’Équipe' },
    { name: 'Loïc Tanzi', type: 'journalist', tier: 2, workplace: 'RMC' },
    { name: 'Gianluca Di Marzio', type: 'journalist', tier: 2, workplace: 'Sky Italia' },
    { name: 'Marcelo Bechler', type: 'journalist', tier: 2, workplace: 'TNT Sports' },
    { name: 'Bruno Andrade', type: 'journalist', tier: 2, workplace: 'DAZN' },
    { name: 'Alessandro Grandesso', type: 'journalist', tier: 2, workplace: 'Gazzetta dello Sport' },
    { name: 'Romain Molina', type: 'journalist', tier: 2, workplace: 'NYT' },
    { name: 'Tariq Panja', type: 'journalist', tier: 2, workplace: 'NYT' },
    { name: 'Maxime Dupuis', type: 'journalist', tier: 2, workplace: 'Eurosport' },
    { name: 'Fabrizio Romano', type: 'journalist', tier: 2, workplace: 'The Guardian' },
    { name: 'Nicolas Hortus', type: 'journalist', tier: 2, workplace: 'Canal Supporters' },
    { name: 'Mohamed Bouhafsi', type: 'journalist', tier: 2, workplace: 'RMC' },
    { name: 'LeParisien', type: 'media', tier: 2, workplace: null },
    { name: 'RMC', type: 'media', tier: 2, workplace: null },
    { name: 'Canal Supporters', type: 'media', tier: 2, workplace: null },
    { name: 'L’Équipe', type: 'media', tier: 2, workplace: null },
    { name: 'Eurosport', type: 'media', tier: 2, workplace: null },
    { name: 'France Football', type: 'media', tier: 2, workplace: null },
    { name: 'Sky Sports', type: 'media', tier: 2, workplace: null },
    { name: 'The Athletic', type: 'media', tier: 2, workplace: null },
    { name: 'The Telegraph', type: 'media', tier: 2, workplace: null },
    { name: 'The Guardian', type: 'media', tier: 2, workplace: null },
    { name: 'Gazzetta dello Sport', type: 'media', tier: 2, workplace: null },
    { name: 'Globoesporte', type: 'media', tier: 2, workplace: null },
    // Shit tier source
    { name: 'Romain Collet-Gaudin', type: 'journalist', tier: 3, workplace: 'Canal+' },
    { name: 'Phillipe Sanfourche', type: 'journalist', tier: 3, workplace: 'RTL' },
    { name: 'Stéphane Mandard', type: 'journalist', tier: 3, workplace: 'LeMonde' },
    { name: 'Santi Aouna', type: 'journalist', tier: 3, workplace: 'FootMercato' },
    { name: 'Simone Rovera', type: 'journalist', tier: 3, workplace: 'ex-Telefoot' },
    { name: 'Nicolò Schira', type: 'journalist', tier: 3, workplace: 'Gazzetta dello Sport' },
    { name: 'Antonio Vitiello', type: 'journalist', tier: 3, workplace: 'Tuttosport' },
    { name: 'Duncan Castles', type: 'journalist', tier: 3, workplace: 'Sunday Times' },
    { name: 'Jonathan Johnson', type: 'journalist', tier: 3, workplace: 'ESPN' },
    { name: 'Damien Degorre', type: 'journalist', tier: 3, workplace: 'L’Équipe' },
    { name: 'Arnaud Hermant', type: 'journalist', tier: 3, workplace: 'L’Équipe' },
    { name: 'Gilles Favard', type: 'journalist', tier: 3, workplace: 'L’Équipe' },
    { name: 'Dominique Sévérac', type: 'journalist', tier: 3, workplace: 'LeParisien' },
    { name: 'Grégory Schneider', type: 'journalist', tier: 3, workplace: 'Libération' },
    { name: 'Geoffroy Garétier', type: 'journalist', tier: 3, workplace: 'Canal+' },
    { name: 'Abdellah Boulma', type: 'journalist', tier: 3, workplace: 'CNEWS' },
    { name: 'Nabil Djellit', type: 'journalist', tier: 3, workplace: 'France Football' },
    { name: 'Julien Laurens', type: 'journalist', tier: 3, workplace: 'ESPN' },
    { name: 'Le10Sport', type: 'media', tier: 3, workplace: null },
    { name: 'Canal+', type: 'media', tier: 3, workplace: null },
    { name: 'RTL', type: 'media', tier: 3, workplace: null },
    { name: 'GFFN', type: 'media', tier: 3, workplace: null },
    { name: 'PSGHub', type: 'media', tier: 3, workplace: null },    
    { name: 'The Mirror', type: 'media', tier: 3, workplace: null },
    { name: 'AS', type: 'media', tier: 3, workplace: null },
    { name: 'Tuttosport', type: 'media', tier: 3, workplace: null },
    { name: 'FootMercato', type: 'media', tier: 3, workplace: null },
    { name: 'MundoDeportivo', type: 'media', tier: 3, workplace: null },
    { name: 'Bleacher Report', type: 'media', tier: 3, workplace: null },
    { name: 'ESPN', type: 'media', tier: 3, workplace: null },
    { name: 'Metro', type: 'media', tier: 3, workplace: null },
    { name: 'The Sun', type: 'media', tier: 3, workplace: null },
    { name: 'El Chiringuito', type: 'media', tier: 3, workplace: null },
    { name: 'Daily Mail', type: 'media', tier: 3, workplace: null }
];

sources.forEach(function (source) {
    var element = document.createElement('div');
    if (source.type === 'journalist') {
        element.className = 'source journalist';
        if (source.workplace) {
            element.innerHTML = source.name + ' <span class="workplace">(' + source.workplace + ')</span>';
        }
        else {
            element.innerHTML = source.name;
        }
    }
    else {
        element.className = 'source media';
        element.innerHTML = source.name;

    }
    document.querySelector('.tier-' + source.tier + ' .tier-content').appendChild(element);
});

// Insert breaks before the start of each source of type media

document.querySelectorAll('.tier-content').forEach(function (item) {
    var element = item.querySelector('.media');
    if (element) {
        var newElement = document.createElement('div');
        newElement.className = 'flex-break';
        element.parentNode.insertBefore(newElement, element);
    }
});
