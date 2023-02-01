import { Board, EmptyBoard } from "../components";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import AuthLayout from "../components/Layout/AuthLayout";
import AppLayout from "../components/Layout/AppLayout";

function App() {
  const boards = useSelector((state) => state.boards.boards);
  //const theme = useSelector((state) => state.theme);

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AuthLayout />}>
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Signup />} />
      </Route>
      <Route path='/' element={<AppLayout />}>
        <Route index element={boards?.length > 0 ? <Board /> : <EmptyBoard />} />
        <Route path='boards' element={<Board />} />
        <Route path='boards/:boardId' element={<Board />} />
      </Route>
    </Routes>
  </BrowserRouter>
    // <div className="app" data-theme={theme.theme}>
    //   <Header />
    //   {boards?.length > 0 ? <Board /> : <EmptyBoard />}
    // </div>
  );
}

export default App;
