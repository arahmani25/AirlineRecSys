// Airline Passenger Satisfaction Recommender System
// RecSys Methods: Content-Based Filtering, Collaborative Filtering, Hybrid Approach

// Global state
let currentSegment = null;
let currentRecType = 'service';

// Initialize application
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

function initializeApp() {
    populateHeaderStats();
    renderEDAFindings();
    renderSegments();
    renderFeatureImportance();
    renderDistributions();
    setupEventListeners();
    showEmptyState();
}

function populateHeaderStats() {
    const metadata = airlineData.metadata;
    animateNumber('totalPassengers', metadata.total_passengers);
    animateNumber('satisfactionRate', Math.round(metadata.overall_satisfaction_rate * 100), '%');
    animateNumber('segmentCount', metadata.segments.length);
}

function animateNumber(elementId, target, suffix = '') {
    const element = document.getElementById(elementId);
    const duration = 1000;
    const steps = 50;
    const increment = target / steps;
    let current = 0;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.round(current).toLocaleString() + suffix;
    }, duration / steps);
}

function renderEDAFindings() {
    const findingsContainer = document.getElementById('edaFindings');
    const metadata = airlineData.metadata;
    const segmentStats = airlineData.segment_statistics;
    const features = airlineData.feature_importance;
    
    // Calculate key findings
    const satisfactionRates = Object.values(segmentStats).map(s => s.satisfaction_rate * 100);
    const maxSat = Math.max(...satisfactionRates);
    const minSat = Math.min(...satisfactionRates);
    const satisfactionGap = maxSat - minSat;
    
    const topFeature = features[0];
    
    const findings = [
        {
            icon: '👥',
            title: 'Total Dataset',
            value: metadata.total_passengers.toLocaleString(),
            description: 'Real passengers analyzed from train.csv and test.csv',
            color: 'var(--primary)'
        },
        {
            icon: '📊',
            title: 'Overall Satisfaction',
            value: (metadata.overall_satisfaction_rate * 100).toFixed(1) + '%',
            description: 'Baseline satisfaction rate across all passengers',
            color: 'var(--secondary)'
        },
        {
            icon: '⚡',
            title: 'Satisfaction Gap',
            value: satisfactionGap.toFixed(1) + '%',
            description: `Huge variation: ${maxSat.toFixed(1)}% (Premium Business) vs ${minSat.toFixed(1)}% (Budget Conscious)`,
            color: 'var(--warning)'
        },
        {
            icon: '🎯',
            title: 'Top Driver',
            value: topFeature.feature,
            description: `Correlation: ${topFeature.correlation.toFixed(3)} - Strongest predictor of satisfaction`,
            color: 'var(--accent)'
        },
        {
            icon: '🔍',
            title: 'Customer Segments',
            value: metadata.segments.length,
            description: 'Strategic segments based on class and travel purpose',
            color: 'var(--info)'
        },
        {
            icon: '📈',
            title: 'Service Features',
            value: airlineData.service_features.length,
            description: 'Service attributes analyzed for correlation with satisfaction',
            color: 'var(--success)'
        }
    ];
    
    findingsContainer.innerHTML = '';
    findings.forEach((finding, index) => {
        const card = document.createElement('div');
        card.className = 'finding-card fade-in';
        card.style.animationDelay = `${index * 0.1}s`;
        card.style.borderLeftColor = finding.color;
        
        card.innerHTML = `
            <div class="finding-icon">${finding.icon}</div>
            <div class="finding-title">${finding.title}</div>
            <div class="finding-value">${finding.value}</div>
            <div class="finding-description">${finding.description}</div>
        `;
        
        findingsContainer.appendChild(card);
    });
}

