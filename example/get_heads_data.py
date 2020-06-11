import requests
import json
server = 'http://119.82.135.244:3000/'
path ='heads'

def get_heads_data():
    r = requests.get(server+path)
    data = r.json()   
    #Show data
    print(data[0])
    #Parse data
    print(data[0]['room'])
    print(data[0]['count'])
    
    
if __name__=="__main__":
    get_heads_data()