// json generator
// https://json-generator.com/
// json
let 회원정보 = [
  {
    "_id": "642a61ea4cd4e3016d8b0fb8",
    "index": 0,
    "age": 26,
    "eyeColor": "green",
    "name": "Mayer Harris",
    "gender": "male",
    "company": "QUIZKA"
  },
  {
    "_id": "642a61eacf9119fc9602cdb5",
    "index": 1,
    "age": 34,
    "eyeColor": "brown",
    "name": "Robles Pitts",
    "gender": "male",
    "company": "AQUAZURE"
  },
  {
    "_id": "642a61ea4671a3c98a469673",
    "index": 2,
    "age": 20,
    "eyeColor": "green",
    "name": "Weeks Chandler",
    "gender": "male",
    "company": "DRAGBOT"
  },
  {
    "_id": "642a61ea793c64bb9c5d0f43",
    "index": 3,
    "age": 22,
    "eyeColor": "green",
    "name": "Luna Mclaughlin",
    "gender": "male",
    "company": "ECLIPTO"
  },
  {
    "_id": "642a61ea876b912d5057e027",
    "index": 4,
    "age": 32,
    "eyeColor": "blue",
    "name": "Kim Long",
    "gender": "female",
    "company": "DUFLEX"
  },
  {
    "_id": "642a61ea12c9b323bbc8ec1a",
    "index": 5,
    "age": 29,
    "eyeColor": "blue",
    "name": "Florence Fuller",
    "gender": "female",
    "company": "MYOPIUM"
  }
]

회원정보[0]
회원정보[0] ['name']
회원정보[1] ['company']

let 나이평균 = (회원정보[0]['age']+회원정보[1]['age']+회원정보[2]['age']+회원정보[3]['age']+회원정보[4]['age']+회원정보[5]['age']) / 6
console.log(나이평균)
