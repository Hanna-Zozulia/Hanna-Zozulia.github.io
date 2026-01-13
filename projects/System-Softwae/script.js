document.addEventListener('DOMContentLoaded', () => {
    const softwaeData = [
        {name: 'Windows 11', type: 'System Software'},
        {name: 'Microsoft Word', type: 'Application Software'},
        {name: 'Linux', type: 'System Software'},
        {name: 'Photoshop', type: 'Application Software'},
        {name: 'macOS', type: 'System Software'},
        {name: 'Android', type: 'System Software'},
        {name: 'iOS', type: 'System Software'},
        {name: 'ChromeOS', type: 'System Software'},
        {name: 'Ubuntu', type: 'System Software'},
        {name: 'Fedora', type: 'System Software'},
        {name: 'Debian', type: 'System Software'},
        {name: 'FreeBSD', type: 'System Software'},
        {name: 'DOS', type: 'System Software'},
        {name: 'Solaris', type: 'System Software'},
        {name: 'UNIX', type: 'System Software'},
        {name: 'CentOS', type: 'System Software'},
        {name: 'Arch Linux', type: 'System Software'},
        {name: 'Red Hat Enterprise Linux', type: 'System Software'},
        {name: 'Kernel Windows NT', type: 'System Software'},
        {name: 'Video Drivers', type: 'System Software'},
        {name: 'NVIDIA GeForce Driver', type: 'System Software'},
        {name: 'AMD Radeon Driver', type: 'System Software'},
        {name: 'Intel Chipset Driver', type: 'System Software'},
        {name: 'Network Adapter Driver', type: 'System Software'},
        {name: 'Firmware', type: 'System Software'},
        {name: 'Motherboard Drivers', type: 'System Software'},
        {name: 'File System NTFS', type: 'System Software'},
        {name: 'File System ext4', type: 'System Software'},
        {name: 'Hypervisor', type: 'System Software'},
        {name: 'Excel', type: 'Application Software'},
        {name: 'PowerPoint', type: 'Application Software'},
        {name: 'Google Chrome', type: 'Application Software'},
        {name: 'Mozilla Firefox', type: 'Application Software'},
        {name: 'Safari', type: 'Application Software'},
        {name: 'Opera', type: 'Application Software'},
        {name: 'Telegram', type: 'Application Software'},
        {name: 'WhatsApp Desktop', type: 'Application Software'},
        {name: 'Skype', type: 'Application Software'},
        {name: 'Zoom', type: 'Application Software'},
        {name: 'Google Docs', type: 'Application Software'},
        {name: 'Notion', type: 'Application Software'},
        {name: 'Figma', type: 'Application Software'},
        {name: 'Canva', type: 'Application Software'},
        {name: 'DaVinci Resolve', type: 'Application Software'},
        {name: 'Adobe Illustrator', type: 'Application Software'},
        {name: 'Adobe Premiere Pro', type: 'Application Software'},
        {name: 'Blender', type: 'Application Software'},
        {name: 'AutoCAD', type: 'Application Software'},
        {name: 'Visual Studio Code', type: 'Application Software'},
        {name: 'PyCharm', type: 'Application Software'},
        {name: 'WebStorm', type: 'Application Software'},
        {name: 'Spotify', type: 'Application Software'},
        {name: 'VLC Media Player', type: 'Application Software'},
        {name: '7-Zip', type: 'Application Software'}
    ];

    //ELEMENTS DOM
    const learnContainer = document.getElementById('card-container');
    const startTestBtn = document.getElementById('start-test-btn');
    const shuffleBtn = document.getElementById('shuffle-btn');
    const backBtn = document.getElementById('back-btn');
    const testArea = document.getElementById('test-area');
    const sourceCardsContainer = document.getElementById('source-cards');
    const dropZones = document.querySelectorAll('.drop-zone');
    const checkBtn = document.getElementById('check-btn');
    const restartBtn = document.getElementById('restart-btn');
    const resultsContainer = document.getElementById('results');
    const showLearnedBtn = document.getElementById('show-learned-btn');
    const learnedPage = document.getElementById('learned-page');
    const learnedContainer = document.getElementById('learned-cards');

    let learnedCards = [];

    /**
     * An initial set of flip cards for learning is being created
     */

    function createLearningCards() {
        learnContainer.innerHTML = '';
        backBtn.classList.add('hidden');
        const notLearned = softwaeData.filter(item => !learnedCards.includes(item.name));

        notLearned.forEach(item => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
                <div class="card-face card-front">
                    <button class="hide-card-btn">×</button>
                    ${item.name}
                    <button class="learned-btn">Learned</button>
                </div>
                <div class="card-face card-back">
                    <h3>${item.type}</h3>
                </div>
                
            `;

            // Coup
            card.addEventListener('click', (e) => {
                if (e.target.classList.contains('hide-card-btn') || e.target.classList.contains('learned-btn')) return;
                card.classList.toggle('is-flipped');
            });

            // Hide the map (training only)
            card.querySelector('.hide-card-btn').addEventListener('click', (e) => {
                e.stopPropagation();
                card.remove();
            });

            // Add to learned
            card.querySelector('.learned-btn').addEventListener('click', () => {
                learnedCards.push(item.name);
                card.remove();
                renderLearnedCards();
            });

            learnContainer.appendChild(card);
        });
    }

    shuffleBtn.addEventListener('click', () => {
        const cards = Array.from(learnContainer.children);
        const shuffled = cards.sort(() => Math.random() - 0.5);
        learnContainer.innerHTML = '';
        shuffled.forEach(card => learnContainer.appendChild(card));
    });

    showLearnedBtn.addEventListener('click', () => {
        if (learnedPage.classList.contains('hidden')) {
            renderLearnedCards();
            learnedPage.classList.remove('hidden');
            showLearnedBtn.textContent = 'Collapse list';
            showLearnedBtn.style.margin = '50px';
        } else {
            learnedPage.classList.add('hidden');
            showLearnedBtn.textContent = 'Show learned';
        }
    });

    /**
     * Learned flashcards
     */
    function renderLearnedCards() {
      
    learnedContainer.innerHTML = '';

    if (learnedCards.length === 0) {
        // If the list is empty, we show a message
        const message = document.createElement('p');
        message.textContent = "You haven't learned anything yet.";
        message.style.fontSize = '20px';
        message.style.textAlign = 'center';
        message.style.color = 'red';
        learnedContainer.appendChild(message);
        return;
    }
    
    learnedCards.forEach(name => {
        const item = softwaeData.find(i => i.name === name);
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <div class="card-face card-front">
                <button class="return-btn">Restore</button>
                ${item.name}
            </div>
            <div class="card-face card-back"><h3>${item.type}</h3></div>
        `;
        card.addEventListener('click', (e) => {
            if (e.target.classList.contains('return-btn')) return;
            card.classList.toggle('is-flipped');
        });
        card.querySelector('.return-btn').addEventListener('click', () => {
            learnedCards = learnedCards.filter(x => x !== name);
            card.remove();
            createLearningCards();
        });
        learnedContainer.appendChild(card);
    });
}


    function getNewCards(count) {
        const notLearned = softwaeData.filter(item => !learnedCards.includes(item.name));
        return notLearned.sort(() => Math.random() - 0.5).slice(0, count);
    }

    function initializeTest() {
        usedCards = [];

        //Hide the training area and show the test area
        learnContainer.classList.add('hidden');
        startTestBtn.classList.add('hidden');
        shuffleBtn.classList.add('hidden');
        testArea.classList.remove('hidden');
        backBtn.classList.remove('hidden');

        //Reset the previous test state
        sourceCardsContainer.innerHTML = '';
        resultsContainer.innerHTML = '';
        checkBtn.classList.add('hidden');
        restartBtn.classList.add('hidden');
        dropZones.forEach(zone => {
            zone.innerHTML = `<h3>${zone.dataset.type}</h3>`;
        });
       
        const shuffledData = getNewCards(20);
        shuffledData.forEach((item, index) => {
            const card = document.createElement('div');
            card.id = `card-${index}`;
            card.classList.add('card');
            card.draggable = true;
            card.textContent = item.name;
            card.dataset.type = item.type;
            sourceCardsContainer.appendChild(card);
    });

        addDragAndDropListenes();
    }

/**
 * Adding all necessary event listeners for drag functionality
 */

    function addDragAndDropListenes() {
        const draggableCards = document.querySelectorAll('#source-cards .card');

        draggableCards.forEach(card => {
            card.addEventListener('dragstart', (e) => {
                e.dataTransfer.setData('text/plain', e.target.id);
                setTimeout(() => card.classList.add('hidden'), 0);
            });
            card.addEventListener('dragend', () => {
                card.classList.remove('hidden');
            });
        });

        dropZones.forEach(zone => {
            zone.addEventListener('dragover', e => {
                e.preventDefault();
                zone.classList.add('drag-over');
            });
            zone.addEventListener('dragleave', () => {
                zone.classList.remove('drag-over');
            });
            zone.addEventListener('drop', e => {
                e.preventDefault();
                zone.classList.remove('drag-over');
                const id = e.dataTransfer.getData('text/plain');
                const draggable = document.getElementById(id);
                if (draggable) {
                    zone.appendChild(draggable);
                }
                checkTestCompletion();
            });
        });
    }

    /**
     * Checks if all the cards have been moved to the discard zones and displays the check button
     */
    function checkTestCompletion() {
        if (sourceCardsContainer.children.length === 0) {
            checkBtn.classList.remove('hidden');
        }
    }

    /**
     * Calculates and displays the test results
     */

    function calculateResults() {
        let correctAnswers = 0;
        let incorrectAnswers = 0;

        dropZones.forEach(zone => {
            const zoneType = zone.dataset.type;
            const cardsInZone = zone.querySelectorAll('.card');

            cardsInZone.forEach(card => {
                card.draggable = false;
                card.style.cursor = 'default';
                if (card.dataset.type === zoneType) {
                    correctAnswers++;
                    card.classList.add('correct');
                } else {
                    incorrectAnswers++;
                    card.classList.add('incorrect');
                }
            });
        });

        resultsContainer.textContent = `Correct: ${correctAnswers}, Incorrect: ${incorrectAnswers}`;
        checkBtn.classList.add('hidden');
        restartBtn.classList.remove('hidden');
    }

    backBtn.addEventListener('click', () => {
        // Hiding the test area
        testArea.classList.add('hidden');
        checkBtn.classList.add('hidden');
        restartBtn.classList.add('hidden');
        sourceCardsContainer.innerHTML = '';
        dropZones.forEach(zone => zone.innerHTML = `<h3>${zone.dataset.type}</h3>`);

        // Showing the training area
        learnContainer.classList.remove('hidden');
        startTestBtn.classList.remove('hidden');
        shuffleBtn.classList.remove('hidden');

        backBtn.classList.add('hidden');
    });

// --- INITIALIZATION ---
createLearningCards();
startTestBtn.addEventListener('click', initializeTest);
checkBtn.addEventListener('click', calculateResults);
restartBtn.addEventListener('click', initializeTest);
});