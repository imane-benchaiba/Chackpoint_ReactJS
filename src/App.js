import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div class="container">
      <form>      
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputEmail4">Email</label>
            <input
              type="email"
              class="form-control"
              id="inputEmail4"
              placeholder="Email"
            />
          </div>
          <div class="form-group col-md-6">
            <label for="inputPassword4">Mot de passe</label>
            <input
              type="password"
              class="form-control"
              id="inputPassword4"
              placeholder="Mot de passe"
            />
          </div>
        </div>
        <div class="form-group">
          <label for="inputAddress">Addresse</label>
          <input
            type="text"
            class="form-control"
            id="inputAddress"
            placeholder="Cité..."
          />
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputCity">Commune</label>
            <input type="text" class="form-control" id="inputCity" />
          </div>
          <div class="form-group col-md-4">
            <label for="inputState">Wilaya</label>
            <select id="inputState" class="form-control">
              <option selected>Alger</option>
              <option>Boumerdes</option>
              <option>Blida</option>
            </select>
          </div>
          <div class="form-group col-md-2">
            <label for="inputZip">Code</label>
            <input type="text" class="form-control" id="inputZip" />
          </div>
        </div>
        <button type="submit" class="btn btn-primary">S'identifier</button>
      </form>
    </div>

  );
}

export default App;
