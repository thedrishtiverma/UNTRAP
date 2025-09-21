// UNTRAP - Career Companion App
class UntrapApp {
    constructor() {
        this.currentScreen = 'welcome-screen';
        this.userData = {
            language: null,
            userType: null,
            phone: null,
            assessmentAnswers: {
                phase1: {},
                phase2: {},
                phase3: {},
                phase4: {}
            },
            clarityScore: 0,
            detectedTraps: [],
            careerMatches: [],
            roadmap: null,
            progress: {
                streak: 5,
                tasksCompleted: 12,
                goalsAchieved: 3,
                skillProgress: {
                    'Design Thinking': 60,
                    'Figma': 40,
                    'User Research': 30
                }
            }
        };
        
        this.currentQuestion = 0;
        this.currentPhase = 1;
        this.totalQuestions = 45;
        this.questionsData = this.loadAssessmentData();
        this.careersData = this.loadCareersData();
        this.trapsData = this.loadTrapsData();
        this.mentorResponses = this.loadMentorData();
        this.roadmapTemplates = this.loadRoadmapData();
        
        this.freeMessageCount = 0;
        this.maxFreeMessages = 3;
        
        this.isInitialized = false;
    }

    init() {
        console.log('🚀 Initializing UNTRAP app...');
        
        // Wait for DOM to be fully ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.doInit());
        } else {
            this.doInit();
        }
    }
    
    doInit() {
        try {
            console.log('📋 Setting up event listeners...');
            this.setupEventListeners();
            
            console.log('💾 Loading user data...');
            this.loadUserData();
            
            console.log('🖥️ Showing welcome screen...');
            this.showScreen('welcome-screen');
            
            this.isInitialized = true;
            console.log('✅ App initialized successfully');
        } catch (error) {
            console.error('❌ Failed to initialize app:', error);
        }
    }

    setupEventListeners() {
        // Welcome screen - using multiple approaches for maximum compatibility
        this.setupWelcomeButton();
        
        // Language selection
        this.setupLanguageSelection();
        
        // User type selection
        this.setupUserTypeSelection();

        // Phone input
        this.setupPhoneInput();

        // Assessment navigation
        this.setupAssessmentNavigation();

        // Results actions
        this.setupResultsActions();

        // Chat functionality
        this.setupChatFunctionality();

        // Roadmap actions
        this.setupRoadmapActions();

        // Bottom navigation
        this.setupBottomNavigation();

        // Modal functionality
        this.setupModal();

        // Task management
        this.setupTaskManagement();
        
        console.log('✅ Event listeners setup complete');
    }
    
    setupWelcomeButton() {
        const startButton = document.getElementById('start-journey');
        if (startButton) {
            // Remove any existing listeners
            startButton.replaceWith(startButton.cloneNode(true));
            const newButton = document.getElementById('start-journey');
            
            // Add multiple event types for maximum compatibility
            const handleStart = (e) => {
                console.log('🎯 Start journey clicked!');
                e.preventDefault();
                e.stopPropagation();
                this.handleStartJourney();
            };
            
            newButton.addEventListener('click', handleStart, { passive: false });
            newButton.addEventListener('touchend', handleStart, { passive: false });
            
            // Also add keyboard support
            newButton.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.handleStartJourney();
                }
            });
            
            // Ensure button is focusable
            newButton.setAttribute('tabindex', '0');
            
            console.log('✅ Start journey button configured');
        } else {
            console.error('❌ Start journey button not found');
        }
    }
    
    handleStartJourney() {
        console.log('🚀 Starting journey...');
        try {
            this.showScreen('language-screen');
            console.log('✅ Navigated to language screen');
        } catch (error) {
            console.error('❌ Error starting journey:', error);
        }
    }
    
    setupLanguageSelection() {
        document.querySelectorAll('.language-option').forEach(option => {
            option.addEventListener('click', (e) => {
                e.preventDefault();
                const lang = e.currentTarget.dataset.lang;
                console.log('🌐 Language selected:', lang);
                this.selectLanguage(lang);
            });
        });
    }
    
    setupUserTypeSelection() {
        document.querySelectorAll('.user-type-option').forEach(option => {
            option.addEventListener('click', (e) => {
                e.preventDefault();
                const type = e.currentTarget.dataset.type;
                console.log('👤 User type selected:', type);
                this.selectUserType(type);
            });
        });
    }
    
    setupPhoneInput() {
        const phoneInput = document.getElementById('phone-number');
        const verifyButton = document.getElementById('verify-phone');
        
        if (phoneInput && verifyButton) {
            phoneInput.addEventListener('input', (e) => {
                const value = e.target.value.replace(/\D/g, '');
                e.target.value = value;
                verifyButton.disabled = value.length !== 10;
                
                if (value.length === 10) {
                    verifyButton.textContent = 'Get OTP';
                } else {
                    verifyButton.textContent = 'Enter 10 digits';
                }
            });

            verifyButton.addEventListener('click', (e) => {
                e.preventDefault();
                this.verifyPhone();
            });
        }
    }
    
    setupAssessmentNavigation() {
        const nextButton = document.getElementById('next-question');
        const prevButton = document.getElementById('prev-question');
        
        if (nextButton) {
            nextButton.addEventListener('click', (e) => {
                e.preventDefault();
                this.nextQuestion();
            });
        }
        
        if (prevButton) {
            prevButton.addEventListener('click', (e) => {
                e.preventDefault();
                this.prevQuestion();
            });
        }
    }
    
    setupResultsActions() {
        const viewRoadmapButton = document.getElementById('view-roadmap');
        const talkToMentorButton = document.getElementById('talk-to-mentor');
        
        if (viewRoadmapButton) {
            viewRoadmapButton.addEventListener('click', (e) => {
                e.preventDefault();
                this.generateRoadmap();
                this.showScreen('roadmap-screen');
            });
        }
        
        if (talkToMentorButton) {
            talkToMentorButton.addEventListener('click', (e) => {
                e.preventDefault();
                this.showScreen('mentor-screen');
            });
        }
    }
    
    setupChatFunctionality() {
        const sendButton = document.getElementById('send-message');
        const chatInput = document.getElementById('chat-input');
        
        if (sendButton) {
            sendButton.addEventListener('click', (e) => {
                e.preventDefault();
                this.sendMessage();
            });
        }
        
        if (chatInput) {
            chatInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    this.sendMessage();
                }
            });
        }

        // Quick questions
        document.querySelectorAll('.quick-tag').forEach(tag => {
            tag.addEventListener('click', (e) => {
                e.preventDefault();
                this.sendQuickQuestion(e.target.dataset.question);
            });
        });
    }
    
    setupRoadmapActions() {
        const startRoadmapButton = document.getElementById('start-roadmap');
        const exportRoadmapButton = document.getElementById('export-roadmap');
        
        if (startRoadmapButton) {
            startRoadmapButton.addEventListener('click', (e) => {
                e.preventDefault();
                this.showScreen('dashboard-screen');
                this.showBottomNav();
            });
        }
        
        if (exportRoadmapButton) {
            exportRoadmapButton.addEventListener('click', (e) => {
                e.preventDefault();
                this.showUpgradeModal();
            });
        }

        // Upgrade prompts
        const upgradeChatButton = document.getElementById('upgrade-chat');
        if (upgradeChatButton) {
            upgradeChatButton.addEventListener('click', (e) => {
                e.preventDefault();
                this.showUpgradeModal();
            });
        }
    }
    
    setupBottomNavigation() {
        document.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const screen = e.currentTarget.dataset.screen;
                this.showScreen(screen);
                this.updateNavigation(screen);
            });
        });
    }
    
    setupModal() {
        const closeModalButton = document.getElementById('close-upgrade-modal');
        if (closeModalButton) {
            closeModalButton.addEventListener('click', (e) => {
                e.preventDefault();
                this.hideUpgradeModal();
            });
        }
        
        // Close modal when clicking outside
        const modal = document.getElementById('upgrade-modal');
        if (modal) {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    this.hideUpgradeModal();
                }
            });
        }
    }
    
    setupTaskManagement() {
        // Task checkboxes - using event delegation
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('task-checkbox')) {
                e.preventDefault();
                this.toggleTask(e.target);
            }
        });
    }

    showScreen(screenId) {
        console.log(`🔄 Attempting to switch to screen: ${screenId}`);
        
        try {
            // Validate screen exists
            const targetScreen = document.getElementById(screenId);
            if (!targetScreen) {
                console.error(`❌ Screen ${screenId} not found in DOM`);
                return false;
            }
            
            // Hide all screens
            const allScreens = document.querySelectorAll('.screen');
            console.log(`📱 Found ${allScreens.length} screens`);
            
            allScreens.forEach(screen => {
                screen.classList.remove('active');
                screen.style.display = 'none'; // Force hide
            });
            
            // Show target screen
            targetScreen.classList.add('active');
            targetScreen.style.display = 'block'; // Force show
            
            this.currentScreen = screenId;
            console.log(`✅ Successfully switched to ${screenId}`);
            
            // Update screen-specific content
            this.updateScreenContent(screenId);
            
            return true;
        } catch (error) {
            console.error('❌ Error switching screens:', error);
            return false;
        }
    }
    
    updateScreenContent(screenId) {
        try {
            switch (screenId) {
                case 'assessment-screen':
                    this.loadCurrentQuestion();
                    break;
                case 'results-screen':
                    this.displayResults();
                    break;
                case 'dashboard-screen':
                    this.updateDashboard();
                    break;
                case 'roadmap-screen':
                    if (this.userData.roadmap) {
                        this.displayRoadmap();
                    }
                    break;
                default:
                    // No special content needed
                    break;
            }
        } catch (error) {
            console.error(`❌ Error updating content for ${screenId}:`, error);
        }
    }

    selectLanguage(language) {
        console.log(`🌐 Language selected: ${language}`);
        this.userData.language = language;
        
        // Update UI selection
        document.querySelectorAll('.language-option').forEach(option => {
            option.classList.remove('selected');
        });
        const selectedOption = document.querySelector(`[data-lang="${language}"]`);
        if (selectedOption) {
            selectedOption.classList.add('selected');
        }
        
        // Auto-proceed after visual feedback
        setTimeout(() => {
            this.showScreen('user-type-screen');
        }, 800);
    }

    selectUserType(type) {
        console.log(`👤 User type selected: ${type}`);
        this.userData.userType = type;
        
        // Update UI selection
        document.querySelectorAll('.user-type-option').forEach(option => {
            option.classList.remove('selected');
        });
        const selectedOption = document.querySelector(`[data-type="${type}"]`);
        if (selectedOption) {
            selectedOption.classList.add('selected');
        }
        
        // Auto-proceed after visual feedback
        setTimeout(() => {
            this.showScreen('phone-screen');
        }, 800);
    }

    verifyPhone() {
        const phoneInput = document.getElementById('phone-number');
        if (!phoneInput) return;
        
        const phone = phoneInput.value;
        console.log(`📱 Verifying phone: ${phone}`);
        
        if (phone.length === 10) {
            this.userData.phone = phone;
            
            // Show loading state
            const verifyButton = document.getElementById('verify-phone');
            if (verifyButton) {
                verifyButton.textContent = 'Sending OTP...';
                verifyButton.disabled = true;
            }
            
            // Simulate verification process
            setTimeout(() => {
                this.showScreen('assessment-screen');
            }, 1500);
        }
    }

    loadCurrentQuestion() {
        console.log(`📝 Loading question ${this.currentQuestion + 1} of ${this.totalQuestions}`);
        
        const phases = ['phase1_interests', 'phase2_skills', 'phase3_constraints', 'phase4_goals'];
        const phaseLengths = [15, 12, 10, 8];
        const phaseNames = ['Phase 1: Interest Discovery', 'Phase 2: Skills Evaluation', 'Phase 3: Constraint Analysis', 'Phase 4: Context & Goals'];
        
        let questionIndex = 0;
        let phaseIndex = 0;
        let currentPhaseProgress = this.currentQuestion;
        
        // Determine current phase
        for (let i = 0; i < phaseLengths.length; i++) {
            if (currentPhaseProgress < phaseLengths[i]) {
                phaseIndex = i;
                questionIndex = currentPhaseProgress;
                break;
            }
            currentPhaseProgress -= phaseLengths[i];
        }
        
        const currentPhaseKey = phases[phaseIndex];
        const questions = this.questionsData[currentPhaseKey];
        
        if (questionIndex < questions.length) {
            const question = questions[questionIndex];
            
            // Update progress
            const progress = ((this.currentQuestion + 1) / this.totalQuestions) * 100;
            const progressFill = document.querySelector('.progress-fill');
            if (progressFill) {
                progressFill.style.width = `${progress}%`;
            }
            
            const phaseElement = document.getElementById('current-phase');
            if (phaseElement) {
                phaseElement.textContent = phaseNames[phaseIndex];
            }
            
            const counterElement = document.getElementById('progress-counter');
            if (counterElement) {
                counterElement.textContent = `${this.currentQuestion + 1} of ${this.totalQuestions}`;
            }
            
            // Load question
            const questionTextElement = document.getElementById('question-text');
            if (questionTextElement) {
                questionTextElement.textContent = question.question;
            }
            
            this.loadQuestionOptions(question);
            
            // Update navigation buttons
            const prevButton = document.getElementById('prev-question');
            const nextButton = document.getElementById('next-question');
            
            if (prevButton) {
                prevButton.disabled = this.currentQuestion === 0;
            }
            if (nextButton) {
                nextButton.disabled = true;
            }
        }
    }

    loadQuestionOptions(question) {
        const optionsContainer = document.getElementById('question-options');
        if (!optionsContainer) return;
        
        optionsContainer.innerHTML = '';
        
        if (question.type === 'single') {
            question.options.forEach((option, index) => {
                const button = document.createElement('button');
                button.className = 'option-button';
                button.textContent = option;
                button.addEventListener('click', () => this.selectOption(button, index));
                optionsContainer.appendChild(button);
            });
        } else if (question.type === 'multiple') {
            question.options.forEach((option, index) => {
                const button = document.createElement('button');
                button.className = 'option-button';
                button.textContent = option;
                button.dataset.multipleIndex = index;
                button.addEventListener('click', () => this.toggleMultipleOption(button, index));
                optionsContainer.appendChild(button);
            });
        } else if (question.type === 'scale') {
            const scaleContainer = document.createElement('div');
            scaleContainer.className = 'scale-options';
            
            question.options.forEach((option, index) => {
                const button = document.createElement('button');
                button.className = 'option-button scale-option';
                button.textContent = option;
                button.addEventListener('click', () => this.selectOption(button, index));
                scaleContainer.appendChild(button);
            });
            
            optionsContainer.appendChild(scaleContainer);
        }
    }

    selectOption(button, index) {
        // Remove previous selections
        const parent = button.closest('.scale-options') || button.parentElement;
        parent.querySelectorAll('.option-button').forEach(btn => {
            btn.classList.remove('selected');
        });
        
        // Select current option
        button.classList.add('selected');
        
        // Save answer and enable next button
        this.saveCurrentAnswer([index]);
        const nextButton = document.getElementById('next-question');
        if (nextButton) {
            nextButton.disabled = false;
        }
    }

    toggleMultipleOption(button, index) {
        button.classList.toggle('selected');
        
        // Get all selected options
        const selectedOptions = [];
        button.parentElement.querySelectorAll('.option-button.selected').forEach(btn => {
            selectedOptions.push(parseInt(btn.dataset.multipleIndex));
        });
        
        // Save answer and enable next if any selected
        const nextButton = document.getElementById('next-question');
        if (selectedOptions.length > 0) {
            this.saveCurrentAnswer(selectedOptions);
            if (nextButton) {
                nextButton.disabled = false;
            }
        } else {
            if (nextButton) {
                nextButton.disabled = true;
            }
        }
    }

    saveCurrentAnswer(answer) {
        const phases = ['phase1_interests', 'phase2_skills', 'phase3_constraints', 'phase4_goals'];
        const phaseLengths = [15, 12, 10, 8];
        
        let questionIndex = 0;
        let phaseIndex = 0;
        let currentPhaseProgress = this.currentQuestion;
        
        // Determine current phase
        for (let i = 0; i < phaseLengths.length; i++) {
            if (currentPhaseProgress < phaseLengths[i]) {
                phaseIndex = i;
                questionIndex = currentPhaseProgress;
                break;
            }
            currentPhaseProgress -= phaseLengths[i];
        }
        
        const phaseNum = `phase${phaseIndex + 1}`;
        
        if (!this.userData.assessmentAnswers[phaseNum]) {
            this.userData.assessmentAnswers[phaseNum] = {};
        }
        
        this.userData.assessmentAnswers[phaseNum][`q${questionIndex + 1}`] = answer;
        console.log(`💾 Saved answer for ${phaseNum} q${questionIndex + 1}:`, answer);
    }

    nextQuestion() {
        if (this.currentQuestion < this.totalQuestions - 1) {
            this.currentQuestion++;
            this.loadCurrentQuestion();
        } else {
            // Assessment completed
            this.completeAssessment();
        }
    }

    prevQuestion() {
        if (this.currentQuestion > 0) {
            this.currentQuestion--;
            this.loadCurrentQuestion();
        }
    }

    completeAssessment() {
        console.log('🎉 Assessment completed');
        this.analyzeResults();
        this.showScreen('results-screen');
    }

    analyzeResults() {
        // Calculate clarity score
        this.userData.clarityScore = this.calculateClarityScore();
        
        // Detect traps
        this.userData.detectedTraps = this.detectTraps();
        
        // Generate career matches
        this.userData.careerMatches = this.generateCareerMatches();
        
        console.log('📊 Results analyzed:', {
            clarityScore: this.userData.clarityScore,
            detectedTraps: this.userData.detectedTraps.length,
            careerMatches: this.userData.careerMatches.length
        });
    }

    calculateClarityScore() {
        // Simple scoring algorithm based on consistency and confidence
        let score = 50; // Base score
        
        const answers = this.userData.assessmentAnswers;
        
        // Add points for decisive answers
        Object.values(answers).forEach(phase => {
            Object.values(phase).forEach(answer => {
                if (Array.isArray(answer) && answer.length === 1) {
                    score += 2; // Single decisive choice
                } else if (Array.isArray(answer) && answer.length > 1) {
                    score += 1; // Multiple choices (less decisive)
                }
            });
        });
        
        // Cap at 100
        return Math.min(100, score);
    }

    detectTraps() {
        const detectedTraps = [];
        const answers = this.userData.assessmentAnswers;
        
        // Parental Pressure Trap
        if (answers.phase3?.q3?.includes(0) || answers.phase3?.q3?.includes(1) || answers.phase3?.q6?.[0] === 2) {
            detectedTraps.push(this.trapsData[0]);
        }
        
        // Limited Awareness Trap
        if (answers.phase1?.q15?.[0] < 3 && answers.phase2?.q10?.length < 2) {
            detectedTraps.push(this.trapsData[1]);
        }
        
        // Financial Fear Trap
        if (answers.phase3?.q1?.[0] > 2 || answers.phase3?.q2?.[0] > 2) {
            detectedTraps.push(this.trapsData[2]);
        }
        
        // Analysis Paralysis Trap
        if (answers.phase4?.q1?.[0] === 1 && answers.phase4?.q4?.[0] === 2) {
            detectedTraps.push(this.trapsData[3]);
        }
        
        return detectedTraps;
    }

    generateCareerMatches() {
        // Simple matching algorithm based on interests and skills
        const matches = [...this.careersData];
        
        // Shuffle and return top 3
        for (let i = matches.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [matches[i], matches[j]] = [matches[j], matches[i]];
        }
        
        return matches.slice(0, 3);
    }

    displayResults() {
        // Update clarity score with animation
        const scoreElement = document.getElementById('clarity-score-value');
        if (scoreElement) {
            let currentScore = 0;
            const targetScore = this.userData.clarityScore;
            const increment = Math.max(1, Math.floor(targetScore / 20));
            
            const updateScore = () => {
                currentScore = Math.min(currentScore + increment, targetScore);
                scoreElement.textContent = currentScore;
                
                if (currentScore < targetScore) {
                    setTimeout(updateScore, 50);
                }
            };
            
            updateScore();
        }
        
        // Display detected traps
        const trapsList = document.getElementById('traps-list');
        if (trapsList) {
            trapsList.innerHTML = '';
            
            if (this.userData.detectedTraps.length > 0) {
                this.userData.detectedTraps.forEach((trap, index) => {
                    const trapElement = document.createElement('div');
                    trapElement.className = 'trap-item';
                    trapElement.innerHTML = `
                        <h4>${trap.name}</h4>
                        <p>${trap.description}</p>
                        <p><strong>Success Story:</strong> ${trap.success_story}</p>
                    `;
                    
                    // Add staggered animation
                    setTimeout(() => {
                        trapsList.appendChild(trapElement);
                    }, index * 200);
                });
            } else {
                trapsList.innerHTML = `
                    <div class="trap-item" style="border-left-color: var(--untrap-secondary);">
                        <h4>🎉 Great News!</h4>
                        <p>No major career traps detected. You seem to have good clarity about your path and are making informed decisions!</p>
                    </div>
                `;
            }
        }
        
        // Display career matches
        const matchesList = document.getElementById('career-matches-list');
        if (matchesList) {
            matchesList.innerHTML = '';
            
            this.userData.careerMatches.forEach((career, index) => {
                const careerElement = document.createElement('div');
                careerElement.className = 'career-match-item';
                careerElement.innerHTML = `
                    <h4>${career.name}</h4>
                    <p>${career.description}</p>
                    <div class="career-details">
                        <div class="detail-item">
                            <span class="detail-label">Growth:</span>
                            <span class="detail-value">${career.growth}</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-label">Salary:</span>
                            <span class="detail-value">${career.salary}</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-label">Key Skills:</span>
                            <span class="detail-value">${career.skills.slice(0, 2).join(', ')}</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-label">Day-in-life:</span>
                            <span class="detail-value">${career.dayInLife.substring(0, 50)}...</span>
                        </div>
                    </div>
                `;
                
                // Add staggered animation
                setTimeout(() => {
                    matchesList.appendChild(careerElement);
                }, index * 300);
            });
        }
    }

    generateRoadmap() {
        if (this.userData.careerMatches.length > 0) {
            const topCareer = this.userData.careerMatches[0];
            let roadmapKey = 'ux_designer'; // Default
            
            if (topCareer.name.toLowerCase().includes('data')) {
                roadmapKey = 'data_scientist';
            }
            
            this.userData.roadmap = this.roadmapTemplates[roadmapKey];
            console.log(`📋 Generated roadmap for: ${topCareer.name}`);
        }
    }

    displayRoadmap() {
        if (!this.userData.roadmap) return;
        
        const containers = {
            daily: document.getElementById('daily-tasks'),
            weekly: document.getElementById('weekly-goals'),
            monthly: document.getElementById('monthly-milestones')
        };
        
        // Clear existing content
        Object.values(containers).forEach(container => {
            if (container) container.innerHTML = '';
        });
        
        // Add tasks with staggered animation
        const roadmapData = [
            { key: 'daily_tasks', container: containers.daily },
            { key: 'weekly_goals', container: containers.weekly },
            { key: 'monthly_milestones', container: containers.monthly }
        ];
        
        roadmapData.forEach(({ key, container }, sectionIndex) => {
            if (container && this.userData.roadmap[key]) {
                this.userData.roadmap[key].forEach((task, index) => {
                    const taskElement = this.createTaskElement(task, `${key}-${index}`);
                    
                    setTimeout(() => {
                        container.appendChild(taskElement);
                    }, (sectionIndex * 500) + (index * 100));
                });
            }
        });
    }

    createTaskElement(text, id) {
        const taskElement = document.createElement('div');
        taskElement.className = 'task-item';
        taskElement.innerHTML = `
            <div class="task-checkbox" data-task-id="${id}"></div>
            <span class="task-text">${text}</span>
        `;
        return taskElement;
    }

    toggleTask(checkbox) {
        checkbox.classList.toggle('checked');
        const taskText = checkbox.nextElementSibling;
        if (taskText) {
            taskText.classList.toggle('completed');
        }
        
        // Celebration for first completion
        if (checkbox.classList.contains('checked')) {
            this.celebrateTaskCompletion();
        }
        
        // Update progress
        this.updateProgress();
    }
    
    celebrateTaskCompletion() {
        // Simple celebration - could be enhanced with confetti or animations
        console.log('🎉 Task completed!');
    }

    updateProgress() {
        const completedTasks = document.querySelectorAll('.task-checkbox.checked').length;
        this.userData.progress.tasksCompleted = completedTasks;
        
        // Update dashboard if visible
        if (this.currentScreen === 'dashboard-screen') {
            this.updateDashboard();
        }
    }

    sendMessage() {
        const input = document.getElementById('chat-input');
        if (!input) return;
        
        const message = input.value.trim();
        
        if (message && this.freeMessageCount < this.maxFreeMessages) {
            this.addMessageToChat(message, 'user');
            input.value = '';
            
            // Show typing indicator
            this.showTypingIndicator();
            
            // Generate AI response
            setTimeout(() => {
                this.hideTypingIndicator();
                const response = this.generateMentorResponse(message);
                this.addMessageToChat(response, 'mentor');
                this.freeMessageCount++;
                
                if (this.freeMessageCount >= this.maxFreeMessages) {
                    this.showUpgradePrompt();
                }
            }, 1500);
        } else if (this.freeMessageCount >= this.maxFreeMessages) {
            this.showUpgradeModal();
        }
    }

    sendQuickQuestion(question) {
        if (this.freeMessageCount < this.maxFreeMessages) {
            this.addMessageToChat(question, 'user');
            
            this.showTypingIndicator();
            
            setTimeout(() => {
                this.hideTypingIndicator();
                const response = this.generateMentorResponse(question);
                this.addMessageToChat(response, 'mentor');
                this.freeMessageCount++;
                
                if (this.freeMessageCount >= this.maxFreeMessages) {
                    this.showUpgradePrompt();
                }
            }, 1500);
        } else {
            this.showUpgradeModal();
        }
    }
    
    showTypingIndicator() {
        const indicator = document.createElement('div');
        indicator.className = 'message mentor-message typing-indicator';
        indicator.innerHTML = '<div class="message-content">Saarthi is typing...</div>';
        
        const chatMessages = document.getElementById('chat-messages');
        if (chatMessages) {
            chatMessages.appendChild(indicator);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }
    }
    
    hideTypingIndicator() {
        const indicator = document.querySelector('.typing-indicator');
        if (indicator) {
            indicator.remove();
        }
    }

    addMessageToChat(message, sender) {
        const chatMessages = document.getElementById('chat-messages');
        if (!chatMessages) return;
        
        const messageElement = document.createElement('div');
        messageElement.className = `message ${sender}-message`;
        messageElement.innerHTML = `<div class="message-content">${message}</div>`;
        
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    generateMentorResponse(userMessage) {
        const message = userMessage.toLowerCase();
        
        if (message.includes('confused') || message.includes('confusion')) {
            return this.mentorResponses.confusion[Math.floor(Math.random() * this.mentorResponses.confusion.length)];
        } else if (message.includes('parent') || message.includes('family')) {
            return this.mentorResponses.parental_pressure[Math.floor(Math.random() * this.mentorResponses.parental_pressure.length)];
        } else if (message.includes('money') || message.includes('financial') || message.includes('cost')) {
            return this.mentorResponses.financial_concerns[Math.floor(Math.random() * this.mentorResponses.financial_concerns.length)];
        } else {
            return this.mentorResponses.motivation[Math.floor(Math.random() * this.mentorResponses.motivation.length)];
        }
    }

    showUpgradePrompt() {
        const upgradePrompt = document.querySelector('.upgrade-prompt');
        if (upgradePrompt) {
            upgradePrompt.style.display = 'block';
        }
    }

    showUpgradeModal() {
        const modal = document.getElementById('upgrade-modal');
        if (modal) {
            modal.classList.remove('hidden');
        }
    }

    hideUpgradeModal() {
        const modal = document.getElementById('upgrade-modal');
        if (modal) {
            modal.classList.add('hidden');
        }
    }

    updateDashboard() {
        // Update streak with animation
        const streakElement = document.querySelector('.streak-number');
        if (streakElement) {
            streakElement.textContent = this.userData.progress.streak;
        }
        
        // Update tasks completed
        const tasksElement = document.querySelector('.summary-stats .stat:first-child .stat-value');
        if (tasksElement) {
            tasksElement.textContent = this.userData.progress.tasksCompleted;
        }
        
        // Update goals achieved
        const goalsElement = document.querySelector('.summary-stats .stat:last-child .stat-value');
        if (goalsElement) {
            goalsElement.textContent = this.userData.progress.goalsAchieved;
        }
        
        // Update skill progress with animation
        Object.entries(this.userData.progress.skillProgress).forEach(([skill, progress], index) => {
            const skillBar = document.querySelectorAll('.skill-bar')[index];
            if (skillBar) {
                const nameElement = skillBar.querySelector('.skill-name');
                const fillElement = skillBar.querySelector('.skill-fill');
                if (nameElement) nameElement.textContent = skill;
                if (fillElement) {
                    setTimeout(() => {
                        fillElement.style.width = `${progress}%`;
                    }, index * 200);
                }
            }
        });
    }

    showBottomNav() {
        const bottomNav = document.getElementById('bottom-nav');
        if (bottomNav) {
            bottomNav.style.display = 'flex';
        }
    }

    updateNavigation(activeScreen) {
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
        });
        
        const activeItem = document.querySelector(`[data-screen="${activeScreen}"]`);
        if (activeItem) {
            activeItem.classList.add('active');
        }
    }

    loadUserData() {
        try {
            const saved = localStorage.getItem('untrapUserData');
            if (saved) {
                const savedData = JSON.parse(saved);
                this.userData = { ...this.userData, ...savedData };
                console.log('💾 User data loaded from localStorage');
            }
        } catch (error) {
            console.error('❌ Error loading user data:', error);
        }
    }

    saveUserData() {
        try {
            localStorage.setItem('untrapUserData', JSON.stringify(this.userData));
        } catch (error) {
            console.error('❌ Error saving user data:', error);
        }
    }

    startAutoSave() {
        setInterval(() => {
            this.saveUserData();
        }, 30000); // Save every 30 seconds
    }

    // Load assessment data
    loadAssessmentData() {
        return {
            phase1_interests: [
                {id: 1, question: "Do you prefer working with people or working with data/systems?", type: "scale", options: ["People", "Neutral", "Data/Systems"]},
                {id: 2, question: "Which activities energize you most?", type: "multiple", options: ["Creative problem solving", "Analyzing information", "Helping others", "Building/Creating things"]},
                {id: 3, question: "In group projects, you naturally tend to:", type: "single", options: ["Lead the team", "Contribute ideas", "Handle research", "Manage details"]},
                {id: 4, question: "Which work environment appeals to you?", type: "single", options: ["Startup (fast-paced, uncertain)", "Corporate (structured, stable)", "Remote (flexible, independent)", "Creative agency (collaborative, dynamic)"]},
                {id: 5, question: "How do you prefer to learn new things?", type: "multiple", options: ["Hands-on practice", "Reading/Research", "Video tutorials", "Learning from others"]},
                {id: 6, question: "What motivates you most in work?", type: "single", options: ["Financial rewards", "Recognition", "Making impact", "Learning new skills"]},
                {id: 7, question: "How do you handle stress?", type: "single", options: ["Talk to others", "Work alone", "Take breaks", "Push through"]},
                {id: 8, question: "What's your ideal work schedule?", type: "single", options: ["9-5 routine", "Flexible hours", "Night shifts", "Project-based"]},
                {id: 9, question: "Which describes you best?", type: "single", options: ["Big picture thinker", "Detail-oriented", "Both equally", "Depends on situation"]},
                {id: 10, question: "How do you make decisions?", type: "single", options: ["Quick and intuitive", "Thorough research", "Ask others", "Trial and error"]},
                {id: 11, question: "What energizes you more?", type: "single", options: ["Solving problems", "Creating things", "Helping people", "Organizing systems"]},
                {id: 12, question: "Your ideal team size?", type: "single", options: ["Work alone", "Small team (2-5)", "Medium team (6-15)", "Large team (15+)"]},
                {id: 13, question: "How do you prefer feedback?", type: "single", options: ["Direct and immediate", "Constructive and detailed", "Public recognition", "Private discussion"]},
                {id: 14, question: "What's your risk tolerance?", type: "scale", options: ["Risk-averse", "Moderate", "High-risk taker"]},
                {id: 15, question: "Which industry interests you most?", type: "single", options: ["Technology", "Healthcare", "Finance", "Creative/Media", "Education", "Other"]}
            ],
            phase2_skills: [
                {id: 1, question: "Rate your comfort level with technology:", type: "scale", options: ["Beginner", "Intermediate", "Advanced"]},
                {id: 2, question: "Which subjects did/do you perform best in?", type: "multiple", options: ["Mathematics", "Science", "Languages", "Social Studies", "Arts", "Physical Education"]},
                {id: 3, question: "What extracurricular activities have you been involved in?", type: "multiple", options: ["Sports", "Music/Dance", "Debate/Public Speaking", "Coding/Tech", "Social Service", "Art/Design"]},
                {id: 4, question: "People often ask you for help with:", type: "multiple", options: ["Solving problems", "Understanding concepts", "Making decisions", "Creative ideas", "Technical issues", "Emotional support"]},
                {id: 5, question: "Your strongest skill area:", type: "single", options: ["Communication", "Analytics", "Creativity", "Leadership", "Technical skills", "Problem-solving"]},
                {id: 6, question: "How quickly do you learn new software?", type: "scale", options: ["Very slowly", "Average pace", "Very quickly"]},
                {id: 7, question: "Your presentation skills:", type: "scale", options: ["Need improvement", "Average", "Excellent"]},
                {id: 8, question: "Writing and communication:", type: "scale", options: ["Struggle with it", "Decent", "Very strong"]},
                {id: 9, question: "Mathematical problem-solving:", type: "scale", options: ["Challenging", "Manageable", "Love it"]},
                {id: 10, question: "Creative projects you've done:", type: "multiple", options: ["Design work", "Writing", "Video/Photography", "Music", "None", "Other"]},
                {id: 11, question: "Leadership experience:", type: "single", options: ["None", "School projects", "Club/Society", "Work/Internship", "Personal projects"]},
                {id: 12, question: "Learning style preference:", type: "single", options: ["Visual learner", "Auditory learner", "Hands-on learner", "Reading/Writing"]}
            ],
            phase3_constraints: [
                {id: 1, question: "What is your family's financial situation?", type: "single", options: ["Very comfortable", "Comfortable", "Middle class", "Tight budget", "Struggling financially"]},
                {id: 2, question: "How much can your family invest in your education/career?", type: "single", options: ["More than ₹10L", "₹5-10L", "₹2-5L", "₹1-2L", "Less than ₹1L"]},
                {id: 3, question: "What are your parents' expectations?", type: "multiple", options: ["Engineering degree", "Medical degree", "Government job", "Traditional business", "Family business", "They support my choice"]},
                {id: 4, question: "How much time can you dedicate to skill development daily?", type: "single", options: ["Less than 30 mins", "30 mins - 1 hour", "1-2 hours", "2-3 hours", "More than 3 hours"]},
                {id: 5, question: "Your geographic mobility:", type: "single", options: ["Can't relocate", "Within state only", "Anywhere in India", "Open to international"]},
                {id: 6, question: "Family pressure level:", type: "scale", options: ["No pressure", "Some pressure", "High pressure"]},
                {id: 7, question: "Educational background gaps:", type: "multiple", options: ["English proficiency", "Technical skills", "Communication", "Math/Science", "None"]},
                {id: 8, question: "Timeline pressure:", type: "single", options: ["Must earn immediately", "Within 1 year", "2-3 years flexible", "No rush"]},
                {id: 9, question: "Support system:", type: "multiple", options: ["Family support", "Friends/Peers", "Mentors", "Online communities", "Limited support"]},
                {id: 10, question: "Biggest concern:", type: "single", options: ["Job security", "Salary expectations", "Family approval", "Skill development", "Competition"]}
            ],
            phase4_goals: [
                {id: 1, question: "How satisfied are you with your current path?", type: "scale", options: ["Very unsatisfied", "Neutral", "Very satisfied"]},
                {id: 2, question: "What's your primary career goal?", type: "single", options: ["Financial security", "Creative fulfillment", "Making impact", "Work-life balance", "Recognition/Status"]},
                {id: 3, question: "When do you want to start earning?", type: "single", options: ["Immediately", "Within 6 months", "1-2 years", "After completing education", "No rush"]},
                {id: 4, question: "What's your biggest career fear?", type: "single", options: ["Disappointing parents", "Financial instability", "Wrong career choice", "Competition", "Lack of opportunities"]},
                {id: 5, question: "Ideal work-life balance:", type: "single", options: ["Work is life", "Slight work focus", "Equal balance", "Life focused", "Flexible as needed"]},
                {id: 6, question: "Long-term vision (10 years):", type: "single", options: ["Senior professional", "Entrepreneur", "Expert/Specialist", "Leader/Manager", "Still figuring out"]},
                {id: 7, question: "Success measurement:", type: "single", options: ["Money earned", "Impact created", "Skills mastered", "Recognition received", "Happiness level"]},
                {id: 8, question: "Readiness for change:", type: "scale", options: ["Not ready", "Somewhat ready", "Completely ready"]}
            ]
        };
    }

    loadCareersData() {
        return [
            {id: 1, name: "UX Designer", growth: "Very High", salary: "₹6-12L", skills: ["Design Thinking", "Figma", "User Research"], description: "Create intuitive digital experiences", pathway: "Learn design tools → Build portfolio → Internships → Full-time role", dayInLife: "Research users, create wireframes, collaborate with developers, test designs"},
            {id: 2, name: "Data Scientist", growth: "Excellent", salary: "₹8-15L", skills: ["Python", "Machine Learning", "Statistics"], description: "Extract insights from data to drive decisions", pathway: "Learn programming → Statistics courses → ML projects → Industry role", dayInLife: "Analyze datasets, build models, present insights, collaborate with teams"},
            {id: 3, name: "Digital Marketer", growth: "High", salary: "₹4-8L", skills: ["Social Media", "Analytics", "Content Creation"], description: "Promote brands and products online", pathway: "Learn digital tools → Create campaigns → Certifications → Marketing role", dayInLife: "Plan campaigns, create content, analyze metrics, manage social media"},
            {id: 4, name: "Full Stack Developer", growth: "Excellent", salary: "₹7-14L", skills: ["React", "Node.js", "Databases"], description: "Build complete web applications", pathway: "Learn coding → Build projects → Open source → Developer job", dayInLife: "Write code, debug issues, deploy applications, collaborate with team"},
            {id: 5, name: "Product Manager", growth: "Very High", salary: "₹12-25L", skills: ["Strategy", "Analytics", "Communication"], description: "Guide product development and strategy", pathway: "Business understanding → Tech knowledge → PM courses → Product role", dayInLife: "Define features, analyze metrics, coordinate teams, plan roadmaps"},
            {id: 6, name: "Content Creator", growth: "High", salary: "₹3-10L", skills: ["Writing", "Video Editing", "Social Media"], description: "Create engaging content across platforms", pathway: "Choose niche → Create content → Build audience → Monetize", dayInLife: "Research topics, create content, edit videos, engage with audience"}
        ];
    }

    loadTrapsData() {
        return [
            {id: 1, name: "Parental Pressure Trap", description: "You're choosing careers to meet family expectations rather than your interests", indicators: ["High family expectation scores", "Low personal interest alignment"], escape_strategies: ["Have honest conversations with parents", "Show alternative career success stories", "Create compromise career paths", "Demonstrate financial viability of preferred choices"], success_story: "Rahul convinced his parents to support his design career by showing them successful Indian designers earning well."},
            {id: 2, name: "Limited Awareness Trap", description: "You only know about traditional career options", indicators: ["Unfamiliarity with new-age careers", "Only considering engineering/medicine/government"], escape_strategies: ["Research emerging career fields", "Connect with professionals in new industries", "Attend career fairs and workshops", "Follow industry leaders on social media"], success_story: "Priya discovered UX design through YouTube and now works at a top tech company."},
            {id: 3, name: "Financial Fear Trap", description: "Money concerns are blocking your dream career choices", indicators: ["High cost sensitivity", "Avoiding expensive career paths"], escape_strategies: ["Research scholarship opportunities", "Look into affordable skill development options", "Find alternative pathways to same careers", "Create financial plans with realistic timelines"], success_story: "Amit learned coding through free resources and landed a developer job within 8 months."},
            {id: 4, name: "Analysis Paralysis Trap", description: "Too much thinking and not enough action", indicators: ["Frequently changing preferences", "Unable to make decisions"], escape_strategies: ["Start with small experiments", "Set decision deadlines", "Talk to career counselors", "Take personality assessments"], success_story: "Sneha stopped overthinking and started a marketing internship, which clarified her career direction."}
        ];
    }

    loadMentorData() {
        return {
            greetings: ["Hello! I'm Saarthi, your AI career mentor. I'm here to help you navigate your career journey. What's on your mind today?", "Namaste! Ready to work on your career goals today?", "Hi there! How are you feeling about your career path today?"],
            confusion: ["It's completely normal to feel confused about your career. Many students go through this. Let's break it down step by step.", "Career confusion is actually a sign that you're thinking deeply about your future. That's a good thing!", "I understand the pressure you're feeling. Let's work together to bring some clarity."],
            parental_pressure: ["Family expectations can be overwhelming. Remember, your parents want what's best for you, but they might not know all the career options available today.", "It's tough when family expectations don't align with your interests. Let's find a way to bridge this gap.", "Your parents' concerns about financial stability are valid. Let's show them how your preferred career can also be financially rewarding."],
            motivation: ["You're making great progress! Every small step counts towards your bigger career goals.", "Remember why you started this journey. Your future self will thank you for the effort you're putting in today.", "It's okay to have doubts. What matters is that you keep moving forward, even if it's just a small step each day."],
            financial_concerns: ["Financial planning is crucial for career success. Let's create a realistic budget for your career goals.", "There are many ways to pursue your dream career without breaking the bank. Let's explore affordable options.", "Your financial situation doesn't define your career possibilities. Let's find creative solutions."]
        };
    }

    loadRoadmapData() {
        return {
            ux_designer: {
                daily_tasks: ["Practice design tools (Figma/Sketch) for 45 minutes", "Study one design principle", "Analyze one app/website's user experience", "Sketch wireframes for 30 minutes"],
                weekly_goals: ["Complete one design course module", "Create one UI design project", "Get feedback on your designs", "Read about current design trends"],
                monthly_milestones: ["Build a portfolio piece", "Complete a design certification", "Network with designers", "Apply for design internships"],
                skills_to_develop: ["Design Thinking", "Figma/Sketch", "User Research", "Prototyping", "Visual Design", "Information Architecture"]
            },
            data_scientist: {
                daily_tasks: ["Practice Python coding for 1 hour", "Solve one data analysis problem", "Read data science articles", "Work on a personal data project"],
                weekly_goals: ["Complete one online course module", "Analyze a real dataset", "Learn a new Python library", "Write about your learnings"],
                monthly_milestones: ["Finish a data science project", "Get certified in a tool/technology", "Network with data professionals", "Apply for data roles"],
                skills_to_develop: ["Python", "Statistics", "Machine Learning", "SQL", "Data Visualization", "Business Understanding"]
            }
        };
    }
}

