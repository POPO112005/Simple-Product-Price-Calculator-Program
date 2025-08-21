## Simple Product Price Calculator

A lightweight, front-end only web app to select predefined products, enter quantities, and calculate totals with tax. Built with HTML, Bootstrap 5, jQuery, and vanilla JavaScript.

### Features
- **Auto-fill product details**: Choose a product code to populate name and unit price.
- **Add line items**: Enter a positive integer quantity and click Add to insert into the table.
- **Running totals**: Calculates Total, 7% Tax, and Net Price with two-decimal precision.
- **Delete with confirmation**: Select rows and click Delete. A modal asks for confirmation.
- **Select All helper**: Quickly select all rows for deletion.
- **Responsive UI**: Uses Bootstrap 5 and Bootstrap Icons via CDN.

### Tech Stack
- **UI**: HTML, Bootstrap 5, Bootstrap Icons
- **Logic**: Vanilla JavaScript (`main.js`)
- **Utilities**: jQuery (only for a couple of simple DOM toggles)

### Project Structure
```
Simple-Product-Price-Calculator-Program/
  img/
    logo.png
  Product Information.html
  main.js
```

### Getting Started
1. **Clone or download** this repository.
2. Ensure you have an internet connection (Bootstrap, Bootstrap Icons, and jQuery load via CDN).
3. **Open** `Product Information.html` in any modern browser.

No build steps are required.

### How to Use
1. From the Product Code dropdown, select a code (e.g., `001`). The app auto-fills Product Name and Price.
2. Enter a **Quantity** (positive integer) and click **Add**.
3. The item appears in the table and the summary updates:
   - Total Price = sum of all line totals
   - Tax = 7% of Total Price
   - Net Price = Total Price + Tax
4. To remove items, check their boxes and click **Delete**. Confirm in the modal.
5. Use **Select All** to check all rows quickly.

All totals are displayed in Baht and formatted to two decimals.

### Customization
- **Edit product list**: Update the switch-case in `main.js` where product code maps to name and price.
```js
// main.js
switch (productCode.value) {
  case "001": productname = "Iphone 15 Pro"; productprice = 30000; break;
  // Add or change cases as needed
}
```
- **Change tax rate**: Replace `0.07` in `main.js` where tax is calculated when adding and deleting rows.
- **Change currency label**: In `Product Information.html`, update the "Baht" labels near the summary fields.

### Notes and Limitations
- Data is not persisted; refreshing the page clears the table.
- Product catalog is hardcoded for simplicity.
- Requires internet for CDN assets. To run fully offline, download Bootstrap CSS/JS, Bootstrap Icons, and jQuery and update the `<link>`/`<script>` tags accordingly.

### Acknowledgements
- [Bootstrap](https://getbootstrap.com/)
- [Bootstrap Icons](https://icons.getbootstrap.com/)
- [jQuery](https://jquery.com/)

### License
This sample code is for learning and demo purposes. Adapt as needed for your project.


