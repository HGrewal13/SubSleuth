
document.addEventListener("DOMContentLoaded", () => {
    const select = document.querySelector("#customerSelect");
    const emailMsg = document.querySelector("#emailMsg");
    const couponContainer = document.querySelector("#couponContainer");

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
                emailMsg.style.display = "block";
                emailMsg.innerHTML = 
                `
                    <strong>Hi Customer ${customer["Customer ID"]}!</strong><br>
                    <p>You've been selected for a promotion with special coupons useable at any HBS Apparel locations</p>
                    <em>Present your coupon at checkout!</em>

                `;
                let couponText = 
                `
                    <div class="couponProto">
                        <h1>${customer["Assigned Discount"]} OFF</h1>
                        <h2>Apparel Store Exclusive</h2>
                        <p>Enjoy ${customer["Assigned Discount"]} off your next clothing purchase.<br>Valid for all items including sale!</p>
                        <div class="code">FASHION20</div>
                        <div class="footer">Valid until July 31, 2025<br>In-store & online</div>
                    </div>
                `;
                if(customer["New Subscriber Offers"] === "Yes") {
                    couponText += 
                    `
                        <div class="couponProto">
                            <h1>ADDITIONAL 10% OFF</h1>
                            <h2>New Subscriber Exclusive</h2>
                            <p>Enjoy an additional 10% off your next clothing purchase when you subscribe to our loyalty program.</p>
                            <div class="code">FASHION20</div>
                            <div class="footer">Valid until July 31, 2025<br>In-store & online</div>
                        </div>
                    `;
                }
                couponContainer.innerHTML = couponText;
            } else {
                couponContainer.style.display = "none";
            }
        });
        })
        .catch(error => {
        console.error("Error loading customer data:", error);
        });
});
