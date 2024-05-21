import requests
from bs4 import BeautifulSoup

# Define the URL you want to scrape
url = 'https://trends.google.com/trends/trendingsearches/daily?geo=US&hl=en-US'

# Send a GET request to the URL
response = requests.get(url)

# Check if the request was successful (status code 200)
if response.status_code == 200:
    # Parse the HTML content of the page

    item = BeautifulSoup(response.text, 'html')

    print(item.prettify())

    soup = BeautifulSoup(response.content, 'html.parser')
    
    # Find specific elements on the page using BeautifulSoup's selectors
    # For example, let's find all the links on the page
    links = soup.find_all('a')
    
    # Print out the URLs of the links
    # for link in links:
    #     print(link.get('href'))
else:
    print('Failed to retrieve the webpage.')