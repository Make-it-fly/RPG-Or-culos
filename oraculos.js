const oraculos = [
{
    'template':'social',
    'tipo': 'complexo',
    'nome':'Conhecimento',
    'resultado positivo':[
        'Os personagens se conhecem desde a infância',
        'Ambos os personagens já cooperaram no passado',
        'Os personagens já se viram no passado, ambos reconhecem um ao outro.',
        'Os personagens possuem parentesco em comum'
    ],
    'resultado neutro':[
        'Os personagens são conhecidos por possuírem pessoas em comum',
        'Os personagens já se encontraram no passado, mas não chegaram a se conhecer',
        'Um dos personagens se lembra, ou ouviu falar, do outro',
        'Os personagens não se conhecem, mas sabiam que o outro existia'
    ],
    'resultado negativo':[
        'Os personagens não se conhecem',
        'Os personagens não se conhecem',
        'Os personagens nunca se conheceram',
        'Os personagens jamais souberam da existência um do outro'
    ]
},
{
    'template':'social',
    'tipo': 'complexo',
    'nome':'Atitude',
    'resultado positivo':[
        'Os personagens são muito amigáveis uns com os outros',
        'Os personagens são amigáveis uns com os outros.',
        'Os personagens são amigáveis uns com os outros.'
    ],
    'resultado neutro':[
        'Os personagens estão indiferentes com relação ao outro',
        'Os personagens estão neutros com relação ao outro',
        'Os personagens estão neutros com relação ao outro'
    ],
    'resultado negativo':[
        'Os personagens são hostis com relação ao outro',
        'Os personagens são hostis com relação ao outro',
        'Os personagens são extremamente hostis com relação ao outro'
    ]
},
{
    'template':'social',
    'tipo': 'complexo',
    'nome':'Tipo de Relacionamento',
    'resultado positivo':[
        'Os personagens são, ou já foram, melhores amigos',
        'Os personagens possuem, ou já possuíram, uma forte amizade ou relacionamento romântico',
        'Os personagens se dão muito bem',
        'Os personagens se dão razoavelmente bem'
    ],
    'resultado neutro':[
        'Os personagens nunca tentaram fazer alguma amizade.',
        'Os personagens são indiferentes um com o outro',
        'Um dos personagens até gosta do outro, mas o o outro o menospreza',
        'Um dos personagens até gosta do outro, mas o o outro o odeia'
    ],
    'resultado negativo':[
        'Os personagens não se dão bem, a ponto de serem hostis as vezes',
        'Os personagens sempre se sentiram incomodados um na presença do outro',
        'Os personagens são claramente hostis um com o outro',
        'Os personagens claramente se odeiam',
    ]
},
{
    'template':'social',
    'tipo': 'complexo',
    'nome':'Tipo do diálogo',
    'resultado positivo':[
        'Os personagens realizam um diálogo íntimo ou muito amigável',
        'Os personagens realizam um diálogo amigável',
        'Os personagens realizam um diálogo amigável',
        'Os personagens realizam um diálogo amigável',
        'Os personagens realizam um diálogo amigável',
    ],
    'resultado neutro':[
        'Os personagens realizam um diálogo neutro',
    ],
    'resultado negativo':[
        'Os personagens realizam um diálogo hostil',
        'Os personagens realizam um diálogo hostil',
        'Os personagens realizam um diálogo hostil',
        'Os personagens realizam um diálogo hostil',
        'Os personagens realizam um diálogo severo',
    ]
},
{
    'template': 'dialogos',
    'tipo': 'simples',
    'nome':'Diálogo íntimo',
    'resultado':[
        'O diálogo envolve lembranças ou sentimentos',
        'O diálogo envolve profunda amizade ou amor',
        'O diálogo envolve promessas ou desejos',
        'O diálogo envolve tristeza ou consolo',
        'O diálogo envolve determinação ou ajuda',
    ]
},
{
    'template': 'dialogos',
    'tipo': 'simples',
    'nome':'Diálogo amigável',
    'resultado':[
        'O diálogo envolve descontração e comédia',
        'O diálogo envolve descontração e amizade',
        'O diálogo envolve empatia, dedicação, esforço',
        'O diálogo envolve disposição, comércio ou ajuda',
        'O diálogo envolve necessidade, apoio ou favores',
    ]
},
{
    'template': 'dialogos',
    'tipo': 'simples',
    'nome':'Diálogo neutro',
    'resultado':[
        'O diálogo é só papo furado',
        'O diálogo resulta em uma conversa monótona',
        'O diálogo começa bem, mas acaba estranho',
        'O diálogo começa estranho, mas acaba bem',
        'O diálogo é curto e rápido',
        'O diálogo é objetivo',
        'O diálogo fica estranho e é interrompido por um dos personagens',
    ]
},
{
    'template': 'dialogos',
    'tipo': 'simples',
    'nome':'Diálogo hostil',
    'resultado':[
        'O diálogo envolve cobrança, dívida ou ciúme.',
        'O diálogo envolve mágoa, raiva ou ódio.',
        'O diálogo envolve culpa, indiretas ou brigas.',
        'O diálogo envolve ameaça, chantagem ou frieza.',
        'O diálogo envolve desacordo, quebra de confiança ou uma amizade é desfeita.',
        'O diálogo vai tão mal que um relacionamento positivo acaba.'
    ]
},
{
    'template': 'dialogos',
    'tipo': 'simples',
    'nome':'Diálogo severo',
    'resultado':[
        'O diálogo envolve ameaças, violência e ódio',
        'O diálogo resulta em um combate, briga violenta ou ferimentos',
        'O diálogo resulta em um crime, problemas religiosos ou guerra',
        'O diálogo resulta em problemas para a vida de alguém que não é um dos personagens',
        'O diálogo resulta em problemas para alguém próximo de um dos personagens',
        'O diálogo mancha a reputação dos personagens'
    ]
},

]