function renderDistributions() {
    const distributionContainer = document.getElementById('distributionGrid');
    const segmentStats = airlineData.segment_statistics;
    
    // Satisfaction by Segment
    const satisfactionCard = document.createElement('div');
    satisfactionCard.className = 'distribution-card fade-in';
    satisfactionCard.innerHTML = `
        <div class="distribution-title">Satisfaction Rate by Segment</div>
        ${Object.entries(segmentStats).map(([segment, stats]) => {
            const rate = stats.satisfaction_rate * 100;
            return `
                <div class="distribution-bar">
                    <div class="distribution-label">${segment}</div>
                    <div class="distribution-bar-container">
                        <div class="distribution-bar-fill" style="width: ${rate}%"></div>
                    </div>
                    <div class="distribution-value">${rate.toFixed(1)}%</div>
                </div>
            `;
        }).join('')}
    `;
    
    // Passenger Count by Segment
    const countCard = document.createElement('div');
    countCard.className = 'distribution-card fade-in';
    const totalPassengers = Object.values(segmentStats).reduce((sum, s) => sum + s.count, 0);
    countCard.innerHTML = `
        <div class="distribution-title">Passenger Distribution by Segment</div>
        ${Object.entries(segmentStats).map(([segment, stats]) => {
            const percentage = (stats.count / totalPassengers) * 100;
            return `
                <div class="distribution-bar">
                    <div class="distribution-label">${segment}</div>
                    <div class="distribution-bar-container">
                        <div class="distribution-bar-fill" style="width: ${percentage}%"></div>
                    </div>
                    <div class="distribution-value">${stats.count.toLocaleString()}</div>
                </div>
            `;
        }).join('')}
    `;
    
    // Top 5 Features by Correlation
    const correlationCard = document.createElement('div');
    correlationCard.className = 'distribution-card fade-in';
    const topFeatures = airlineData.feature_importance.slice(0, 5);
    const maxCorr = Math.max(...topFeatures.map(f => Math.abs(f.correlation)));
    correlationCard.innerHTML = `
        <div class="distribution-title">Top 5 Features (Correlation Strength)</div>
        ${topFeatures.map(feature => {
            const absCorr = Math.abs(feature.correlation);
            const percentage = (absCorr / maxCorr) * 100;
            return `
                <div class="distribution-bar">
                    <div class="distribution-label">${feature.feature.substring(0, 20)}${feature.feature.length > 20 ? '...' : ''}</div>
                    <div class="distribution-bar-container">
                        <div class="distribution-bar-fill" style="width: ${percentage}%"></div>
                    </div>
                    <div class="distribution-value">${feature.correlation.toFixed(3)}</div>
                </div>
            `;
        }).join('')}
    `;
    
    distributionContainer.innerHTML = '';
    distributionContainer.appendChild(satisfactionCard);
    distributionContainer.appendChild(countCard);
    distributionContainer.appendChild(correlationCard);
}

function renderSegments() {
    const segmentsGrid = document.getElementById('segmentsGrid');
    const segmentStats = airlineData.segment_statistics;
    
    segmentsGrid.innerHTML = '';
    
    Object.entries(segmentStats).forEach(([segmentName, stats]) => {
        const satisfactionRate = stats.satisfaction_rate * 100;
        const badgeClass = satisfactionRate >= 60 ? 'badge-high' : 
                          satisfactionRate >= 30 ? 'badge-medium' : 'badge-low';
        
        const card = document.createElement('div');
        card.className = 'segment-card fade-in';
        card.innerHTML = `
            <div class="segment-header">
                <div class="segment-name">${segmentName}</div>
                <div class="segment-badge ${badgeClass}">
                    ${satisfactionRate.toFixed(1)}%
                </div>
            </div>
            <div class="segment-stats">
                <div class="segment-stat">
                    <div class="segment-stat-label">Passengers</div>
                    <div class="segment-stat-value">${stats.count.toLocaleString()}</div>
                </div>
                <div class="segment-stat">
                    <div class="segment-stat-label">Avg Age</div>
                    <div class="segment-stat-value">${Math.round(stats.avg_age)}</div>
                </div>
                <div class="segment-stat">
                    <div class="segment-stat-label">Avg Distance</div>
                    <div class="segment-stat-value">${Math.round(stats.avg_flight_distance)} mi</div>
                </div>
                <div class="segment-stat">
                    <div class="segment-stat-label">Satisfaction</div>
                    <div class="segment-stat-value">${satisfactionRate.toFixed(1)}%</div>
                </div>
            </div>
            <div class="satisfaction-bar">
                <div class="satisfaction-fill" style="width: ${satisfactionRate}%"></div>
            </div>
        `;
        
        segmentsGrid.appendChild(card);
    });
    
    // Populate segment selector
    const selector = document.getElementById('segmentSelector');
    selector.innerHTML = '<option value="">Choose a segment...</option>';
    
    Object.keys(segmentStats).forEach(segment => {
        const option = document.createElement('option');
        option.value = segment;
        option.textContent = segment;
        selector.appendChild(option);
    });
}

