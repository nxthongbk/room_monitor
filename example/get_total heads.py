import requests
import json
server = 'http://119.82.135.244:3000/'
path ='global'

def get_heads_data():
    r = requests.get(server+path)
    data = r.json() 
    total =0  
    #Show data
    for i in range(0, len(data)):
    	print(data[i]['count'])
    	total+=data[i]['count']
    
  
    print("total is: %d"%total)
  
if __name__=="__main__":
    get_heads_data()