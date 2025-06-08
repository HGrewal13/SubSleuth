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

### 📈 Model Results

| Metric              | Value   |
|---------------------|---------|
| Model               | KMeans  |
| Number of Clusters  | 5       |
| Inertia             | 31,070  |
| Silhouette Score    | 0.17    |

Although the silhouette score was relatively low, the PCA projection revealed clear separation between customer clusters, supporting the practical usefulness of the segmentation.
