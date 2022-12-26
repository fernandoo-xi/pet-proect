const {buildSchema} = require('graphql')

const schema = buildSchema(`
    
    type User {
        id: ID
        username: String
        login: String
        password: String
        
    }
    
    input UserInput {
        id: ID
        username: String!
        login: String!
        password: String!
    }
    
    
    type Query {
        getUser(login: String!): User
        getUserName(username: String!): User
    }
    
    type Mutation {
        createUser(input: UserInput): User
    }

`)

module.exports = schema