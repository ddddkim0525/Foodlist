Create a food sharing app.
React Project for DEC 17.

Foodlist is a web application that helps flatmates to share their cooked meals.
Users should be able to check what food items are available in the fridge, which are sharable, and can freely create, update, and delete items.

Using the firebase database please create a working prototype of the app.
Please freely set the UI, and the database structure.

Functionalities needed include:


0. When entering the app, the user must enter their name.
(This will be used to mock the login process)
1. Users can add food items to the list.
2. When adding a food item, a modal should pop up, where details of the item is required. Details must include:

    Name : String
    Date : UTC time
    Sharable : boolean

Name should be mandatory, and you should set a default value for other details. 

3. Users can update or delete food items to the list. However they cannot delete other's food items.

4. The item on the list is collapsable, when the user clicks on the item it expands to reveal more information.

-- ADVANCED -- 

1. Use cookies to remember the name info.
2. Allow users to add comments to the item.


--EXTRA--

How do you create a fully working log-in page?
Allow users to take photos of their food using their camera
A record page of past food items.
A alert list for food ingredients that are short.
