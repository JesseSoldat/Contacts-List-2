export default function(data) {
  return `
    <button class="back-button" data-to="people">
        <i class="fa fa-arrow-left"></i>
    </button>

    <div class="people-list">
     <h1>Add a Contact</h1>
     <form>
      <input type="text" class="firstName" placeholder="First Name" val="">
      <br>
      <input type="text" class="lastName" placeholder="Last Name" val="">
      <br>
      <input type="text" class="email" placeholder="Email">
      <br> 
      <input type="text" class="telephone" placeholder="Telephone"> 
      <br>
      <input type="text" class="location" placeholder="Location"> 
     </form>
      
      <button class="addUser" type="submit">Add Contact</button>
    </div>
  `;
}