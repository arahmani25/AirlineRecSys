# Airline Passenger Satisfaction Recommender System

## 🎯 Project Overview

A comprehensive recommender system for airline passenger satisfaction that implements **three core RecSys methods** taught in class:
1. **Content-Based Filtering**
2. **Collaborative Filtering**
3. **Hybrid Approach**

---

## 📁 Project Structure (4 Files Only)

```
AirlinePS/
├── index.html    (7,908 bytes)  - Main UI structure
├── style.css     (13,759 bytes) - Modern styling
├── script.js     (21,843 bytes) - RecSys logic
└── data.js       (145,377 bytes) - Processed real data from train.csv + test.csv
```

**Total Size**: ~189 KB | **Data Source**: 129,880 real passengers (NO MOCK DATA)

---

## 🎓 Recommender System Methods

### 1. Content-Based Filtering
**Implementation**: Segment-based recommendations using passenger features
- **Features Used**: Travel class, travel purpose, customer type, age, flight distance
- **Approach**: Create customer segments with distinct characteristics
- **Output**: Service improvement recommendations based on segment pain points

**How it works**:
- Analyze passenger attributes (content)
- Group similar passengers into segments
- Recommend services based on segment characteristics
- Prioritize by feature importance (correlation analysis)

### 2. Collaborative Filtering
**Implementation**: User-based collaborative filtering with cosine similarity
- **Method**: Find similar passengers based on service ratings
- **Similarity Metric**: Cosine similarity on 14 service rating features
- **Approach**: "Passengers who rated services similarly also had similar satisfaction"

**How it works**:
- Create rating matrix (passengers × services)
- Calculate cosine similarity between passengers
- Identify top-3 similar passengers for each user
- Show similar passenger profiles and their satisfaction patterns

### 3. Hybrid Approach
**Implementation**: Combine content-based + collaborative + correlation analysis
- **Content Component**: Segment characteristics
- **Collaborative Component**: User similarity scores
- **Statistical Component**: Feature-satisfaction correlations

**How it works**:
- Use segment statistics (content-based)
- Apply correlation analysis for feature importance
- Generate strategic insights combining multiple signals
- Provide comprehensive analytics with actionable recommendations

---

## 📊 Dataset & Analysis

### Data Source
- **Train Set**: 103,904 passengers
- **Test Set**: 25,976 passengers
- **Total**: 129,880 passengers (100% real data)
- **Features**: 23 attributes including 14 service ratings

### Customer Segmentation (Content-Based)
| Segment | Count | Satisfaction | Strategy |
|---------|-------|--------------|----------|
| **Premium Business** | 59,487 | 72.0% | High expectations, focus on consistency |
| **Budget Conscious** | 37,514 | 10.0% | Price-sensitive, core service reliability |
| **Business Economy** | 30,206 | 31.5% | Efficiency + business amenities |
| **Premium Leisure** | 2,673 | 11.7% | Experience-focused, entertainment |

### Feature Importance (for Content-Based)
1. **Online boarding**: 0.504 correlation (Highest!)
2. **Inflight entertainment**: 0.398
3. **Seat comfort**: 0.349
4. **On-board service**: 0.322
5. **Leg room service**: 0.313

---

## 🚀 How to Use

### Interactive Prototype (NEW!)
**Try the live prediction system:**
1. Open `index.html` in any modern web browser
2. At the top, enter your travel preferences:
   - Travel Class (Business, Economy Plus, Economy)
   - Trip Type (Business Travel, Personal Travel)
   - Customer Type (Loyal, First-time)
   - Flight Distance, Age, Expected Delay
3. Click "Predict Satisfaction & Get Recommendations"
4. See your predicted satisfaction probability
5. Get personalized recommendations:
   - "Upgrade to Business Class" (if applicable)
   - "Select Flights with Better On-Time Performance"
   - "Add Airport Lounge Access"
   - "Use Mobile Boarding Pass"
   - And more based on your inputs!

