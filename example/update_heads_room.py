import requests

server = 'http://119.82.135.244:3000/'
path ='heads'

def update_room(room_name, room_head_count):
    data = {'room':  room_name,
        'count': room_head_count
        }
    r = requests.post(server+path, data = data)
    
if __name__=="__main__":
    update_room('room1',15)