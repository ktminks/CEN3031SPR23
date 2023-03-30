import requests
import json
from datetime import datetime

# The API endpoint
url = "http://localhost:4200"

# Test Case Data
data1 = {
    "Email": "swe@ufl.edu",
    "Name": "Chocolate Chip Cookies",
    "Ingredients": ["1 Cup of Salted Butter", "1 Cup of White (Granulated) Sugar", "1 Cup of Light Brown Sugar", "2 tsps of Pure Vanilla Extract", "2 Large Eggs", "3 Cups of All-Purpose Flour", "1 tsp of Baking Soda", "1/2 tsp of Baking Powder", "1 tsp of Sea Salt", "2 Cups of Chocolate Chips"],
    "Instructions": ["Preheat oven to 375 degrees F. Line a baking pan with parchment paper and set aside.", "In a separate bowl mix flour, baking soda, salt, baking powder. Set aside.", "Beat in eggs and vanilla until fluffy.", "Mix in the dry ingredients until combined.", "Add 12 oz package of chocolate chips and mix well.", "Roll 2-3 TBS (depending on how large you like your cookies) of dough at a time into balls and place them evenly spaced on your prepared cookie sheets. (alternately, use a small cookie scoop to make your cookies).", "Bake in preheated oven for approximately 8-10 minutes. Take them out when they are just BARELY starting to turn brown.", "Let them sit on the baking pan for 2 minutes before removing to cooling rack."],
    "Image": "NA",
    "Tags": "NA",
    "Rating": 4.99,
    "Notes": "NA",
    "Source": "https://joyfoodsunshine.com/the-most-amazing-chocolate-chip-cookies/",
    "Date": json.dumps(datetime.now().strftime("%Y-%m-%d %H:%M:%S")),
    "ID": 1
}
data2 = {
    "Email": "swe@ufl.edu",
    "Name": "Linguine al Limone",
    "Ingredients": ["1 (16-ounce) Package of Dry Linguine", "2 Teaspoons of Unsalted Butter", "1/8 Teaspoon of Crushed Red Pepper Flakes", "2 Lemons (Halved)", "3 Teaspoons of Chopped Fresh Parsley", "1 Cup of Grated Parmigiano Reggiano (Divided)", "3 Tablespoons of Extra-Virgin Olive Oil", "2 Cloves of Garlic (Peeled and Smashed)", "A Bit of Kosher Salt", "4 Lemon Leaves (Washed and Patted Dry)"],
    "Instructions": ["In a heavy bottom pot on high heat, bring water to a boil. Once the water is at a boil, season the water with salt and add the linguine, stirring with a fork or tongs to ensure it doesn't stick together.", "While the pasta cooks, prepare the sauce. In a wide skillet set over medium-low heat, add the oil and garlic, sautéing for 1 minute. Crumple the lemon leaves in your hands to expose the oils and add them to the pan, along with the butter and red pepper flakes. Toast until the garlic is golden and the butter is frothy, 1 to 2 minutes. Remove the lemon leaves and reserve.", "Ladle 1 cup of the pasta water into the pan and simmer for about 2 minutes.", "Once the pasta is cooked, reserve 1 to 2 cups of the water and strain the pasta through a colander. Transfer the pasta to the pan, turn up the heat to medium-high and toss to combine.", "Add the parsley and continue to mix vigorously for 1 to 2 minutes until the sauce looks glossy.", "Squeeze in the juice of 1½ lemons and toss to combine.", "Sprinkle in half of the Parmigiano Reggiano and toss to combine. If the pasta looks dry, add a splash of the reserved pasta water. Taste and adjust with more lemon juice or salt, as needed.", "Garnish with the remaining Parmigiano Reggiano and the lemon leaves. Serve immediately."],
    "Image": "NA",
    "Tags": "NA",
    "Rating": 0,
    "Notes": "NA",
    "Source": "https://www.today.com/recipes/pasta-al-limone-t282397",
    "Date": json.dumps(datetime.now().strftime("%Y-%m-%d %H:%M:%S")),
    "ID": 2
}
data3 = {
    "Email": "swe@ufl.edu",
    "Name": "French Toast",
    "Ingredients": ["2/3 Cup of Milk", "2 Large Eggs", "1 Teaspoon of Vanilla Extract (Optional)", "1/4 teaspoon of Ground Cinnamon (Optional)", "1 Tablespoon of Unsalted Butter (More as Needed)", "6 Thick Slices of Bread", "Salt to Taste"],
    "Instructions": ["Gather all ingredients.", "Whisk milk, eggs, vanilla, cinnamon, and salt together in a shallow bowl.", "Lightly butter a griddle or skillet and heat over medium-high heat.", "Dunk bread in the egg mixture, soaking both sides.", "Transfer to the hot skillet and cook until golden, 3 to 4 minutes per side.", "Serve hot."],
    "Image": "NA",
    "Tags": "NA",
    "Rating": 4.60,
    "Notes": "NA",
    "Source": "https://www.allrecipes.com/recipe/7016/french-toast-i/",
    "Date": json.dumps(datetime.now().strftime("%Y-%m-%d %H:%M:%S")),
    "ID": 3
}

# POST requests to the API and their status codes
post_response = requests.post(url, json = data1)
print(post_response.status_code)
post_response = requests.post(url, json = data2)
print(post_response.status_code)
post_response = requests.post(url, json = data3)
print(post_response.status_code)

# A GET request to the API, its status code, and its result
get_response = requests.get(url, params = data1['Name'])
print(get_response.status_code)
for x in get_response:
    print(x, "\n")

# A DELETE request to the API and its status code
put_response = requests.delete(url, params = data1['Name'])
print(get_response.status_code)