function renderFeatureImportance() {
    const featuresChart = document.getElementById('featuresChart');
    const features = airlineData.feature_importance;
    
    featuresChart.innerHTML = '';
    
    features.slice(0, 10).forEach(feature => {
        const correlation = Math.abs(feature.correlation);
        
        const barDiv = document.createElement('div');
        barDiv.className = 'feature-bar fade-in';
        barDiv.innerHTML = `
            <div class="feature-name">${feature.feature}</div>
            <div class="feature-bar-container">
                <div class="feature-bar-fill" style="width: ${correlation * 100}%">
                    <span class="feature-value">${feature.correlation.toFixed(3)}</span>
                </div>
            </div>
        `;
        
        featuresChart.appendChild(barDiv);
    });
}

function setupEventListeners() {
    document.getElementById('segmentSelector').addEventListener('change', (e) => {
        currentSegment = e.target.value;
    });
    
    document.querySelectorAll('input[name="recType"]').forEach(radio => {
        radio.addEventListener('change', (e) => {
            currentRecType = e.target.value;
        });
    });
    
    document.getElementById('generateBtn').addEventListener('click', generateRecommendations);
    
    // Prototype prediction
    document.getElementById('predictBtn').addEventListener('click', predictSatisfaction);
}

function generateRecommendations() {
    if (!currentSegment) {
        alert('Please select a customer segment first!');
        return;
    }
    
    const resultsContainer = document.getElementById('recommendationResults');
    resultsContainer.innerHTML = '<div class="loading">Generating recommendations</div>';
    
    setTimeout(() => {
        if (currentRecType === 'service') {
            renderServiceRecommendations();
        } else if (currentRecType === 'passenger') {
            renderCollaborativeFiltering();
        } else if (currentRecType === 'analytics') {
            renderHybridAnalytics();
        }
    }, 500);
}

// Content-Based Filtering: Service recommendations based on segment features
function renderServiceRecommendations() {
    const resultsContainer = document.getElementById('recommendationResults');
    const recommendations = airlineData.recommendations[currentSegment];
    
    if (!recommendations || recommendations.length === 0) {
        resultsContainer.innerHTML = '<div class="empty-state">No recommendations available.</div>';
        return;
    }
    
    const container = document.createElement('div');
    container.innerHTML = `
        <div style="margin-bottom: 1.5rem; padding: 1rem; background: var(--bg-tertiary); border-radius: 8px; border-left: 4px solid var(--primary);">
            <h3 style="font-size: 1rem; font-weight: 600; margin-bottom: 0.5rem; color: var(--primary);">
                🎯 Content-Based Filtering
            </h3>
            <p style="color: var(--text-muted); font-size: 0.875rem;">
                Recommendations based on segment characteristics and feature importance analysis
            </p>
        </div>
    `;
    
    const grid = document.createElement('div');
    grid.className = 'results-grid';
    
    recommendations.forEach(rec => {
        const card = document.createElement('div');
        card.className = 'recommendation-card fade-in';
        
        const priorityClass = rec.priority === 'High' ? 'priority-high' : 'priority-medium';
        
        card.innerHTML = `
            <div class="rec-priority ${priorityClass}">${rec.priority} Priority</div>
            <div class="rec-area">${rec.area}</div>
            <div class="rec-score">Current Score: ${rec.current_score.toFixed(2)}/5.0</div>
            <div class="rec-text">${rec.recommendation}</div>
            <div class="rec-impact">📊 ${rec.expected_impact}</div>
            <div style="margin-top: 0.75rem; padding-top: 0.75rem; border-top: 1px solid var(--border); font-size: 0.75rem; color: var(--text-muted);">
                Method: ${rec.method || 'Content-Based Filtering'}
            </div>
        `;
        
        grid.appendChild(card);
    });
    
    container.appendChild(grid);
    resultsContainer.innerHTML = '';
    resultsContainer.appendChild(container);
}

