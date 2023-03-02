import requests
import json
from datetime import datetime

# The API endpoint
url = "http://localhost:27017"

# Test Case Data
data = {

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

# A POST request to the API
post_response = requests.post(url, json = data)

# Print the response code
print(post_response.status_code)
