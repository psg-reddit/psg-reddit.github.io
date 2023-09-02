var sources = [
    // Good tier source
    { name: 'Julien Maynard', type: 'journalist', tier: 1, workplace: 'PSG Media' },
    { name: 'Ambre Godillon', type: 'journalist', tier: 1, workplace: 'PSG Media' },
    { name: 'David Butler', type: 'journalist', tier: 1, workplace: 'PSG Media' },
    { name: 'Michel Kollar', type: 'journalist', tier: 1, workplace: 'PSG Media' },
    { name: 'Fabrice Porzyc', type: 'journalist', tier: 1, workplace: 'PSG Media' },   
    { name: 'Bruno Salomon', type: 'journalist', tier: 1, workplace: 'France Bleu Paris' },
    { name: 'Fabrice Hawkins', type: 'journalist', tier: 1, workplace: 'RMC' },
    { name: 'Philippe Goguet', type: 'journalist', tier: 1, workplace: 'CulturePSG' }, 
    { name: 'Saber Desfarges', type: 'journalist', tier: 1, workplace: 'Amazon Prime' },
    { name: 'Benjamin Quarez', type: 'journalist', tier: 1, workplace: 'Le Parisien' },
    { name: 'Marc Mechenoua', type: 'journalist', tier: 1, workplace: 'Goal.com' },    
    { name: 'Omar da Fonseca', type: 'journalist', tier: 1, workplace: 'Bein Sports' },
    { name: 'Rubén Uría', type: 'journalist', tier: 1, workplace: 'Bein Sports' },
    { name: 'TitisduPSG', type: 'media', tier: 1, workplace: null },
    { name: 'CulturePSG', type: 'media', tier: 1, workplace: null },
    { name: 'Bein Sports', type: 'media', tier: 1, workplace: null },    
    // Medium tier source
    { name: 'Laurent Perrin', type: 'journalist', tier: 2, workplace: 'Le Parisien' },
    { name: 'Adrien Chantegrelet', type: 'journalist', tier: 2, workplace: 'Le Parisien' },
    { name: 'Romain Beddouk', type: 'journalist', tier: 2, workplace: 'France Bleu Paris' },
    { name: 'Julien Froment', type: 'journalist', tier: 2, workplace: 'France Bleu Paris' },
    { name: 'Guillaume Maillard-Pacini', type: 'journalist', tier: 2, workplace: 'Eurosport' },
    { name: 'Hugo Guillemet', type: 'journalist', tier: 2, workplace: 'L’Équipe' },
    { name: 'José Barroso', type: 'journalist', tier: 2, workplace: 'L’Équipe' },
    { name: 'Loïc Tanzi', type: 'journalist', tier: 2, workplace: 'L’Équipe' },
    { name: 'Christian Falk', type: 'journalist', tier: 2, workplace: 'BILD' },
    { name: 'Gianluca Di Marzio', type: 'journalist', tier: 2, workplace: 'Sky Sports' },
    { name: 'Kaveh Solhekol', type: 'journalist', tier: 2, workplace: 'Sky Sports' },
    { name: 'Florian Plettenberg', type: 'journalist', tier: 2, workplace: 'Sky Sports' },
    { name: 'Ben Jacobs', type: 'journalist', tier: 2, workplace: 'The Athletic' },
    { name: 'David Ornstein', type: 'journalist', tier: 2, workplace: 'The Athletic' },
    { name: 'Jason Burt', type: 'journalist', tier: 2, workplace: 'Telegraph' },
    { name: 'Matt Law', type: 'journalist', tier: 2, workplace: 'Telegraph' },
    { name: 'Marcelo Bechler', type: 'journalist', tier: 2, workplace: 'TNT Sports' },
    { name: 'Bruno Andrade', type: 'journalist', tier: 2, workplace: 'DAZN' },
    { name: 'Alessandro Grandesso', type: 'journalist', tier: 2, workplace: 'Gazzetta dello Sport' },
    { name: 'Romain Molina', type: 'journalist', tier: 2, workplace: 'NYT' },
    { name: 'Tariq Panja', type: 'journalist', tier: 2, workplace: 'NYT' },
    { name: 'Maxime Dupuis', type: 'journalist', tier: 2, workplace: 'Eurosport' },
    { name: 'Hadrien Grenier', type: 'journalist', tier: 2, workplace: 'Canal Supporters' },
    { name: 'Nicolas Hortus', type: 'journalist', tier: 2, workplace: 'Canal Supporters' },
    { name: 'Santi Aouna', type: 'journalist', tier: 2, workplace: 'FootMercato' },
    { name: 'Mathieu Faure', type: 'journalist', tier: 2, workplace: 'Nice Matin' },
    { name: 'Fabrizio Romano', type: 'journalist', tier: 2, workplace: 'The Guardian' },
    { name: 'Matteo Moretto', type: 'journalist', tier: 2, workplace: 'Relevo' },
    { name: 'Mohamed Bouhafsi', type: 'journalist', tier: 2, workplace: 'RMC' },
    { name: 'Djamel', type: 'journalist', tier: 2, workplace: 'Djaameel_' },
    { name: 'EsamB2Back', type: 'journalist', tier: 2, workplace: 'SportsZone__' },
    { name: 'LeParisien', type: 'media', tier: 2, workplace: null },
    { name: 'RMC', type: 'media', tier: 2, workplace: null },
    { name: 'Canal Supporters', type: 'media', tier: 2, workplace: null },
    { name: 'L’Équipe', type: 'media', tier: 2, workplace: null },
    { name: 'Eurosport', type: 'media', tier: 2, workplace: null },
    { name: 'France Football', type: 'media', tier: 2, workplace: null },
    { name: 'Sky Sports', type: 'media', tier: 2, workplace: null },
    { name: 'The Athletic', type: 'media', tier: 2, workplace: null },
    { name: 'Telegraph', type: 'media', tier: 2, workplace: null },
    { name: 'The Guardian', type: 'media', tier: 2, workplace: null },
    { name: 'Gazzetta dello Sport', type: 'media', tier: 2, workplace: null },
    // Shit tier source
    { name: 'Dominique Sévérac', type: 'journalist', tier: 3, workplace: 'LeParisien' },
    { name: 'Damien Degorre', type: 'journalist', tier: 3, workplace: 'L’Équipe' },
    { name: 'Arnaud Hermant', type: 'journalist', tier: 3, workplace: 'L’Équipe' },
    { name: 'Sébastien Tarrago', type: 'journalist', tier: 3, workplace: 'L’Équipe' },
    { name: 'Gilles Favard', type: 'journalist', tier: 3, workplace: 'L’Équipe' },
    { name: 'Arthur Perrot', type: 'journalist', tier: 3, workplace: 'RMC' },
    { name: 'Daniel Riolo', type: 'journalist', tier: 3, workplace: 'RMC' },
    { name: 'Jérôme Rothen', type: 'journalist', tier: 3, workplace: 'RMC' },
    { name: 'Nicolas Pelletier', type: 'journalist', tier: 3, workplace: 'RMC' },
    { name: 'Sacha Tavolieri', type: 'journalist', tier: 3, workplace: 'RMC' },
    { name: 'Max Miotto', type: 'journalist', tier: 3, workplace: 'PSG Community' },
    { name: 'Miloud Kotbi', type: 'journalist', tier: 3, workplace: 'PSG Community' },
    { name: 'Geoffroy Garétier', type: 'journalist', tier: 3, workplace: 'Canal+' },
    { name: 'Olivier Tallaron', type: 'journalist', tier: 3, workplace: 'Canal+' },
    { name: 'Laurent Paganelli', type: 'journalist', tier: 3, workplace: 'Canal+' },
    { name: 'Abdellah Boulma', type: 'journalist', tier: 3, workplace: 'CNEWS' },
    { name: 'Dahbia Hattabi', type: 'journalist', tier: 3, workplace: 'FootMercato' },
    { name: 'Romain Collet-Gaudin', type: 'journalist', tier: 3, workplace: 'Sky Sports' },
    { name: 'Phillipe Sanfourche', type: 'journalist', tier: 3, workplace: 'RTL' },
    { name: 'Stéphane Mandard', type: 'journalist', tier: 3, workplace: 'LeMonde' },
    { name: 'Simone Rovera', type: 'journalist', tier: 3, workplace: 'ex-Telefoot' },
    { name: 'Nicolò Schira', type: 'journalist', tier: 3, workplace: 'Gazzetta dello Sport' },
    { name: 'Antonio Vitiello', type: 'journalist', tier: 3, workplace: 'Tuttosport' },
    { name: 'Christopher Michel', type: 'journalist', tier: 3, workplace: 'SPORT1' },
    { name: 'Patrick Berger', type: 'journalist', tier: 3, workplace: 'SPORT1' },
    { name: 'Andrés Onrubia', type: 'journalist', tier: 3, workplace: 'AS' },
    { name: 'Duncan Castles', type: 'journalist', tier: 3, workplace: 'Sunday Times' },
    { name: 'Grégory Schneider', type: 'journalist', tier: 3, workplace: 'Libération' },
    { name: 'Nabil Djellit', type: 'journalist', tier: 3, workplace: 'France Football' },
    { name: 'Julien Laurens', type: 'journalist', tier: 3, workplace: 'ESPN' },
    { name: 'Jonathan Johnson', type: 'journalist', tier: 3, workplace: 'ESPN' },
    { name: 'Le10Sport', type: 'media', tier: 3, workplace: null },
    { name: 'PSGCommunity_', type: 'media', tier: 3, workplace: null },
    { name: 'ParisNoLimit', type: 'media', tier: 3, workplace: null },
    { name: 'PSG Reporter', type: 'media', tier: 3, workplace: null },
    { name: 'Canal+', type: 'media', tier: 3, workplace: null },
    { name: 'RTL', type: 'media', tier: 3, workplace: null },
    { name: 'GFFN', type: 'media', tier: 3, workplace: null },
    { name: 'PSGHub', type: 'media', tier: 3, workplace: null },    
    { name: 'The Mirror', type: 'media', tier: 3, workplace: null },
    { name: 'AS', type: 'media', tier: 3, workplace: null },
    { name: 'SPORT1', type: 'media', tier: 3, workplace: null },
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