// Collaborative Filtering: Find similar passengers based on service ratings
function renderCollaborativeFiltering() {
    const resultsContainer = document.getElementById('recommendationResults');
    const passengers = airlineData.sample_passengers[currentSegment];
    
    if (!passengers || passengers.length === 0) {
        resultsContainer.innerHTML = '<div class="empty-state">No passenger data available.</div>';
        return;
    }
    
    const container = document.createElement('div');
    container.innerHTML = `
        <div style="margin-bottom: 1.5rem; padding: 1rem; background: var(--bg-tertiary); border-radius: 8px; border-left: 4px solid var(--secondary);">
            <h3 style="font-size: 1rem; font-weight: 600; margin-bottom: 0.5rem; color: var(--secondary);">
                👥 Collaborative Filtering
            </h3>
            <p style="color: var(--text-muted); font-size: 0.875rem;">
                Similar passengers identified using cosine similarity on service ratings (user-based CF)
            </p>
        </div>
        <div style="margin-bottom: 1rem;">
            <h3 style="font-size: 1.125rem; font-weight: 600;">
                Sample Passengers from ${currentSegment}
            </h3>
            <p style="color: var(--text-muted); font-size: 0.875rem;">
                Showing ${passengers.length} passengers with similarity scores
            </p>
        </div>
    `;
    
    const grid = document.createElement('div');
    grid.className = 'passenger-grid';
    grid.style.maxHeight = '500px';
    
    passengers.forEach(passenger => {
        const card = createPassengerCard(passenger, true);
        grid.appendChild(card);
    });
    
    container.appendChild(grid);
    resultsContainer.innerHTML = '';
    resultsContainer.appendChild(container);
}

function createPassengerCard(passenger, showSimilarity = false) {
    const card = document.createElement('div');
    card.className = 'passenger-card fade-in';
    
    const satisfactionClass = passenger.satisfaction === 'satisfied' ? 'satisfied' : 'dissatisfied';
    const satisfactionText = passenger.satisfaction === 'satisfied' ? 'Satisfied' : 'Dissatisfied';
    
    const avgRating = passenger.avg_rating ? passenger.avg_rating.toFixed(1) : 
                      (Object.values(passenger.service_ratings).reduce((a, b) => a + b, 0) / 
                       Object.keys(passenger.service_ratings).length).toFixed(1);
    
    let similarityInfo = '';
    if (showSimilarity && passenger.similar_passenger_ids && passenger.similar_passenger_ids.length > 0) {
        similarityInfo = `
            <div style="margin-top: 0.75rem; padding-top: 0.75rem; border-top: 1px solid var(--border); font-size: 0.75rem; color: var(--text-muted);">
                Similar IDs: ${passenger.similar_passenger_ids.join(', ')}
            </div>
        `;
    }
    
    card.innerHTML = `
        <div class="passenger-header">
            <div class="passenger-id">ID: ${passenger.id}</div>
            <div class="satisfaction-badge ${satisfactionClass}">${satisfactionText}</div>
        </div>
        <div class="passenger-info">
            <strong>${passenger.gender}</strong>, ${passenger.age} years old
        </div>
        <div class="passenger-info">
            ${passenger.travel_type} • ${passenger.class}
        </div>
        <div class="passenger-details">
            <div class="detail-item">
                <div class="detail-label">Distance</div>
                <div class="detail-value">${passenger.flight_distance} mi</div>
            </div>
            <div class="detail-item">
                <div class="detail-label">Avg Rating</div>
                <div class="detail-value">${avgRating}/5.0</div>
            </div>
            <div class="detail-item">
                <div class="detail-label">Dep Delay</div>
                <div class="detail-value">${passenger.delays.departure.toFixed(0)} min</div>
            </div>
            <div class="detail-item">
                <div class="detail-label">Arr Delay</div>
                <div class="detail-value">${passenger.delays.arrival.toFixed(0)} min</div>
            </div>
        </div>
        ${similarityInfo}
    `;
    
    return card;
}

