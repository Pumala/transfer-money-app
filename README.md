# TransferMoney

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.4.

## Objective

Create a responsive transfer money application

### Live Demo:

[Transfer Money App](http://transfer-money-app.surge.sh/)

### Getting the App to Run 

1. Clone the repository
  * in the command line type the following and then press enter: 

    git clone https://github.com/Pumala/transfer-money-app.git
  
    ##### Example Below:
    ![step1](src/assets/img/app-img/step1.png)
    *Should print **done** when complete.*

2. Go into the directory
  * in the command line type the following and press enter:

    cd transfer-money-app/

    ##### Example Below:
    ![step2](src/assets/img/app-img/step2.png)
    *Then type **ls** to see the files and folders inside the current directory.*

3. Install dependencies
  * in the command line type the following and press enter:

    install npm

    ##### Example Below:
    ![step3](src/assets/img/app-img/step3.png)
    *If you get an error message, then you may not have node or npm (or both) installed on your computer. Please visit https://www.npmjs.com/get-npm to download them.*

4. Run the application
  * in the command line type the following and press enter:

    npm start
    ##### Example Below:
    ![step4](src/assets/img/app-img/step4.png)
    *Visit http://localhost:4200/ in the browser to view the app.*
### Languages / Frameworks / Technologies used:

* HTML
* CSS / SASS
* Javascript
* Angular 7

### Languages / Frameworks / Technologies used Explanation:

I researched what new changes came with the release of Angular 7. Some of the new features includes CLI prompts, updates to its Angular Material and compononent dev kit (CDK) as seen in its new DragDropModule and ScrollingModule. There are also improvements in performance. To implement this change in performance, nothing is needed from the developer as the changes have already been taken care of in the newest changes in the polyfills.ts file.

All in all, there doesn't seem to be many changes between Angular 6 and Angular 7 where I would need to spend countless hours upgrading. I only needed to change the angular and typescript versions, which took a few minutes.  

## Description

Users can make money transfers, which are then added to a list of recent transactions. Users can type in a search engine to filter the list of recent transactions by the merchant name. Users can also sort the results by date, beneficiary (merchant), and amount in both ascending and descending order.


## Walk Through

####  1. Initial View

  ![home](src/assets/img/app-img/initial-state.png)

####  2. Make a Transfer

  ![home](src/assets/img/app-img/make-transfer.png)

####  3. Transfer is added to the top of the list of recent transactions

  ![home](src/assets/img/app-img/transfer-added.png)

####  4. Filter on 're'

  ![home](src/assets/img/app-img/filter-re.png)

####  5. Sort by Amount Descending

  ![home](src/assets/img/app-img/sort-amount-desc.png)

####  6. Sort by Amount Ascending

  ![home](src/assets/img/app-img/sort-amount-asc.png)

####  7. Sort by Date Descending

  ![home](src/assets/img/app-img/sort-date-desc.png)

####  8. Sort by Date Ascending

  ![home](src/assets/img/app-img/sort-date-asc.png)

####  9. Sort by Beneficiary Descending

  ![home](src/assets/img/app-img/sort-beneficiary-desc.png)

####  10. Sort by Beneficiary Ascending

  ![home](src/assets/img/app-img/sort-beneficiary-asc.png)

####  11. Clear Filter

  ![home](src/assets/img/app-img/clear-filter-search.png)

####  12. Return No Results when filter search engine matches nothing

![home](src/assets/img/app-img/no-results.png)

####  13. Exceeds balance error

![home](src/assets/img/app-img/exceeds-balance.png)
