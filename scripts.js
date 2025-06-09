console.log("working");

// script.js

document.addEventListener("DOMContentLoaded", () => {
    const select = document.getElementById("customerSelect");
    const display = document.getElementById("couponDisplay");

    fetch("customer_discount_data.json")
        .then(response => response.json())
        .then(customers => {
        // Populate dropdown
        customers.forEach(customer => {
            const option = document.createElement("option");
            option.value = customer["Customer ID"];
            option.textContent = `Customer ${customer["Customer ID"]}`;
            select.appendChild(option);
        });

        // Handle selection
        select.addEventListener("change", function () {
            const selectedId = parseInt(this.value);
            const customer = customers.find(c => c["Customer ID"] === selectedId);

            if (customer) {
            display.style.display = "block";
            display.innerHTML = `
                <strong>Hi Customer ${customer["Customer ID"]}!</strong><br>
                You are in Cluster <strong>${customer["Cluster"]}</strong><br>
                Your discount is: <span style="color: green;"><strong>${customer["Assigned Discount"]}</strong></span><br>
                <em>Use this coupon at checkout!</em>
            `;
            } else {
            display.style.display = "none";
            }
        });
        })
        .catch(error => {
        console.error("Error loading customer data:", error);
        });
});