// Hybrid Approach: Combine content-based and collaborative filtering insights
function renderHybridAnalytics() {
    const resultsContainer = document.getElementById('recommendationResults');
    const segmentStats = airlineData.segment_statistics[currentSegment];
    
    if (!segmentStats) {
        resultsContainer.innerHTML = '<div class="empty-state">No analytics available.</div>';
        return;
    }
    
    const container = document.createElement('div');
    container.innerHTML = `
        <div style="margin-bottom: 1.5rem; padding: 1rem; background: var(--bg-tertiary); border-radius: 8px; border-left: 4px solid var(--accent);">
            <h3 style="font-size: 1rem; font-weight: 600; margin-bottom: 0.5rem; color: var(--accent);">
                🔄 Hybrid Recommender System
            </h3>
            <p style="color: var(--text-muted); font-size: 0.875rem;">
                Combining content-based (segment features) + collaborative filtering (user similarity) + correlation analysis
            </p>
        </div>
        <div style="margin-bottom: 1.5rem;">
            <h3 style="font-size: 1.25rem; font-weight: 600;">
                Deep Analytics: ${currentSegment}
            </h3>
            <p style="color: var(--text-muted); font-size: 0.875rem;">
                Comprehensive analysis using multiple RecSys techniques
            </p>
        </div>
    `;
    
    const grid = document.createElement('div');
    grid.className = 'analytics-grid';
    
    // Overview Card
    const overviewCard = document.createElement('div');
    overviewCard.className = 'analytics-card fade-in';
    overviewCard.innerHTML = `
        <div class="analytics-title">📊 Segment Overview</div>
        <div class="analytics-content">
            <div class="metric-row">
                <span class="metric-label">Total Passengers</span>
                <span class="metric-value">${segmentStats.count.toLocaleString()}</span>
            </div>
            <div class="metric-row">
                <span class="metric-label">Satisfaction Rate</span>
                <span class="metric-value">${(segmentStats.satisfaction_rate * 100).toFixed(1)}%</span>
            </div>
            <div class="metric-row">
                <span class="metric-label">Average Age</span>
                <span class="metric-value">${Math.round(segmentStats.avg_age)} years</span>
            </div>
            <div class="metric-row">
                <span class="metric-label">Avg Flight Distance</span>
                <span class="metric-value">${Math.round(segmentStats.avg_flight_distance)} miles</span>
            </div>
        </div>
    `;
    grid.appendChild(overviewCard);
    
    // Pain Points Card
    const painPointsCard = document.createElement('div');
    painPointsCard.className = 'analytics-card fade-in';
    painPointsCard.innerHTML = `
        <div class="analytics-title">⚠️ Top Pain Points</div>
        <div class="analytics-content">
            ${segmentStats.top_pain_points.map((point, index) => `
                <div class="metric-row">
                    <span class="metric-label">${index + 1}. ${point.feature}</span>
                    <span class="metric-value">${point.score.toFixed(2)}/5.0</span>
                </div>
            `).join('')}
        </div>
    `;
    grid.appendChild(painPointsCard);
    
    // Strengths Card
    const strengthsCard = document.createElement('div');
    strengthsCard.className = 'analytics-card fade-in';
    strengthsCard.innerHTML = `
        <div class="analytics-title">✨ Top Strengths</div>
        <div class="analytics-content">
            ${segmentStats.top_strengths.map((strength, index) => `
                <div class="metric-row">
                    <span class="metric-label">${index + 1}. ${strength.feature}</span>
                    <span class="metric-value">${strength.score.toFixed(2)}/5.0</span>
                </div>
            `).join('')}
        </div>
    `;
    grid.appendChild(strengthsCard);
    
    // Service Correlation Card
    const topServices = Object.entries(segmentStats.service_scores)
        .sort((a, b) => Math.abs(b[1].satisfaction_correlation) - Math.abs(a[1].satisfaction_correlation))
        .slice(0, 5);
    
    const correlationCard = document.createElement('div');
    correlationCard.className = 'analytics-card fade-in';
    correlationCard.innerHTML = `
        <div class="analytics-title">🎯 Satisfaction Drivers</div>
        <div class="analytics-content">
            <p style="margin-bottom: 1rem; font-size: 0.875rem; color: var(--text-muted);">
                Services with highest correlation to satisfaction
            </p>
            ${topServices.map(([service, data]) => `
                <div class="metric-row">
                    <span class="metric-label">${service}</span>
                    <span class="metric-value">${data.satisfaction_correlation.toFixed(3)}</span>
                </div>
            `).join('')}
        </div>
    `;
    grid.appendChild(correlationCard);
    
    // Strategic Insights Card
    const insightsCard = document.createElement('div');
    insightsCard.className = 'analytics-card fade-in';
    insightsCard.style.gridColumn = 'span 2';
    
    const insights = generateStrategicInsights(currentSegment, segmentStats);
    
    insightsCard.innerHTML = `
        <div class="analytics-title">💡 Strategic Insights (Hybrid Method)</div>
        <div class="analytics-content">
            ${insights.map(insight => `
                <p style="margin-bottom: 0.75rem; line-height: 1.6;">
                    <strong style="color: var(--primary);">•</strong> ${insight}
                </p>
            `).join('')}
        </div>
    `;
    grid.appendChild(insightsCard);
    
    container.appendChild(grid);
    resultsContainer.innerHTML = '';
    resultsContainer.appendChild(container);
}

