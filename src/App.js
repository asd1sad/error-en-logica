import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { CartProvider } from './Context/CartContext'; 
import { AuthProvider } from './Context/AuthContext';
import{ AppRouter } from './routes/AppRouter'

function App() {
 
  return (
    <AuthProvider>
      <CartProvider>
        <AppRouter/>
      </CartProvider>
    </AuthProvider>  
  );
}

export default App;





















// ! NOTAS
// class = className
// {} se escribe js adentro
// html va en camel case _ fontSize
// elementos tienen que estar cerrados _ img />
// App punto mas alto de la aplicacion