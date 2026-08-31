document.getElementById('login-btn').addEventListener('click', () => {
    document.getElementById('login-view').style.display = 'none';
    document.getElementById('app-view').style.display = 'flex';
});

document.getElementById('guest-btn').addEventListener('click', () => {
    document.getElementById('login-view').style.display = 'none';
    document.getElementById('app-view').style.display = 'flex';
});

document.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && document.getElementById('login-view').style.display !== 'none') {
        document.getElementById('login-btn').click();
    }
});

const navLinks = document.querySelectorAll('#sidebar-nav a');
const views = document.querySelectorAll('.view-content');

document.getElementById('signout-btn').addEventListener('click', () => {
    window.location.reload();
});

const generateAction = () => {
    const btn = document.getElementById('generate-btn');
    const input = document.getElementById('script-input');
    const consoleOut = document.getElementById('console-output');
    
    if (!input.value.trim()) {
        input.value = "ERROR: Please enter a script first.";
        return;
    }
    
    btn.disabled = true;
    input.style.display = 'none';
    document.getElementById('auto-gen-container').style.display = 'none';
    consoleOut.style.display = 'block';
    
    const lines = [
        "> Analyzing script sentiment and genre...",
        "> Extracting key characters and themes...",
        "> Interfacing with Google Cloud Vertex AI (Gemma 2) for code generation...",
        "> Writing HTML, CSS, and JS assets...",
        "> Provisioning GitHub repository...",
        "> Committing code to main branch...",
        "> Deploying to Render...",
        "> SUCCESS: Campaign URL generated."
    ];
    
    let index = 0;
    consoleOut.textContent = "";
    
    const interval = setInterval(() => {
        if (index < lines.length) {
            consoleOut.textContent += lines[index] + "\n";
            index++;
        } else {
            clearInterval(interval);
            btn.textContent = "VIEW DEPLOYED SITE";
            btn.disabled = false;
            btn.onclick = () => {
                const scriptVal = document.getElementById('script-input').value;
                const db = {
                    'GALACTICA': {
                        title: 'HULL<br>BREACH.', brand: 'GALACTICA', bo: '$780M', rt: '94%', rating: 'PG-13', time: '03:12',
                        synopsis: 'Sirens blare. Red light strobes across the metallic walls. The alien entity is breaching the hull. We cannot let it reach the core.',
                        hero: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80',
                        lead: 'REYNA', leadbg: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
                        antag: 'THE ENTITY', antagbg: 'https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?auto=format&fit=crop&w=800&q=80',
                        art1: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=800&q=80',
                        art2: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=800&q=80',
                        art3: 'https://images.unsplash.com/photo-1514539079130-25950c84af65?auto=format&fit=crop&w=800&q=80'
                    },
                    'WASTELAND': {
                        title: 'DESERT<br>BLOOD.', brand: 'WASTELAND', bo: '$320M', rt: '81%', rating: 'R', time: '04:05',
                        synopsis: 'The sun beats down mercilessly. A lone drifter trudges through the sand dunes. A gang of marauders appears on the horizon. He will not go down without a fight.',
                        hero: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=1920&q=80',
                        lead: 'ELIAS', leadbg: 'https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?auto=format&fit=crop&w=800&q=80',
                        antag: 'MARAUDERS', antagbg: 'https://images.unsplash.com/photo-1542931287-023b922fa89b?auto=format&fit=crop&w=800&q=80',
                        art1: 'https://images.unsplash.com/photo-1542385151-efd9000785a0?auto=format&fit=crop&w=800&q=80',
                        art2: 'https://images.unsplash.com/photo-1500366657802-1823ebce6962?auto=format&fit=crop&w=800&q=80',
                        art3: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80'
                    },
                    'MANOR': {
                        title: 'THE END<br>IS NEAR.', brand: 'BLACKWOOD', bo: '$120M', rt: '98%', rating: 'R', time: '01:50',
                        synopsis: 'Lightning flashes, illuminating the abandoned Victorian house. A group of teenagers slowly pushes the rotting door open. From the darkness above, a floorboard creaks.',
                        hero: 'https://images.unsplash.com/photo-1505635552518-3448ff116af3?auto=format&fit=crop&w=1920&q=80',
                        lead: 'EMILY', leadbg: 'https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?auto=format&fit=crop&w=800&q=80',
                        antag: 'THE GHOST', antagbg: 'https://images.unsplash.com/photo-1582292211516-f36bcda700e1?auto=format&fit=crop&w=800&q=80',
                        art1: 'https://images.unsplash.com/photo-1629846875955-46b2e2d9b62f?auto=format&fit=crop&w=800&q=80',
                        art2: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?auto=format&fit=crop&w=800&q=80',
                        art3: 'https://images.unsplash.com/photo-1518704253308-5cecc8266468?auto=format&fit=crop&w=800&q=80'
                    },
                    'DRAGON': {
                        title: 'FIRE<br>AND ASH.', brand: 'DRAGON', bo: '$1.2B', rt: '85%', rating: 'PG-13', time: '05:10',
                        synopsis: 'Snow swirls around the ancient stone ruins. Elara raises her broadsword as a massive shadow eclipses the sun. The beast roars, shaking the mountain.',
                        hero: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=1920&q=80',
                        lead: 'ELARA', leadbg: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
                        antag: 'THE BEAST', antagbg: 'https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?auto=format&fit=crop&w=800&q=80',
                        art1: 'https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?auto=format&fit=crop&w=800&q=80',
                        art2: 'https://images.unsplash.com/photo-1520635360276-79f3dbd809f6?auto=format&fit=crop&w=800&q=80',
                        art3: 'https://images.unsplash.com/photo-1514539079130-25950c84af65?auto=format&fit=crop&w=800&q=80'
                    },
                    'DETECTIVE': {
                        title: 'MIDNIGHT<br>SMOKE.', brand: 'NOIR', bo: '$210M', rt: '91%', rating: 'R', time: '02:15',
                        synopsis: 'Cigarette smoke hangs heavy. Detective Vance stares at the photographs on his desk. A dame in a red dress walks in. She spells trouble.',
                        hero: 'https://images.unsplash.com/photo-1502814881765-b159f8ea7378?auto=format&fit=crop&w=1920&q=80',
                        lead: 'VANCE', leadbg: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
                        antag: 'THE DAME', antagbg: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80',
                        art1: 'https://images.unsplash.com/photo-1533152643750-f8d956a6db9e?auto=format&fit=crop&w=800&q=80',
                        art2: 'https://images.unsplash.com/photo-1549460265-f8c62f2df3bd?auto=format&fit=crop&w=800&q=80',
                        art3: 'https://images.unsplash.com/photo-1516975080661-46b0a68d8393?auto=format&fit=crop&w=800&q=80'
                    },
                    'ZOMBIE': {
                        title: 'DEAD<br>DAWN.', brand: 'SURVIVAL', bo: '$380M', rt: '77%', rating: 'R', time: '03:30',
                        synopsis: 'Overturned cars rust in the streets. Sarah tightens the grip on her baseball bat. The guttural moans are getting louder. The ZOMBIE horde is breaching.',
                        hero: 'https://images.unsplash.com/photo-1485603774845-d8aa12dbf521?auto=format&fit=crop&w=1920&q=80',
                        lead: 'SARAH', leadbg: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=800&q=80',
                        antag: 'THE HORDE', antagbg: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=800&q=80',
                        art1: 'https://images.unsplash.com/photo-1506509951804-510ee4e45c71?auto=format&fit=crop&w=800&q=80',
                        art2: 'https://images.unsplash.com/photo-1508210464673-9a4f4d221ab3?auto=format&fit=crop&w=800&q=80',
                        art3: 'https://images.unsplash.com/photo-1498677231914-50a747352ebf?auto=format&fit=crop&w=800&q=80'
                    },
                    'VANGUARD': {
                        title: 'METROPOLIS<br>FALLS.', brand: 'VANGUARD', bo: '$1.5B', rt: '96%', rating: 'PG-13', time: '02:50',
                        synopsis: 'The villain stands atop the skyscraper, holding the detonator. Suddenly, a streak of blue light crashes into the roof. VANGUARD has arrived.',
                        hero: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=1920&q=80',
                        lead: 'VANGUARD', leadbg: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
                        antag: 'THE VILLAIN', antagbg: 'https://images.unsplash.com/photo-1563240619-44ce0b98eb6c?auto=format&fit=crop&w=800&q=80',
                        art1: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
                        art2: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=800&q=80',
                        art3: 'https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?auto=format&fit=crop&w=800&q=80'
                    },
                    'GLADIATOR': {
                        title: 'BLOOD<br>ON SAND.', brand: 'ROME', bo: '$600M', rt: '89%', rating: 'R', time: '04:20',
                        synopsis: 'The crowd roars. Marcus, a GLADIATOR covered in sand and blood, locks eyes with the Emperor. He raises his shield. Today, he fights for his freedom.',
                        hero: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1920&q=80',
                        lead: 'MARCUS', leadbg: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80',
                        antag: 'THE EMPEROR', antagbg: 'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?auto=format&fit=crop&w=800&q=80',
                        art1: 'https://images.unsplash.com/photo-1533075377664-f5c0cbc5a91c?auto=format&fit=crop&w=800&q=80',
                        art2: 'https://images.unsplash.com/photo-1548625361-ec853715c0e1?auto=format&fit=crop&w=800&q=80',
                        art3: 'https://images.unsplash.com/photo-1526367372728-6a56e6912384?auto=format&fit=crop&w=800&q=80'
                    },
                    'ENIGMA': {
                        title: 'OPERATION<br>ENIGMA.', brand: 'CASINO', bo: '$850M', rt: '92%', rating: 'PG-13', time: '03:10',
                        synopsis: 'Agent Cross adjusts his tuxedo. He spots the target exchanging the ENIGMA drive at the roulette table. He reaches for his silenced pistol.',
                        hero: 'https://images.unsplash.com/photo-1526970371649-4e78370d9a2a?auto=format&fit=crop&w=1920&q=80',
                        lead: 'CROSS', leadbg: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=800&q=80',
                        antag: 'THE TARGET', antagbg: 'https://images.unsplash.com/photo-1537511446984-935f663eb1f4?auto=format&fit=crop&w=800&q=80',
                        art1: 'https://images.unsplash.com/photo-1511193311914-0346f16efe90?auto=format&fit=crop&w=800&q=80',
                        art2: 'https://images.unsplash.com/photo-1501163268664-3fdf329d019f?auto=format&fit=crop&w=800&q=80',
                        art3: 'https://images.unsplash.com/photo-1563207153-f403bf289096?auto=format&fit=crop&w=800&q=80'
                    },
                    'NEON': {
                        title: 'THE CHASE<br>BEGINS.', brand: 'NEON RUN', bo: '$450M', rt: '88%', rating: 'R', time: '02:45',
                        synopsis: 'Rain slicks the neon-drenched streets. A rogue courier clutches a glowing hard drive to his chest. The Corpo-Sec drones are closing in.',
                        hero: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=1920&q=80',
                        lead: 'KAEL', leadbg: 'https://images.unsplash.com/photo-1535295972055-1c762f4483e5?auto=format&fit=crop&w=800&q=80',
                        antag: 'CORPO-SEC', antagbg: 'https://images.unsplash.com/photo-1542931287-023b922fa89b?auto=format&fit=crop&w=800&q=80',
                        art1: 'https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&w=800&q=80',
                        art2: 'https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&w=800&q=80',
                        art3: 'https://images.unsplash.com/photo-1618557124976-926f74780517?auto=format&fit=crop&w=800&q=80'
                    }
                };

                let match = db['NEON']; // default
                for (const key in db) {
                    if (scriptVal.includes(key)) {
                        match = db[key];
                        break;
                    }
                }

                document.getElementById('promo-title').innerHTML = match.title;
                document.getElementById('promo-brand').textContent = match.brand;
                document.getElementById('promo-synopsis').textContent = match.synopsis;
                document.getElementById('promo-hero').style.background = "url('" + match.hero + "') center/cover no-repeat";
                document.getElementById('promo-lead-name').textContent = match.lead;
                document.getElementById('promo-lead-bg').style.background = "url('" + match.leadbg + "') center/cover";
                document.getElementById('promo-antagonist-name').textContent = match.antag;
                document.getElementById('promo-antagonist-bg').style.background = "url('" + match.antagbg + "') center/cover";
                document.getElementById('promo-boxoffice').textContent = match.bo;
                document.getElementById('promo-rt').textContent = match.rt;
                document.getElementById('promo-rt').style.color = '#10b981';
                document.getElementById('promo-rating').textContent = match.rating;
                document.getElementById('promo-art-1').style.background = "url('" + match.art1 + "') center/cover";
                document.getElementById('promo-art-2').style.background = "url('" + match.art2 + "') center/cover";
                document.getElementById('promo-art-3').style.background = "url('" + match.art3 + "') center/cover";
                document.getElementById('promo-audio-time').textContent = match.time;

                document.getElementById('app-view').style.display = 'none';
                document.getElementById('deployed-view').style.display = 'block';
            };
        }
    }, 800);
};

