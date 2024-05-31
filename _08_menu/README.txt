Task 1: Refer the folder "_01_show_html_dynamically"
In this task, we want to dynamically show the menu item (without any filter buttons).
This means that in real world we will get the menu items from an api or from a database and then construct the html to display the menu items.
***************************************************
Task 2: Refer the folder "_02_implement_filter_buttons"
In this task, we want to filter the menu items based on the category chosen by the user.
We have hardcoded 4 categories in the html and using the concept of dataset to determine the category selected by the user.
Based on the selected category we are filtering out the menu items to be displayed in the web page.
Caveat: When a new menu item is introduced in the menu with a different category then how do we handle this?
In such a case, we will have to modify our html page to introduce a new category and then we will be able to show the new items when their category is selected. For example, let us say we want to introduce a new category named dinner.
***************************************************
(V.IMP) Task 3: Refer the folder "_03_dynamic_categories"
This is a major improvement to our project where in we will not hard code the menu category in the html page. Instead we will create the categories by reading the menu items from the menu array that we receive from the api.
This menu array may have menu items spread across N number of unique categories.
***************************************************