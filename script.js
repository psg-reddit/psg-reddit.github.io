var sources = [
    // Tier 1
    { name: 'Ambre Godillon', type: 'journalist', tier: 1, workplace: 'PSG Media' },
    { name: 'Yann Guerin', type: 'journalist', tier: 1, workplace: 'PSG Media' },    
    { name: 'Benjamin Quarez', type: 'journalist', tier: 1, workplace: 'Le Parisien' },
    { name: 'Adrien Chantegrelet', type: 'journalist', tier: 1, workplace: 'Le Parisien' },
    { name: 'Mathieu Faure', type: 'journalist', tier: 1, workplace: 'Nice Matin' },
    { name: 'TitisduPSG', type: 'media', tier: 1, workplace: null },
    // Tier 2
    { name: 'Loïc Tanzi', type: 'journalist', tier: 2, workplace: 'RMC' },
    { name: 'Bruno Salomon', type: 'journalist', tier: 2, workplace: 'France Bleu Paris' },
    { name: 'Guillaume Maillard-Pacini', type: 'journalist', tier: 2, workplace: 'Eurosport' },
    { name: 'Fabrizio Romano', type: 'journalist', tier: 2, workplace: 'The Guardian' },
    { name: 'Marcelo Bechler', type: 'journalist', tier: 2, workplace: 'Esporte Interativo' },
    { name: 'Saber Desfarges', type: 'journalist', tier: 2, workplace: 'RMC' },
    { name: 'Mohamed Bouhafsi', type: 'journalist', tier: 2, workplace: 'RMC' },
    { name: 'Rubén Uría', type: 'journalist', tier: 2, workplace: 'beIN' },
    { name: 'Bruno Andrade', type: 'journalist', tier: 2, workplace: 'DAZN' },
    { name: 'LeParisien', type: 'media', tier: 2, workplace: null },
    { name: 'Journal du Dimanche', type: 'media', tier: 2, workplace: null },
    { name: 'beIN SPORTS', type: 'media', tier: 2, workplace: null },
    { name: 'CulturePSG', type: 'media', tier: 2, workplace: null },
    { name: 'Canal Supporters', type: 'media', tier: 2, workplace: null },
    // Tier 3
    { name: 'Alessandro Grandesso', type: 'journalist', tier: 3, workplace: 'Gazzetta dello Sport' },
    { name: 'Nicolò Schira', type: 'journalist', tier: 3, workplace: 'Gazzetta dello Sport' },
    { name: 'Gianluca Di Marzio', type: 'journalist', tier: 3, workplace: 'Sky' },
    { name: 'Romain Molina', type: 'journalist', tier: 3, workplace: 'NYT' },
    { name: 'Dominique Sévérac', type: 'journalist', tier: 3, workplace: 'LeParisien' },
    { name: 'Maxime Dupuis', type: 'journalist', tier: 3, workplace: 'Eurosport' },
    { name: 'Julien Maynard', type: 'journalist', tier: 3, workplace: 'TF1' },
    { name: 'RMC', type: 'media', tier: 3, workplace: null },
    { name: 'Eurosport', type: 'media', tier: 3, workplace: null },
    { name: 'France Football', type: 'media', tier: 3, workplace: null },
    { name: 'The Telegraph', type: 'media', tier: 3, workplace: null },
    { name: 'The Guardian', type: 'media', tier: 3, workplace: null },
    { name: 'Globoesporte', type: 'media', tier: 3, workplace: null },
    // Tier 4
    { name: 'Romain Collet-Gaudin', type: 'journalist', tier: 4, workplace: 'Canal+' },
    { name: 'Phillipe Sanfourche', type: 'journalist', tier: 4, workplace: 'RTL' },
    { name: 'Stéphane Mandard', type: 'journalist', tier: 4, workplace: 'LeMonde' },
    { name: 'Simone Rovera', type: 'journalist', tier: 4, workplace: 'Telefoot' },
    { name: 'Jonathan Johnson', type: 'journalist', tier: 4, workplace: 'ESPN' },
    { name: 'L’Équipe', type: 'media', tier: 4, workplace: null },
    { name: 'Le10Sport', type: 'media', tier: 4, workplace: null },
    { name: 'The Mirror', type: 'media', tier: 4, workplace: null },
    { name: 'Tuttosport', type: 'media', tier: 4, workplace: null },
    // Tier 5
    { name: 'Damien Degorre', type: 'journalist', tier: 5, workplace: 'L’Équipe' },
    { name: 'Arnaud Hermant', type: 'journalist', tier: 5, workplace: 'L’Équipe' },
    { name: 'Gilles Favard', type: 'journalist', tier: 5, workplace: 'L’Équipe' },
    { name: 'Grégory Schneider', type: 'journalist', tier: 5, workplace: 'Libération' },
    { name: 'Geoffroy Garétier', type: 'journalist', tier: 5, workplace: 'Canal+' },
    { name: 'Abdellah Boulma', type: 'journalist', tier: 5, workplace: 'AfricaSports' },
    { name: 'Nabil Djellit', type: 'journalist', tier: 5, workplace: 'France Football' },
    { name: 'Julien Laurens', type: 'journalist', tier: 5, workplace: 'ESPN' },
    { name: 'MundoDeportivo', type: 'media', tier: 5, workplace: null },
    { name: 'Bleacher Report', type: 'media', tier: 5, workplace: null },
    { name: 'ESPN', type: 'media', tier: 5, workplace: null },
    { name: 'Metro', type: 'media', tier: 5, workplace: null },
    { name: 'The Sun', type: 'media', tier: 5, workplace: null },
    { name: 'Daily Mail', type: 'media', tier: 5, workplace: null }
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
