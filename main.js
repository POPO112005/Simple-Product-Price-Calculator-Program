let productCode = document.getElementById('productcode');
let nameInput = document.getElementById('productname');
let priceInput = document.getElementById('productprice');

productCode.addEventListener('change', function () {
    let productname = "";
    let productprice = "";

    switch (this.value) {
        case "001":
            productname = "Iphone 15 Pro";
            productprice = 30000;
            break;
        case "002":
            productname = "Iphone 15 Pro Max";
            productprice = 35000;
            break;
        case "003":
            productname = "Iphone 16";
            productprice = 38000;
            break;
        case "004":
            productname = "Iphone 16 Pro";
            productprice = 40000;
            break;
        case "005":
            productname = "Iphone 16 Pro Max";
            productprice = 45000;
            break;
        default:
            productname = "";
            productprice = "";
    }

    nameInput.value = productname;
    priceInput.value = productprice;

});


document.querySelector('#add').addEventListener('click', function () {
    // Get modal element and body
    const errorModalEladd = document.getElementById('errorModaladd');
    const errorModalBodyadd = document.getElementById('errorModalBodyadd');
    // Create Bootstrap Modal instance
    const errorModaladd = new bootstrap.Modal(errorModalEladd);

    // Function to show message in modal
    function showError(message) {
        errorModalBodyadd.textContent = message;  // Insert message
        errorModaladd.show();                     // Show modal
    }

    let qtyInput = document.getElementById('qty');
    if (productCode.value === "") {
        showError("You have not selected a product yet");
        return;
    }
    if (qtyInput.value === "" || isNaN(qtyInput.value) || !Number.isInteger(parseFloat(qtyInput.value)) || parseInt(qtyInput.value) <= 0) {
        showError("Please enter a valid quantity");
        return;
    }

    const qty = parseInt(qtyInput.value, 10);
    const unitPrice = parseFloat(priceInput.value);
    const lineTotal = qty * unitPrice;

    // 1) Add new row in table
    const tbody = document.querySelector('#productTable tbody');
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td><input type="checkbox" class="rowCheckbox"></td>
        <td>${productCode.value}</td>
        <td>${nameInput.value}</td>
        <td>${priceInput.value}</td>
        <td>${qty}</td>
        <td>${lineTotal.toFixed(2)}</td>
    `;
    tbody.appendChild(tr);

    // 2) Update summary below
    // Get summary elements
    const totalPriceInput = document.getElementById('totalPrice');
    const taxInput = document.getElementById('tax');
    const netPriceInput = document.getElementById('netPrice');

    // Read previous total
    let prevTotal = parseFloat(totalPriceInput.value) || 0;
    // Add new total
    prevTotal += lineTotal;
    // Calculate 7% tax from total
    const newTax = prevTotal * 0.07;
    // Calculate net total
    const newNet = prevTotal + newTax;

    // Display results
    totalPriceInput.value = prevTotal.toFixed(2);
    taxInput.value = newTax.toFixed(2);
    netPriceInput.value = newNet.toFixed(2);

    // 3) Clear old quantity to prepare for new entry
    qtyInput.value = "";
});


document.querySelector('#delete').addEventListener('click', function () {
    const tbody = document.querySelector('#productTable tbody');
    const totalPriceInput = document.getElementById('totalPrice');
    const taxInput = document.getElementById('tax');
    const netPriceInput = document.getElementById('netPrice');

    // Find rows where checkbox is checked
    const checkboxes = tbody.querySelectorAll('input.rowCheckbox:checked');
    const errorModalEldelete = document.getElementById('errorModaldelete');
    const errorModalBodydelete = document.getElementById('errorModalBodydelete');
    const errorModaldeleteInstance = new bootstrap.Modal(errorModalEldelete);

    // Function to show message in modal
    function showError(message) {
        errorModalBodydelete.textContent = message;  // Insert message
        errorModaldeleteInstance.show();  // Show modal
    }

    // If no rows in table
    if (tbody.rows.length === 0) {
        showError("No data in table");
        $("#cancel").hide();
        return;
    }
    // If no checkbox selected
    if (checkboxes.length === 0) {
        showError("Please select items to delete");
        $("#cancel").hide();
        return;
    }

    // Show confirmation message
    showError("Do you want to delete selected items?");
    $("#cancel").show();

    // Attach event listener to modal OK button
    errorModalEldelete.querySelector('#ok').addEventListener('click', function () {
        // Remove selected rows
        checkboxes.forEach(checkbox => {
            const row = checkbox.closest('tr');
            row.remove();
        });

        // Update summary after deletion
        updateSummary();
    });

    // Update summary function
    function updateSummary() {
        let newTotal = 0;
        tbody.querySelectorAll('tr').forEach(row => {
            const priceCell = row.cells[5].textContent;
            newTotal += parseFloat(priceCell) || 0;
        });

        const newTax = newTotal * 0.07;
        const newNet = newTotal + newTax;

        totalPriceInput.value = newTotal.toFixed(2);
        taxInput.value = newTax.toFixed(2);
        netPriceInput.value = newNet.toFixed(2);
    }
});

document.getElementById('selectAll').addEventListener('click', function() {
    const checkboxes = document.querySelectorAll('#productTable tbody input.rowCheckbox');

    // Select all checkboxes by setting checked to true
    checkboxes.forEach(cb => cb.checked = true);

});




