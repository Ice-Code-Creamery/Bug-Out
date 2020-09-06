const axios = require('./axios');
//using the *fake* API-endpoint ... https://fullstack.com/api/cohort2004
//create a function that takes a student name and uses axios to hit the endpoint with a get request
//returning that specific student as specified in the test
//* you don't need to NPM i axios for this test... Only work within this file and use promises

const getStudent = (name) => {
  if(typeof(name)!= 'string') {
    throw new Error(error)
  }
  return axios.get('https://fullstack.com/api/cohort2004')
  .then((res,rej) => {
    let keys = Object.keys(res.data)
    console.log('keys.length is ',keys.length)
    let response = {
      count: keys.length,
      student: 'no student found',
    }
    for (let i = 1; i < keys.length; i++) {
        if (res.data[i].name == name) {
          console.log('if triggered')
          console.log(res.data[i])
          response = {
            count: keys.length,
            student: res.data[i]
          }
          return response
        }
      }
    return response
    })
    .catch((error)=> {
     throw new Error('error')
    })
  };


  module.exports = { getStudent };
