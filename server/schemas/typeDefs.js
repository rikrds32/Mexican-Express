const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Query {
    me: Package
  }

    type package {
      _id: ID
      savedPackage: [Package]
    }
    type Package {
      bookId: String
      
    }
    
    input SetPackage {
      bookId: String
     
    } 
`
module.exports = typeDefs;