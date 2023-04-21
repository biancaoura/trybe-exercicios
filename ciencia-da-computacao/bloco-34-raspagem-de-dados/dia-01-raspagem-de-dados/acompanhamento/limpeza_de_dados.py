from parsel import Selector
import requests

response = requests.get("http://books.toscrape.com")
selector = Selector(text=response.text)
prices = selector.css(".product_price .price_color::text").re(r"£\d+\.\d{2}")
print(prices)
