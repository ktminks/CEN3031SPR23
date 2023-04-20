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
data4 = {
    "Email": "swe@ufl.edu",
    "Name": "Best Homemade Brownies",
    "Ingredients": ["1 1/2 Cups of Granulated Sugar", "3/4 Cup of All-Purpose Flour", "2/3 Cup of Cocoa Powder (Sifted)", "1/2 Cup of Powdered Sugar (Sifted)", "1/2 Cup of Dark Chocolate Chips", "3/4 Teaspoons of Sea Salt", "2 Large Eggs", "1/2 Cup of Canola Oil or Extra-Virgin Olive Oil", "2 Tablespoons of Water", "1/2 Teaspoon of Vanilla"],
    "Instructions": ["Preheat the oven to 325°F. Lightly spray an 8x8 baking dish (not a 9x9 dish or your brownies will overcook) with cooking spray and line it with parchment paper. Spray the parchment paper.", "In a medium bowl, combine the sugar, flour, cocoa powder, powdered sugar, chocolate chips, and salt.", "In a large bowl, whisk together the eggs, olive oil, water, and vanilla.", "Sprinkle the dry mix over the wet mix and stir until just combined.", "Pour the batter into the prepared pan (it'll be thick - that's ok) and use a spatula to smooth the top. Bake for 40 to 48 minutes, or until a toothpick comes out with only a few crumbs attached (note: it's better to pull the brownies out early than to leave them in too long). Cool completely before slicing.*** Store in an airtight container at room temperature for up to 3 days. These also freeze well!"],
    "Image": "NA",
    "Tags": "NA",
    "Rating": 4.91,
    "Notes": "NA",
    "Source": "https://www.loveandlemons.com/brownies-recipe/",
    "Date": json.dumps(datetime.now().strftime("%Y-%m-%d %H:%M:%S")),
    "ID": 4
}
data5 = {
    "Email": "swe@ufl.edu",
    "Name": "Chicken Stir-Fry",
    "Ingredients": ["4 Cups of Water", "2 Cups of White Rice", "2/3 Cup of Soy Sauce", "1/4 Cup of Brown Sugar", "1 Tablespoon of Cornstarch", "1 Tablespoon of Minced Fresh Ginger", "1 Tablespoon of Minced Garlic", "1/4 Teaspoon of Red Pepper Flakes", "3 Skinless, Boneless Chicken Breast Halves (Thinly Sliced)", "2 Tablespoons Sesame Oil (Divided)", "1 Head of Broccoli (Broken into Florets)", "1 Onion (Cut into Large Chunks)", "1 Cup of Sliced Carrots", "1 (8 Ounce) Can of Sliced Water Chestnuts (Drained)", "1 Green Bell Pepper (Cut into Matchsticks)"],
    "Instructions": ["Bring water and rice to a boil in a saucepan over high heat. Reduce heat to medium-low, cover, and simmer until rice is tender, and liquid has been absorbed, 20 to 25 minutes.", "Meanwhile, combine soy sauce, brown sugar, and cornstarch in a medium glass or ceramic bowl; stir until smooth. Stir in ginger, garlic, and red pepper flakes; add chicken and stir to coat. Cover and marinate in the refrigerator for at least 15 minutes.", "Heat 1 tablespoon sesame oil in a wok or large skillet over medium-high heat. Add broccoli, onion, carrots, water chestnuts, and bell pepper; cook and stir until just tender, about 5 minutes. Transfer vegetables into a dish; set aside.", "Heat remaining 1 tablespoon sesame oil in the same wok or skillet over medium-high heat. Add chicken, reserving marinade, and cook until just browned, about 2 minutes per side; stir in vegetables and reserved marinade. Bring to a boil; cook and stir until chicken is no longer pink in the center and vegetables are tender, 5 to 7 minutes. Serve over rice."],
    "Image": "NA",
    "Tags": "NA",
    "Rating": 4.50,
    "Notes": "NA",
    "Source": "https://www.allrecipes.com/recipe/223382/chicken-stir-fry/",
    "Date": json.dumps(datetime.now().strftime("%Y-%m-%d %H:%M:%S")),
    "ID": 5
}

# POST requests to the API and their status codes
post_response = requests.post(url, json = data1)
print(post_response.status_code)
post_response = requests.post(url, json = data2)
print(post_response.status_code)
post_response = requests.post(url, json = data3)
print(post_response.status_code)
post_response = requests.post(url, json = data4)
print(post_response.status_code)
post_response = requests.post(url, json = data5)
print(post_response.status_code)

'''# A GET request to the API, its status code, and its result
get_response = requests.get(url, params = data1['Name'])
print(get_response.status_code)
for x in get_response:
    print(x, "\n")

# A DELETE request to the API and its status code
put_response = requests.delete(url, params = data1['Name'])
print(get_response.status_code)'''
