## 🧠 Machine Learning: Customer Segmentation using KMeans

In this project, we aimed to identify distinct groups of customers based on their purchasing behavior and demographic attributes. Since there was no predefined label or target variable, we implemented an **unsupervised machine learning** approach using the **KMeans Clustering** algorithm.

### 🎯 Goal

To segment customers into meaningful groups based on features such as:

- Age  
- Gender  
- Product category  
- Purchase amount  
- Season
- Review rating  
- Purchase frequency  
- Number of previous purchases

These segments can later be used to inform marketing strategies, customer targeting, and business decision-making.

---

### 🔧 Approach

1. **Feature Selection:**  
   Selected behavioral and demographic features from the cleaned dataset.

2. **Data Preprocessing:**  
   - Categorical variables were one-hot encoded (`Gender`, `Category`, `Season`)  
   - Numerical features were standardized using `StandardScaler`  

3. **Clustering Algorithm:**  
   - Used the **KMeans** algorithm  
   - Determined optimal number of clusters using the **Elbow Method**  
   - Final number of clusters: **5**

4. **Cluster Evaluation:**  
   - Internal validation with **Inertia** and **Silhouette Score**  
   - Visualized clusters using **PCA** to reduce dimensions and plot the results

---

### 📈 Model 1 Results

| Metric                    | Value   |
|---------------------------|---------|
| Model                     | KMeans  |
| Number of Clusters        | 6       |
| Inertia                   | 29,074  |
| Silhouette Score          | 0.16    |
| Calinski-Harabasz Score   | 474.81  |

Although the silhouette score was relatively low, the PCA projection revealed clear separation between customer clusters, supporting the practical usefulness of the segmentation. However, we thought that maybe we could optimize the model with a different k value.

### 📈 Model 2 Results

| Metric                    | Value   |
|---------------------------|---------|
| Model                     | KMeans  |
| Number of Clusters        | 5       |
| Inertia                   | 31,070  |
| Silhouette Score          | 0.17    |
| Calinski-Harabasz Score   | 492.96  |

With a k value of 5, our silhouette score increased to 0.17, and our Calinksi-Harabasz score increased to 492.96. This performance revealed contain tighter clusters and would allow for more accuracy when segmenting consumers.

### Solution

Based on our 5 clusters, we assigned discounts and evaluated if members of the clusters should receive an additional coupon to promote subscription statuses. The breakdown was as follows:

Cluster 0 - count: 599

    Spends the 2nd highest
    Previous purchases indicate they usually spend the 2nd least
    Monthly frequency
    Highest subscriptions rate
    Discount: 5%

Cluster 1 - count: 751

    Spends the highest
    Previous purchases indicate they usually spend the most
    Monthly frequency
    Lowest subscription rate
    Discount: 10%

Cluster 2 - count: 648

    Spends the 2nd lowest
    Previous purchases indicate they usually spend the least
    Closer to quarterly frequency
    2nd highest subscription rate
    Discount: 7%

Cluster 3 - count: 1,182

    Spends at the average level
    Previous purchases indicate they usually spend the average
    Monthly frequency
    Lowest subscription rate
    Discount: 12%

Cluster 4 - count: 720

    Spends the least
    Previous purchases indicate they usually spend the 2nd highest
    Closer to quarterly frequency
    Median subscription group
    Discount: 15%