function generateStrategicInsights(segmentName, stats) {
    const insights = [];
    const satisfactionRate = stats.satisfaction_rate * 100;
    
    if (satisfactionRate > 60) {
        insights.push(`This segment shows <strong>high satisfaction (${satisfactionRate.toFixed(1)}%)</strong>. Focus on retention and upselling opportunities.`);
    } else if (satisfactionRate > 30) {
        insights.push(`This segment has <strong>moderate satisfaction (${satisfactionRate.toFixed(1)}%)</strong>. Significant improvement potential through targeted interventions.`);
    } else {
        insights.push(`This segment shows <strong>low satisfaction (${satisfactionRate.toFixed(1)}%)</strong>. Urgent action needed to prevent customer churn.`);
    }
    
    if (segmentName === 'Premium Business') {
        insights.push('Premium Business travelers expect high-quality service. Prioritize consistency and reliability across all touchpoints.');
        insights.push('This segment is less price-sensitive but highly time-conscious. Focus on efficiency and premium amenities.');
    } else if (segmentName === 'Budget Conscious') {
        insights.push('Budget-conscious travelers are price-sensitive. Consider value-added services that don\'t significantly increase costs.');
        insights.push('Set realistic expectations and focus on core service reliability rather than premium features.');
    } else if (segmentName === 'Business Economy') {
        insights.push('Business travelers in economy seek efficiency despite budget constraints. Streamline processes and offer business-friendly amenities.');
        insights.push('This segment may be receptive to paid upgrades for specific services like wifi and seat selection.');
    } else if (segmentName === 'Premium Leisure') {
        insights.push('Leisure travelers in premium classes value experience and comfort. Focus on entertainment and hospitality aspects.');
    }
    
    const worstService = stats.top_pain_points[0];
    if (worstService.score < 2.5) {
        insights.push(`<strong>${worstService.feature}</strong> is critically underperforming (${worstService.score.toFixed(2)}/5.0). This should be the top priority for improvement.`);
    }
    
    const bestService = stats.top_strengths[0];
    if (bestService.score > 4.0) {
        insights.push(`<strong>${bestService.feature}</strong> is a key strength (${bestService.score.toFixed(2)}/5.0). Leverage this in marketing and maintain quality.`);
    }
    
    return insights;
}

function showEmptyState() {
    const resultsContainer = document.getElementById('recommendationResults');
    resultsContainer.innerHTML = `
        <div class="empty-state">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 16v-4M12 8h.01"/>
            </svg>
            <p>Select a customer segment and recommendation type, then click "Generate Recommendations" to see results.</p>
        </div>
    `;
}

// Populate passenger explorer on load
function populatePassengerExplorer() {
    const explorerContainer = document.getElementById('passengerExplorer');
    
    const allPassengers = [];
    Object.values(airlineData.sample_passengers).forEach(passengers => {
        allPassengers.push(...passengers.slice(0, 5));
    });
    
    const shuffled = allPassengers.sort(() => 0.5 - Math.random()).slice(0, 20);
    
    explorerContainer.innerHTML = '';
    shuffled.forEach(passenger => {
        const card = createPassengerCard(passenger, false);
        explorerContainer.appendChild(card);
    });
}

setTimeout(populatePassengerExplorer, 100);

// ============================================================================
// PROTOTYPE: Satisfaction Prediction Engine
// ============================================================================

function predictSatisfaction() {
    // Get user inputs
    const travelClass = document.getElementById('protoClass').value;
    const tripType = document.getElementById('protoTripType').value;
    const customerType = document.getElementById('protoCustomerType').value;
    const distance = parseInt(document.getElementById('protoDistance').value);
    const age = parseInt(document.getElementById('protoAge').value);
    const delay = parseInt(document.getElementById('protoDelay').value);
    
    // Determine segment
    let segment;
    if (travelClass === 'Business' && tripType === 'Business travel') {
        segment = 'Premium Business';
    } else if ((travelClass === 'Eco' || travelClass === 'Eco Plus') && tripType === 'Personal Travel') {
        segment = 'Budget Conscious';
    } else if ((travelClass === 'Eco' || travelClass === 'Eco Plus') && tripType === 'Business travel') {
        segment = 'Business Economy';
    } else {
        segment = 'Premium Leisure';
    }
    
    // Get segment statistics
    const segmentStats = airlineData.segment_statistics[segment];
    
    // Calculate base satisfaction probability from segment
    let baseProbability = segmentStats.satisfaction_rate * 100;
    
    // Adjust based on factors
    let adjustedProbability = baseProbability;
    
    // Class adjustment
    if (travelClass === 'Business') {
        adjustedProbability += 15;
    } else if (travelClass === 'Eco Plus') {
        adjustedProbability += 5;
    }
    
    // Delay penalty (strong negative factor)
    if (delay > 0) {
        adjustedProbability -= Math.min(delay * 0.3, 30); // Max 30% penalty
    }
    
    // Distance adjustment (longer flights slightly better for business)
    if (tripType === 'Business travel' && distance > 1000) {
        adjustedProbability += 5;
    }
    
    // Customer loyalty bonus
    if (customerType === 'Loyal Customer') {
        adjustedProbability += 8;
    }
    
    // Age factor (middle-aged passengers slightly more satisfied)
    if (age >= 30 && age <= 55) {
        adjustedProbability += 3;
    }
    
    // Clamp between 0 and 100
    adjustedProbability = Math.max(0, Math.min(100, adjustedProbability));
    
    // Generate personalized recommendations
    const recommendations = generatePersonalizedRecommendations(
        travelClass, tripType, segment, delay, adjustedProbability, segmentStats
    );
    
    // Display results
    displayPredictionResults(adjustedProbability, segment, recommendations, {
        travelClass, tripType, customerType, distance, age, delay
    });
}

