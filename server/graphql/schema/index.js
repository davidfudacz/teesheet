const { gql } = require('apollo-server-express')

module.exports = gql`
  type User {
    id: Int!
    givenName: String!
    surname: String!
    fullName: String!
    email: String!
    isAdmin: Boolean!
    createdAt: String!
    updatedAt: String!
  }

  type Club {
    id: Int!
    name: String!
    informal: String
    established: String!
    logoUrl: String
    websiteUrl: String
    totalNumOfHoles: Int!
    membershipType: String!
    courses: [Course!]!
    createdAt: String!
    updatedAt: String!
  }

  type Course {
    id: Int!
    name: String
    informal: String
    numOfHoles: Int!
    builds: [Build!]!
    originalBuild: String
    createdAt: String!
    updatedAt: String!
  }

  type Architect {
    id: Int!
    givenName: String!
    surname: String!
    fullname: String!
    birthYear: String
    deathYear: String
    imgUrl: String
    builds: [Build!]
    createdAt: String!
    updatedAt: String!
  }
  
  type Build {
    id: Int!
    buildType: String!
    year: String!
    numOfHoles: String!
    architects: [Architect!]
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    clubs: [Club!]
    club(id: ID!): Club
    courses: [Course!]
    course(id: ID!): Course
    architects: [Architect!]
    architect(id: ID!): Architect
  }
`