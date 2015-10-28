var addContact = new Contact ({
    FirstName: contactName,
    LastName: contactEmail,
    Email: contactPhone,
    Telephone:
    Location:
    
  });
  
console.log(addContact);
// $('#forms').on('submit',
myContacts.add(addContact).save().success( function (data){
        contactShowUp(data);
});
