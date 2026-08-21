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
        "> Interfacing with Groq AI (Llama 3) for code generation...",
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
                if (scriptVal.includes('GALACTICA')) {
                    document.getElementById('promo-title').innerHTML = 'HULL<br>BREACH.';
                    document.getElementById('promo-brand').textContent = 'GALACTICA';
                    document.getElementById('promo-synopsis').textContent = 'Sirens blare. Red light strobes across the metallic walls. The alien entity is breaching the hull. We cannot let it reach the core.';
                    document.getElementById('promo-hero').style.background = "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80') center/cover no-repeat";
                    document.getElementById('promo-lead-name').textContent = 'REYNA';
                    document.getElementById('promo-lead-bg').style.background = "url('https://images.unsplash.com/photo-1506744626753-1fa30fd2001b?auto=format&fit=crop&w=800&q=80') center/cover";
                    document.getElementById('promo-antagonist-name').textContent = 'THE ENTITY';
                    document.getElementById('promo-antagonist-bg').style.background = "url('https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?auto=format&fit=crop&w=800&q=80') center/cover";
                    document.getElementById('promo-boxoffice').textContent = '$780M';
                    document.getElementById('promo-rt').textContent = '94%';
                    document.getElementById('promo-rt').style.color = '#10b981';
                    document.getElementById('promo-rt').style.color = '#10b981';
                    document.getElementById('promo-rating').textContent = 'PG-13';
                    document.getElementById('promo-art-1').style.background = "url('https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=800&q=80') center/cover";
                    document.getElementById('promo-art-2').style.background = "url('https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=800&q=80') center/cover";
                    document.getElementById('promo-art-3').style.background = "url('https://images.unsplash.com/photo-1614729939124-03290b56c9ce?auto=format&fit=crop&w=800&q=80') center/cover";
                    document.getElementById('promo-audio-time').textContent = '03:12';
                } else if (scriptVal.includes('WASTELAND')) {
                    document.getElementById('promo-title').innerHTML = 'DESERT<br>BLOOD.';
                    document.getElementById('promo-brand').textContent = 'WASTELAND';
                    document.getElementById('promo-synopsis').textContent = 'The sun beats down mercilessly. A lone drifter trudges through the sand dunes. A gang of marauders appears on the horizon. He will not go down without a fight.';
                    document.getElementById('promo-hero').style.background = "url('https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=1920&q=80') center/cover no-repeat";
                    document.getElementById('promo-lead-name').textContent = 'ELIAS';
                    document.getElementById('promo-lead-bg').style.background = "url('https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?auto=format&fit=crop&w=800&q=80') center/cover";
                    document.getElementById('promo-antagonist-name').textContent = 'MARAUDERS';
                    document.getElementById('promo-antagonist-bg').style.background = "url('https://images.unsplash.com/photo-1605648897582-841961448b37?auto=format&fit=crop&w=800&q=80') center/cover";
                    document.getElementById('promo-boxoffice').textContent = '$320M';
                    document.getElementById('promo-rt').textContent = '81%';
                    document.getElementById('promo-rt').style.color = '#10b981';
                    document.getElementById('promo-rt').style.color = '#10b981';
                    document.getElementById('promo-rt').style.color = '#10b981';
                    document.getElementById('promo-rating').textContent = 'R';
                    document.getElementById('promo-art-1').style.background = "url('https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&w=800&q=80') center/cover";
                    document.getElementById('promo-art-2').style.background = "url('https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&w=800&q=80') center/cover";
                    document.getElementById('promo-art-3').style.background = "url('https://images.unsplash.com/photo-1618557124976-926f74780517?auto=format&fit=crop&w=800&q=80') center/cover";
                    document.getElementById('promo-audio-time').textContent = '02:45';
                    document.getElementById('promo-art-1').style.background = "url('https://images.unsplash.com/photo-1542385151-efd9000785a0?auto=format&fit=crop&w=800&q=80') center/cover";
                    document.getElementById('promo-art-2').style.background = "url('https://images.unsplash.com/photo-1500366657802-1823ebce6962?auto=format&fit=crop&w=800&q=80') center/cover";
                    document.getElementById('promo-art-3').style.background = "url('https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80') center/cover";
                    document.getElementById('promo-audio-time').textContent = '04:05';
                } else {
                    document.getElementById('promo-title').innerHTML = 'THE CHASE<br>BEGINS.';
                    document.getElementById('promo-brand').textContent = 'NEON RUN';
                    document.getElementById('promo-synopsis').textContent = 'Rain slicks the neon-drenched streets. A rogue courier clutches a glowing hard drive to his chest. The Corpo-Sec drones are closing in. You are on your own.';
                    document.getElementById('promo-hero').style.background = "url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=1920&q=80') center/cover no-repeat";
                    document.getElementById('promo-lead-name').textContent = 'KAEL';
                    document.getElementById('promo-lead-bg').style.background = "url('https://images.unsplash.com/photo-1535295972055-1c762f4483e5?auto=format&fit=crop&w=800&q=80') center/cover";
                    document.getElementById('promo-antagonist-name').textContent = 'CORPO-SEC';
                    document.getElementById('promo-antagonist-bg').style.background = "url('https://images.unsplash.com/photo-1542931287-023b922fa89b?auto=format&fit=crop&w=800&q=80') center/cover";
                    document.getElementById('promo-boxoffice').textContent = '$450M';
                    document.getElementById('promo-rt').textContent = '88%';
                    document.getElementById('promo-rt').style.color = '#10b981';
                    document.getElementById('promo-rt').style.color = '#10b981';
                    document.getElementById('promo-rating').textContent = 'R';
                    document.getElementById('promo-art-1').style.background = "url('https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&w=800&q=80') center/cover";
                    document.getElementById('promo-art-2').style.background = "url('https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&w=800&q=80') center/cover";
                    document.getElementById('promo-art-3').style.background = "url('https://images.unsplash.com/photo-1618557124976-926f74780517?auto=format&fit=crop&w=800&q=80') center/cover";
                    document.getElementById('promo-audio-time').textContent = '02:45';
                }

                document.getElementById('app-view').style.display = 'none';
                document.getElementById('deployed-view').style.display = 'block';
            };
        }
    }, 800);
};