// Initialize the app
const initializeApp = () => {
    console.log('🌟 Starting UNTRAP Career Companion...');
    
    try {
        const app = new UntrapApp();
        app.init();
        app.startAutoSave();
        
        // Make app globally accessible for debugging
        window.untrapApp = app;
        
        console.log('🎉 UNTRAP app loaded successfully!');
    } catch (error) {
        console.error('💥 Failed to initialize app:', error);
        
        // Fallback error display
        document.body.innerHTML = `
            <div style="padding: 20px; text-align: center; font-family: Arial, sans-serif;">
                <h2>Oops! Something went wrong</h2>
                <p>We're having trouble loading the UNTRAP app. Please refresh the page to try again.</p>
                <button onclick="location.reload()" style="padding: 10px 20px; background: #3D5AFE; color: white; border: none; border-radius: 5px; cursor: pointer;">
                    Refresh Page
                </button>
            </div>
        `;
    }
};

// Multiple initialization approaches for maximum compatibility
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
}

// Fallback initialization
window.addEventListener('load', () => {
    if (!window.untrapApp) {
        console.log('🔄 Fallback initialization...');
        initializeApp();
    }
});

// Global error handler
window.addEventListener('error', (e) => {
    console.error('🚨 Global error:', e.error);
});

// Handle page visibility changes
document.addEventListener('visibilitychange', () => {
    if (!document.hidden && window.untrapApp) {
        window.untrapApp.saveUserData();
    }
});

// Handle page unload
window.addEventListener('beforeunload', () => {
    if (window.untrapApp) {
        window.untrapApp.saveUserData();
    }
});

// Service Worker registration for PWA features
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}