### RecSys Analysis Tools
1. Explore the 4 customer segments
2. Select a segment from dropdown
3. Choose RecSys method:
   - **Content-Based Filtering**: Service recommendations
   - **Collaborative Filtering**: Similar passengers
   - **Hybrid Approach**: Comprehensive analytics
4. Click "Generate Recommendations"

### RecSys Method Details

#### Content-Based Filtering
- Shows service improvement recommendations
- Based on segment characteristics and pain points
- Prioritized by correlation with satisfaction
- Example: "Premium Business" segment gets recommendations for maintaining high-quality services

#### Collaborative Filtering
- Displays similar passengers using cosine similarity
- Shows passenger profiles with similarity scores
- Helps understand patterns: "Passengers like this also experienced..."
- Example: Passenger #12345 is similar to passengers #23456, #34567, #45678

#### Hybrid Approach
- Combines all methods for deep analytics
- Shows segment overview, pain points, strengths
- Provides strategic insights using multiple signals
- Example: "This segment has low satisfaction (10%) AND similar passengers show low ratings in Online boarding"

---

## 💡 Business Value & Strategy

### Why Not Simple Collaborative Filtering?
As the professor mentioned with the smartphone example:
> "Some just buy iPhone or Samsung Galaxy without thinking the prices, but some people are very sensitive to the price. Therefore applying MF or two towers directly to data is not so good idea."

**Our Approach**:
- **Segment first** (like smartphone buyers: premium vs budget)
- **Then apply collaborative filtering** within segments
- **Combine with content features** for better recommendations
- **Result**: More actionable insights than generic CF

### Strategic Insights
1. **Premium Business** (72% satisfied) → Focus on retention
2. **Budget Conscious** (10% satisfied) → Urgent improvements needed
3. **Business Economy** (31.5% satisfied) → Upsell opportunities
4. **Premium Leisure** (11.7% satisfied) → Enhance experience


---


## 📈 Technical Implementation

### Content-Based Filtering
```javascript
// Segment creation based on features
function create_customer_segment(class, travel_type) {
    if (class === 'Business' && travel_type === 'Business travel')
        return 'Premium Business';
    // ... other segments
}

// Recommendations based on segment pain points
recommendations = segment_pain_points
    .filter(score < 3.0 && correlation > 0.2)
    .sort_by(correlation)
```

### Collaborative Filtering
```python
# Cosine similarity calculation
ratings_matrix = passengers[service_features]
similarity_matrix = cosine_similarity(ratings_matrix)

# Find similar passengers
for each passenger:
    similar_passengers = top_k_similar(similarity_matrix, k=3)
```

### Hybrid Approach
```javascript
// Combine multiple signals
hybrid_score = 
    content_based_score * 0.4 +
    collaborative_score * 0.3 +
    correlation_score * 0.3

// Generate comprehensive insights
insights = analyze(segment_stats + similarity_scores + correlations)
```

---

## 🔍 Key Differentiators

### What Makes This Strong:
1. ✅ **Proper RecSys Methods** - Not just analysis, actual CF + Content-Based + Hybrid
2. ✅ **Real Implementation** - Cosine similarity calculated, segments created
3. ✅ **100% Real Data** - All 129,880 passengers from CSV files
4. ✅ **Strategic Approach** - Segments first (like smartphone example)
5. ✅ **Actionable Output** - Clear recommendations with expected impact
6. ✅ **Multiple Methods** - Can compare Content-Based vs Collaborative vs Hybrid

---

## 📊 Results Summary

### Content-Based Filtering Results
- 8 recommendations per segment
- Prioritized by correlation (0.2 - 0.5 range)
- Actionable service improvements

### Collaborative Filtering Results
- 30 sample passengers per segment
- Top-3 similar passengers identified
- Similarity based on 14 service ratings

### Hybrid Approach Results
- Comprehensive segment analytics
- Combined insights from all methods
- Strategic recommendations for airline managers

---

**Presentation Strategy**:
- Emphasize the 3 methods taught in class
- Show how they work together (hybrid)
- Demonstrate with live system
- Connect to business value

---