document.getElementById('generate-btn').onclick = generateAction;

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        const targetId = link.getAttribute('data-target');
        views.forEach(view => {
            view.style.display = (view.id === targetId) ? 'flex' : 'none';
        });
        
        if (targetId === 'dashboard') {
            document.getElementById('script-input').value = '';
            document.getElementById('script-input').style.display = 'block';
            document.getElementById('auto-gen-container').style.display = 'flex';
            document.getElementById('console-output').style.display = 'none';
            const btn = document.getElementById('generate-btn');
            btn.textContent = 'GENERATE ASSETS';
            btn.disabled = false;
            btn.onclick = generateAction;
        }
    });
});

const scripts = [
    "FADE IN:\n\nEXT. NEO-TOKYO - NIGHT\n\nRain slicks the neon-drenched streets. A rogue courier, Kael (30s), clutches a glowing hard drive to his chest. He glances over his shoulder. The Corpo-Sec drones are closing in.\n\nKAEL\n(into comms)\nI'm compromised. Need immediate evac at extraction point Beta.\n\nVOICE (V.O.)\nNegative, Kael. The package is too hot. You're on your own.\n\nKael curses, revs his cyber-bike, and blasts into the alleyway. The chase begins.",
    "FADE IN:\n\nINT. SPACESHIP GALACTICA - CORRIDOR\n\nSirens blare. Red light strobes across the metallic walls. Commander REYNA (40s) sprints towards the escape pods, dragging an injured engineer. The alien entity is breaching the hull.\n\nREYNA\nWe can't let it reach the core!\n\nThe ship shudders violently. Reyna slams the pod door shut, sealing herself inside. She looks out the viewport as the Galactica explodes into a million pieces.",
    "FADE IN:\n\nEXT. DESERT WASTELAND - DAY\n\nThe sun beats down mercilessly. A lone drifter, ELIAS (50s), trudges through the sand dunes. He carries a rusty machete and a canteen of water. Suddenly, a gang of marauders appears on the horizon, revving their dune buggies.\n\nMARAUDER LEADER\nLooks like we got some fresh meat!\n\nElias unsheathes his machete. He's outnumbered, but he won't go down without a fight."
];

document.getElementById('auto-gen-btn').addEventListener('click', () => {
    const input = document.getElementById('script-input');
    input.value = scripts[Math.floor(Math.random() * scripts.length)];
    input.style.borderColor = 'var(--accent)';
    setTimeout(() => { input.style.borderColor = 'var(--border)'; }, 500);
});