// Airline Passenger Satisfaction Recommender System
// RecSys Methods: Content-Based, Collaborative Filtering, Hybrid
// Data Source: train.csv (103,904) + test.csv (25,976) = 129,880 passengers

const airlineData = {
  "metadata": {
    "total_passengers": 129880,
    "train_size": 103904,
    "test_size": 25976,
    "overall_satisfaction_rate": 0.43446258084385586,
    "segments": [
      "Budget Conscious",
      "Premium Business",
      "Business Economy",
      "Premium Leisure"
    ],
    "recsys_methods": [
      "Content-Based Filtering",
      "Collaborative Filtering",
      "Hybrid Approach"
    ]
  },
  "feature_importance": [
    {
      "feature": "Online boarding",
      "correlation": 0.5017494207376217
    },
    {
      "feature": "Inflight entertainment",
      "correlation": 0.3982336506118771
    },
    {
      "feature": "Seat comfort",
      "correlation": 0.34882934610259414
    },
    {
      "feature": "On-board service",
      "correlation": 0.3222048233927064
    },
    {
      "feature": "Leg room service",
      "correlation": 0.3124238194944811
    },
    {
      "feature": "Cleanliness",
      "correlation": 0.3070346705632983
    },
    {
      "feature": "Inflight wifi service",
      "correlation": 0.2834602301012164
    },
    {
      "feature": "Baggage handling",
      "correlation": 0.24867991877513926
    },
    {
      "feature": "Inflight service",
      "correlation": 0.24491783574569384
    },
    {
      "feature": "Checkin service",
      "correlation": 0.23725236030900007
    },
    {
      "feature": "Food and drink",
      "correlation": 0.21134020762506628
    },
    {
      "feature": "Ease of Online booking",
      "correlation": 0.168877139052831
    },
    {
      "feature": "Departure/Arrival time convenient",
      "correlation": -0.054269710493737154
    },
    {
      "feature": "Gate location",
      "correlation": -0.002793274652471051
    }
  ],
  "segment_statistics": {
    "Budget Conscious": {
      "count": 37514,
      "satisfaction_rate": 0.10020259103268113,
      "avg_age": 38.39779815535533,
      "avg_flight_distance": 790.3336087860532,
      "service_scores": {
        "Inflight wifi service": {
          "avg_score": 2.5163139094737965,
          "satisfaction_correlation": 0.32196303538351684
        },
        "Departure/Arrival time convenient": {
          "avg_score": 3.6451991256597536,
          "satisfaction_correlation": 0.0023707405824184144
        },
        "Ease of Online booking": {
          "avg_score": 2.471557285280162,
          "satisfaction_correlation": 0.25729007989708647
        },
        "Gate location": {
          "avg_score": 2.9191768406461587,
          "satisfaction_correlation": -0.005146957640311509
        },
        "Food and drink": {
          "avg_score": 3.064642533454177,
          "satisfaction_correlation": 0.008952348585060138
        },
        "Online boarding": {
          "avg_score": 2.769206163032468,
          "satisfaction_correlation": 0.18261320336880885
        },
        "Seat comfort": {
          "avg_score": 3.168950258570134,
          "satisfaction_correlation": 0.002364225178568204
        },
        "Inflight entertainment": {
          "avg_score": 3.056085727994882,
          "satisfaction_correlation": -0.003767203836899307
        },
        "On-board service": {
          "avg_score": 3.2772031774804073,
          "satisfaction_correlation": 0.0004113893854166357
        },
        "Leg room service": {
          "avg_score": 3.091885696006824,
          "satisfaction_correlation": 0.04288157274602221
        },
        "Baggage handling": {
          "avg_score": 3.590499546835848,
          "satisfaction_correlation": 0.0026409282594083974
        },
        "Checkin service": {
          "avg_score": 3.3379538305699206,
          "satisfaction_correlation": 0.004422041260422058
        },
        "Inflight service": {
          "avg_score": 3.6199552167190916,
          "satisfaction_correlation": 0.00606432495740488
        },
        "Cleanliness": {
          "avg_score": 3.11355760516074,
          "satisfaction_correlation": -0.0034392173168255077
        }
      },
      "top_pain_points": [
        {
          "feature": "Ease of Online booking",
          "score": 2.471557285280162
        },
        {
          "feature": "Inflight wifi service",
          "score": 2.5163139094737965
        },
        {
          "feature": "Online boarding",
          "score": 2.769206163032468
        },
        {
          "feature": "Gate location",
          "score": 2.9191768406461587
        },
        {
          "feature": "Inflight entertainment",
          "score": 3.056085727994882
        }
      ],
      "top_strengths": [
        {
          "feature": "Departure/Arrival time convenient",
          "score": 3.6451991256597536
        },
        {
          "feature": "Inflight service",
          "score": 3.6199552167190916
        },
        {
          "feature": "Baggage handling",
          "score": 3.590499546835848
        },
        {
          "feature": "Checkin service",
          "score": 3.3379538305699206
        },
        {
          "feature": "On-board service",
          "score": 3.2772031774804073
        }
      ]
    },
    "Premium Business": {
      "count": 59487,
      "satisfaction_rate": 0.7203758804444669,
      "avg_age": 41.74974364146788,
      "avg_flight_distance": 1714.2501386857632,
      "service_scores": {
        "Inflight wifi service": {
          "avg_score": 2.7861381478306186,
          "satisfaction_correlation": 0.16754604829113126
        },
        "Departure/Arrival time convenient": {
          "avg_score": 2.8755862625447577,
          "satisfaction_correlation": 0.043327425676743636
        },
        "Ease of Online booking": {
          "avg_score": 2.932539882663439,
          "satisfaction_correlation": 0.0479439305196832
        },
        "Gate location": {
          "avg_score": 2.987593928085128,
          "satisfaction_correlation": -0.006245655304511554
        },
        "Food and drink": {
          "avg_score": 3.339805335619547,
          "satisfaction_correlation": 0.23205233544224074
        },
        "Online boarding": {
          "avg_score": 3.7405147343116982,
          "satisfaction_correlation": 0.5249524044575752
        },
        "Seat comfort": {
          "avg_score": 3.7764553599946207,
          "satisfaction_correlation": 0.4424815816343034
        },
        "Inflight entertainment": {
          "avg_score": 3.6674567552574513,
          "satisfaction_correlation": 0.5183248614923842
        },
        "On-board service": {
          "avg_score": 3.706927564005581,
          "satisfaction_correlation": 0.44642646786687407
        },
        "Leg room service": {
          "avg_score": 3.6814430043538926,
          "satisfaction_correlation": 0.42225888745993145
        },
        "Baggage handling": {
          "avg_score": 3.867483651890329,
          "satisfaction_correlation": 0.387292591042969
        },
        "Checkin service": {
          "avg_score": 3.5298804780876494,
          "satisfaction_correlation": 0.3527806740985696
        },
        "Inflight service": {
          "avg_score": 3.869366416191773,
          "satisfaction_correlation": 0.3879941122461311
        },
        "Cleanliness": {
          "avg_score": 3.49402390438247,
          "satisfaction_correlation": 0.42018773614439864
        }
      },
      "top_pain_points": [
        {
          "feature": "Inflight wifi service",
          "score": 2.7861381478306186
        },
        {
          "feature": "Departure/Arrival time convenient",
          "score": 2.8755862625447577
        },
        {
          "feature": "Ease of Online booking",
          "score": 2.932539882663439
        },
        {
          "feature": "Gate location",
          "score": 2.987593928085128
        },
        {
          "feature": "Food and drink",
          "score": 3.339805335619547
        }
      ],
      "top_strengths": [
        {
          "feature": "Inflight service",
          "score": 3.869366416191773
        },
        {
          "feature": "Baggage handling",
          "score": 3.867483651890329
        },
        {
          "feature": "Seat comfort",
          "score": 3.7764553599946207
        },
        {
          "feature": "Online boarding",
          "score": 3.7405147343116982
        },
        {
          "feature": "On-board service",
          "score": 3.706927564005581
        }
      ]
    },
    "Business Economy": {
      "count": 30206,
      "satisfaction_rate": 0.31460636959544463,
      "avg_age": 36.202012845130106,
      "avg_flight_distance": 687.4154803681388,
      "service_scores": {
        "Inflight wifi service": {
          "avg_score": 2.8952857048268554,
          "satisfaction_correlation": 0.5543980422424344
        },
        "Departure/Arrival time convenient": {
          "avg_score": 2.6358670462821956,
          "satisfaction_correlation": 0.10650138838072155
        },
        "Ease of Online booking": {
          "avg_score": 2.784479904654704,
          "satisfaction_correlation": 0.14547501809176885
        },
        "Gate location": {
          "avg_score": 3.0318148712176387,
          "satisfaction_correlation": -0.03809254794993779
        },
        "Food and drink": {
          "avg_score": 3.121201085876978,
          "satisfaction_correlation": 0.2929093934900568
        },
        "Online boarding": {
          "avg_score": 2.893233132490234,
          "satisfaction_correlation": 0.4435625331119293
        },
        "Seat comfort": {
          "avg_score": 3.1163345030788583,
          "satisfaction_correlation": 0.28441676665135457
        },
        "Inflight entertainment": {
          "avg_score": 3.154307091306363,
          "satisfaction_correlation": 0.38642188734119354
        },
        "On-board service": {
          "avg_score": 2.898099715288353,
          "satisfaction_correlation": 0.21324514588274052
        },
        "Leg room service": {
          "avg_score": 3.0651195126796003,
          "satisfaction_correlation": 0.09438728021640409
        },
        "Baggage handling": {
          "avg_score": 3.246010726345759,
          "satisfaction_correlation": 0.08082235292395853
        },
        "Checkin service": {
          "avg_score": 2.8250016553002713,
          "satisfaction_correlation": 0.16412752108262632
        },
        "Inflight service": {
          "avg_score": 3.2498510229755677,
          "satisfaction_correlation": 0.07811956720207827
        },
        "Cleanliness": {
          "avg_score": 3.098225518108985,
          "satisfaction_correlation": 0.30482358333696247
        }
      },
      "top_pain_points": [
        {
          "feature": "Departure/Arrival time convenient",
          "score": 2.6358670462821956
        },
        {
          "feature": "Ease of Online booking",
          "score": 2.784479904654704
        },
        {
          "feature": "Checkin service",
          "score": 2.8250016553002713
        },
        {
          "feature": "Online boarding",
          "score": 2.893233132490234
        },
        {
          "feature": "Inflight wifi service",
          "score": 2.8952857048268554
        }
      ],
      "top_strengths": [
        {
          "feature": "Inflight service",
          "score": 3.2498510229755677
        },
        {
          "feature": "Baggage handling",
          "score": 3.246010726345759
        },
        {
          "feature": "Inflight entertainment",
          "score": 3.154307091306363
        },
        {
          "feature": "Food and drink",
          "score": 3.121201085876978
        },
        {
          "feature": "Seat comfort",
          "score": 3.1163345030788583
        }
      ]
    },
    "Premium Leisure": {
      "count": 2673,
      "satisfaction_rate": 0.11709689487467265,
      "avg_age": 38.669285447063224,
      "avg_flight_distance": 826.8043396932286,
      "service_scores": {
        "Inflight wifi service": {
          "avg_score": 2.548447437336326,
          "satisfaction_correlation": 0.31756587792669083
        },
        "Departure/Arrival time convenient": {
          "avg_score": 3.627384960718294,
          "satisfaction_correlation": 0.016344442734037904
        },
        "Ease of Online booking": {
          "avg_score": 2.5398428731762066,
          "satisfaction_correlation": 0.2587582962475483
        },
        "Gate location": {
          "avg_score": 2.9296670407781518,
          "satisfaction_correlation": -0.014186840244155818
        },
        "Food and drink": {
          "avg_score": 3.1107369996258885,
          "satisfaction_correlation": 0.02824655331262916
        },
        "Online boarding": {
          "avg_score": 3.240927796483352,
          "satisfaction_correlation": 0.12294358656962272
        },
        "Seat comfort": {
          "avg_score": 3.479985035540591,
          "satisfaction_correlation": 0.025112894654849085
        },
        "Inflight entertainment": {
          "avg_score": 3.013842124953236,
          "satisfaction_correlation": -0.016360953163481684
        },
        "On-board service": {
          "avg_score": 3.1395435839880284,
          "satisfaction_correlation": -0.0241904048223829
        },
        "Leg room service": {
          "avg_score": 2.858211747100636,
          "satisfaction_correlation": 0.11764560494843225
        },
        "Baggage handling": {
          "avg_score": 3.3411896745230076,
          "satisfaction_correlation": -0.022448762584804542
        },
        "Checkin service": {
          "avg_score": 3.323606434717546,
          "satisfaction_correlation": -0.0002712280710865769
        },
        "Inflight service": {
          "avg_score": 3.3322109988776654,
          "satisfaction_correlation": -0.027876443798033144
        },
        "Cleanliness": {
          "avg_score": 3.2143658810325477,
          "satisfaction_correlation": 0.008785503793589604
        }
      },
      "top_pain_points": [
        {
          "feature": "Ease of Online booking",
          "score": 2.5398428731762066
        },
        {
          "feature": "Inflight wifi service",
          "score": 2.548447437336326
        },
        {
          "feature": "Leg room service",
          "score": 2.858211747100636
        },
        {
          "feature": "Gate location",
          "score": 2.9296670407781518
        },
        {
          "feature": "Inflight entertainment",
          "score": 3.013842124953236
        }
      ],
      "top_strengths": [
        {
          "feature": "Departure/Arrival time convenient",
          "score": 3.627384960718294
        },
        {
          "feature": "Seat comfort",
          "score": 3.479985035540591
        },
        {
          "feature": "Baggage handling",
          "score": 3.3411896745230076
        },
        {
          "feature": "Inflight service",
          "score": 3.3322109988776654
        },
        {
          "feature": "Checkin service",
          "score": 3.323606434717546
        }
      ]
    }
  },
  "sample_passengers": {
    "Budget Conscious": [
      {
        "id": 83502,
        "age": 33,
        "gender": "Male",
        "customer_type": "Loyal Customer",
        "travel_type": "Personal Travel",
        "class": "Eco",
        "flight_distance": 946,
        "satisfaction": "satisfied",
        "service_ratings": {
          "Inflight wifi service": 4,
          "Departure/Arrival time convenient": 2,
          "Ease of Online booking": 4,
          "Gate location": 3,
          "Food and drink": 4,
          "Online boarding": 4,
          "Seat comfort": 4,
          "Inflight entertainment": 4,
          "On-board service": 4,
          "Leg room service": 5,
          "Baggage handling": 2,
          "Checkin service": 2,
          "Inflight service": 2,
          "Cleanliness": 4
        },
        "delays": {
          "departure": 0.0,
          "arrival": 0.0
        },
        "similar_passenger_ids": [
          95789,
          63668,
          22434
        ],
        "avg_rating": 3.4285714285714284
      },
      {
        "id": 96517,
        "age": 47,
        "gender": "Female",
        "customer_type": "Loyal Customer",
        "travel_type": "Personal Travel",
        "class": "Eco",
        "flight_distance": 302,
        "satisfaction": "satisfied",
        "service_ratings": {
          "Inflight wifi service": 4,
          "Departure/Arrival time convenient": 4,
          "Ease of Online booking": 4,
          "Gate location": 3,
          "Food and drink": 2,
          "Online boarding": 4,
          "Seat comfort": 5,
          "Inflight entertainment": 4,
          "On-board service": 4,
          "Leg room service": 4,
          "Baggage handling": 4,
          "Checkin service": 4,
          "Inflight service": 4,
          "Cleanliness": 4
        },
        "delays": {
          "departure": 23.0,
          "arrival": 31.0
        },
        "similar_passenger_ids": [
          121598,
          30089,
          2201
        ],
        "avg_rating": 3.857142857142857
      },
      {
        "id": 106922,
        "age": 64,
        "gender": "Male",
        "customer_type": "Loyal Customer",
        "travel_type": "Personal Travel",
        "class": "Eco",
        "flight_distance": 1259,
        "satisfaction": "satisfied",
        "service_ratings": {
          "Inflight wifi service": 4,
          "Departure/Arrival time convenient": 5,
          "Ease of Online booking": 4,
          "Gate location": 2,
          "Food and drink": 2,
          "Online boarding": 4,
          "Seat comfort": 2,
          "Inflight entertainment": 2,
          "On-board service": 4,
          "Leg room service": 5,
          "Baggage handling": 3,
          "Checkin service": 4,
          "Inflight service": 4,
          "Cleanliness": 2
        },
        "delays": {
          "departure": 20.0,
          "arrival": 5.0
        },
        "similar_passenger_ids": [
          121598,
          111157,
          25542
        ],
        "avg_rating": 3.357142857142857
      },
      {
        "id": 76392,
        "age": 60,
        "gender": "Male",
        "customer_type": "Loyal Customer",
        "travel_type": "Personal Travel",
        "class": "Eco",
        "flight_distance": 931,
        "satisfaction": "satisfied",
        "service_ratings": {
          "Inflight wifi service": 0,
          "Departure/Arrival time convenient": 5,
          "Ease of Online booking": 0,
          "Gate location": 3,
          "Food and drink": 4,
          "Online boarding": 0,
          "Seat comfort": 3,
          "Inflight entertainment": 4,
          "On-board service": 4,
          "Leg room service": 5,
          "Baggage handling": 5,
          "Checkin service": 4,
          "Inflight service": 5,
          "Cleanliness": 4
        },
        "delays": {
          "departure": 0.0,
          "arrival": 0.0
        },
        "similar_passenger_ids": [
          68900,
          121318,
          82113
        ],
        "avg_rating": 3.2857142857142856
      },
      {
        "id": 128842,
        "age": 58,
        "gender": "Female",
        "customer_type": "Loyal Customer",
        "travel_type": "Personal Travel",
        "class": "Eco",
        "flight_distance": 2475,
        "satisfaction": "satisfied",
        "service_ratings": {
          "Inflight wifi service": 4,
          "Departure/Arrival time convenient": 4,
          "Ease of Online booking": 4,
          "Gate location": 3,
          "Food and drink": 4,
          "Online boarding": 1,
          "Seat comfort": 1,
          "Inflight entertainment": 3,
          "On-board service": 3,
          "Leg room service": 3,
          "Baggage handling": 4,
          "Checkin service": 1,
          "Inflight service": 3,
          "Cleanliness": 1
        },
        "delays": {
          "departure": 29.0,
          "arrival": 10.0
        },
        "similar_passenger_ids": [
          114090,
          4749,
          121598
        ],
        "avg_rating": 2.7857142857142856
      },
      {
        "id": 25542,
        "age": 59,
        "gender": "Male",
        "customer_type": "Loyal Customer",
        "travel_type": "Personal Travel",
        "class": "Eco",
        "flight_distance": 516,
        "satisfaction": "satisfied",
        "service_ratings": {
          "Inflight wifi service": 4,
          "Departure/Arrival time convenient": 5,
          "Ease of Online booking": 3,
          "Gate location": 4,
          "Food and drink": 1,
          "Online boarding": 3,
          "Seat comfort": 1,
          "Inflight entertainment": 1,
          "On-board service": 5,
          "Leg room service": 3,
          "Baggage handling": 4,
          "Checkin service": 5,
          "Inflight service": 4,
          "Cleanliness": 1
        },
        "delays": {
          "departure": 3.0,
          "arrival": 0.0
        },
        "similar_passenger_ids": [
          111157,
          106922,
          82113
        ],
        "avg_rating": 3.142857142857143
      },
      {
        "id": 108006,
        "age": 38,
        "gender": "Female",
        "customer_type": "Loyal Customer",
        "travel_type": "Personal Travel",
        "class": "Eco",
        "flight_distance": 271,
        "satisfaction": "satisfied",
        "service_ratings": {
          "Inflight wifi service": 4,
          "Departure/Arrival time convenient": 0,
          "Ease of Online booking": 5,
          "Gate location": 3,
          "Food and drink": 2,
          "Online boarding": 5,
          "Seat comfort": 2,
          "Inflight entertainment": 2,
          "On-board service": 4,
          "Leg room service": 2,
          "Baggage handling": 4,
          "Checkin service": 3,
          "Inflight service": 5,
          "Cleanliness": 2
        },
        "delays": {
          "departure": 0.0,
          "arrival": 0.0
        },
        "similar_passenger_ids": [
          48014,
          63668,
          96517
        ],
        "avg_rating": 3.0714285714285716
      },
      {
        "id": 2201,
        "age": 52,
        "gender": "Male",
        "customer_type": "Loyal Customer",
        "travel_type": "Personal Travel",
        "class": "Eco",
        "flight_distance": 685,
        "satisfaction": "satisfied",
        "service_ratings": {
          "Inflight wifi service": 4,
          "Departure/Arrival time convenient": 4,
          "Ease of Online booking": 4,
          "Gate location": 5,
          "Food and drink": 4,
          "Online boarding": 4,
          "Seat comfort": 4,
          "Inflight entertainment": 4,
          "On-board service": 3,
          "Leg room service": 4,
          "Baggage handling": 5,
          "Checkin service": 5,
          "Inflight service": 4,
          "Cleanliness": 4
        },
        "delays": {
          "departure": 0.0,
          "arrival": 0.0
        },
        "similar_passenger_ids": [
          96517,
          43510,
          75460
        ],
        "avg_rating": 4.142857142857143
      },
      {
        "id": 121598,
        "age": 9,
        "gender": "Male",
        "customer_type": "Loyal Customer",
        "travel_type": "Personal Travel",
        "class": "Eco",
        "flight_distance": 936,
        "satisfaction": "satisfied",
        "service_ratings": {
          "Inflight wifi service": 5,
          "Departure/Arrival time convenient": 5,
          "Ease of Online booking": 4,
          "Gate location": 2,
          "Food and drink": 4,
          "Online boarding": 4,
          "Seat comfort": 4,
          "Inflight entertainment": 4,
          "On-board service": 5,
          "Leg room service": 4,
          "Baggage handling": 5,
          "Checkin service": 5,
          "Inflight service": 5,
          "Cleanliness": 4
        },
        "delays": {
          "departure": 22.0,
          "arrival": 22.0
        },
        "similar_passenger_ids": [
          96517,
          30089,
          70172
        ],
        "avg_rating": 4.285714285714286
      },
      {
        "id": 68900,
        "age": 62,
        "gender": "Male",
        "customer_type": "Loyal Customer",
        "travel_type": "Personal Travel",
        "class": "Eco",
        "flight_distance": 1061,
        "satisfaction": "satisfied",
        "service_ratings": {
          "Inflight wifi service": 0,
          "Departure/Arrival time convenient": 5,
          "Ease of Online booking": 0,
          "Gate location": 3,
          "Food and drink": 5,
          "Online boarding": 0,
          "Seat comfort": 5,
          "Inflight entertainment": 5,
          "On-board service": 4,
          "Leg room service": 4,
          "Baggage handling": 5,
          "Checkin service": 5,
          "Inflight service": 5,
          "Cleanliness": 5
        },
        "delays": {
          "departure": 0.0,
          "arrival": 0.0
        },
        "similar_passenger_ids": [
          76392,
          121318,
          70172
        ],
        "avg_rating": 3.642857142857143
      },
      {
        "id": 4749,
        "age": 43,
        "gender": "Male",
        "customer_type": "disloyal Customer",
        "travel_type": "Personal Travel",
        "class": "Eco",
        "flight_distance": 888,
        "satisfaction": "satisfied",
        "service_ratings": {
          "Inflight wifi service": 5,
          "Departure/Arrival time convenient": 1,
          "Ease of Online booking": 5,
          "Gate location": 3,
          "Food and drink": 4,
          "Online boarding": 1,
          "Seat comfort": 4,
          "Inflight entertainment": 4,
          "On-board service": 4,
          "Leg room service": 4,
          "Baggage handling": 4,
          "Checkin service": 2,
          "Inflight service": 4,
          "Cleanliness": 4
        },
        "delays": {
          "departure": 0.0,
          "arrival": 0.0
        },
        "similar_passenger_ids": [
          63668,
          83502,
          22434
        ],
        "avg_rating": 3.5
      },
      {
        "id": 65150,
        "age": 52,
        "gender": "Female",
        "customer_type": "Loyal Customer",
        "travel_type": "Personal Travel",
        "class": "Eco",
        "flight_distance": 247,
        "satisfaction": "satisfied",
        "service_ratings": {
          "Inflight wifi service": 4,
          "Departure/Arrival time convenient": 4,
          "Ease of Online booking": 0,
          "Gate location": 2,
          "Food and drink": 5,
          "Online boarding": 4,
          "Seat comfort": 4,
          "Inflight entertainment": 5,
          "On-board service": 5,
          "Leg room service": 0,
          "Baggage handling": 5,
          "Checkin service": 3,
          "Inflight service": 5,
          "Cleanliness": 3
        },
        "delays": {
          "departure": 0.0,
          "arrival": 0.0
        },
        "similar_passenger_ids": [
          70172,
          102956,
          121598
        ],
        "avg_rating": 3.5
      },
      {
        "id": 5622,
        "age": 60,
        "gender": "Male",
        "customer_type": "Loyal Customer",
        "travel_type": "Personal Travel",
        "class": "Eco",
        "flight_distance": 624,
        "satisfaction": "satisfied",
        "service_ratings": {
          "Inflight wifi service": 4,
          "Departure/Arrival time convenient": 3,
          "Ease of Online booking": 4,
          "Gate location": 1,
          "Food and drink": 4,
          "Online boarding": 4,
          "Seat comfort": 4,
          "Inflight entertainment": 1,
          "On-board service": 2,
          "Leg room service": 5,
          "Baggage handling": 2,
          "Checkin service": 4,
          "Inflight service": 5,
          "Cleanliness": 4
        },
        "delays": {
          "departure": 175.0,
          "arrival": 180.0
        },
        "similar_passenger_ids": [
          121598,
          106922,
          96517
        ],
        "avg_rating": 3.357142857142857
      },
      {
        "id": 63668,
        "age": 58,
        "gender": "Female",
        "customer_type": "Loyal Customer",
        "travel_type": "Personal Travel",
        "class": "Eco",
        "flight_distance": 2405,
        "satisfaction": "satisfied",
        "service_ratings": {
          "Inflight wifi service": 5,
          "Departure/Arrival time convenient": 2,
          "Ease of Online booking": 5,
          "Gate location": 4,
          "Food and drink": 2,
          "Online boarding": 3,
          "Seat comfort": 4,
          "Inflight entertainment": 3,
          "On-board service": 3,
          "Leg room service": 5,
          "Baggage handling": 3,
          "Checkin service": 2,
          "Inflight service": 3,
          "Cleanliness": 2
        },
        "delays": {
          "departure": 10.0,
          "arrival": 0.0
        },
        "similar_passenger_ids": [
          83502,
          114090,
          4749
        ],
        "avg_rating": 3.2857142857142856
      },
      {
        "id": 121318,
        "age": 25,
        "gender": "Male",
        "customer_type": "Loyal Customer",
        "travel_type": "Personal Travel",
        "class": "Eco",
        "flight_distance": 1009,
        "satisfaction": "satisfied",
        "service_ratings": {
          "Inflight wifi service": 0,
          "Departure/Arrival time convenient": 5,
          "Ease of Online booking": 0,
          "Gate location": 4,
          "Food and drink": 5,
          "Online boarding": 0,
          "Seat comfort": 5,
          "Inflight entertainment": 5,
          "On-board service": 5,
          "Leg room service": 3,
          "Baggage handling": 5,
          "Checkin service": 3,
          "Inflight service": 4,
          "Cleanliness": 5
        },
        "delays": {
          "departure": 0.0,
          "arrival": 0.0
        },
        "similar_passenger_ids": [
          68900,
          76392,
          54886
        ],
        "avg_rating": 3.5
      },
      {
        "id": 70172,
        "age": 13,
        "gender": "Male",
        "customer_type": "Loyal Customer",
        "travel_type": "Personal Travel",
        "class": "Eco Plus",
        "flight_distance": 460,
        "satisfaction": "neutral or dissatisfied",
        "service_ratings": {
          "Inflight wifi service": 3,
          "Departure/Arrival time convenient": 4,
          "Ease of Online booking": 3,
          "Gate location": 1,
          "Food and drink": 5,
          "Online boarding": 3,
          "Seat comfort": 5,
          "Inflight entertainment": 5,
          "On-board service": 4,
          "Leg room service": 3,
          "Baggage handling": 4,
          "Checkin service": 4,
          "Inflight service": 5,
          "Cleanliness": 5
        },
        "delays": {
          "departure": 25.0,
          "arrival": 18.0
        },
        "similar_passenger_ids": [
          102956,
          121598,
          30089
        ],
        "avg_rating": 3.857142857142857
      },
      {
        "id": 111157,
        "age": 26,
        "gender": "Female",
        "customer_type": "Loyal Customer",
        "travel_type": "Personal Travel",
        "class": "Eco",
        "flight_distance": 1180,
        "satisfaction": "neutral or dissatisfied",
        "service_ratings": {
          "Inflight wifi service": 3,
          "Departure/Arrival time convenient": 4,
          "Ease of Online booking": 2,
          "Gate location": 1,
          "Food and drink": 1,
          "Online boarding": 2,
          "Seat comfort": 1,
          "Inflight entertainment": 1,
          "On-board service": 3,
          "Leg room service": 4,
          "Baggage handling": 4,
          "Checkin service": 4,
          "Inflight service": 4,
          "Cleanliness": 1
        },
        "delays": {
          "departure": 0.0,
          "arrival": 0.0
        },
        "similar_passenger_ids": [
          106922,
          25542,
          82113
        ],
        "avg_rating": 2.5
      },
      {
        "id": 82113,
        "age": 47,
        "gender": "Male",
        "customer_type": "Loyal Customer",
        "travel_type": "Personal Travel",
        "class": "Eco",
        "flight_distance": 1276,
        "satisfaction": "neutral or dissatisfied",
        "service_ratings": {
          "Inflight wifi service": 2,
          "Departure/Arrival time convenient": 4,
          "Ease of Online booking": 2,
          "Gate location": 3,
          "Food and drink": 2,
          "Online boarding": 2,
          "Seat comfort": 2,
          "Inflight entertainment": 2,
          "On-board service": 3,
          "Leg room service": 3,
          "Baggage handling": 4,
          "Checkin service": 3,
          "Inflight service": 5,
          "Cleanliness": 2
        },
        "delays": {
          "departure": 9.0,
          "arrival": 23.0
        },
        "similar_passenger_ids": [
          121598,
          111157,
          2201
        ],
        "avg_rating": 2.7857142857142856
      },
      {
        "id": 51412,
        "age": 12,
        "gender": "Female",
        "customer_type": "Loyal Customer",
        "travel_type": "Personal Travel",
        "class": "Eco Plus",
        "flight_distance": 308,
        "satisfaction": "neutral or dissatisfied",
        "service_ratings": {
          "Inflight wifi service": 2,
          "Departure/Arrival time convenient": 4,
          "Ease of Online booking": 2,
          "Gate location": 2,
          "Food and drink": 1,
          "Online boarding": 2,
          "Seat comfort": 1,
          "Inflight entertainment": 1,
          "On-board service": 1,
          "Leg room service": 2,
          "Baggage handling": 5,
          "Checkin service": 5,
          "Inflight service": 5,
          "Cleanliness": 1
        },
        "delays": {
          "departure": 0.0,
          "arrival": 0.0
        },
        "similar_passenger_ids": [
          111157,
          82113,
          25542
        ],
        "avg_rating": 2.4285714285714284
      },
      {
        "id": 95789,
        "age": 26,
        "gender": "Female",
        "customer_type": "Loyal Customer",
        "travel_type": "Personal Travel",
        "class": "Eco",
        "flight_distance": 453,
        "satisfaction": "neutral or dissatisfied",
        "service_ratings": {
          "Inflight wifi service": 3,
          "Departure/Arrival time convenient": 2,
          "Ease of Online booking": 3,
          "Gate location": 2,
          "Food and drink": 2,
          "Online boarding": 3,
          "Seat comfort": 2,
          "Inflight entertainment": 2,
          "On-board service": 4,
          "Leg room service": 3,
          "Baggage handling": 2,
          "Checkin service": 2,
          "Inflight service": 1,
          "Cleanliness": 2
        },
        "delays": {
          "departure": 43.0,
          "arrival": 35.0
        },
        "similar_passenger_ids": [
          83502,
          96517,
          63668
        ],
        "avg_rating": 2.357142857142857
      },
      {
        "id": 66246,
        "age": 38,
        "gender": "Male",
        "customer_type": "Loyal Customer",
        "travel_type": "Personal Travel",
        "class": "Eco",
        "flight_distance": 460,
        "satisfaction": "neutral or dissatisfied",
        "service_ratings": {
          "Inflight wifi service": 2,
          "Departure/Arrival time convenient": 3,
          "Ease of Online booking": 3,
          "Gate location": 2,
          "Food and drink": 5,
          "Online boarding": 3,
          "Seat comfort": 5,
          "Inflight entertainment": 5,
          "On-board service": 1,
          "Leg room service": 2,
          "Baggage handling": 4,
          "Checkin service": 3,
          "Inflight service": 2,
          "Cleanliness": 5
        },
        "delays": {
          "departure": 17.0,
          "arrival": 18.0
        },
        "similar_passenger_ids": [
          82042,
          102956,
          70172
        ],
        "avg_rating": 3.2142857142857144
      },
      {
        "id": 22434,
        "age": 17,
        "gender": "Female",
        "customer_type": "Loyal Customer",
        "travel_type": "Personal Travel",
        "class": "Eco",
        "flight_distance": 208,
        "satisfaction": "neutral or dissatisfied",
        "service_ratings": {
          "Inflight wifi service": 3,
          "Departure/Arrival time convenient": 1,
          "Ease of Online booking": 3,
          "Gate location": 3,
          "Food and drink": 5,
          "Online boarding": 3,
          "Seat comfort": 5,
          "Inflight entertainment": 5,
          "On-board service": 2,
          "Leg room service": 5,
          "Baggage handling": 3,
          "Checkin service": 3,
          "Inflight service": 4,
          "Cleanliness": 5
        },
        "delays": {
          "departure": 0.0,
          "arrival": 0.0
        },
        "similar_passenger_ids": [
          82042,
          83502,
          66246
        ],
        "avg_rating": 3.5714285714285716
      },
      {
        "id": 43510,
        "age": 43,
        "gender": "Female",
        "customer_type": "Loyal Customer",
        "travel_type": "Personal Travel",
        "class": "Eco",
        "flight_distance": 752,
        "satisfaction": "neutral or dissatisfied",
        "service_ratings": {
          "Inflight wifi service": 3,
          "Departure/Arrival time convenient": 5,
          "Ease of Online booking": 3,
          "Gate location": 5,
          "Food and drink": 5,
          "Online boarding": 4,
          "Seat comfort": 5,
          "Inflight entertainment": 3,
          "On-board service": 3,
          "Leg room service": 3,
          "Baggage handling": 5,
          "Checkin service": 3,
          "Inflight service": 3,
          "Cleanliness": 4
        },
        "delays": {
          "departure": 52.0,
          "arrival": 29.0
        },
        "similar_passenger_ids": [
          2201,
          114090,
          96517
        ],
        "avg_rating": 3.857142857142857
      },
      {
        "id": 114090,
        "age": 58,
        "gender": "Female",
        "customer_type": "Loyal Customer",
        "travel_type": "Personal Travel",
        "class": "Eco",
        "flight_distance": 2139,
        "satisfaction": "neutral or dissatisfied",
        "service_ratings": {
          "Inflight wifi service": 4,
          "Departure/Arrival time convenient": 5,
          "Ease of Online booking": 4,
          "Gate location": 5,
          "Food and drink": 4,
          "Online boarding": 3,
          "Seat comfort": 4,
          "Inflight entertainment": 4,
          "On-board service": 4,
          "Leg room service": 4,
          "Baggage handling": 4,
          "Checkin service": 2,
          "Inflight service": 4,
          "Cleanliness": 2
        },
        "delays": {
          "departure": 0.0,
          "arrival": 0.0
        },
        "similar_passenger_ids": [
          43510,
          2201,
          128842
        ],
        "avg_rating": 3.7857142857142856
      },
      {
        "id": 102956,
        "age": 57,
        "gender": "Male",
        "customer_type": "Loyal Customer",
        "travel_type": "Personal Travel",
        "class": "Eco",
        "flight_distance": 719,
        "satisfaction": "neutral or dissatisfied",
        "service_ratings": {
          "Inflight wifi service": 4,
          "Departure/Arrival time convenient": 4,
          "Ease of Online booking": 4,
          "Gate location": 1,
          "Food and drink": 5,
          "Online boarding": 4,
          "Seat comfort": 5,
          "Inflight entertainment": 5,
          "On-board service": 3,
          "Leg room service": 2,
          "Baggage handling": 4,
          "Checkin service": 4,
          "Inflight service": 5,
          "Cleanliness": 5
        },
        "delays": {
          "departure": 27.0,
          "arrival": 28.0
        },
        "similar_passenger_ids": [
          70172,
          121598,
          30089
        ],
        "avg_rating": 3.9285714285714284
      },
      {
        "id": 75460,
        "age": 22,
        "gender": "Male",
        "customer_type": "Loyal Customer",
        "travel_type": "Personal Travel",
        "class": "Eco",
        "flight_distance": 2342,
        "satisfaction": "neutral or dissatisfied",
        "service_ratings": {
          "Inflight wifi service": 3,
          "Departure/Arrival time convenient": 2,
          "Ease of Online booking": 3,
          "Gate location": 3,
          "Food and drink": 3,
          "Online boarding": 3,
          "Seat comfort": 1,
          "Inflight entertainment": 3,
          "On-board service": 2,
          "Leg room service": 4,
          "Baggage handling": 3,
          "Checkin service": 4,
          "Inflight service": 2,
          "Cleanliness": 3
        },
        "delays": {
          "departure": 19.0,
          "arrival": 0.0
        },
        "similar_passenger_ids": [
          2201,
          121598,
          83502
        ],
        "avg_rating": 2.7857142857142856
      },
      {
        "id": 30089,
        "age": 67,
        "gender": "Female",
        "customer_type": "Loyal Customer",
        "travel_type": "Personal Travel",
        "class": "Eco",
        "flight_distance": 1192,
        "satisfaction": "neutral or dissatisfied",
        "service_ratings": {
          "Inflight wifi service": 4,
          "Departure/Arrival time convenient": 5,
          "Ease of Online booking": 4,
          "Gate location": 1,
          "Food and drink": 2,
          "Online boarding": 4,
          "Seat comfort": 5,
          "Inflight entertainment": 5,
          "On-board service": 5,
          "Leg room service": 4,
          "Baggage handling": 3,
          "Checkin service": 5,
          "Inflight service": 5,
          "Cleanliness": 5
        },
        "delays": {
          "departure": 18.0,
          "arrival": 24.0
        },
        "similar_passenger_ids": [
          96517,
          121598,
          70172
        ],
        "avg_rating": 4.071428571428571
      },
      {
        "id": 48014,
        "age": 40,
        "gender": "Male",
        "customer_type": "Loyal Customer",
        "travel_type": "Personal Travel",
        "class": "Eco Plus",
        "flight_distance": 550,
        "satisfaction": "neutral or dissatisfied",
        "service_ratings": {
          "Inflight wifi service": 4,
          "Departure/Arrival time convenient": 3,
          "Ease of Online booking": 4,
          "Gate location": 2,
          "Food and drink": 2,
          "Online boarding": 4,
          "Seat comfort": 2,
          "Inflight entertainment": 2,
          "On-board service": 5,
          "Leg room service": 1,
          "Baggage handling": 4,
          "Checkin service": 3,
          "Inflight service": 4,
          "Cleanliness": 2
        },
        "delays": {
          "departure": 23.0,
          "arrival": 20.0
        },
        "similar_passenger_ids": [
          121598,
          108006,
          96517
        ],
        "avg_rating": 3.0
      },
      {
        "id": 82042,
        "age": 21,
        "gender": "Male",
        "customer_type": "Loyal Customer",
        "travel_type": "Personal Travel",
        "class": "Eco",
        "flight_distance": 1454,
        "satisfaction": "neutral or dissatisfied",
        "service_ratings": {
          "Inflight wifi service": 2,
          "Departure/Arrival time convenient": 2,
          "Ease of Online booking": 2,
          "Gate location": 3,
          "Food and drink": 5,
          "Online boarding": 2,
          "Seat comfort": 5,
          "Inflight entertainment": 5,
          "On-board service": 2,
          "Leg room service": 3,
          "Baggage handling": 3,
          "Checkin service": 1,
          "Inflight service": 3,
          "Cleanliness": 5
        },
        "delays": {
          "departure": 0.0,
          "arrival": 0.0
        },
        "similar_passenger_ids": [
          22434,
          66246,
          70172
        ],
        "avg_rating": 3.0714285714285716
      },
      {
        "id": 54886,
        "age": 35,
        "gender": "Male",
        "customer_type": "Loyal Customer",
        "travel_type": "Personal Travel",
        "class": "Eco",
        "flight_distance": 775,
        "satisfaction": "neutral or dissatisfied",
        "service_ratings": {
          "Inflight wifi service": 2,
          "Departure/Arrival time convenient": 3,
          "Ease of Online booking": 2,
          "Gate location": 4,
          "Food and drink": 4,
          "Online boarding": 2,
          "Seat comfort": 4,
          "Inflight entertainment": 4,
          "On-board service": 4,
          "Leg room service": 4,
          "Baggage handling": 3,
          "Checkin service": 4,
          "Inflight service": 1,
          "Cleanliness": 4
        },
        "delays": {
          "departure": 1.0,
          "arrival": 0.0
        },
        "similar_passenger_ids": [
          2201,
          43510,
          83502
        ],
        "avg_rating": 3.2142857142857144
      }
    ],
    "Premium Business": [
      {
        "id": 110028,
        "age": 26,
        "gender": "Female",
        "customer_type": "Loyal Customer",
        "travel_type": "Business travel",
        "class": "Business",
        "flight_distance": 1142,
        "satisfaction": "satisfied",
        "service_ratings": {
          "Inflight wifi service": 2,
          "Departure/Arrival time convenient": 2,
          "Ease of Online booking": 2,
          "Gate location": 2,
          "Food and drink": 5,
          "Online boarding": 5,
          "Seat comfort": 5,
          "Inflight entertainment": 5,
          "On-board service": 4,
          "Leg room service": 3,
          "Baggage handling": 4,
          "Checkin service": 4,
          "Inflight service": 4,
          "Cleanliness": 5
        },
        "delays": {
          "departure": 0.0,
          "arrival": 0.0
        },
        "similar_passenger_ids": [
          124114,
          103012,
          71142
        ],
        "avg_rating": 3.7142857142857144
      },
      {
        "id": 119299,
        "age": 61,
        "gender": "Male",
        "customer_type": "Loyal Customer",
        "travel_type": "Business travel",
        "class": "Business",
        "flight_distance": 214,
        "satisfaction": "satisfied",
        "service_ratings": {
          "Inflight wifi service": 3,
          "Departure/Arrival time convenient": 3,
          "Ease of Online booking": 3,
          "Gate location": 3,
          "Food and drink": 4,
          "Online boarding": 5,
          "Seat comfort": 5,
          "Inflight entertainment": 3,
          "On-board service": 3,
          "Leg room service": 4,
          "Baggage handling": 4,
          "Checkin service": 3,
          "Inflight service": 3,
          "Cleanliness": 3
        },
        "delays": {
          "departure": 0.0,
          "arrival": 0.0
        },
        "similar_passenger_ids": [
          64138,
          96462,
          70594
        ],
        "avg_rating": 3.5
      },
      {
        "id": 96462,
        "age": 52,
        "gender": "Female",
        "customer_type": "Loyal Customer",
        "travel_type": "Business travel",
        "class": "Business",
        "flight_distance": 2035,
        "satisfaction": "satisfied",
        "service_ratings": {
          "Inflight wifi service": 4,
          "Departure/Arrival time convenient": 3,
          "Ease of Online booking": 4,
          "Gate location": 4,
          "Food and drink": 5,
          "Online boarding": 5,
          "Seat comfort": 5,
          "Inflight entertainment": 5,
          "On-board service": 5,
          "Leg room service": 5,
          "Baggage handling": 5,
          "Checkin service": 4,
          "Inflight service": 5,
          "Cleanliness": 4
        },
        "delays": {
          "departure": 4.0,
          "arrival": 0.0
        },
        "similar_passenger_ids": [
          70354,
          64138,
          71142
        ],
        "avg_rating": 4.5
      },
      {
        "id": 71142,
        "age": 26,
        "gender": "Female",
        "customer_type": "Loyal Customer",
        "travel_type": "Business travel",
        "class": "Business",
        "flight_distance": 2123,
        "satisfaction": "satisfied",
        "service_ratings": {
          "Inflight wifi service": 3,
          "Departure/Arrival time convenient": 3,
          "Ease of Online booking": 3,
          "Gate location": 3,
          "Food and drink": 4,
          "Online boarding": 4,
          "Seat comfort": 4,
          "Inflight entertainment": 4,
          "On-board service": 5,
          "Leg room service": 3,
          "Baggage handling": 4,
          "Checkin service": 5,
          "Inflight service": 4,
          "Cleanliness": 4
        },
        "delays": {
          "departure": 49.0,
          "arrival": 51.0
        },
        "similar_passenger_ids": [
          96462,
          110293,
          64138
        ],
        "avg_rating": 3.7857142857142856
      },
      {
        "id": 127461,
        "age": 41,
        "gender": "Male",
        "customer_type": "Loyal Customer",
        "travel_type": "Business travel",
        "class": "Business",
        "flight_distance": 2075,
        "satisfaction": "satisfied",
        "service_ratings": {
          "Inflight wifi service": 4,
          "Departure/Arrival time convenient": 4,
          "Ease of Online booking": 2,
          "Gate location": 4,
          "Food and drink": 4,
          "Online boarding": 4,
          "Seat comfort": 4,
          "Inflight entertainment": 5,
          "On-board service": 5,
          "Leg room service": 5,
          "Baggage handling": 5,
          "Checkin service": 3,
          "Inflight service": 5,
          "Cleanliness": 5
        },
        "delays": {
          "departure": 0.0,
          "arrival": 10.0
        },
        "similar_passenger_ids": [
          70354,
          96462,
          110293
        ],
        "avg_rating": 4.214285714285714
      },
      {
        "id": 70354,
        "age": 45,
        "gender": "Female",
        "customer_type": "Loyal Customer",
        "travel_type": "Business travel",
        "class": "Business",
        "flight_distance": 2486,
        "satisfaction": "satisfied",
        "service_ratings": {
          "Inflight wifi service": 4,
          "Departure/Arrival time convenient": 4,
          "Ease of Online booking": 4,
          "Gate location": 4,
          "Food and drink": 3,
          "Online boarding": 4,
          "Seat comfort": 5,
          "Inflight entertainment": 5,
          "On-board service": 5,
          "Leg room service": 5,
          "Baggage handling": 5,
          "Checkin service": 3,
          "Inflight service": 5,
          "Cleanliness": 4
        },
        "delays": {
          "departure": 7.0,
          "arrival": 5.0
        },
        "similar_passenger_ids": [
          96462,
          127461,
          64138
        ],
        "avg_rating": 4.285714285714286
      },
      {
        "id": 18510,
        "age": 33,
        "gender": "Female",
        "customer_type": "Loyal Customer",
        "travel_type": "Business travel",
        "class": "Business",
        "flight_distance": 1561,
        "satisfaction": "satisfied",
        "service_ratings": {
          "Inflight wifi service": 1,
          "Departure/Arrival time convenient": 1,
          "Ease of Online booking": 1,
          "Gate location": 1,
          "Food and drink": 1,
          "Online boarding": 5,
          "Seat comfort": 3,
          "Inflight entertainment": 4,
          "On-board service": 4,
          "Leg room service": 4,
          "Baggage handling": 3,
          "Checkin service": 5,
          "Inflight service": 4,
          "Cleanliness": 2
        },
        "delays": {
          "departure": 0.0,
          "arrival": 0.0
        },
        "similar_passenger_ids": [
          14849,
          103012,
          92242
        ],
        "avg_rating": 2.7857142857142856
      },
      {
        "id": 48492,
        "age": 31,
        "gender": "Female",
        "customer_type": "Loyal Customer",
        "travel_type": "Business travel",
        "class": "Business",
        "flight_distance": 819,
        "satisfaction": "satisfied",
        "service_ratings": {
          "Inflight wifi service": 4,
          "Departure/Arrival time convenient": 4,
          "Ease of Online booking": 4,
          "Gate location": 4,
          "Food and drink": 5,
          "Online boarding": 5,
          "Seat comfort": 5,
          "Inflight entertainment": 5,
          "On-board service": 5,
          "Leg room service": 4,
          "Baggage handling": 3,
          "Checkin service": 1,
          "Inflight service": 5,
          "Cleanliness": 5
        },
        "delays": {
          "departure": 0.0,
          "arrival": 0.0
        },
        "similar_passenger_ids": [
          96462,
          70354,
          121358
        ],
        "avg_rating": 4.214285714285714
      },
      {
        "id": 70594,
        "age": 35,
        "gender": "Female",
        "customer_type": "Loyal Customer",
        "travel_type": "Business travel",
        "class": "Business",
        "flight_distance": 2611,
        "satisfaction": "satisfied",
        "service_ratings": {
          "Inflight wifi service": 4,
          "Departure/Arrival time convenient": 5,
          "Ease of Online booking": 4,
          "Gate location": 4,
          "Food and drink": 4,
          "Online boarding": 4,
          "Seat comfort": 4,
          "Inflight entertainment": 3,
          "On-board service": 3,
          "Leg room service": 4,
          "Baggage handling": 5,
          "Checkin service": 4,
          "Inflight service": 3,
          "Cleanliness": 4
        },
        "delays": {
          "departure": 109.0,
          "arrival": 120.0
        },
        "similar_passenger_ids": [
          64138,
          119299,
          60373
        ],
        "avg_rating": 3.9285714285714284
      },
      {
        "id": 64138,
        "age": 39,
        "gender": "Male",
        "customer_type": "Loyal Customer",
        "travel_type": "Business travel",
        "class": "Business",
        "flight_distance": 1734,
        "satisfaction": "satisfied",
        "service_ratings": {
          "Inflight wifi service": 4,
          "Departure/Arrival time convenient": 4,
          "Ease of Online booking": 4,
          "Gate location": 4,
          "Food and drink": 3,
          "Online boarding": 5,
          "Seat comfort": 5,
          "Inflight entertainment": 4,
          "On-board service": 4,
          "Leg room service": 4,
          "Baggage handling": 4,
          "Checkin service": 4,
          "Inflight service": 4,
          "Cleanliness": 3
        },
        "delays": {
          "departure": 0.0,
          "arrival": 0.0
        },
        "similar_passenger_ids": [
          70354,
          96462,
          119299
        ],
        "avg_rating": 4.0
      },
      {
        "id": 14849,
        "age": 41,
        "gender": "Male",
        "customer_type": "Loyal Customer",
        "travel_type": "Business travel",
        "class": "Business",
        "flight_distance": 296,
        "satisfaction": "satisfied",
        "service_ratings": {
          "Inflight wifi service": 0,
          "Departure/Arrival time convenient": 0,
          "Ease of Online booking": 0,
          "Gate location": 3,
          "Food and drink": 2,
          "Online boarding": 5,
          "Seat comfort": 3,
          "Inflight entertainment": 4,
          "On-board service": 4,
          "Leg room service": 4,
          "Baggage handling": 4,
          "Checkin service": 4,
          "Inflight service": 4,
          "Cleanliness": 3
        },
        "delays": {
          "departure": 0.0,
          "arrival": 0.0
        },
        "similar_passenger_ids": [
          18510,
          103012,
          124114
        ],
        "avg_rating": 2.857142857142857
      },
      {
        "id": 28319,
        "age": 38,
        "gender": "Female",
        "customer_type": "Loyal Customer",
        "travel_type": "Business travel",
        "class": "Business",
        "flight_distance": 2882,
        "satisfaction": "satisfied",
        "service_ratings": {
          "Inflight wifi service": 3,
          "Departure/Arrival time convenient": 3,
          "Ease of Online booking": 3,
          "Gate location": 3,
          "Food and drink": 2,
          "Online boarding": 1,
          "Seat comfort": 4,
          "Inflight entertainment": 5,
          "On-board service": 5,
          "Leg room service": 5,
          "Baggage handling": 5,
          "Checkin service": 2,
          "Inflight service": 5,
          "Cleanliness": 4
        },
        "delays": {
          "departure": 0.0,
          "arrival": 0.0
        },
        "similar_passenger_ids": [
          70354,
          127461,
          53164
        ],
        "avg_rating": 3.5714285714285716
      },
      {
        "id": 103012,
        "age": 50,
        "gender": "Female",
        "customer_type": "Loyal Customer",
        "travel_type": "Business travel",
        "class": "Business",
        "flight_distance": 460,
        "satisfaction": "satisfied",
        "service_ratings": {
          "Inflight wifi service": 1,
          "Departure/Arrival time convenient": 1,
          "Ease of Online booking": 1,
          "Gate location": 1,
          "Food and drink": 3,
          "Online boarding": 5,
          "Seat comfort": 5,
          "Inflight entertainment": 3,
          "On-board service": 3,
          "Leg room service": 3,
          "Baggage handling": 3,
          "Checkin service": 4,
          "Inflight service": 3,
          "Cleanliness": 5
        },
        "delays": {
          "departure": 1.0,
          "arrival": 15.0
        },
        "similar_passenger_ids": [
          110028,
          124114,
          71142
        ],
        "avg_rating": 2.9285714285714284
      },
      {
        "id": 124114,
        "age": 29,
        "gender": "Male",
        "customer_type": "Loyal Customer",
        "travel_type": "Business travel",
        "class": "Business",
        "flight_distance": 529,
        "satisfaction": "satisfied",
        "service_ratings": {
          "Inflight wifi service": 1,
          "Departure/Arrival time convenient": 1,
          "Ease of Online booking": 1,
          "Gate location": 1,
          "Food and drink": 5,
          "Online boarding": 5,
          "Seat comfort": 5,
          "Inflight entertainment": 5,
          "On-board service": 4,
          "Leg room service": 2,
          "Baggage handling": 5,
          "Checkin service": 5,
          "Inflight service": 4,
          "Cleanliness": 5
        },
        "delays": {
          "departure": 4.0,
          "arrival": 0.0
        },
        "similar_passenger_ids": [
          110028,
          103012,
          71142
        ],
        "avg_rating": 3.5
      },
      {
        "id": 53164,
        "age": 54,
        "gender": "Male",
        "customer_type": "Loyal Customer",
        "travel_type": "Business travel",
        "class": "Business",
        "flight_distance": 612,
        "satisfaction": "satisfied",
        "service_ratings": {
          "Inflight wifi service": 3,
          "Departure/Arrival time convenient": 3,
          "Ease of Online booking": 3,
          "Gate location": 3,
          "Food and drink": 5,
          "Online boarding": 2,
          "Seat comfort": 3,
          "Inflight entertainment": 5,
          "On-board service": 5,
          "Leg room service": 5,
          "Baggage handling": 5,
          "Checkin service": 4,
          "Inflight service": 5,
          "Cleanliness": 3
        },
        "delays": {
          "departure": 8.0,
          "arrival": 0.0
        },
        "similar_passenger_ids": [
          110293,
          96462,
          127461
        ],
        "avg_rating": 3.857142857142857
      },
      {
        "id": 5047,
        "age": 25,
        "gender": "Male",
        "customer_type": "disloyal Customer",
        "travel_type": "Business travel",
        "class": "Business",
        "flight_distance": 235,
        "satisfaction": "neutral or dissatisfied",
        "service_ratings": {
          "Inflight wifi service": 3,
          "Departure/Arrival time convenient": 2,
          "Ease of Online booking": 3,
          "Gate location": 3,
          "Food and drink": 1,
          "Online boarding": 3,
          "Seat comfort": 1,
          "Inflight entertainment": 1,
          "On-board service": 1,
          "Leg room service": 5,
          "Baggage handling": 3,
          "Checkin service": 1,
          "Inflight service": 4,
          "Cleanliness": 1
        },
        "delays": {
          "departure": 1.0,
          "arrival": 6.0
        },
        "similar_passenger_ids": [
          24026,
          70354,
          81983
        ],
        "avg_rating": 2.2857142857142856
      },
      {
        "id": 24026,
        "age": 25,
        "gender": "Female",
        "customer_type": "Loyal Customer",
        "travel_type": "Business travel",
        "class": "Business",
        "flight_distance": 562,
        "satisfaction": "neutral or dissatisfied",
        "service_ratings": {
          "Inflight wifi service": 2,
          "Departure/Arrival time convenient": 5,
          "Ease of Online booking": 5,
          "Gate location": 5,
          "Food and drink": 2,
          "Online boarding": 2,
          "Seat comfort": 2,
          "Inflight entertainment": 2,
          "On-board service": 2,
          "Leg room service": 5,
          "Baggage handling": 3,
          "Checkin service": 1,
          "Inflight service": 4,
          "Cleanliness": 2
        },
        "delays": {
          "departure": 11.0,
          "arrival": 9.0
        },
        "similar_passenger_ids": [
          5047,
          70594,
          60373
        ],
        "avg_rating": 3.0
      },
      {
        "id": 79485,
        "age": 41,
        "gender": "Female",
        "customer_type": "Loyal Customer",
        "travel_type": "Business travel",
        "class": "Business",
        "flight_distance": 853,
        "satisfaction": "neutral or dissatisfied",
        "service_ratings": {
          "Inflight wifi service": 1,
          "Departure/Arrival time convenient": 2,
          "Ease of Online booking": 2,
          "Gate location": 2,
          "Food and drink": 4,
          "Online boarding": 3,
          "Seat comfort": 3,
          "Inflight entertainment": 1,
          "On-board service": 1,
          "Leg room service": 2,
          "Baggage handling": 1,
          "Checkin service": 4,
          "Inflight service": 1,
          "Cleanliness": 2
        },
        "delays": {
          "departure": 0.0,
          "arrival": 0.0
        },
        "similar_passenger_ids": [
          119299,
          70594,
          71142
        ],
        "avg_rating": 2.0714285714285716
      },
      {
        "id": 118319,
        "age": 36,
        "gender": "Female",
        "customer_type": "Loyal Customer",
        "travel_type": "Business travel",
        "class": "Business",
        "flight_distance": 3347,
        "satisfaction": "neutral or dissatisfied",
        "service_ratings": {
          "Inflight wifi service": 3,
          "Departure/Arrival time convenient": 1,
          "Ease of Online booking": 1,
          "Gate location": 1,
          "Food and drink": 1,
          "Online boarding": 2,
          "Seat comfort": 1,
          "Inflight entertainment": 3,
          "On-board service": 3,
          "Leg room service": 3,
          "Baggage handling": 3,
          "Checkin service": 2,
          "Inflight service": 3,
          "Cleanliness": 2
        },
        "delays": {
          "departure": 18.0,
          "arrival": 12.0
        },
        "similar_passenger_ids": [
          127461,
          53164,
          28319
        ],
        "avg_rating": 2.0714285714285716
      },
      {
        "id": 58779,
        "age": 37,
        "gender": "Male",
        "customer_type": "disloyal Customer",
        "travel_type": "Business travel",
        "class": "Business",
        "flight_distance": 1182,
        "satisfaction": "neutral or dissatisfied",
        "service_ratings": {
          "Inflight wifi service": 3,
          "Departure/Arrival time convenient": 3,
          "Ease of Online booking": 3,
          "Gate location": 4,
          "Food and drink": 1,
          "Online boarding": 3,
          "Seat comfort": 1,
          "Inflight entertainment": 1,
          "On-board service": 4,
          "Leg room service": 1,
          "Baggage handling": 3,
          "Checkin service": 1,
          "Inflight service": 4,
          "Cleanliness": 1
        },
        "delays": {
          "departure": 9.0,
          "arrival": 0.0
        },
        "similar_passenger_ids": [
          60373,
          64138,
          70354
        ],
        "avg_rating": 2.357142857142857
      },
      {
        "id": 110293,
        "age": 34,
        "gender": "Female",
        "customer_type": "disloyal Customer",
        "travel_type": "Business travel",
        "class": "Business",
        "flight_distance": 883,
        "satisfaction": "neutral or dissatisfied",
        "service_ratings": {
          "Inflight wifi service": 3,
          "Departure/Arrival time convenient": 4,
          "Ease of Online booking": 4,
          "Gate location": 3,
          "Food and drink": 5,
          "Online boarding": 4,
          "Seat comfort": 2,
          "Inflight entertainment": 5,
          "On-board service": 5,
          "Leg room service": 4,
          "Baggage handling": 5,
          "Checkin service": 4,
          "Inflight service": 5,
          "Cleanliness": 5
        },
        "delays": {
          "departure": 0.0,
          "arrival": 0.0
        },
        "similar_passenger_ids": [
          53164,
          71142,
          127461
        ],
        "avg_rating": 4.142857142857143
      },
      {
        "id": 64685,
        "age": 41,
        "gender": "Male",
        "customer_type": "disloyal Customer",
        "travel_type": "Business travel",
        "class": "Business",
        "flight_distance": 354,
        "satisfaction": "neutral or dissatisfied",
        "service_ratings": {
          "Inflight wifi service": 1,
          "Departure/Arrival time convenient": 1,
          "Ease of Online booking": 1,
          "Gate location": 2,
          "Food and drink": 1,
          "Online boarding": 1,
          "Seat comfort": 1,
          "Inflight entertainment": 1,
          "On-board service": 3,
          "Leg room service": 3,
          "Baggage handling": 4,
          "Checkin service": 4,
          "Inflight service": 4,
          "Cleanliness": 1
        },
        "delays": {
          "departure": 0.0,
          "arrival": 0.0
        },
        "similar_passenger_ids": [
          60373,
          92242,
          53164
        ],
        "avg_rating": 2.0
      },
      {
        "id": 60373,
        "age": 25,
        "gender": "Female",
        "customer_type": "disloyal Customer",
        "travel_type": "Business travel",
        "class": "Business",
        "flight_distance": 1452,
        "satisfaction": "neutral or dissatisfied",
        "service_ratings": {
          "Inflight wifi service": 3,
          "Departure/Arrival time convenient": 5,
          "Ease of Online booking": 3,
          "Gate location": 4,
          "Food and drink": 3,
          "Online boarding": 3,
          "Seat comfort": 3,
          "Inflight entertainment": 3,
          "On-board service": 4,
          "Leg room service": 4,
          "Baggage handling": 5,
          "Checkin service": 5,
          "Inflight service": 5,
          "Cleanliness": 3
        },
        "delays": {
          "departure": 9.0,
          "arrival": 23.0
        },
        "similar_passenger_ids": [
          70594,
          64138,
          71142
        ],
        "avg_rating": 3.7857142857142856
      },
      {
        "id": 81983,
        "age": 13,
        "gender": "Female",
        "customer_type": "Loyal Customer",
        "travel_type": "Business travel",
        "class": "Business",
        "flight_distance": 1522,
        "satisfaction": "neutral or dissatisfied",
        "service_ratings": {
          "Inflight wifi service": 1,
          "Departure/Arrival time convenient": 1,
          "Ease of Online booking": 1,
          "Gate location": 1,
          "Food and drink": 1,
          "Online boarding": 1,
          "Seat comfort": 1,
          "Inflight entertainment": 1,
          "On-board service": 3,
          "Leg room service": 5,
          "Baggage handling": 3,
          "Checkin service": 1,
          "Inflight service": 4,
          "Cleanliness": 1
        },
        "delays": {
          "departure": 0.0,
          "arrival": 0.0
        },
        "similar_passenger_ids": [
          64685,
          92242,
          28319
        ],
        "avg_rating": 1.7857142857142858
      },
      {
        "id": 114501,
        "age": 38,
        "gender": "Female",
        "customer_type": "disloyal Customer",
        "travel_type": "Business travel",
        "class": "Business",
        "flight_distance": 308,
        "satisfaction": "neutral or dissatisfied",
        "service_ratings": {
          "Inflight wifi service": 3,
          "Departure/Arrival time convenient": 3,
          "Ease of Online booking": 3,
          "Gate location": 3,
          "Food and drink": 4,
          "Online boarding": 3,
          "Seat comfort": 4,
          "Inflight entertainment": 4,
          "On-board service": 1,
          "Leg room service": 1,
          "Baggage handling": 4,
          "Checkin service": 2,
          "Inflight service": 3,
          "Cleanliness": 4
        },
        "delays": {
          "departure": 39.0,
          "arrival": 26.0
        },
        "similar_passenger_ids": [
          121358,
          32167,
          70594
        ],
        "avg_rating": 3.0
      },
      {
        "id": 32167,
        "age": 39,
        "gender": "Male",
        "customer_type": "disloyal Customer",
        "travel_type": "Business travel",
        "class": "Business",
        "flight_distance": 216,
        "satisfaction": "neutral or dissatisfied",
        "service_ratings": {
          "Inflight wifi service": 2,
          "Departure/Arrival time convenient": 2,
          "Ease of Online booking": 2,
          "Gate location": 3,
          "Food and drink": 3,
          "Online boarding": 2,
          "Seat comfort": 3,
          "Inflight entertainment": 3,
          "On-board service": 2,
          "Leg room service": 1,
          "Baggage handling": 4,
          "Checkin service": 2,
          "Inflight service": 4,
          "Cleanliness": 3
        },
        "delays": {
          "departure": 0.0,
          "arrival": 0.0
        },
        "similar_passenger_ids": [
          121358,
          114501,
          96462
        ],
        "avg_rating": 2.5714285714285716
      },
      {
        "id": 112142,
        "age": 39,
        "gender": "Male",
        "customer_type": "disloyal Customer",
        "travel_type": "Business travel",
        "class": "Business",
        "flight_distance": 895,
        "satisfaction": "neutral or dissatisfied",
        "service_ratings": {
          "Inflight wifi service": 2,
          "Departure/Arrival time convenient": 2,
          "Ease of Online booking": 2,
          "Gate location": 4,
          "Food and drink": 5,
          "Online boarding": 2,
          "Seat comfort": 5,
          "Inflight entertainment": 5,
          "On-board service": 5,
          "Leg room service": 4,
          "Baggage handling": 4,
          "Checkin service": 5,
          "Inflight service": 5,
          "Cleanliness": 5
        },
        "delays": {
          "departure": 0.0,
          "arrival": 2.0
        },
        "similar_passenger_ids": [
          71142,
          53164,
          92242
        ],
        "avg_rating": 3.9285714285714284
      },
      {
        "id": 85018,
        "age": 52,
        "gender": "Male",
        "customer_type": "Loyal Customer",
        "travel_type": "Business travel",
        "class": "Business",
        "flight_distance": 1190,
        "satisfaction": "neutral or dissatisfied",
        "service_ratings": {
          "Inflight wifi service": 2,
          "Departure/Arrival time convenient": 4,
          "Ease of Online booking": 4,
          "Gate location": 4,
          "Food and drink": 1,
          "Online boarding": 4,
          "Seat comfort": 3,
          "Inflight entertainment": 2,
          "On-board service": 2,
          "Leg room service": 2,
          "Baggage handling": 2,
          "Checkin service": 1,
          "Inflight service": 2,
          "Cleanliness": 4
        },
        "delays": {
          "departure": 0.0,
          "arrival": 6.0
        },
        "similar_passenger_ids": [
          70594,
          64138,
          48492
        ],
        "avg_rating": 2.642857142857143
      },
      {
        "id": 92242,
        "age": 41,
        "gender": "Female",
        "customer_type": "disloyal Customer",
        "travel_type": "Business travel",
        "class": "Business",
        "flight_distance": 1670,
        "satisfaction": "neutral or dissatisfied",
        "service_ratings": {
          "Inflight wifi service": 2,
          "Departure/Arrival time convenient": 1,
          "Ease of Online booking": 1,
          "Gate location": 2,
          "Food and drink": 3,
          "Online boarding": 2,
          "Seat comfort": 4,
          "Inflight entertainment": 3,
          "On-board service": 3,
          "Leg room service": 5,
          "Baggage handling": 3,
          "Checkin service": 4,
          "Inflight service": 5,
          "Cleanliness": 3
        },
        "delays": {
          "departure": 0.0,
          "arrival": 0.0
        },
        "similar_passenger_ids": [
          112142,
          53164,
          96462
        ],
        "avg_rating": 2.9285714285714284
      },
      {
        "id": 121358,
        "age": 44,
        "gender": "Female",
        "customer_type": "disloyal Customer",
        "travel_type": "Business travel",
        "class": "Business",
        "flight_distance": 1670,
        "satisfaction": "neutral or dissatisfied",
        "service_ratings": {
          "Inflight wifi service": 3,
          "Departure/Arrival time convenient": 3,
          "Ease of Online booking": 3,
          "Gate location": 4,
          "Food and drink": 5,
          "Online boarding": 3,
          "Seat comfort": 5,
          "Inflight entertainment": 5,
          "On-board service": 3,
          "Leg room service": 2,
          "Baggage handling": 4,
          "Checkin service": 2,
          "Inflight service": 4,
          "Cleanliness": 5
        },
        "delays": {
          "departure": 0.0,
          "arrival": 8.0
        },
        "similar_passenger_ids": [
          114501,
          32167,
          48492
        ],
        "avg_rating": 3.642857142857143
      }
    ],
    "Business Economy": [
      {
        "id": 105420,
        "age": 23,
        "gender": "Female",
        "customer_type": "disloyal Customer",
        "travel_type": "Business travel",
        "class": "Eco",
        "flight_distance": 452,
        "satisfaction": "satisfied",
        "service_ratings": {
          "Inflight wifi service": 5,
          "Departure/Arrival time convenient": 0,
          "Ease of Online booking": 5,
          "Gate location": 1,
          "Food and drink": 1,
          "Online boarding": 5,
          "Seat comfort": 1,
          "Inflight entertainment": 1,
          "On-board service": 4,
          "Leg room service": 5,
          "Baggage handling": 5,
          "Checkin service": 3,
          "Inflight service": 5,
          "Cleanliness": 1
        },
        "delays": {
          "departure": 54.0,
          "arrival": 44.0
        },
        "similar_passenger_ids": [
          34991,
          72127,
          115534
        ],
        "avg_rating": 3.0
      },
      {
        "id": 14925,
        "age": 49,
        "gender": "Female",
        "customer_type": "Loyal Customer",
        "travel_type": "Business travel",
        "class": "Eco Plus",
        "flight_distance": 315,
        "satisfaction": "satisfied",
        "service_ratings": {
          "Inflight wifi service": 4,
          "Departure/Arrival time convenient": 4,
          "Ease of Online booking": 4,
          "Gate location": 4,
          "Food and drink": 2,
          "Online boarding": 2,
          "Seat comfort": 1,
          "Inflight entertainment": 4,
          "On-board service": 4,
          "Leg room service": 4,
          "Baggage handling": 4,
          "Checkin service": 2,
          "Inflight service": 4,
          "Cleanliness": 2
        },
        "delays": {
          "departure": 0.0,
          "arrival": 8.0
        },
        "similar_passenger_ids": [
          1050,
          30183,
          52168
        ],
        "avg_rating": 3.2142857142857144
      },
      {
        "id": 1050,
        "age": 69,
        "gender": "Female",
        "customer_type": "Loyal Customer",
        "travel_type": "Business travel",
        "class": "Eco",
        "flight_distance": 309,
        "satisfaction": "satisfied",
        "service_ratings": {
          "Inflight wifi service": 5,
          "Departure/Arrival time convenient": 5,
          "Ease of Online booking": 5,
          "Gate location": 5,
          "Food and drink": 1,
          "Online boarding": 2,
          "Seat comfort": 3,
          "Inflight entertainment": 5,
          "On-board service": 5,
          "Leg room service": 5,
          "Baggage handling": 5,
          "Checkin service": 4,
          "Inflight service": 5,
          "Cleanliness": 2
        },
        "delays": {
          "departure": 0.0,
          "arrival": 0.0
        },
        "similar_passenger_ids": [
          14925,
          52168,
          65725
        ],
        "avg_rating": 4.071428571428571
      },
      {
        "id": 9261,
        "age": 38,
        "gender": "Female",
        "customer_type": "Loyal Customer",
        "travel_type": "Business travel",
        "class": "Eco Plus",
        "flight_distance": 157,
        "satisfaction": "satisfied",
        "service_ratings": {
          "Inflight wifi service": 4,
          "Departure/Arrival time convenient": 4,
          "Ease of Online booking": 4,
          "Gate location": 4,
          "Food and drink": 4,
          "Online boarding": 4,
          "Seat comfort": 4,
          "Inflight entertainment": 4,
          "On-board service": 3,
          "Leg room service": 3,
          "Baggage handling": 1,
          "Checkin service": 1,
          "Inflight service": 4,
          "Cleanliness": 4
        },
        "delays": {
          "departure": 0.0,
          "arrival": 0.0
        },
        "similar_passenger_ids": [
          42267,
          30704,
          91330
        ],
        "avg_rating": 3.4285714285714284
      },
      {
        "id": 91330,
        "age": 31,
        "gender": "Male",
        "customer_type": "Loyal Customer",
        "travel_type": "Business travel",
        "class": "Eco Plus",
        "flight_distance": 404,
        "satisfaction": "satisfied",
        "service_ratings": {
          "Inflight wifi service": 4,
          "Departure/Arrival time convenient": 4,
          "Ease of Online booking": 4,
          "Gate location": 4,
          "Food and drink": 4,
          "Online boarding": 4,
          "Seat comfort": 4,
          "Inflight entertainment": 4,
          "On-board service": 1,
          "Leg room service": 2,
          "Baggage handling": 2,
          "Checkin service": 4,
          "Inflight service": 2,
          "Cleanliness": 4
        },
        "delays": {
          "departure": 17.0,
          "arrival": 3.0
        },
        "similar_passenger_ids": [
          42267,
          45561,
          30704
        ],
        "avg_rating": 3.357142857142857
      },
      {
        "id": 30183,
        "age": 51,
        "gender": "Female",
        "customer_type": "Loyal Customer",
        "travel_type": "Business travel",
        "class": "Eco Plus",
        "flight_distance": 261,
        "satisfaction": "satisfied",
        "service_ratings": {
          "Inflight wifi service": 5,
          "Departure/Arrival time convenient": 4,
          "Ease of Online booking": 4,
          "Gate location": 4,
          "Food and drink": 4,
          "Online boarding": 3,
          "Seat comfort": 1,
          "Inflight entertainment": 5,
          "On-board service": 5,
          "Leg room service": 5,
          "Baggage handling": 5,
          "Checkin service": 1,
          "Inflight service": 5,
          "Cleanliness": 1
        },
        "delays": {
          "departure": 0.0,
          "arrival": 0.0
        },
        "similar_passenger_ids": [
          14925,
          1050,
          52168
        ],
        "avg_rating": 3.7142857142857144
      },
      {
        "id": 41652,
        "age": 61,
        "gender": "Female",
        "customer_type": "Loyal Customer",
        "travel_type": "Business travel",
        "class": "Eco",
        "flight_distance": 347,
        "satisfaction": "satisfied",
        "service_ratings": {
          "Inflight wifi service": 2,
          "Departure/Arrival time convenient": 5,
          "Ease of Online booking": 5,
          "Gate location": 5,
          "Food and drink": 5,
          "Online boarding": 2,
          "Seat comfort": 4,
          "Inflight entertainment": 3,
          "On-board service": 3,
          "Leg room service": 2,
          "Baggage handling": 3,
          "Checkin service": 3,
          "Inflight service": 3,
          "Cleanliness": 4
        },
        "delays": {
          "departure": 0.0,
          "arrival": 11.0
        },
        "similar_passenger_ids": [
          45561,
          91330,
          42267
        ],
        "avg_rating": 3.5
      },
      {
        "id": 15138,
        "age": 32,
        "gender": "Female",
        "customer_type": "Loyal Customer",
        "travel_type": "Business travel",
        "class": "Eco",
        "flight_distance": 1042,
        "satisfaction": "satisfied",
        "service_ratings": {
          "Inflight wifi service": 4,
          "Departure/Arrival time convenient": 1,
          "Ease of Online booking": 1,
          "Gate location": 1,
          "Food and drink": 4,
          "Online boarding": 4,
          "Seat comfort": 4,
          "Inflight entertainment": 4,
          "On-board service": 4,
          "Leg room service": 3,
          "Baggage handling": 1,
          "Checkin service": 5,
          "Inflight service": 2,
          "Cleanliness": 4
        },
        "delays": {
          "departure": 35.0,
          "arrival": 34.0
        },
        "similar_passenger_ids": [
          87681,
          72127,
          32564
        ],
        "avg_rating": 3.0
      },
      {
        "id": 45561,
        "age": 8,
        "gender": "Male",
        "customer_type": "Loyal Customer",
        "travel_type": "Business travel",
        "class": "Eco",
        "flight_distance": 1304,
        "satisfaction": "satisfied",
        "service_ratings": {
          "Inflight wifi service": 4,
          "Departure/Arrival time convenient": 4,
          "Ease of Online booking": 4,
          "Gate location": 4,
          "Food and drink": 4,
          "Online boarding": 4,
          "Seat comfort": 4,
          "Inflight entertainment": 4,
          "On-board service": 2,
          "Leg room service": 2,
          "Baggage handling": 4,
          "Checkin service": 2,
          "Inflight service": 1,
          "Cleanliness": 4
        },
        "delays": {
          "departure": 0.0,
          "arrival": 0.0
        },
        "similar_passenger_ids": [
          30704,
          91330,
          49608
        ],
        "avg_rating": 3.357142857142857
      },
      {
        "id": 104623,
        "age": 20,
        "gender": "Male",
        "customer_type": "disloyal Customer",
        "travel_type": "Business travel",
        "class": "Eco",
        "flight_distance": 861,
        "satisfaction": "satisfied",
        "service_ratings": {
          "Inflight wifi service": 0,
          "Departure/Arrival time convenient": 0,
          "Ease of Online booking": 0,
          "Gate location": 5,
          "Food and drink": 2,
          "Online boarding": 0,
          "Seat comfort": 2,
          "Inflight entertainment": 2,
          "On-board service": 4,
          "Leg room service": 3,
          "Baggage handling": 5,
          "Checkin service": 3,
          "Inflight service": 5,
          "Cleanliness": 2
        },
        "delays": {
          "departure": 0.0,
          "arrival": 0.0
        },
        "similar_passenger_ids": [
          40017,
          72127,
          115534
        ],
        "avg_rating": 2.357142857142857
      },
      {
        "id": 30704,
        "age": 26,
        "gender": "Female",
        "customer_type": "Loyal Customer",
        "travel_type": "Business travel",
        "class": "Eco Plus",
        "flight_distance": 680,
        "satisfaction": "satisfied",
        "service_ratings": {
          "Inflight wifi service": 5,
          "Departure/Arrival time convenient": 5,
          "Ease of Online booking": 5,
          "Gate location": 5,
          "Food and drink": 5,
          "Online boarding": 5,
          "Seat comfort": 5,
          "Inflight entertainment": 5,
          "On-board service": 1,
          "Leg room service": 4,
          "Baggage handling": 5,
          "Checkin service": 1,
          "Inflight service": 3,
          "Cleanliness": 5
        },
        "delays": {
          "departure": 12.0,
          "arrival": 27.0
        },
        "similar_passenger_ids": [
          45561,
          42267,
          91330
        ],
        "avg_rating": 4.214285714285714
      },
      {
        "id": 13884,
        "age": 49,
        "gender": "Male",
        "customer_type": "Loyal Customer",
        "travel_type": "Business travel",
        "class": "Eco",
        "flight_distance": 578,
        "satisfaction": "satisfied",
        "service_ratings": {
          "Inflight wifi service": 5,
          "Departure/Arrival time convenient": 1,
          "Ease of Online booking": 1,
          "Gate location": 1,
          "Food and drink": 5,
          "Online boarding": 5,
          "Seat comfort": 5,
          "Inflight entertainment": 1,
          "On-board service": 1,
          "Leg room service": 1,
          "Baggage handling": 4,
          "Checkin service": 5,
          "Inflight service": 4,
          "Cleanliness": 5
        },
        "delays": {
          "departure": 162.0,
          "arrival": 179.0
        },
        "similar_passenger_ids": [
          87681,
          15138,
          115534
        ],
        "avg_rating": 3.142857142857143
      },
      {
        "id": 87681,
        "age": 17,
        "gender": "Female",
        "customer_type": "Loyal Customer",
        "travel_type": "Business travel",
        "class": "Eco",
        "flight_distance": 606,
        "satisfaction": "satisfied",
        "service_ratings": {
          "Inflight wifi service": 5,
          "Departure/Arrival time convenient": 1,
          "Ease of Online booking": 4,
          "Gate location": 1,
          "Food and drink": 5,
          "Online boarding": 5,
          "Seat comfort": 4,
          "Inflight entertainment": 5,
          "On-board service": 5,
          "Leg room service": 1,
          "Baggage handling": 2,
          "Checkin service": 5,
          "Inflight service": 3,
          "Cleanliness": 5
        },
        "delays": {
          "departure": 15.0,
          "arrival": 15.0
        },
        "similar_passenger_ids": [
          15138,
          32564,
          115534
        ],
        "avg_rating": 3.642857142857143
      },
      {
        "id": 52168,
        "age": 47,
        "gender": "Female",
        "customer_type": "Loyal Customer",
        "travel_type": "Business travel",
        "class": "Eco",
        "flight_distance": 370,
        "satisfaction": "satisfied",
        "service_ratings": {
          "Inflight wifi service": 5,
          "Departure/Arrival time convenient": 3,
          "Ease of Online booking": 3,
          "Gate location": 3,
          "Food and drink": 2,
          "Online boarding": 1,
          "Seat comfort": 1,
          "Inflight entertainment": 5,
          "On-board service": 5,
          "Leg room service": 5,
          "Baggage handling": 5,
          "Checkin service": 3,
          "Inflight service": 5,
          "Cleanliness": 4
        },
        "delays": {
          "departure": 0.0,
          "arrival": 0.0
        },
        "similar_passenger_ids": [
          14925,
          1050,
          30183
        ],
        "avg_rating": 3.5714285714285716
      },
      {
        "id": 49608,
        "age": 38,
        "gender": "Female",
        "customer_type": "Loyal Customer",
        "travel_type": "Business travel",
        "class": "Eco",
        "flight_distance": 109,
        "satisfaction": "satisfied",
        "service_ratings": {
          "Inflight wifi service": 5,
          "Departure/Arrival time convenient": 3,
          "Ease of Online booking": 3,
          "Gate location": 3,
          "Food and drink": 5,
          "Online boarding": 5,
          "Seat comfort": 5,
          "Inflight entertainment": 5,
          "On-board service": 5,
          "Leg room service": 2,
          "Baggage handling": 4,
          "Checkin service": 1,
          "Inflight service": 1,
          "Cleanliness": 5
        },
        "delays": {
          "departure": 31.0,
          "arrival": NaN
        },
        "similar_passenger_ids": [
          45561,
          30704,
          117052
        ],
        "avg_rating": 3.7142857142857144
      },
      {
        "id": 65725,
        "age": 20,
        "gender": "Male",
        "customer_type": "disloyal Customer",
        "travel_type": "Business travel",
        "class": "Eco",
        "flight_distance": 1061,
        "satisfaction": "neutral or dissatisfied",
        "service_ratings": {
          "Inflight wifi service": 3,
          "Departure/Arrival time convenient": 3,
          "Ease of Online booking": 3,
          "Gate location": 4,
          "Food and drink": 2,
          "Online boarding": 3,
          "Seat comfort": 3,
          "Inflight entertainment": 2,
          "On-board service": 2,
          "Leg room service": 3,
          "Baggage handling": 4,
          "Checkin service": 4,
          "Inflight service": 3,
          "Cleanliness": 2
        },
        "delays": {
          "departure": 0.0,
          "arrival": 0.0
        },
        "similar_passenger_ids": [
          34991,
          42267,
          1050
        ],
        "avg_rating": 2.9285714285714284
      },
      {
        "id": 34991,
        "age": 24,
        "gender": "Female",
        "customer_type": "disloyal Customer",
        "travel_type": "Business travel",
        "class": "Eco",
        "flight_distance": 1182,
        "satisfaction": "neutral or dissatisfied",
        "service_ratings": {
          "Inflight wifi service": 4,
          "Departure/Arrival time convenient": 5,
          "Ease of Online booking": 5,
          "Gate location": 4,
          "Food and drink": 2,
          "Online boarding": 5,
          "Seat comfort": 2,
          "Inflight entertainment": 2,
          "On-board service": 3,
          "Leg room service": 3,
          "Baggage handling": 5,
          "Checkin service": 3,
          "Inflight service": 5,
          "Cleanliness": 2
        },
        "delays": {
          "departure": 0.0,
          "arrival": 0.0
        },
        "similar_passenger_ids": [
          65725,
          42267,
          14925
        ],
        "avg_rating": 3.5714285714285716
      },
      {
        "id": 98628,
        "age": 53,
        "gender": "Male",
        "customer_type": "Loyal Customer",
        "travel_type": "Business travel",
        "class": "Eco",
        "flight_distance": 834,
        "satisfaction": "neutral or dissatisfied",
        "service_ratings": {
          "Inflight wifi service": 1,
          "Departure/Arrival time convenient": 4,
          "Ease of Online booking": 4,
          "Gate location": 4,
          "Food and drink": 1,
          "Online boarding": 1,
          "Seat comfort": 1,
          "Inflight entertainment": 1,
          "On-board service": 1,
          "Leg room service": 1,
          "Baggage handling": 3,
          "Checkin service": 4,
          "Inflight service": 4,
          "Cleanliness": 1
        },
        "delays": {
          "departure": 28.0,
          "arrival": 8.0
        },
        "similar_passenger_ids": [
          34991,
          65725,
          79659
        ],
        "avg_rating": 2.2142857142857144
      },
      {
        "id": 100580,
        "age": 13,
        "gender": "Male",
        "customer_type": "disloyal Customer",
        "travel_type": "Business travel",
        "class": "Eco",
        "flight_distance": 486,
        "satisfaction": "neutral or dissatisfied",
        "service_ratings": {
          "Inflight wifi service": 2,
          "Departure/Arrival time convenient": 1,
          "Ease of Online booking": 2,
          "Gate location": 3,
          "Food and drink": 4,
          "Online boarding": 2,
          "Seat comfort": 1,
          "Inflight entertainment": 4,
          "On-board service": 2,
          "Leg room service": 1,
          "Baggage handling": 4,
          "Checkin service": 1,
          "Inflight service": 3,
          "Cleanliness": 4
        },
        "delays": {
          "departure": 1.0,
          "arrival": 0.0
        },
        "similar_passenger_ids": [
          27809,
          40017,
          117052
        ],
        "avg_rating": 2.4285714285714284
      },
      {
        "id": 39076,
        "age": 9,
        "gender": "Male",
        "customer_type": "Loyal Customer",
        "travel_type": "Business travel",
        "class": "Eco",
        "flight_distance": 1174,
        "satisfaction": "neutral or dissatisfied",
        "service_ratings": {
          "Inflight wifi service": 2,
          "Departure/Arrival time convenient": 4,
          "Ease of Online booking": 2,
          "Gate location": 4,
          "Food and drink": 2,
          "Online boarding": 2,
          "Seat comfort": 1,
          "Inflight entertainment": 2,
          "On-board service": 1,
          "Leg room service": 5,
          "Baggage handling": 3,
          "Checkin service": 4,
          "Inflight service": 3,
          "Cleanliness": 2
        },
        "delays": {
          "departure": 0.0,
          "arrival": 4.0
        },
        "similar_passenger_ids": [
          65725,
          79659,
          1050
        ],
        "avg_rating": 2.642857142857143
      },
      {
        "id": 27809,
        "age": 15,
        "gender": "Female",
        "customer_type": "disloyal Customer",
        "travel_type": "Business travel",
        "class": "Eco",
        "flight_distance": 1043,
        "satisfaction": "neutral or dissatisfied",
        "service_ratings": {
          "Inflight wifi service": 2,
          "Departure/Arrival time convenient": 2,
          "Ease of Online booking": 2,
          "Gate location": 3,
          "Food and drink": 5,
          "Online boarding": 2,
          "Seat comfort": 5,
          "Inflight entertainment": 5,
          "On-board service": 3,
          "Leg room service": 1,
          "Baggage handling": 4,
          "Checkin service": 2,
          "Inflight service": 4,
          "Cleanliness": 5
        },
        "delays": {
          "departure": 3.0,
          "arrival": 0.0
        },
        "similar_passenger_ids": [
          40017,
          100580,
          114813
        ],
        "avg_rating": 3.2142857142857144
      },
      {
        "id": 79659,
        "age": 40,
        "gender": "Female",
        "customer_type": "Loyal Customer",
        "travel_type": "Business travel",
        "class": "Eco",
        "flight_distance": 349,
        "satisfaction": "neutral or dissatisfied",
        "service_ratings": {
          "Inflight wifi service": 1,
          "Departure/Arrival time convenient": 4,
          "Ease of Online booking": 4,
          "Gate location": 4,
          "Food and drink": 1,
          "Online boarding": 1,
          "Seat comfort": 1,
          "Inflight entertainment": 1,
          "On-board service": 3,
          "Leg room service": 5,
          "Baggage handling": 3,
          "Checkin service": 3,
          "Inflight service": 3,
          "Cleanliness": 1
        },
        "delays": {
          "departure": 0.0,
          "arrival": 1.0
        },
        "similar_passenger_ids": [
          39076,
          1050,
          14925
        ],
        "avg_rating": 2.5
      },
      {
        "id": 72127,
        "age": 28,
        "gender": "Male",
        "customer_type": "Loyal Customer",
        "travel_type": "Business travel",
        "class": "Eco",
        "flight_distance": 731,
        "satisfaction": "neutral or dissatisfied",
        "service_ratings": {
          "Inflight wifi service": 2,
          "Departure/Arrival time convenient": 1,
          "Ease of Online booking": 1,
          "Gate location": 1,
          "Food and drink": 2,
          "Online boarding": 2,
          "Seat comfort": 2,
          "Inflight entertainment": 2,
          "On-board service": 3,
          "Leg room service": 3,
          "Baggage handling": 2,
          "Checkin service": 3,
          "Inflight service": 3,
          "Cleanliness": 2
        },
        "delays": {
          "departure": 14.0,
          "arrival": 8.0
        },
        "similar_passenger_ids": [
          115534,
          114813,
          117052
        ],
        "avg_rating": 2.0714285714285716
      },
      {
        "id": 114813,
        "age": 23,
        "gender": "Male",
        "customer_type": "disloyal Customer",
        "travel_type": "Business travel",
        "class": "Eco",
        "flight_distance": 446,
        "satisfaction": "neutral or dissatisfied",
        "service_ratings": {
          "Inflight wifi service": 2,
          "Departure/Arrival time convenient": 4,
          "Ease of Online booking": 2,
          "Gate location": 1,
          "Food and drink": 4,
          "Online boarding": 2,
          "Seat comfort": 4,
          "Inflight entertainment": 4,
          "On-board service": 4,
          "Leg room service": 2,
          "Baggage handling": 4,
          "Checkin service": 5,
          "Inflight service": 5,
          "Cleanliness": 4
        },
        "delays": {
          "departure": 4.0,
          "arrival": 0.0
        },
        "similar_passenger_ids": [
          115534,
          72127,
          27809
        ],
        "avg_rating": 3.357142857142857
      },
      {
        "id": 117052,
        "age": 25,
        "gender": "Male",
        "customer_type": "disloyal Customer",
        "travel_type": "Business travel",
        "class": "Eco",
        "flight_distance": 646,
        "satisfaction": "neutral or dissatisfied",
        "service_ratings": {
          "Inflight wifi service": 2,
          "Departure/Arrival time convenient": 1,
          "Ease of Online booking": 2,
          "Gate location": 2,
          "Food and drink": 4,
          "Online boarding": 2,
          "Seat comfort": 3,
          "Inflight entertainment": 4,
          "On-board service": 4,
          "Leg room service": 4,
          "Baggage handling": 3,
          "Checkin service": 2,
          "Inflight service": 2,
          "Cleanliness": 4
        },
        "delays": {
          "departure": 13.0,
          "arrival": 1.0
        },
        "similar_passenger_ids": [
          115534,
          72127,
          75930
        ],
        "avg_rating": 2.7857142857142856
      },
      {
        "id": 115534,
        "age": 50,
        "gender": "Male",
        "customer_type": "Loyal Customer",
        "travel_type": "Business travel",
        "class": "Eco",
        "flight_distance": 308,
        "satisfaction": "neutral or dissatisfied",
        "service_ratings": {
          "Inflight wifi service": 2,
          "Departure/Arrival time convenient": 1,
          "Ease of Online booking": 1,
          "Gate location": 1,
          "Food and drink": 2,
          "Online boarding": 2,
          "Seat comfort": 2,
          "Inflight entertainment": 2,
          "On-board service": 3,
          "Leg room service": 2,
          "Baggage handling": 2,
          "Checkin service": 2,
          "Inflight service": 3,
          "Cleanliness": 2
        },
        "delays": {
          "departure": 18.0,
          "arrival": 12.0
        },
        "similar_passenger_ids": [
          72127,
          114813,
          117052
        ],
        "avg_rating": 1.9285714285714286
      },
      {
        "id": 75930,
        "age": 30,
        "gender": "Male",
        "customer_type": "Loyal Customer",
        "travel_type": "Business travel",
        "class": "Eco Plus",
        "flight_distance": 205,
        "satisfaction": "neutral or dissatisfied",
        "service_ratings": {
          "Inflight wifi service": 3,
          "Departure/Arrival time convenient": 2,
          "Ease of Online booking": 2,
          "Gate location": 2,
          "Food and drink": 3,
          "Online boarding": 3,
          "Seat comfort": 3,
          "Inflight entertainment": 3,
          "On-board service": 2,
          "Leg room service": 5,
          "Baggage handling": 1,
          "Checkin service": 1,
          "Inflight service": 2,
          "Cleanliness": 3
        },
        "delays": {
          "departure": 64.0,
          "arrival": 49.0
        },
        "similar_passenger_ids": [
          9261,
          117052,
          42267
        ],
        "avg_rating": 2.5
      },
      {
        "id": 32564,
        "age": 50,
        "gender": "Female",
        "customer_type": "disloyal Customer",
        "travel_type": "Business travel",
        "class": "Eco",
        "flight_distance": 216,
        "satisfaction": "neutral or dissatisfied",
        "service_ratings": {
          "Inflight wifi service": 4,
          "Departure/Arrival time convenient": 0,
          "Ease of Online booking": 4,
          "Gate location": 4,
          "Food and drink": 4,
          "Online boarding": 4,
          "Seat comfort": 4,
          "Inflight entertainment": 4,
          "On-board service": 5,
          "Leg room service": 2,
          "Baggage handling": 1,
          "Checkin service": 4,
          "Inflight service": 4,
          "Cleanliness": 4
        },
        "delays": {
          "departure": 0.0,
          "arrival": 0.0
        },
        "similar_passenger_ids": [
          87681,
          115534,
          15138
        ],
        "avg_rating": 3.4285714285714284
      },
      {
        "id": 42267,
        "age": 25,
        "gender": "Female",
        "customer_type": "disloyal Customer",
        "travel_type": "Business travel",
        "class": "Eco",
        "flight_distance": 817,
        "satisfaction": "neutral or dissatisfied",
        "service_ratings": {
          "Inflight wifi service": 4,
          "Departure/Arrival time convenient": 4,
          "Ease of Online booking": 4,
          "Gate location": 3,
          "Food and drink": 3,
          "Online boarding": 4,
          "Seat comfort": 3,
          "Inflight entertainment": 3,
          "On-board service": 2,
          "Leg room service": 3,
          "Baggage handling": 2,
          "Checkin service": 3,
          "Inflight service": 3,
          "Cleanliness": 3
        },
        "delays": {
          "departure": 0.0,
          "arrival": 0.0
        },
        "similar_passenger_ids": [
          91330,
          9261,
          45561
        ],
        "avg_rating": 3.142857142857143
      },
      {
        "id": 40017,
        "age": 13,
        "gender": "Male",
        "customer_type": "disloyal Customer",
        "travel_type": "Business travel",
        "class": "Eco",
        "flight_distance": 525,
        "satisfaction": "neutral or dissatisfied",
        "service_ratings": {
          "Inflight wifi service": 2,
          "Departure/Arrival time convenient": 2,
          "Ease of Online booking": 2,
          "Gate location": 3,
          "Food and drink": 3,
          "Online boarding": 2,
          "Seat comfort": 3,
          "Inflight entertainment": 3,
          "On-board service": 3,
          "Leg room service": 1,
          "Baggage handling": 3,
          "Checkin service": 1,
          "Inflight service": 4,
          "Cleanliness": 3
        },
        "delays": {
          "departure": 0.0,
          "arrival": 0.0
        },
        "similar_passenger_ids": [
          27809,
          100580,
          115534
        ],
        "avg_rating": 2.5
      }
    ],
    "Premium Leisure": [
      {
        "id": 119682,
        "age": 16,
        "gender": "Female",
        "customer_type": "Loyal Customer",
        "travel_type": "Personal Travel",
        "class": "Business",
        "flight_distance": 1325,
        "satisfaction": "satisfied",
        "service_ratings": {
          "Inflight wifi service": 5,
          "Departure/Arrival time convenient": 4,
          "Ease of Online booking": 5,
          "Gate location": 3,
          "Food and drink": 5,
          "Online boarding": 4,
          "Seat comfort": 4,
          "Inflight entertainment": 5,
          "On-board service": 5,
          "Leg room service": 4,
          "Baggage handling": 5,
          "Checkin service": 4,
          "Inflight service": 4,
          "Cleanliness": 4
        },
        "delays": {
          "departure": 243.0,
          "arrival": 226.0
        },
        "similar_passenger_ids": [
          101778,
          10242,
          109352
        ],
        "avg_rating": 4.357142857142857
      },
      {
        "id": 121107,
        "age": 43,
        "gender": "Male",
        "customer_type": "Loyal Customer",
        "travel_type": "Personal Travel",
        "class": "Business",
        "flight_distance": 2521,
        "satisfaction": "satisfied",
        "service_ratings": {
          "Inflight wifi service": 5,
          "Departure/Arrival time convenient": 2,
          "Ease of Online booking": 5,
          "Gate location": 2,
          "Food and drink": 5,
          "Online boarding": 1,
          "Seat comfort": 1,
          "Inflight entertainment": 3,
          "On-board service": 4,
          "Leg room service": 1,
          "Baggage handling": 3,
          "Checkin service": 1,
          "Inflight service": 1,
          "Cleanliness": 1
        },
        "delays": {
          "departure": 60.0,
          "arrival": 51.0
        },
        "similar_passenger_ids": [
          119682,
          129036,
          17220
        ],
        "avg_rating": 2.5
      },
      {
        "id": 90391,
        "age": 24,
        "gender": "Male",
        "customer_type": "Loyal Customer",
        "travel_type": "Personal Travel",
        "class": "Business",
        "flight_distance": 271,
        "satisfaction": "satisfied",
        "service_ratings": {
          "Inflight wifi service": 0,
          "Departure/Arrival time convenient": 1,
          "Ease of Online booking": 0,
          "Gate location": 3,
          "Food and drink": 4,
          "Online boarding": 0,
          "Seat comfort": 4,
          "Inflight entertainment": 4,
          "On-board service": 2,
          "Leg room service": 3,
          "Baggage handling": 3,
          "Checkin service": 1,
          "Inflight service": 4,
          "Cleanliness": 4
        },
        "delays": {
          "departure": 5.0,
          "arrival": 0.0
        },
        "similar_passenger_ids": [
          107794,
          101778,
          53786
        ],
        "avg_rating": 2.357142857142857
      },
      {
        "id": 129036,
        "age": 40,
        "gender": "Male",
        "customer_type": "Loyal Customer",
        "travel_type": "Personal Travel",
        "class": "Business",
        "flight_distance": 1744,
        "satisfaction": "satisfied",
        "service_ratings": {
          "Inflight wifi service": 5,
          "Departure/Arrival time convenient": 3,
          "Ease of Online booking": 5,
          "Gate location": 3,
          "Food and drink": 5,
          "Online boarding": 3,
          "Seat comfort": 3,
          "Inflight entertainment": 2,
          "On-board service": 2,
          "Leg room service": 5,
          "Baggage handling": 3,
          "Checkin service": 3,
          "Inflight service": 2,
          "Cleanliness": 1
        },
        "delays": {
          "departure": 0.0,
          "arrival": 5.0
        },
        "similar_passenger_ids": [
          119682,
          101778,
          48415
        ],
        "avg_rating": 3.2142857142857144
      },
      {
        "id": 14930,
        "age": 13,
        "gender": "Male",
        "customer_type": "Loyal Customer",
        "travel_type": "Personal Travel",
        "class": "Business",
        "flight_distance": 554,
        "satisfaction": "satisfied",
        "service_ratings": {
          "Inflight wifi service": 4,
          "Departure/Arrival time convenient": 4,
          "Ease of Online booking": 4,
          "Gate location": 1,
          "Food and drink": 1,
          "Online boarding": 4,
          "Seat comfort": 2,
          "Inflight entertainment": 1,
          "On-board service": 5,
          "Leg room service": 4,
          "Baggage handling": 4,
          "Checkin service": 4,
          "Inflight service": 4,
          "Cleanliness": 1
        },
        "delays": {
          "departure": 0.0,
          "arrival": 12.0
        },
        "similar_passenger_ids": [
          61132,
          81197,
          10242
        ],
        "avg_rating": 3.0714285714285716
      },
      {
        "id": 61132,
        "age": 21,
        "gender": "Male",
        "customer_type": "Loyal Customer",
        "travel_type": "Personal Travel",
        "class": "Business",
        "flight_distance": 862,
        "satisfaction": "satisfied",
        "service_ratings": {
          "Inflight wifi service": 5,
          "Departure/Arrival time convenient": 4,
          "Ease of Online booking": 5,
          "Gate location": 2,
          "Food and drink": 2,
          "Online boarding": 5,
          "Seat comfort": 5,
          "Inflight entertainment": 2,
          "On-board service": 4,
          "Leg room service": 4,
          "Baggage handling": 5,
          "Checkin service": 3,
          "Inflight service": 5,
          "Cleanliness": 2
        },
        "delays": {
          "departure": 2.0,
          "arrival": 0.0
        },
        "similar_passenger_ids": [
          14930,
          48415,
          10242
        ],
        "avg_rating": 3.7857142857142856
      },
      {
        "id": 71947,
        "age": 47,
        "gender": "Male",
        "customer_type": "Loyal Customer",
        "travel_type": "Personal Travel",
        "class": "Business",
        "flight_distance": 1437,
        "satisfaction": "satisfied",
        "service_ratings": {
          "Inflight wifi service": 0,
          "Departure/Arrival time convenient": 4,
          "Ease of Online booking": 0,
          "Gate location": 3,
          "Food and drink": 5,
          "Online boarding": 5,
          "Seat comfort": 4,
          "Inflight entertainment": 1,
          "On-board service": 1,
          "Leg room service": 0,
          "Baggage handling": 1,
          "Checkin service": 4,
          "Inflight service": 1,
          "Cleanliness": 3
        },
        "delays": {
          "departure": 0.0,
          "arrival": 0.0
        },
        "similar_passenger_ids": [
          102068,
          87554,
          114522
        ],
        "avg_rating": 2.2857142857142856
      },
      {
        "id": 3621,
        "age": 20,
        "gender": "Female",
        "customer_type": "Loyal Customer",
        "travel_type": "Personal Travel",
        "class": "Business",
        "flight_distance": 427,
        "satisfaction": "satisfied",
        "service_ratings": {
          "Inflight wifi service": 4,
          "Departure/Arrival time convenient": 0,
          "Ease of Online booking": 4,
          "Gate location": 3,
          "Food and drink": 1,
          "Online boarding": 4,
          "Seat comfort": 1,
          "Inflight entertainment": 1,
          "On-board service": 3,
          "Leg room service": 4,
          "Baggage handling": 5,
          "Checkin service": 3,
          "Inflight service": 4,
          "Cleanliness": 1
        },
        "delays": {
          "departure": 93.0,
          "arrival": 92.0
        },
        "similar_passenger_ids": [
          61132,
          14930,
          3765
        ],
        "avg_rating": 2.7142857142857144
      },
      {
        "id": 114522,
        "age": 40,
        "gender": "Female",
        "customer_type": "Loyal Customer",
        "travel_type": "Personal Travel",
        "class": "Business",
        "flight_distance": 337,
        "satisfaction": "satisfied",
        "service_ratings": {
          "Inflight wifi service": 0,
          "Departure/Arrival time convenient": 5,
          "Ease of Online booking": 0,
          "Gate location": 4,
          "Food and drink": 2,
          "Online boarding": 4,
          "Seat comfort": 4,
          "Inflight entertainment": 4,
          "On-board service": 4,
          "Leg room service": 0,
          "Baggage handling": 4,
          "Checkin service": 5,
          "Inflight service": 4,
          "Cleanliness": 4
        },
        "delays": {
          "departure": 129.0,
          "arrival": 119.0
        },
        "similar_passenger_ids": [
          102068,
          12094,
          109352
        ],
        "avg_rating": 3.142857142857143
      },
      {
        "id": 53786,
        "age": 56,
        "gender": "Female",
        "customer_type": "Loyal Customer",
        "travel_type": "Personal Travel",
        "class": "Business",
        "flight_distance": 140,
        "satisfaction": "satisfied",
        "service_ratings": {
          "Inflight wifi service": 0,
          "Departure/Arrival time convenient": 0,
          "Ease of Online booking": 0,
          "Gate location": 3,
          "Food and drink": 5,
          "Online boarding": 3,
          "Seat comfort": 5,
          "Inflight entertainment": 4,
          "On-board service": 4,
          "Leg room service": 0,
          "Baggage handling": 1,
          "Checkin service": 5,
          "Inflight service": 4,
          "Cleanliness": 4
        },
        "delays": {
          "departure": 0.0,
          "arrival": 0.0
        },
        "similar_passenger_ids": [
          102068,
          114522,
          90391
        ],
        "avg_rating": 2.7142857142857144
      },
      {
        "id": 3765,
        "age": 40,
        "gender": "Male",
        "customer_type": "Loyal Customer",
        "travel_type": "Personal Travel",
        "class": "Business",
        "flight_distance": 599,
        "satisfaction": "satisfied",
        "service_ratings": {
          "Inflight wifi service": 4,
          "Departure/Arrival time convenient": 0,
          "Ease of Online booking": 4,
          "Gate location": 4,
          "Food and drink": 2,
          "Online boarding": 4,
          "Seat comfort": 4,
          "Inflight entertainment": 3,
          "On-board service": 3,
          "Leg room service": 4,
          "Baggage handling": 3,
          "Checkin service": 3,
          "Inflight service": 3,
          "Cleanliness": 4
        },
        "delays": {
          "departure": 0.0,
          "arrival": 0.0
        },
        "similar_passenger_ids": [
          101778,
          120162,
          114534
        ],
        "avg_rating": 3.2142857142857144
      },
      {
        "id": 101778,
        "age": 34,
        "gender": "Male",
        "customer_type": "Loyal Customer",
        "travel_type": "Personal Travel",
        "class": "Business",
        "flight_distance": 1521,
        "satisfaction": "satisfied",
        "service_ratings": {
          "Inflight wifi service": 4,
          "Departure/Arrival time convenient": 4,
          "Ease of Online booking": 4,
          "Gate location": 5,
          "Food and drink": 5,
          "Online boarding": 4,
          "Seat comfort": 4,
          "Inflight entertainment": 4,
          "On-board service": 4,
          "Leg room service": 4,
          "Baggage handling": 4,
          "Checkin service": 3,
          "Inflight service": 4,
          "Cleanliness": 4
        },
        "delays": {
          "departure": 9.0,
          "arrival": 0.0
        },
        "similar_passenger_ids": [
          119682,
          11849,
          10242
        ],
        "avg_rating": 4.071428571428571
      },
      {
        "id": 10242,
        "age": 18,
        "gender": "Female",
        "customer_type": "Loyal Customer",
        "travel_type": "Personal Travel",
        "class": "Business",
        "flight_distance": 166,
        "satisfaction": "satisfied",
        "service_ratings": {
          "Inflight wifi service": 4,
          "Departure/Arrival time convenient": 4,
          "Ease of Online booking": 4,
          "Gate location": 3,
          "Food and drink": 3,
          "Online boarding": 4,
          "Seat comfort": 2,
          "Inflight entertainment": 3,
          "On-board service": 3,
          "Leg room service": 3,
          "Baggage handling": 4,
          "Checkin service": 4,
          "Inflight service": 5,
          "Cleanliness": 3
        },
        "delays": {
          "departure": 0.0,
          "arrival": 0.0
        },
        "similar_passenger_ids": [
          119682,
          101778,
          11849
        ],
        "avg_rating": 3.5
      },
      {
        "id": 17220,
        "age": 18,
        "gender": "Male",
        "customer_type": "Loyal Customer",
        "travel_type": "Personal Travel",
        "class": "Business",
        "flight_distance": 872,
        "satisfaction": "satisfied",
        "service_ratings": {
          "Inflight wifi service": 5,
          "Departure/Arrival time convenient": 5,
          "Ease of Online booking": 4,
          "Gate location": 1,
          "Food and drink": 4,
          "Online boarding": 4,
          "Seat comfort": 4,
          "Inflight entertainment": 4,
          "On-board service": 3,
          "Leg room service": 3,
          "Baggage handling": 4,
          "Checkin service": 2,
          "Inflight service": 1,
          "Cleanliness": 4
        },
        "delays": {
          "departure": 0.0,
          "arrival": 0.0
        },
        "similar_passenger_ids": [
          119682,
          48415,
          109352
        ],
        "avg_rating": 3.4285714285714284
      },
      {
        "id": 31870,
        "age": 63,
        "gender": "Female",
        "customer_type": "Loyal Customer",
        "travel_type": "Personal Travel",
        "class": "Business",
        "flight_distance": 4983,
        "satisfaction": "satisfied",
        "service_ratings": {
          "Inflight wifi service": 0,
          "Departure/Arrival time convenient": 5,
          "Ease of Online booking": 0,
          "Gate location": 2,
          "Food and drink": 0,
          "Online boarding": 5,
          "Seat comfort": 1,
          "Inflight entertainment": 3,
          "On-board service": 2,
          "Leg room service": 4,
          "Baggage handling": 3,
          "Checkin service": 1,
          "Inflight service": 5,
          "Cleanliness": 1
        },
        "delays": {
          "departure": 3.0,
          "arrival": 0.0
        },
        "similar_passenger_ids": [
          10242,
          81197,
          129592
        ],
        "avg_rating": 2.2857142857142856
      },
      {
        "id": 107794,
        "age": 22,
        "gender": "Female",
        "customer_type": "Loyal Customer",
        "travel_type": "Personal Travel",
        "class": "Business",
        "flight_distance": 349,
        "satisfaction": "neutral or dissatisfied",
        "service_ratings": {
          "Inflight wifi service": 2,
          "Departure/Arrival time convenient": 4,
          "Ease of Online booking": 2,
          "Gate location": 1,
          "Food and drink": 4,
          "Online boarding": 2,
          "Seat comfort": 4,
          "Inflight entertainment": 4,
          "On-board service": 4,
          "Leg room service": 5,
          "Baggage handling": 4,
          "Checkin service": 4,
          "Inflight service": 5,
          "Cleanliness": 4
        },
        "delays": {
          "departure": 0.0,
          "arrival": 0.0
        },
        "similar_passenger_ids": [
          109352,
          119682,
          101778
        ],
        "avg_rating": 3.5
      },
      {
        "id": 114534,
        "age": 19,
        "gender": "Male",
        "customer_type": "Loyal Customer",
        "travel_type": "Personal Travel",
        "class": "Business",
        "flight_distance": 342,
        "satisfaction": "neutral or dissatisfied",
        "service_ratings": {
          "Inflight wifi service": 3,
          "Departure/Arrival time convenient": 1,
          "Ease of Online booking": 3,
          "Gate location": 2,
          "Food and drink": 3,
          "Online boarding": 3,
          "Seat comfort": 3,
          "Inflight entertainment": 3,
          "On-board service": 2,
          "Leg room service": 1,
          "Baggage handling": 3,
          "Checkin service": 1,
          "Inflight service": 3,
          "Cleanliness": 3
        },
        "delays": {
          "departure": 0.0,
          "arrival": 0.0
        },
        "similar_passenger_ids": [
          119682,
          101778,
          120162
        ],
        "avg_rating": 2.4285714285714284
      },
      {
        "id": 14070,
        "age": 58,
        "gender": "Female",
        "customer_type": "Loyal Customer",
        "travel_type": "Personal Travel",
        "class": "Business",
        "flight_distance": 371,
        "satisfaction": "neutral or dissatisfied",
        "service_ratings": {
          "Inflight wifi service": 3,
          "Departure/Arrival time convenient": 5,
          "Ease of Online booking": 5,
          "Gate location": 1,
          "Food and drink": 2,
          "Online boarding": 3,
          "Seat comfort": 5,
          "Inflight entertainment": 1,
          "On-board service": 1,
          "Leg room service": 5,
          "Baggage handling": 1,
          "Checkin service": 3,
          "Inflight service": 1,
          "Cleanliness": 3
        },
        "delays": {
          "departure": 0.0,
          "arrival": 0.0
        },
        "similar_passenger_ids": [
          48415,
          17220,
          11849
        ],
        "avg_rating": 2.7857142857142856
      },
      {
        "id": 48415,
        "age": 54,
        "gender": "Female",
        "customer_type": "Loyal Customer",
        "travel_type": "Personal Travel",
        "class": "Business",
        "flight_distance": 844,
        "satisfaction": "neutral or dissatisfied",
        "service_ratings": {
          "Inflight wifi service": 4,
          "Departure/Arrival time convenient": 5,
          "Ease of Online booking": 5,
          "Gate location": 2,
          "Food and drink": 2,
          "Online boarding": 4,
          "Seat comfort": 4,
          "Inflight entertainment": 3,
          "On-board service": 3,
          "Leg room service": 5,
          "Baggage handling": 3,
          "Checkin service": 3,
          "Inflight service": 3,
          "Cleanliness": 4
        },
        "delays": {
          "departure": 0.0,
          "arrival": 0.0
        },
        "similar_passenger_ids": [
          11849,
          61132,
          119682
        ],
        "avg_rating": 3.5714285714285716
      },
      {
        "id": 22924,
        "age": 12,
        "gender": "Male",
        "customer_type": "Loyal Customer",
        "travel_type": "Personal Travel",
        "class": "Business",
        "flight_distance": 817,
        "satisfaction": "neutral or dissatisfied",
        "service_ratings": {
          "Inflight wifi service": 2,
          "Departure/Arrival time convenient": 3,
          "Ease of Online booking": 2,
          "Gate location": 2,
          "Food and drink": 1,
          "Online boarding": 2,
          "Seat comfort": 1,
          "Inflight entertainment": 1,
          "On-board service": 1,
          "Leg room service": 3,
          "Baggage handling": 5,
          "Checkin service": 3,
          "Inflight service": 2,
          "Cleanliness": 1
        },
        "delays": {
          "departure": 0.0,
          "arrival": 0.0
        },
        "similar_passenger_ids": [
          81197,
          117434,
          10242
        ],
        "avg_rating": 2.0714285714285716
      },
      {
        "id": 129592,
        "age": 13,
        "gender": "Female",
        "customer_type": "Loyal Customer",
        "travel_type": "Personal Travel",
        "class": "Business",
        "flight_distance": 337,
        "satisfaction": "neutral or dissatisfied",
        "service_ratings": {
          "Inflight wifi service": 2,
          "Departure/Arrival time convenient": 3,
          "Ease of Online booking": 2,
          "Gate location": 3,
          "Food and drink": 1,
          "Online boarding": 2,
          "Seat comfort": 1,
          "Inflight entertainment": 1,
          "On-board service": 4,
          "Leg room service": 5,
          "Baggage handling": 2,
          "Checkin service": 5,
          "Inflight service": 5,
          "Cleanliness": 1
        },
        "delays": {
          "departure": 0.0,
          "arrival": 18.0
        },
        "similar_passenger_ids": [
          14930,
          10242,
          81197
        ],
        "avg_rating": 2.642857142857143
      },
      {
        "id": 102068,
        "age": 65,
        "gender": "Male",
        "customer_type": "Loyal Customer",
        "travel_type": "Personal Travel",
        "class": "Business",
        "flight_distance": 226,
        "satisfaction": "neutral or dissatisfied",
        "service_ratings": {
          "Inflight wifi service": 1,
          "Departure/Arrival time convenient": 4,
          "Ease of Online booking": 1,
          "Gate location": 1,
          "Food and drink": 5,
          "Online boarding": 5,
          "Seat comfort": 4,
          "Inflight entertainment": 4,
          "On-board service": 4,
          "Leg room service": 1,
          "Baggage handling": 4,
          "Checkin service": 5,
          "Inflight service": 4,
          "Cleanliness": 3
        },
        "delays": {
          "departure": 37.0,
          "arrival": 20.0
        },
        "similar_passenger_ids": [
          109352,
          12094,
          114522
        ],
        "avg_rating": 3.2857142857142856
      },
      {
        "id": 120162,
        "age": 46,
        "gender": "Female",
        "customer_type": "Loyal Customer",
        "travel_type": "Personal Travel",
        "class": "Business",
        "flight_distance": 119,
        "satisfaction": "neutral or dissatisfied",
        "service_ratings": {
          "Inflight wifi service": 4,
          "Departure/Arrival time convenient": 0,
          "Ease of Online booking": 4,
          "Gate location": 1,
          "Food and drink": 5,
          "Online boarding": 5,
          "Seat comfort": 4,
          "Inflight entertainment": 4,
          "On-board service": 4,
          "Leg room service": 4,
          "Baggage handling": 4,
          "Checkin service": 3,
          "Inflight service": 4,
          "Cleanliness": 3
        },
        "delays": {
          "departure": 13.0,
          "arrival": 32.0
        },
        "similar_passenger_ids": [
          119682,
          114534,
          3765
        ],
        "avg_rating": 3.5
      },
      {
        "id": 87554,
        "age": 55,
        "gender": "Male",
        "customer_type": "Loyal Customer",
        "travel_type": "Personal Travel",
        "class": "Business",
        "flight_distance": 432,
        "satisfaction": "neutral or dissatisfied",
        "service_ratings": {
          "Inflight wifi service": 4,
          "Departure/Arrival time convenient": 4,
          "Ease of Online booking": 2,
          "Gate location": 1,
          "Food and drink": 5,
          "Online boarding": 4,
          "Seat comfort": 4,
          "Inflight entertainment": 3,
          "On-board service": 3,
          "Leg room service": 2,
          "Baggage handling": 2,
          "Checkin service": 4,
          "Inflight service": 3,
          "Cleanliness": 5
        },
        "delays": {
          "departure": 0.0,
          "arrival": 0.0
        },
        "similar_passenger_ids": [
          109352,
          11849,
          119682
        ],
        "avg_rating": 3.2857142857142856
      },
      {
        "id": 12094,
        "age": 7,
        "gender": "Male",
        "customer_type": "Loyal Customer",
        "travel_type": "Personal Travel",
        "class": "Business",
        "flight_distance": 1034,
        "satisfaction": "neutral or dissatisfied",
        "service_ratings": {
          "Inflight wifi service": 2,
          "Departure/Arrival time convenient": 4,
          "Ease of Online booking": 2,
          "Gate location": 2,
          "Food and drink": 2,
          "Online boarding": 4,
          "Seat comfort": 4,
          "Inflight entertainment": 5,
          "On-board service": 5,
          "Leg room service": 2,
          "Baggage handling": 3,
          "Checkin service": 4,
          "Inflight service": 2,
          "Cleanliness": 4
        },
        "delays": {
          "departure": 143.0,
          "arrival": 121.0
        },
        "similar_passenger_ids": [
          109352,
          11849,
          119682
        ],
        "avg_rating": 3.2142857142857144
      },
      {
        "id": 11849,
        "age": 65,
        "gender": "Female",
        "customer_type": "Loyal Customer",
        "travel_type": "Personal Travel",
        "class": "Business",
        "flight_distance": 1042,
        "satisfaction": "neutral or dissatisfied",
        "service_ratings": {
          "Inflight wifi service": 4,
          "Departure/Arrival time convenient": 5,
          "Ease of Online booking": 4,
          "Gate location": 4,
          "Food and drink": 3,
          "Online boarding": 5,
          "Seat comfort": 4,
          "Inflight entertainment": 4,
          "On-board service": 4,
          "Leg room service": 4,
          "Baggage handling": 2,
          "Checkin service": 5,
          "Inflight service": 4,
          "Cleanliness": 5
        },
        "delays": {
          "departure": 48.0,
          "arrival": 30.0
        },
        "similar_passenger_ids": [
          48415,
          101778,
          10242
        ],
        "avg_rating": 4.071428571428571
      },
      {
        "id": 109352,
        "age": 32,
        "gender": "Female",
        "customer_type": "Loyal Customer",
        "travel_type": "Personal Travel",
        "class": "Business",
        "flight_distance": 1237,
        "satisfaction": "neutral or dissatisfied",
        "service_ratings": {
          "Inflight wifi service": 3,
          "Departure/Arrival time convenient": 5,
          "Ease of Online booking": 3,
          "Gate location": 1,
          "Food and drink": 4,
          "Online boarding": 3,
          "Seat comfort": 5,
          "Inflight entertainment": 4,
          "On-board service": 4,
          "Leg room service": 3,
          "Baggage handling": 3,
          "Checkin service": 4,
          "Inflight service": 4,
          "Cleanliness": 4
        },
        "delays": {
          "departure": 8.0,
          "arrival": 1.0
        },
        "similar_passenger_ids": [
          107794,
          87554,
          119682
        ],
        "avg_rating": 3.5714285714285716
      },
      {
        "id": 117434,
        "age": 11,
        "gender": "Female",
        "customer_type": "Loyal Customer",
        "travel_type": "Personal Travel",
        "class": "Business",
        "flight_distance": 1020,
        "satisfaction": "neutral or dissatisfied",
        "service_ratings": {
          "Inflight wifi service": 2,
          "Departure/Arrival time convenient": 2,
          "Ease of Online booking": 2,
          "Gate location": 3,
          "Food and drink": 2,
          "Online boarding": 2,
          "Seat comfort": 1,
          "Inflight entertainment": 2,
          "On-board service": 1,
          "Leg room service": 1,
          "Baggage handling": 4,
          "Checkin service": 3,
          "Inflight service": 4,
          "Cleanliness": 2
        },
        "delays": {
          "departure": 2.0,
          "arrival": 0.0
        },
        "similar_passenger_ids": [
          10242,
          98566,
          101778
        ],
        "avg_rating": 2.2142857142857144
      },
      {
        "id": 81197,
        "age": 27,
        "gender": "Female",
        "customer_type": "Loyal Customer",
        "travel_type": "Personal Travel",
        "class": "Business",
        "flight_distance": 1426,
        "satisfaction": "neutral or dissatisfied",
        "service_ratings": {
          "Inflight wifi service": 3,
          "Departure/Arrival time convenient": 4,
          "Ease of Online booking": 3,
          "Gate location": 2,
          "Food and drink": 1,
          "Online boarding": 3,
          "Seat comfort": 1,
          "Inflight entertainment": 1,
          "On-board service": 2,
          "Leg room service": 3,
          "Baggage handling": 3,
          "Checkin service": 3,
          "Inflight service": 2,
          "Cleanliness": 1
        },
        "delays": {
          "departure": 12.0,
          "arrival": 21.0
        },
        "similar_passenger_ids": [
          14930,
          10242,
          22924
        ],
        "avg_rating": 2.2857142857142856
      },
      {
        "id": 98566,
        "age": 13,
        "gender": "Male",
        "customer_type": "Loyal Customer",
        "travel_type": "Personal Travel",
        "class": "Business",
        "flight_distance": 861,
        "satisfaction": "neutral or dissatisfied",
        "service_ratings": {
          "Inflight wifi service": 2,
          "Departure/Arrival time convenient": 1,
          "Ease of Online booking": 2,
          "Gate location": 4,
          "Food and drink": 2,
          "Online boarding": 2,
          "Seat comfort": 2,
          "Inflight entertainment": 2,
          "On-board service": 3,
          "Leg room service": 1,
          "Baggage handling": 4,
          "Checkin service": 2,
          "Inflight service": 3,
          "Cleanliness": 2
        },
        "delays": {
          "departure": 0.0,
          "arrival": 7.0
        },
        "similar_passenger_ids": [
          117434,
          101778,
          10242
        ],
        "avg_rating": 2.2857142857142856
      }
    ]
  },
  "recommendations": {
    "Budget Conscious": [
      {
        "priority": "Medium",
        "area": "Inflight wifi service",
        "current_score": 2.5163139094737965,
        "recommendation": "Upgrade wifi infrastructure, increase bandwidth, offer complimentary access for premium segments",
        "expected_impact": "Correlation: 0.283 - Medium impact on satisfaction",
        "method": "Hybrid (Content-based + Correlation Analysis)"
      },
      {
        "priority": "High",
        "area": "Online boarding",
        "current_score": 2.769206163032468,
        "recommendation": "Implement mobile boarding passes, streamline digital check-in, and reduce queue times",
        "expected_impact": "Correlation: 0.502 - High impact on satisfaction",
        "method": "Hybrid (Content-based + Correlation Analysis)"
      }
    ],
    "Premium Business": [
      {
        "priority": "Medium",
        "area": "Inflight wifi service",
        "current_score": 2.7861381478306186,
        "recommendation": "Upgrade wifi infrastructure, increase bandwidth, offer complimentary access for premium segments",
        "expected_impact": "Correlation: 0.283 - Medium impact on satisfaction",
        "method": "Hybrid (Content-based + Correlation Analysis)"
      }
    ],
    "Business Economy": [
      {
        "priority": "Medium",
        "area": "Checkin service",
        "current_score": 2.8250016553002713,
        "recommendation": "Add self-service kiosks, train staff better, reduce processing time",
        "expected_impact": "Correlation: 0.237 - Medium impact on satisfaction",
        "method": "Hybrid (Content-based + Correlation Analysis)"
      },
      {
        "priority": "High",
        "area": "Online boarding",
        "current_score": 2.893233132490234,
        "recommendation": "Implement mobile boarding passes, streamline digital check-in, and reduce queue times",
        "expected_impact": "Correlation: 0.502 - High impact on satisfaction",
        "method": "Hybrid (Content-based + Correlation Analysis)"
      },
      {
        "priority": "Medium",
        "area": "Inflight wifi service",
        "current_score": 2.8952857048268554,
        "recommendation": "Upgrade wifi infrastructure, increase bandwidth, offer complimentary access for premium segments",
        "expected_impact": "Correlation: 0.283 - Medium impact on satisfaction",
        "method": "Hybrid (Content-based + Correlation Analysis)"
      }
    ],
    "Premium Leisure": [
      {
        "priority": "Medium",
        "area": "Inflight wifi service",
        "current_score": 2.548447437336326,
        "recommendation": "Upgrade wifi infrastructure, increase bandwidth, offer complimentary access for premium segments",
        "expected_impact": "Correlation: 0.283 - Medium impact on satisfaction",
        "method": "Hybrid (Content-based + Correlation Analysis)"
      },
      {
        "priority": "High",
        "area": "Leg room service",
        "current_score": 2.858211747100636,
        "recommendation": "Reconfigure seating layout, offer paid upgrades, prioritize comfort in premium classes",
        "expected_impact": "Correlation: 0.312 - High impact on satisfaction",
        "method": "Hybrid (Content-based + Correlation Analysis)"
      }
    ]
  },
  "service_features": [
    "Inflight wifi service",
    "Departure/Arrival time convenient",
    "Ease of Online booking",
    "Gate location",
    "Food and drink",
    "Online boarding",
    "Seat comfort",
    "Inflight entertainment",
    "On-board service",
    "Leg room service",
    "Baggage handling",
    "Checkin service",
    "Inflight service",
    "Cleanliness"
  ]
};
