
## APIs
APIs for get data:

|  API  | Type | Syntax |Payload
| ------ | ------ | ------| ------|
| Get meeting room status | GET |119.82.135.244:3000/heads|
| Insert new data | POST | 119.82.135.244:3000/heads|{	"room":"room1",	"count":3}
| Get Lastest one | GET | 119.82.135.244:3000/heads/<room_name>|

## Examples
Insert new record: ```example/update_heads_room.py```   
Get Status: ```example/get_heads_data.py```