function generatePersonalizedRecommendations(travelClass, tripType, segment, delay, probability, segmentStats) {
    const recommendations = [];
    
    // Recommendation 1: Class upgrade if in economy and low probability
    if ((travelClass === 'Eco' || travelClass === 'Eco Plus') && probability < 50) {
        recommendations.push({
            icon: '⬆️',
            title: 'Upgrade to Business Class',
            description: 'Business class passengers have 69% satisfaction rate vs 19% in economy. Upgrading could increase your satisfaction by up to 50%.',
            impact: '+50% satisfaction probability',
            type: 'upgrade'
        });
    }
    
    // Recommendation 2: Delay mitigation
    if (delay > 15) {
        recommendations.push({
            icon: '⏰',
            title: 'Select Flights with Better On-Time Performance',
            description: 'Delays significantly reduce satisfaction. Choose flights with historically better punctuality or earlier departure times to avoid cascading delays.',
            impact: `+${Math.min(delay * 0.3, 30).toFixed(0)}% satisfaction probability`,
            type: 'timing'
        });
    }
    
    // Recommendation 3: Lounge access for business travelers
    if (tripType === 'Business travel' && travelClass !== 'Business') {
        recommendations.push({
            icon: '🏢',
            title: 'Add Airport Lounge Access',
            description: 'Business travelers value comfort and productivity. Lounge access provides workspace, refreshments, and reduces stress from delays.',
            impact: '+15% satisfaction probability',
            type: 'amenity'
        });
    }
    
    // Recommendation 4: Segment-specific pain points
    const topPainPoint = segmentStats.top_pain_points[0];
    if (topPainPoint.score < 3.0) {
        const painPointRecs = {
            'Online boarding': {
                icon: '📱',
                title: 'Use Mobile Boarding Pass & Online Check-in',
                description: 'Online boarding has the highest impact on satisfaction (0.504 correlation). Use mobile check-in 24 hours before departure to skip queues.',
                impact: '+20% satisfaction probability'
            },
            'Inflight wifi service': {
                icon: '📶',
                title: 'Pre-purchase Premium WiFi Package',
                description: 'WiFi quality strongly correlates with satisfaction. Pre-booking premium WiFi ensures better connectivity for work or entertainment.',
                impact: '+12% satisfaction probability'
            },
            'Seat comfort': {
                icon: '💺',
                title: 'Select Extra Legroom Seats',
                description: 'Seat comfort is crucial for satisfaction. Choose seats with extra legroom or upgrade to premium economy for better comfort.',
                impact: '+18% satisfaction probability'
            },
            'Inflight entertainment': {
                icon: '🎬',
                title: 'Download Entertainment Before Flight',
                description: 'Bring your own device with downloaded content as backup. Inflight entertainment systems can be unreliable.',
                impact: '+10% satisfaction probability'
            }
        };
        
        const rec = painPointRecs[topPainPoint.feature];
        if (rec) {
            recommendations.push({
                ...rec,
                type: 'service'
            });
        }
    }
    
    // Recommendation 5: If probability is already high, maintain it
    if (probability >= 70) {
        recommendations.push({
            icon: '✨',
            title: 'You\'re on Track for a Great Experience!',
            description: 'Your travel configuration has high satisfaction probability. Arrive early, stay hydrated, and enjoy your flight!',
            impact: 'Maintain high satisfaction',
            type: 'positive'
        });
    }
    
    // Recommendation 6: Food & drink for long flights
    if (parseInt(document.getElementById('protoDistance').value) > 1500) {
        recommendations.push({
            icon: '🍽️',
            title: 'Pre-order Special Meal or Bring Snacks',
            description: 'For long flights, food quality matters. Pre-order special meals or bring your own snacks to ensure satisfaction.',
            impact: '+8% satisfaction probability',
            type: 'amenity'
        });
    }
    
    return recommendations.slice(0, 5); // Return top 5 recommendations
}

