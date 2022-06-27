import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer.js';
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/Tablebody';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  Table: {
    minWidth: 1080 //이렇게 해야 1080이하에서 가로스크롤바가 생긴다.
  }
})

const customers = [
{
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': '홍길동',
  'birthday': '12345',
  'gender': '남자',
  'job': '대학생'
},
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/4',
  'name': '이순진',
  'birthday': '999999',
  'gender': '남자',
  'job': '대학생'
},
{
  'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name': '유관순',
  'birthday': '111111',
  'gender': '여자',
  'job': '대학생'
}
]

class App extends Component {
  render() {
    const { classes } = this.props; //위에서 정의한 스타일이 적용될수 있게함
    return (
      <Paper className={classes.root}>
        <Table className={classes.Table}>
          <TableHead>
            <TableRow>
              <TableCell>id</TableCell>
              <TableCell>image</TableCell>
              <TableCell>name</TableCell>
              <TableCell>birthday</TableCell>
              <TableCell>gender</TableCell>
              <TableCell>job</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.map(c => { 
              return (
                <Customer
                  key={c.id}
                  id={c.id}
                  image={c.image}
                  name = {c.name}
                  birthday = {c.birthday}
                  gender = {c.gender}
                  job = {c.job}
                />
                )
              })
            }
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);