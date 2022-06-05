import json, os, re, requests, urllib
from bs4 import BeautifulSoup

from dotenv import load_dotenv

load_dotenv()

FOLDER_URL = os.getenv('FOLDER_URL')
resp = requests.get(FOLDER_URL)

soup = BeautifulSoup(resp.text, features="html.parser")


links = [f"{a['href']}" for a in soup.select('table a')[5:]]

informations = [ re.split(r'[-]\s*', l) for l in links ]

obj_list = []
out_file = open("../src/data1.json", "w")

for (i, v) in enumerate(informations):
	obj = {}
	obj['c'] = urllib.parse.unquote(v[0])
	obj['name'] = urllib.parse.unquote(os.path.splitext(v[1])[0])
	obj['teachers'] = [ urllib.parse.unquote(os.path.splitext(v)[0]) for v in v[2:] ]
	obj['href'] = f"{FOLDER_URL}{links[i]}"
	obj_list.append(obj)

json.dump(obj_list, out_file, indent=2)