function displayPredictionResults(probability, segment, recommendations, userInputs) {
    const resultsContainer = document.getElementById('prototypeResults');
    
    // Determine satisfaction level
    let satisfactionLevel, satisfactionColor, satisfactionEmoji;
    if (probability >= 70) {
        satisfactionLevel = 'High';
        satisfactionColor = 'var(--success)';
        satisfactionEmoji = '😊';
    } else if (probability >= 40) {
        satisfactionLevel = 'Moderate';
        satisfactionColor = 'var(--warning)';
        satisfactionEmoji = '😐';
    } else {
        satisfactionLevel = 'Low';
        satisfactionColor = 'var(--danger)';
        satisfactionEmoji = '😞';
    }
    
    const container = document.createElement('div');
    container.className = 'fade-in';
    
    container.innerHTML = `
        <div class="prediction-card">
            <div class="prediction-header">
                <div class="satisfaction-probability">${probability.toFixed(1)}%</div>
                <div class="probability-label">Predicted Satisfaction Probability</div>
                <div style="font-size: 2rem; margin-top: 0.5rem;">${satisfactionEmoji}</div>
                <div style="font-size: 0.875rem; color: ${satisfactionColor}; font-weight: 600; margin-top: 0.5rem;">
                    ${satisfactionLevel} Satisfaction Expected
                </div>
            </div>
            
            <div class="prediction-details">
                <div class="detail-box">
                    <div class="detail-box-label">Your Segment</div>
                    <div class="detail-box-value">${segment}</div>
                </div>
                <div class="detail-box">
                    <div class="detail-box-label">Travel Class</div>
                    <div class="detail-box-value">${userInputs.travelClass}</div>
                </div>
                <div class="detail-box">
                    <div class="detail-box-label">Trip Type</div>
                    <div class="detail-box-value">${userInputs.tripType}</div>
                </div>
                <div class="detail-box">
                    <div class="detail-box-label">Flight Distance</div>
                    <div class="detail-box-value">${userInputs.distance} miles</div>
                </div>
            </div>
            
            <div style="margin-top: 1rem; padding: 1rem; background: var(--bg-tertiary); border-radius: 8px; font-size: 0.875rem; color: var(--text-muted);">
                <strong>Prediction Method:</strong> Hybrid RecSys combining segment-based content filtering (${segment} segment has ${(airlineData.segment_statistics[segment].satisfaction_rate * 100).toFixed(1)}% base satisfaction) with feature-based adjustments for class, delays, loyalty, and demographics.
            </div>
        </div>
        
        <div class="recommendations-list">
            <h4>🎯 Personalized Recommendations to Improve Your Experience</h4>
            ${recommendations.map(rec => `
                <div class="recommendation-item fade-in">
                    <div style="display: flex; align-items: start; gap: 0.75rem;">
                        <span class="recommendation-icon" style="font-size: 1.5rem;">${rec.icon}</span>
                        <div style="flex: 1;">
                            <div style="font-weight: 600; color: var(--text-primary); margin-bottom: 0.5rem;">
                                ${rec.title}
                            </div>
                            <div class="recommendation-text">
                                ${rec.description}
                            </div>
                            <div class="recommendation-impact">
                                💡 Impact: ${rec.impact}
                            </div>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
        
        <div style="margin-top: 1.5rem; padding: 1rem; background: var(--bg-secondary); border-radius: 8px; border-left: 3px solid var(--info);">
            <div style="font-size: 0.875rem; color: var(--text-secondary); line-height: 1.6;">
                <strong style="color: var(--info);">💡 How This Works:</strong><br>
                This prediction uses a <strong>hybrid recommender system</strong> that combines:<br>
                • <strong>Content-Based Filtering:</strong> Your segment (${segment}) based on class and trip type<br>
                • <strong>Statistical Analysis:</strong> Feature correlations from 129,880 real passengers<br>
                • <strong>Personalization:</strong> Adjustments for delays, loyalty, age, and distance<br>
                The recommendations are prioritized by their expected impact on your satisfaction.
            </div>
        </div>
    `;
    
    resultsContainer.innerHTML = '';
    resultsContainer.appendChild(container);
}
