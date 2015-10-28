export default function(data) {
  return `
    <button class="back-button" data-to="people">
        <i class="fa fa-arrow-left"></i>
    </button>

    <div class="people-list">
     <h1>Add a Contact</h1>
     <form>
      <input type="text" placeholder="First Name">
      <br>
      <input type="text" placeholder="Last Name">
      <br>
      <input type="text" placeholder="Email">
      <br> 
      <input type="text" placeholder="Telephone"> 
      <br>
      <input type="text" placeholder="Location"> 
     </form>
      
      <button class="add-user" type="submit">Add Contact</button>
    </div>
  `;
}