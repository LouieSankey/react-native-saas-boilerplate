export interface Session {
  id?: string
  sessionToken?: string
  accessToken?: string
  userId?: string
  expires?: string
  user?: User
}

export interface User {
  id?: string
  username?: string
  email: string
  emailVerified?: boolean
  image?: string
  name?: string
  tier?: string
  stripeCustomerId?: string
}

//google login on mobile is returning this:
//its native type is: TokenResponse

// accessToken: string;
// tokenType: TokenType;
// expiresIn?: number;
// refreshToken?: string;
// scope?: string;
// state?: string;
// idToken?: string;
// issuedAt: number;

//the resulting session in next.js is this (although there are some more potential properties)
// session  {
//   user: {
//     name: 'Louis Sankey',
//     email: 'lmsankey@ucdavis.edu',
//     image: 'https://lh3.googleusercontent.com/a/AEdFTp7kyzytIDEnZqSS5YB2LiASQetoFFK28IjSUanIJg=s96-c',
//     id: '63c80cfcb0dede50d19353e5',
//     username: 'louie',
//     password: null,
//     emailVerified: null,
//     stripeCustomerId: null
//   },
//   expires: '2023-04-13T15:46:45.289Z'
// }

//this is from the token response
// {
//   name: 'Louis Sankey',
//   email: 'lmsankey@ucdavis.edu',
//   picture: 'https://lh3.googleusercontent.com/a/AEdFTp7kyzytIDEnZqSS5YB2LiASQetoFFK28IjSUanIJg=s96-c',
//   sub: '63c80cfcb0dede50d19353e5',
//   user: {
//     id: '63c80cfcb0dede50d19353e5',
//     name: 'Louis Sankey',
//     email: 'lmsankey@ucdavis.edu',
//     username: 'louie',
//     password: null,
//     emailVerified: null,
//     image: 'https://lh3.googleusercontent.com/a/AEdFTp7kyzytIDEnZqSS5YB2LiASQetoFFK28IjSUanIJg=s96-c',
//     stripeCustomerId: null
//   },
//   iat: 1678822823,
//   exp: 1681414823,
//   jti: 'e1c7f1a8-bd10-4123-9833-9fdddb9fdff0'
