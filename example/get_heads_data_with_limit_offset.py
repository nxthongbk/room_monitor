import requests
import json
server = 'http://119.82.135.244:3000/'
path ='heads'

limit = 1 # how many record return
offset = 0 # the index of first record 

def get_heads_data():
	#example url: 119.82.135.244:3000/heads?limit=2&offset=0
    r = requests.get(server+path+"?limit=%d&offset=%d"%(limit,offset))
    data = r.json()   
    #Show data
    print(data)
    #Parse data
    print(data[0]['room'])
    print(data[0]['count'])
    
    
if __name__=="__main__":
    get_heads_data()