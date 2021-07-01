import React from 'react'


function UserList() {
    return (
        <div>
            <div>
                <h1>Simple List</h1>
            </div>
            <div>
                <form>
                    <div>
                        <label for='name'>Name</label>
                        <input type='text' placeholder='name' id='name'></input>
                    </div>
                    <div>
                        <label for='surname'>Surname</label>
                        <input type='text' placeholder='surname' id='surname'></input>
                    </div>
                    <div>
                        <label for='checkAttendance'>Attendance</label>
                        <input type='checkbox' id='checkAttendance'></input>
                    </div>
                </form>
            </div>
            <ul>
                <li>
                    <p>Karolina</p>
                    <p>Kulinska</p>
                    <p>Obecność</p>
                </li>
            </ul>
        </div>
    )
}

export default UserList