const scripts = [
    "FADE IN:\n\nEXT. NEO-TOKYO - NIGHT\n\nRain slicks the neon-drenched streets. A rogue courier, Kael, clutches a glowing hard drive. The Corpo-Sec drones are closing in.\n\nKAEL\n(into comms)\nI am compromised. Need immediate evac.\n\nThe chase begins. NEON",
    "FADE IN:\n\nINT. SPACESHIP GALACTICA - CORRIDOR\n\nSirens blare. Red light strobes across the metallic walls. Commander Reyna sprints towards the escape pods. The alien entity is breaching the hull.\n\nREYNA\nWe cannot let it reach the core! GALACTICA",
    "FADE IN:\n\nEXT. DESERT WASTELAND - DAY\n\nThe sun beats down mercilessly. A lone drifter, Elias, trudges through the sand dunes. A gang of marauders appears on the horizon.\n\nHe draws his rusty blade. He will not go down without a fight. WASTELAND",
    "FADE IN:\n\nEXT. THE BLACKWOOD MANOR - MIDNIGHT\n\nLightning flashes, illuminating the abandoned Victorian house. A group of teenagers slowly pushes the rotting door open.\n\nEMILY\nI do not think we should be here.\n\nFrom the darkness above, a floorboard creaks. MANOR",
    "FADE IN:\n\nEXT. DRAGON PEAK - DAWN\n\nSnow swirls around the ancient stone ruins. Elara, a scarred warrior, raises her broadsword as a massive shadow eclipses the sun. The beast roars, shaking the mountain. DRAGON",
    "FADE IN:\n\nINT. DETECTIVE OFFICE - NIGHT\n\nCigarette smoke hangs heavy. Detective Vance stares at the black-and-white photographs on his desk. A dame in a red dress walks in. She spells trouble. DETECTIVE",
    "FADE IN:\n\nEXT. ABANDONED CITY - DUSK\n\nOverturned cars rust in the streets. Sarah tightens the grip on her baseball bat. The guttural moans are getting louder. The ZOMBIE horde is breaching the perimeter. ZOMBIE",
    "FADE IN:\n\nEXT. METROPOLIS - DAY\n\nThe villain stands atop the skyscraper, holding the detonator. Suddenly, a streak of blue light crashes into the roof. VANGUARD has arrived. The city is safe. VANGUARD",
    "FADE IN:\n\nEXT. COLOSSEUM - DAY\n\nThe crowd roars. Marcus, a GLADIATOR covered in sand and blood, locks eyes with the Emperor. He raises his shield. Today, he fights for his freedom. GLADIATOR",
    "FADE IN:\n\nINT. CASINO MONTE CARLO - NIGHT\n\nAgent Cross adjusts his tuxedo. He spots the target exchanging the ENIGMA drive at the roulette table. He reaches for his silenced pistol. The mission is a go. ENIGMA"
];

document.getElementById('generate-btn').addEventListener('click', generateAction);

document.getElementById('auto-gen-btn').addEventListener('click', () => {
    const input = document.getElementById('script-input');
    input.value = scripts[Math.floor(Math.random() * scripts.length)];
    input.style.borderColor = 'var(--accent)';
    setTimeout(() => { input.style.borderColor = 'var(--border)'; }, 500);
});