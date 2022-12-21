import {gql} from '@apollo/client'

export const GET_USER = gql`
    query getUser($login: String!){
        getUser(login: $login) {
            username, login, password
        }
    }    

`