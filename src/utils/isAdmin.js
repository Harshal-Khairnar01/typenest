const listOfAdmins = ["test@gmail.com", 
    "142niharikachauhan@gmail.com",
  "harshalkhairnar7244@gmail.com",
  
];

export default async function isAdmin(session) {
  if (!session) return false;
  let userEmail = session.user.email.toLowerCase().trim();

  let emailMatch = listOfAdmins.some((each) => {
    return each.toLowerCase().trim() === userEmail;
  });
 
  if (session.user.role == "admin" || (session.user?.email && emailMatch)) {
    return true;
  }
  return false;
}
