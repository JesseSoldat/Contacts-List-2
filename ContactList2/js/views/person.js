export default function(data) {
  return `
    <div class="person">
      <button class="back-button" data-to="people">
        <i class="fa fa-arrow-left"></i>
      </button>
      
      <h1>${data.FirstName} ${data.LastName}</h1>
      <li>${data.Email}</li>
      <li>${data.Telephone}</li>
      <li>${data.Location}</li>

    </div>
  `;
}
