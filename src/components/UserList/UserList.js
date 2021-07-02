import React, { useState, useEffect } from 'react'
import { users as usersData } from '../../data/users'
import StudentsListItem from '../StudentsListItem/StudentsListItem'
import Form from '../Form/Form'



const UserList = (props) => {

    const [users, setUsers] = useState([usersData])

    const handleDeletePerson = (name) => {
        const filteredUsers = users.filter(user => user.name !== name)
        setUsers(filteredUsers)

    }

    // Formularz

    const [inputNameText, setInputNameText] = useState('')


    return (
        <div>
            <div>
                <h1>Simple List</h1>
            </div>
            <Form />
            <ul>
                {users.map(({ name, surname, average, attendance = '0%' }, index) => (
                    <StudentsListItem handleRemove={handleDeletePerson} index={index} name={name} surname={surname} attendance={attendance} average={average} />
                ))}
            </ul>
        </div>
    )
}


// class UserList extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             isStudentList: true,
//             users: users,
//         }
//     }

//     handleChangeTitleList = () => {
//         this.setState((prevState) => ({
//             isStudentList: !prevState.isStudentList,

//         }))
//     }


//     handleDeletePerson = (name) => {
//         const filteredUsers = this.state.users.filter(user => user.name !== name)
//         this.setState({
//             users: filteredUsers
//         })

//     }

//     render() {
//         return (
//             <div>
//                 <div>
//                     <h1>{this.state.isStudentList ? 'Student`s list' : 'User`s list'}</h1>
//                     <button onClick={this.handleChangeTitleList}>Change List</button>
//                 </div>
//                 <Form />
//                 <ul>
//                     {this.state.users.map(({ name, surname, average, attendance = '0%' }, index) => (
//                         <StudentsListItem onDeleteHandler={this.state.handleDeletePerson} index={index} name={name} surname={surname} attendance={attendance} average={average} />
//                     ))}
//                 </ul>
//             </div>
//         )
//     }
// }


export default UserList