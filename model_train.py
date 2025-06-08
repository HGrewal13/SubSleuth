# 1. Import libraries
import pandas as pd
from sklearn.preprocessing import StandardScaler
from sklearn.cluster import KMeans
from sklearn.metrics import silhouette_score
from sklearn.decomposition import PCA
import csv

# 2. Load the cleaned dataset
df = pd.read_csv("shopping_behavior_cleaned.csv")

# 3. Select and encode relevant features
features = df[[
    'Age',
    'Gender',
    'Category',
    'Purchase Amount (USD)',
    'Season',
    'Review Rating',
    'Frequency Value',
    'Previous Purchases'
]]

# One-hot encoding for categorical features
features_encoded = pd.get_dummies(features, columns=['Gender', 'Category', 'Season'], drop_first=True)

# 4. Feature scaling
scaler = StandardScaler()
scaled_features = scaler.fit_transform(features_encoded)

# 5. Train the KMeans clustering model
k = 5
kmeans = KMeans(n_clusters=k, random_state=42)
kmeans.fit(scaled_features)

# Assign cluster labels to original dataframe
df['Cluster'] = kmeans.labels_

# 6. Evaluate the clustering performance
inertia = kmeans.inertia_
silhouette = silhouette_score(scaled_features, df['Cluster'])

# 7. Export clustered data
df.to_csv("clustered_customers.csv", index=False)

# 8. Save model metrics to CSV
with open("results/model_metrics.csv", mode='w', newline='') as file:
    writer = csv.writer(file)
    writer.writerow(["Model", "Num_Clusters", "Inertia", "Silhouette_Score"])
    writer.writerow(["KMeans", k, round(inertia), round(silhouette, 2)])

# 9. Optional console output
print(f"Model trained with k={k}")
print(f"Inertia: {round(inertia)}")
print(f"Silhouette Score: {round(silhouette, 2)}")
