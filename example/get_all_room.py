import requests
import json
server = 'http://119.82.135.244:3000/'
path ='global'

def get_heads_data():
    r = requests.get(server+path)
    data = r.json()   
    #Show data
    print(data)
  
    
  
if __name__=="__main__":
    get_heads_data()