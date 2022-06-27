/* eslint-disable*/
import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';'./components/Customer';

const customers =[
  {
    'id':"1",
    'image':"https://placeimg.com/64/64/1",
    'name' : "홍길동",
    'birthday' : "950108",
    'gender' : "남자",
    'job' : "대학생"
  },
  {
    'id':"2",
    'image':"https://placeimg.com/64/64/2",
    'name' : "신사임당",
    'birthday' : "850108",
    'gender' : "여자",
    'job' : "주부"
  },
  {
    'id':"3",
    'image':"https://placeimg.com/64/64/3",
    'name' : "이순신",
    'birthday' : "750108",
    'gender' : "남자",
    'job' : "군인"
  }
]
class App extends Component{
  render() {
    return(
      <div>
        {customers.map(c => {
          return(
            <Customer 
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
